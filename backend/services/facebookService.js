const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const chatbotService = require('./chatbotService');
const prisma = require('../prisma/client');
const crypto = require('crypto');

class FacebookService {
  constructor() {
    // Default values from environment variables (for development)
    this.defaultPageAccessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
    this.defaultVerifyToken = process.env.FACEBOOK_VERIFY_TOKEN;
    this.defaultAppSecret = process.env.FACEBOOK_APP_SECRET;
  }

  // Get integration-specific credentials
  getCredentials(integration) {
    console.log('Getting credentials for integration:', integration);
    
    let config = {};
    if (integration && integration.config) {
      try {
        if (typeof integration.config === 'string') {
          config = JSON.parse(integration.config);
        } else {
          config = integration.config;
        }
        console.log('Parsed config:', config);
      } catch (e) {
        console.error('Error parsing config:', e);
      }
    }
    
    return {
      pageAccessToken: (integration && integration.token) || this.defaultPageAccessToken,
      verifyToken: config.verifyToken || this.defaultVerifyToken,
      appSecret: this.defaultAppSecret // App secret is typically app-wide
    };
  }

  // Verify webhook for a specific integration
  verifyWebhook(integration, mode, token, challenge) {
    const credentials = this.getCredentials(integration);
    
    console.log('Verifying webhook with:', { 
      integrationId: integration.id, 
      mode, 
      token, 
      challenge,
      credentials 
    });
    
    if (mode && token) {
      if (mode === 'subscribe' && token === credentials.verifyToken) {
        console.log(`Facebook webhook verified successfully for integration ${integration.id}`);
        res.status(200).send(challenge);
      } else {
        console.log(`Facebook webhook verification failed for integration ${integration.id}:`, {
          expectedToken: credentials.verifyToken,
          receivedToken: token,
          tokensMatch: token === credentials.verifyToken,
          modeValid: mode === 'subscribe'
        });
        res.sendStatus(403);
      }
    } else {
      console.log('Missing mode or token for webhook verification');
      return { success: false, status: 400 };
    }
  }

  // Process incoming Facebook message
  async processMessage(integration, senderPsid, receivedMessage) {
    try {
      console.log('=== PROCESSING FACEBOOK MESSAGE ===');
      console.log('Integration:', integration);
      console.log('Sender PSID:', senderPsid);
      console.log('Received message:', receivedMessage);
      
      // Handle case where integration is empty or not found
      if (!integration || !integration.id) {
        console.log('No integration found, sending simple hello response');
        await this.sendMessage(integration, senderPsid, "Hello! Thanks for your message. I'm your chatbot assistant.");
        return;
      }
      
      // Get the chatbot associated with this integration
      if (!integration.chatbotId) {
        console.error(`No chatbot associated with integration ${integration.id}`);
        // Send a simple response
        await this.sendMessage(integration, senderPsid, "Hello! Thanks for messaging us. We'll get back to you soon.");
        return;
      }
      
      const chatbot = await prisma.chatbot.findUnique({
        where: {
          id: integration.chatbotId
        }
      });
      
      if (!chatbot) {
        console.error(`Chatbot not found for integration ${integration.id} with chatbotId ${integration.chatbotId}`);
        // Send a simple response
        await this.sendMessage(integration, senderPsid, "Hello! Thanks for your message. I'm currently being set up.");
        return;
      }
      
      console.log(`Found chatbot ${chatbot.id} for integration ${integration.id}`);
      
      // For testing, just send a simple hello message
      const responseText = "Hello! This is a test response from your chatbot.";
      
      console.log(`Generated response: "${responseText}"`);
      
      // Send the response message
      await this.sendMessage(integration, senderPsid, responseText);
    } catch (error) {
      console.error('Error processing Facebook message:', error);
      try {
        // Try to send an error response
        await this.sendMessage(integration, senderPsid, "Hello! Thanks for your message. Sorry, I encountered an error.");
      } catch (sendError) {
        console.error('Error sending error response:', sendError);
      }
    }
  }

