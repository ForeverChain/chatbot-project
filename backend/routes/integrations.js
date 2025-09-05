const express = require('express');
const prisma = require('../prisma/client');
const auth = require('../middleware/auth');
const facebookService = require('../services/facebookService');
const crypto = require('crypto');

const router = express.Router();

// Create a new integration
router.post('/', auth, async (req, res) => {
  try {
    const { chatbotId, type, token, config } = req.body;
    const userId = req.user.id;

    console.log('Creating new integration:', { chatbotId, type, token, config, userId });

    // Validate required fields
    if (!type) {
      return res.status(400).json({ error: 'type is required' });
    }

    const integrationData = {
      userId: userId,
      type,
    };

    // Add token if provided
    if (token) {
      integrationData.token = token;
    }

    // Add config if provided (for Facebook Page ID, etc.)
    if (config) {
      integrationData.config = JSON.stringify(config);
    }

    // If chatbotId is provided, verify the chatbot belongs to the user
    if (chatbotId) {
      const chatbot = await prisma.chatbot.findUnique({
        where: {
          id: parseInt(chatbotId),
          userId: userId,
        },
      });

      if (!chatbot) {
        return res.status(404).json({ error: 'Chatbot not found or does not belong to user' });
      }
      
      integrationData.chatbotId = parseInt(chatbotId);
    }

    const integration = await prisma.integration.create({
      data: integrationData,
    });

    // Parse config JSON for response
    const parsedIntegration = {
      ...integration,
      config: integration.config ? JSON.parse(integration.config) : null
    };

    console.log('Created integration:', parsedIntegration);
    res.status(201).json(parsedIntegration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all integrations for a chatbot
router.get('/chatbot/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;
    const userId = req.user.id;

    // Verify the chatbot belongs to the user
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(chatbotId),
        userId,
      },
    });

    if (!chatbot) {
      return res.status(404).json({ error: 'Chatbot not found' });
    }

    const integrations = await prisma.integration.findMany({
      where: {
        chatbotId: parseInt(chatbotId),
      },
    });

    // Parse config JSON
    const parsedIntegrations = integrations.map(integration => ({
      ...integration,
      config: integration.config ? JSON.parse(integration.config) : null
    }));

    res.json(parsedIntegrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific integration
router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get the integration and verify it belongs to a chatbot owned by the user
    // or belongs to the user directly
    const integration = await prisma.integration.findUnique({
      where: {
        id: parseInt(id),
        OR: [
          { userId: userId },
          { chatbot: { userId: userId } }
        ]
      },
      include: {
        chatbot: true,
        user: true
      },
    });

    if (!integration) {
      return res.status(404).json({ error: 'Integration not found' });
    }

    // Parse config JSON
    const parsedIntegration = {
      ...integration,
      config: integration.config ? JSON.parse(integration.config) : null
    };

    res.json(parsedIntegration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all integrations for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;

    // Get all integrations that belong to the user directly or to chatbots owned by the user
    const integrations = await prisma.integration.findMany({
      where: {
        OR: [
          { userId: userId },
          { chatbot: { userId: userId } }
        ]
      },
      include: {
        chatbot: true,
        user: true
      }
    });

    // Parse config JSON
    const parsedIntegrations = integrations.map(integration => ({
      ...integration,
      config: integration.config ? JSON.parse(integration.config) : null
    }));

    res.json(parsedIntegrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update an integration
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { type, token, chatbotId, config } = req.body;
    const userId = req.user.id;

    // Get the integration and verify it belongs to the user
    const integration = await prisma.integration.findUnique({
      where: {
        id: parseInt(id),
        OR: [
          { userId: userId },
          { chatbot: { userId: userId } }
        ]
      },
      include: {
        chatbot: true,
        user: true
      },
    });

    if (!integration) {
      return res.status(404).json({ error: 'Integration not found' });
    }

    // Prepare update data
    const updateData = {};
    if (type !== undefined) updateData.type = type;
    if (token !== undefined) updateData.token = token;
    if (config !== undefined) updateData.config = JSON.stringify(config);
    
    // Handle chatbotId if provided
    if (chatbotId !== undefined) {
      if (chatbotId === null) {
        // Remove chatbot association
        updateData.chatbotId = null;
      } else {
        // Verify the chatbot belongs to the user
        const chatbot = await prisma.chatbot.findUnique({
          where: {
            id: parseInt(chatbotId),
            userId: userId,
          },
        });
        
        if (!chatbot) {
          return res.status(404).json({ error: 'Chatbot not found or does not belong to user' });
        }
        
        updateData.chatbotId = parseInt(chatbotId);
      }
    }

    const updatedIntegration = await prisma.integration.update({
      where: {
        id: parseInt(id),
      },
      data: updateData,
    });

    // Parse config JSON for response
    const parsedIntegration = {
      ...updatedIntegration,
      config: updatedIntegration.config ? JSON.parse(updatedIntegration.config) : null
    };

    res.json(parsedIntegration);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Integration not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete an integration
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get the integration and verify it belongs to the user
    const integration = await prisma.integration.findUnique({
      where: {
        id: parseInt(id),
        OR: [
          { userId: userId },
          { chatbot: { userId: userId } }
        ]
      },
      include: {
        chatbot: true,
        user: true
      },
    });

    if (!integration) {
      return res.status(404).json({ error: 'Integration not found' });
    }

    // Delete the integration
    await prisma.integration.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json({ message: 'Integration deleted successfully' });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Integration not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Generate and save verify token for Facebook integration
router.post('/:id/generate-verify-token', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get the integration and verify it belongs to the user
    const integration = await prisma.integration.findUnique({
      where: {
        id: parseInt(id),
        OR: [
          { userId: userId },
          { chatbot: { userId: userId } }
        ]
      },
      include: {
        chatbot: true,
        user: true
      },
    });

    if (!integration) {
      return res.status(404).json({ error: 'Integration not found' });
    }

    // Check if it's a Facebook integration
    if (integration.type !== 'facebook') {
      return res.status(400).json({ error: 'Verify token can only be generated for Facebook integrations' });
    }

    // Generate a random verify token
    const verifyToken = crypto.randomBytes(32).toString('hex');

    // Update the integration with the new verify token in config
    let config = {};
    if (integration.config) {
      try {
        config = JSON.parse(integration.config);
      } catch (e) {
        // If parsing fails, start with empty config
        config = {};
      }
    }

    // Add or update the verifyToken in config
    config.verifyToken = verifyToken;

    const updatedIntegration = await prisma.integration.update({
      where: {
        id: parseInt(id),
      },
      data: {
        config: JSON.stringify(config),
      },
    });

    // Parse config JSON for response
    const parsedIntegration = {
      ...updatedIntegration,
      config: updatedIntegration.config ? JSON.parse(updatedIntegration.config) : null
    };

    res.json({
      message: 'Verify token generated successfully',
      verifyToken: verifyToken,
      integration: parsedIntegration
    });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Integration not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Facebook Webhook verification endpoint
router.get('/facebook/webhook', async (req, res) => {
  console.log('=== FACEBOOK WEBHOOK VERIFICATION REQUEST ===');
  console.log('Request headers:', req.headers);
  console.log('Request query:', req.query);
  console.log('Request URL:', req.url);
  console.log('Request method:', req.method);
  
  const mode = req.query['hub.mode'] || req.query.hub_mode;
  const token = req.query['hub.verify_token'] || req.query.hub_verify_token;
  const challenge = req.query['hub.challenge'] || req.query.hub_challenge;
  
  console.log('Extracted parameters:', { mode, token, challenge });
  
  // Validate required parameters
  if (!mode || !token || !challenge) {
    console.log('Missing required parameters for webhook verification');
    return res.status(400).json({ 
      error: 'Missing required parameters', 
      received: { mode: !!mode, token: !!token, challenge: !!challenge }
    });
  }
  
  // First try to find an integration that matches this verify token
  let integration = {};
  
  if (token) {
    try {
      // Find integration by verify token in config
      const integrations = await prisma.integration.findMany({
        where: {
          type: 'facebook'
        }
      });
      
      console.log('Found Facebook integrations:', integrations.length);
      
      // Filter to find the exact match by parsing each config
      integration = integrations.find(int => {
        try {
          const config = typeof int.config === 'string' 
            ? JSON.parse(int.config) 
            : int.config;
          return config && config.verifyToken === token;
        } catch (e) {
          console.error('Error parsing config for integration:', int.id, e);
          return false;
        }
      }) || {};
      
      console.log('Selected integration:', integration.id);
    } catch (error) {
      console.error('Error finding integration by verify token:', error);
      return res.status(500).json({ 
        error: 'Internal server error while verifying webhook',
        details: error.message 
      });
    }
  }
  
  const result = facebookService.verifyWebhook(integration, mode, token, challenge);
  
  console.log('Webhook verification result:', result);
  
  if (result.success) {
    res.status(200).send(result.challenge);
  } else {
    res.status(result.status).json({ 
      error: 'Webhook verification failed',
      details: `Invalid ${mode === 'subscribe' ? 'token' : 'mode'}` 
    });
  }
});

// Function to verify Facebook request signature
function verifyRequestSignature(req, res, buf, encoding) {
  console.log('=== VERIFYING FACEBOOK REQUEST SIGNATURE ===');
  console.log('Request headers:', req.headers);
  console.log('Request body buffer length:', buf.length);
  
  const signature = req.headers['x-hub-signature-256'] || req.headers['x-hub-signature'];
  
  console.log('Facebook signature:', signature);
  
  if (!signature) {
    console.warn('Facebook webhook signature missing - this may be a test request');
    // For production, you might want to reject requests without signature
    // But for development/testing, we'll allow it to continue
    return;
  } else {
    // Verify the signature using the Facebook service
    const isValid = facebookService.verifySignature(signature, buf);
    if (!isValid) {
      console.error('Invalid Facebook webhook signature');
      // For debugging purposes during development, we'll log but not reject
      // In production, you should reject invalid signatures:
      // throw new Error('Invalid Facebook webhook signature');
      console.log('Continuing with invalid signature for debugging purposes');
    } else {
      console.log('Facebook signature verified successfully');
    }
  }
}

// Facebook Webhook for receiving messages
router.post('/facebook/webhook', express.json(), async (req, res) => {
  console.log('=== FACEBOOK WEBHOOK MESSAGE REQUEST ===');
  console.log('Request headers:', req.headers);
  console.log('Request body:', JSON.stringify(req.body, null, 2));
  console.log('Request URL:', req.url);
  console.log('Request method:', req.method);
  
  const body = req.body;

  // Check if this is an event from a page subscription
  if (body.object === 'page') {
    console.log('Processing page subscription event');
    
    // Handle case where body.entry is not an array
    const entries = Array.isArray(body.entry) ? body.entry : [body.entry];
    
    // Iterate over each entry - there may be multiple if batched
    for (const entry of entries) {
      console.log('Processing entry:', entry);
      
      // Check if we have messaging events
      const messagingEvents = entry.messaging || entry.messaging_events || [];
      if (!messagingEvents.length) {
        console.log('No messaging events found in entry');
        continue;
      }
      
      // Process each messaging event (there might be multiple in one entry)
      for (const webhookEvent of messagingEvents) {
        console.log('Processing Facebook webhook event:', webhookEvent);

        // Get the sender PSID
        const senderPsid = webhookEvent.sender && webhookEvent.sender.id;
        if (!senderPsid) {
          console.error('No sender PSID found in webhook event');
          continue;
        }
        
        // Find integration by page ID
        let integration = null;
        const pageId = entry.id;
        if (pageId) {
          integration = await facebookService.findIntegrationByPageId(pageId);
          console.log('Found integration by page ID:', integration ? integration.id : 'none');
        }
        
        // Handle different types of events
        if (webhookEvent.message) {
          // This is a user message
          console.log(`Processing message from user ${senderPsid}:`, webhookEvent.message.text);
          if (integration) {
            await facebookService.processMessage(integration, senderPsid, webhookEvent.message);
          } else {
            // Use an empty object instead of {} to avoid issues
            await facebookService.processMessage({id: null}, senderPsid, webhookEvent.message);
          }
        } else if (webhookEvent.postback) {
          // This is a postback (button click)
          console.log(`Processing postback from user ${senderPsid}:`, webhookEvent.postback.payload);
          if (integration) {
            await facebookService.processPostback(integration, senderPsid, webhookEvent.postback);
          } else {
            await facebookService.processPostback({id: null}, senderPsid, webhookEvent.postback);
          }
        } else if (webhookEvent.delivery) {
          // This is a delivery confirmation - just log it
          console.log(`Delivery confirmation for user ${senderPsid}:`, webhookEvent.delivery);
        } else {
          // Unknown event type
          console.log('Unknown event type in webhook event:', Object.keys(webhookEvent));
        }
      }
    }

    // Return a '200 OK' response to all requests
    console.log('Successfully processed Facebook webhook event');
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    console.log('Received non-page webhook event');
    res.sendStatus(404);
  }
});

module.exports = router;