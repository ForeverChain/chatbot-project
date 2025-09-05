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
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  console.log('Facebook webhook verification request received:', { mode, token, challenge });
  
  // First try to find an integration that matches this verify token
  let integration = {};
  
  if (token) {
    try {
      // Find integration by verify token in config
      const integrations = await prisma.integration.findMany({
        where: {
          type: 'facebook',
          config: {
            contains: token
          }
        }
      });
      
      console.log('Found integrations with matching token:', integrations.length);
      
      // Filter to find the exact match
      integration = integrations.find(int => {
        try {
          const config = JSON.parse(int.config);
          return config && config.verifyToken === token;
        } catch (e) {
          console.error('Error parsing config for integration:', int.id, e);
          return false;
        }
      }) || {};
      
      console.log('Selected integration:', integration.id);
    } catch (error) {
      console.error('Error finding integration by verify token:', error);
    }
  }
  
  const result = facebookService.verifyWebhook(integration, mode, token, challenge);
  
  console.log('Webhook verification result:', result);
  
  if (result.success) {
    res.status(200).send(result.challenge);
  } else {
    res.sendStatus(result.status);
  }
});

// Facebook Webhook for receiving messages
router.post('/facebook/webhook', express.json({ verify: verifyRequestSignature }), async (req, res) => {
  const body = req.body;

  // Check if this is an event from a page subscription
  if (body.object === 'page') {
    // Iterate over each entry - there may be multiple if batched
    for (const entry of body.entry) {
      // Get the webhook event
      const webhookEvent = entry.messaging[0];
      console.log('Facebook webhook event received:', webhookEvent);

      // Get the sender PSID
      const senderPsid = webhookEvent.sender.id;
      
      // In a production environment, you would:
      // 1. Identify which page sent the message (using entry.id)
      // 2. Find the corresponding integration in your database
      // 3. Process the message using that integration's configuration
      
      // For demonstration, we'll try to find the integration by page ID
      // This requires that the page ID is stored in the integration config
      let integration = null;
      
      if (entry.id) {
        // Try to find integration by page ID
        integration = await facebookService.findIntegrationByPageId(entry.id);
      }
      
      if (webhookEvent.message) {
        // Process the received message
        if (integration) {
          await facebookService.processMessage(integration, senderPsid, webhookEvent.message);
        } else {
          // Fallback to default processing
          await facebookService.processMessage({}, senderPsid, webhookEvent.message);
        }
      } else if (webhookEvent.postback) {
        // Process postback
        if (integration) {
          await facebookService.processPostback(integration, senderPsid, webhookEvent.postback);
        } else {
          // Fallback to default processing
          await facebookService.processPostback({}, senderPsid, webhookEvent.postback);
        }
      }
    }

    // Return a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});

// Function to verify Facebook request signature
function verifyRequestSignature(req, res, buf) {
  const signature = req.headers['x-hub-signature-256'];
  
  if (!signature) {
    console.error('Facebook webhook signature missing');
    throw new Error('Facebook webhook signature missing');
  } else {
    // Verify the signature using the Facebook service
    const isValid = facebookService.verifySignature(signature, buf);
    if (!isValid) {
      throw new Error('Invalid Facebook webhook signature');
    }
  }
}

module.exports = router;