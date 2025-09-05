const request = require('supertest');
const express = require('express');
const jwt = require('jsonwebtoken');
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

describe('Integration API', () => {
  let server;
  
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

  describe('POST /integrations', () => {
    it('should create a Facebook integration with config field', async () => {
      const integrationData = {
        chatbotId: 1,
        type: 'facebook',
        token: 'test-page-access-token',
        config: {
          pageId: '123456789',
          verifyToken: 'test-verify-token',
          appId: 'test-app-id'
        }
      };

      const response = await request(app)
        .post('/integrations')
        .send(integrationData)
        .expect(201);

      expect(response.body).toMatchObject({
        type: 'facebook',
        token: 'test-page-access-token'
      });
      
      // Check that config was saved properly
      expect(response.body.config).toMatchObject({
        pageId: '123456789',
        verifyToken: 'test-verify-token',
        appId: 'test-app-id'
      });
    });

    it('should create an integration without config field', async () => {
      const integrationData = {
        chatbotId: 1,
        type: 'webhook',
        token: 'test-webhook-token'
      };

      const response = await request(app)
        .post('/integrations')
        .send(integrationData)
        .expect(201);

      expect(response.body).toMatchObject({
        type: 'webhook',
        token: 'test-webhook-token'
      });
    });
  });

  describe('GET /integrations', () => {
    it('should retrieve integrations with parsed config', async () => {
      // First create an integration to retrieve
      const integrationData = {
        chatbotId: 1,
        type: 'facebook',
        token: 'test-page-access-token',
        config: {
          pageId: '123456789',
          verifyToken: 'test-verify-token',
          appId: 'test-app-id'
        }
      };

      await request(app)
        .post('/integrations')
        .send(integrationData)
        .expect(201);

      const response = await request(app)
        .get('/integrations')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      
      // Find the Facebook integration we created
      const facebookIntegration = response.body.find(i => i.type === 'facebook');
      expect(facebookIntegration).toBeDefined();
      expect(facebookIntegration.config).toMatchObject({
        pageId: '123456789',
        verifyToken: 'test-verify-token',
        appId: 'test-app-id'
      });
    });
  });

  describe('PUT /integrations/:id', () => {
    it('should update an integration with new config', async () => {
      // First create an integration to update
      const integrationData = {
        chatbotId: 1,
        type: 'facebook',
        token: 'test-page-access-token',
        config: {
          pageId: '123456789',
          verifyToken: 'test-verify-token',
          appId: 'test-app-id'
        }
      };

      const createResponse = await request(app)
        .post('/integrations')
        .send(integrationData)
        .expect(201);

      // Update the integration
      const updatedConfig = {
        pageId: '987654321',
        verifyToken: 'updated-verify-token',
        appId: 'updated-app-id'
      };

      const updateResponse = await request(app)
        .put(`/integrations/${createResponse.body.id}`)
        .send({
          token: 'updated-page-access-token',
          config: updatedConfig
        })
        .expect(200);

      expect(updateResponse.body.token).toBe('updated-page-access-token');
      expect(updateResponse.body.config).toMatchObject(updatedConfig);
    });

    it('should update an integration without config field', async () => {
      // First create an integration to update
      const integrationData = {
        chatbotId: 1,
        type: 'webhook',
        token: 'test-webhook-token'
      };

      const createResponse = await request(app)
        .post('/integrations')
        .send(integrationData)
        .expect(201);

      // Update the integration
      const updateResponse = await request(app)
        .put(`/integrations/${createResponse.body.id}`)
        .send({
          token: 'updated-webhook-token'
        })
        .expect(200);

      expect(updateResponse.body.token).toBe('updated-webhook-token');
    });
  });
});