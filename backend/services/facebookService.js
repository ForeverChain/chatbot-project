const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const chatbotService = require('./chatbotService');
const prisma = require('../prisma/client');
const crypto = require('crypto');

class FacebookService {
  constructor() {
    this.defaultPageAccessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
    this.defaultVerifyToken = process.env.FACEBOOK_VERIFY_TOKEN;
    this.defaultAppSecret = process.env.FACEBOOK_APP_SECRET;
  }

  // Get integration-specific credentials
  getCredentials(integration) {
    let config = {};
    if (integration?.config) {
      try {
        config = typeof integration.config === 'string' ? JSON.parse(integration.config) : integration.config;
      } catch (e) {
        console.error('Error parsing integration config:', e);
      }
    }

    return {
      pageAccessToken: integration?.token || this.defaultPageAccessToken,
      verifyToken: config.verifyToken || this.defaultVerifyToken,
      pageId: config.pageId || null,
      appSecret: this.defaultAppSecret,
    };
  }

  // Send a message to a user
  async sendMessage(integration, senderPsid, messageText, options = null) {
    const credentials = this.getCredentials(integration);

    // Prevent sending message to the page itself
    if (credentials.pageId && String(credentials.pageId) === String(senderPsid)) {
      console.warn('Attempted to send message to page itself. Ignored.');
      return;
    }

    if (!messageText) return;

    const requestBody = {
      recipient: { id: senderPsid },
      message: { text: messageText },
    };

    if (options?.length) {
      requestBody.message.quick_replies = options.slice(0, 13).map((o) => ({
        content_type: 'text',
        title: o.text.length > 20 ? o.text.substring(0, 20) : o.text,
        payload: o.payload || o.text,
      }));
    }

    try {
      const url = `https://graph.facebook.com/v18.0/me/messages?access_token=${encodeURIComponent(
        credentials.pageAccessToken
      )}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error('Facebook API error:', data);
        throw new Error(data.error?.message || 'Unknown error sending message');
      }

      return data;
    } catch (error) {
      console.error('Error sending message to Facebook:', error);
      throw error;
    }
  }

  // Process incoming message from Facebook
  async processMessage(integration, senderPsid, receivedMessage) {
    try {
      if (!senderPsid) return;

      const chatbotId = integration?.chatbotId;
      if (!chatbotId) {
        await this.sendMessage(integration, senderPsid, 'Hello! Thanks for your message.');
        return;
      }

      let userMessage = receivedMessage.text || 'Hello';
      const greetings = ['hi', 'hello', 'hey', 'sain uu', 'сайн уу', 'сайна уу'];
      if (greetings.includes(userMessage.toLowerCase().trim())) userMessage = 'hi';

      // Get chatbot responses
      let response = await chatbotService.processMessage(chatbotId, senderPsid, userMessage);
      
      console.log('Facebook service received response:', JSON.stringify(response, null, 2));

      // Send the main response
      if (response?.text) {
        console.log('Sending main response:', response.text);
        await this.sendMessage(integration, senderPsid, response.text, response.options);
      }

      // Send any auto-continued messages that were collected
      if (response?.autoContinuedMessages && Array.isArray(response.autoContinuedMessages)) {
        console.log('Sending auto-continued messages:', response.autoContinuedMessages.length);
        for (const autoMsg of response.autoContinuedMessages) {
          console.log("Auto-continued message:", autoMsg);
          if (autoMsg?.text) {
            console.log('Sending auto-continued message:', autoMsg.text);
            await this.sendMessage(integration, senderPsid, autoMsg.text, autoMsg.options);
          }
        }
      }

      // Handle legacy auto-continue mechanism (for backward compatibility)
      // This has been deprecated in favor of the new autoContinuedMessages array approach
      // Only process if autoContinuedMessages is not being used
      if (!response?.autoContinuedMessages || response.autoContinuedMessages.length === 0) {
        let autoContinue = response.autoContinue;
        while (autoContinue) {
          console.log('Processing legacy auto-continue');
          const nextResponse = await chatbotService.processMessage(chatbotId, senderPsid, '__AUTO_CONTINUE__');
          if (nextResponse?.text) {
            console.log('Sending legacy auto-continue message:', nextResponse.text);
            await this.sendMessage(integration, senderPsid, nextResponse.text, nextResponse.options);
          }
          autoContinue = nextResponse.autoContinue;
        }
      }
    } catch (error) {
      console.error('Error processing message:', error);
      if (senderPsid) {
        await this.sendMessage(integration, senderPsid, 'Sorry, I am having trouble right now. Please try again later.');
      }
    }
  }

  // Inside FacebookService class

// Find integration by Facebook page ID
async findIntegrationByPageId(pageId) {
  try {
    const integrations = await prisma.integration.findMany({
      where: { type: 'facebook' }
    });

    const pageIdStr = String(pageId);

    const matchingIntegration = integrations.find(integration => {
      try {
        const config = typeof integration.config === 'string' 
          ? JSON.parse(integration.config)
          : integration.config;
        return config && String(config.pageId) === pageIdStr;
      } catch (e) {
        console.error('Error parsing config for integration:', integration.id, e);
        return false;
      }
    });

    return matchingIntegration || null;
  } catch (error) {
    console.error('Error finding integration by page ID:', error);
    return null;
  }
}
}

module.exports = new FacebookService();