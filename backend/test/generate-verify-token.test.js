const request = require('supertest');
const express = require('express');
const prisma = require('../prisma/client');

// Create a test app
const app = express();
app.use(express.json());

// Mock auth middleware
jest.mock('../middleware/auth', () => {
  return (req, res, next) => {
    req.user = { id: 1 }; // Mock user ID
    next();
  };
});

// Import routes after mocking middleware
const integrationRoutes = require('../routes/integrations');
app.use('/integrations', integrationRoutes);

describe('Integration API - Generate Verify Token', () => {
  let createdIntegrationId;
  
  beforeAll(async () => {
    // Clean up any existing test data
    await prisma.integration.deleteMany({
      where: {
        userId: 1
      }
    });
    
    // Create a test chatbot
    await prisma.chatbot.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        name: 'Test Chatbot',
        userId: 1
      }
    });
    
    // Create a Facebook integration
    const integrationResponse = await prisma.integration.create({
      data: {
        userId: 1,
        type: 'facebook',
        token: 'test-token',
        chatbotId: 1,
        config: JSON.stringify({
          pageId: 'test-page-id',
          appId: 'test-app-id'
        })
      }
    });
    
    createdIntegrationId = integrationResponse.id;
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.integration.deleteMany({
      where: {
        userId: 1
      }
    });
    await prisma.$disconnect();
  });

  it('should generate and save a verify token for Facebook integration', async () => {
    const response = await request(app)
      .post(`/integrations/${createdIntegrationId}/generate-verify-token`)
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('verifyToken');
    expect(response.body).toHaveProperty('integration');
    expect(response.body.message).toBe('Verify token generated successfully');
    expect(response.body.verifyToken).toMatch(/^[a-f0-9]{64}$/); // 32 bytes in hex = 64 characters
    
    // Check that the integration was updated with the verify token
    expect(response.body.integration.config).toHaveProperty('verifyToken');
    expect(response.body.integration.config.verifyToken).toBe(response.body.verifyToken);
  });

  it('should reject requests for non-Facebook integrations', async () => {
    // Create a non-Facebook integration
    const integrationResponse = await prisma.integration.create({
      data: {
        userId: 1,
        type: 'webhook',
        token: 'test-token'
      }
    });
    
    const response = await request(app)
      .post(`/integrations/${integrationResponse.id}/generate-verify-token`)
      .expect(400);

    expect(response.body.error).toBe('Verify token can only be generated for Facebook integrations');
    
    // Clean up
    await prisma.integration.delete({
      where: {
        id: integrationResponse.id
      }
    });
  });
});