  // Process Facebook postbacks
  async processPostback(integration, senderPsid, receivedPostback) {
    try {
      let responseText;
      
      // Get the payload for the postback
      const payload = receivedPostback.payload;

      // Set the response based on the postback payload
      if (payload === 'GET_STARTED') {
        responseText = 'Hello! Welcome to our chatbot.';
      } else {
        responseText = `Postback called: ${payload}`;
      }

      // Send the response message
      await this.sendMessage(integration, senderPsid, responseText);
    } catch (error) {
      console.error('Error processing Facebook postback:', error);
    }
  }

  // Send message via Facebook Messages API
  async sendMessage(integration, senderPsid, messageText) {
    console.log('=== SENDING FACEBOOK MESSAGE ===');
    console.log('Integration:', integration);
    console.log('Sender PSID:', senderPsid);
    console.log('Message text:', messageText);
    
    const credentials = this.getCredentials(integration);
    
    console.log('Credentials:', credentials);
    
    // Check if we have a page access token
    if (!credentials.pageAccessToken) {
      console.error('No page access token available for sending message');
      throw new Error('No page access token available');
    }
    
    // Construct the message body
    const requestBody = {
      recipient: {
        id: senderPsid
      },
      message: {
        text: messageText
      }
    };

    console.log('Request body:', JSON.stringify(requestBody, null, 2));
    
    try {
      const response = await fetch(`https://graph.facebook.com/v18.0/me/messages?access_token=${credentials.pageAccessToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      
      console.log('Facebook API response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to send message to Facebook:', errorText);
        throw new Error(`Facebook API error: ${errorText}`);
      }
      
      const responseData = await response.json();
      console.log('Message sent to Facebook successfully:', responseData);
      return responseData;
    } catch (error) {
      console.error('Error sending message to Facebook:', error);
      throw error;
    }
  }

  // Send message from your chatbot to Facebook
  async sendChatbotMessage(integration, senderPsid, messageText) {
    return await this.sendMessage(integration, senderPsid, messageText);
  }

  // Verify request signature (for security)
  verifySignature(signature, payload) {
    // Properly implement signature verification
    console.log('Verifying Facebook signature:', signature);
    
    // If no app secret is configured, skip verification (for development)
    if (!this.defaultAppSecret) {
      console.log('No app secret configured, skipping signature verification');
      return true;
    }
    
    // If no signature provided, fail verification
    if (!signature) {
      console.error('No signature provided for verification');
      return false;
    }
    
    try {
      // Extract the signature hash
      const signatureHash = signature.split('sha256=')[1] || signature.split('sha1=')[1];
      if (!signatureHash) {
        console.error('Invalid signature format');
        return false;
      }
      
      // Determine which algorithm to use
      const algorithm = signature.includes('sha256=') ? 'sha256' : 'sha1';
      
      // Create expected hash using app secret
      const expectedHash = crypto
        .createHmac(algorithm, this.defaultAppSecret)
        .update(payload, 'utf8')
        .digest('hex');
      
      // Compare hashes securely
      const expectedSignature = `${algorithm}=${expectedHash}`;
      const isValid = crypto.timingSafeEqual(
        Buffer.from(signature, 'utf8'),
        Buffer.from(expectedSignature, 'utf8')
      );
      
      console.log('Signature verification result:', isValid);
      return isValid;
    } catch (error) {
      console.error('Error during signature verification:', error);
      return false;
    }
  }
  
  // Find integration by Facebook page ID
  async findIntegrationByPageId(pageId) {
    try {
      // First try to find integrations that contain the pageId in their config
      const integrations = await prisma.integration.findMany({
        where: {
          type: 'facebook'
        }
      });
      
      // Filter to find the exact match by parsing each config
      const matchingIntegration = integrations.find(integration => {
        try {
          const config = typeof integration.config === 'string' 
            ? JSON.parse(integration.config) 
            : integration.config;
          return config && config.pageId === pageId;
        } catch (e) {
          console.error('Error parsing config for integration:', integration.id, e);
          return false;
        }
      });
      
      console.log(`Found integration for page ID ${pageId}:`, matchingIntegration ? matchingIntegration.id : 'none');
      return matchingIntegration || null;
    } catch (error) {
      console.error('Error finding integration by page ID:', error);
      return null;
    }
  }
}

module.exports = new FacebookService();