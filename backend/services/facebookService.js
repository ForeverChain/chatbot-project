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

  // Test if the page access token is valid
  async testPageAccessToken(accessToken) {
    try {
      console.log('Testing page access token:', accessToken);
      
      if (!accessToken) {
        console.error('No access token provided for testing');
        return { valid: false, error: 'No access token provided' };
      }
      
      const response = await fetch(`https://graph.facebook.com/v18.0/me?access_token=${encodeURIComponent(accessToken)}`);
      
      console.log('Token test response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Token test failed:', errorText);
        return { valid: false, error: errorText };
      }
      
      const data = await response.json();
      console.log('Token test successful:', data);
      
      return { valid: true, pageId: data.id, pageName: data.name };
    } catch (error) {
      console.error('Error testing page access token:', error);
      return { valid: false, error: error.message };
    }
  }

  // Send message via Facebook Messages API
  async sendMessage(integration, senderPsid, messageText, options = null) {
    console.log('=== SENDING FACEBOOK MESSAGE ===');
    console.log('Integration:', integration);
    console.log('Sender PSID:', senderPsid);
    console.log('Message text:', messageText);
    console.log('Options:', options);
    
    const credentials = this.getCredentials(integration);
    
    console.log('Credentials:', credentials);
    
    // Validate inputs
    if (!senderPsid) {
      console.error('No sender PSID provided');
      throw new Error('No sender PSID provided');
    }
    
    if (!messageText && !options) {
      console.error('No message text or options provided');
      throw new Error('No message text or options provided');
    }
    
    // Additional validation to prevent sending messages to what appears to be a page ID
    // Page IDs are typically numeric and quite long, while PSIDs are usually shorter
    // This is a heuristic check to prevent common mistakes
    if (typeof senderPsid === 'string' && senderPsid.length > 20) {
      console.warn('Warning: senderPsid looks like a page ID rather than a user PSID:', senderPsid);
      // Don't throw an error, but log a warning as this might be a valid case in some scenarios
    }
    
    // Check if we have a page access token
    if (!credentials.pageAccessToken) {
      console.error('No page access token available for sending message');
      throw new Error('No page access token available. Please check your integration settings.');
    }
    
    // Validate that the page access token looks correct
    if (typeof credentials.pageAccessToken !== 'string' || credentials.pageAccessToken.length < 10) {
      console.error('Invalid page access token format');
      throw new Error('Invalid page access token format. Please check your integration settings.');
    }
    
    // Additional validation to prevent sending messages with invalid configurations
    // Check if we have a page ID in the config
    let pageId = null;
    if (integration && integration.config) {
      try {
        const config = typeof integration.config === 'string' 
          ? JSON.parse(integration.config) 
          : integration.config;
        pageId = config && config.pageId;
      } catch (e) {
        console.error('Error parsing config for page ID:', e);
      }
    }
    
    console.log('Page ID from integration config:', pageId);
    console.log('Sender PSID:', senderPsid);
    
    // Prevent sending message if sender PSID matches page ID (this would be sending to self)
    if (pageId && String(pageId) === String(senderPsid)) {
      console.error('Preventing message send: sender PSID matches page ID. This would be sending a message to self.');
      throw new Error('Cannot send message to page ID. Messages should be sent to user PSIDs.');
    }
    
    // Construct the message body
    const requestBody = {
      recipient: {
        id: senderPsid
      },
      message: {}
    };

    // Add text message if provided
    if (messageText) {
      requestBody.message.text = messageText;
    }

    // Add quick replies/buttons if provided
    if (options && Array.isArray(options) && options.length > 0) {
      // Facebook supports up to 13 quick replies
      const quickReplies = options.slice(0, 13).map((option, index) => ({
        content_type: 'text',
        title: option.text.length > 20 ? option.text.substring(0, 20) : option.text,
        payload: option.payload || option.text
      }));
      
      requestBody.message.quick_replies = quickReplies;
    }

    console.log('Request body:', JSON.stringify(requestBody, null, 2));
    
    try {
      // Include the access token in the request properly
      const url = `https://graph.facebook.com/v18.0/me/messages?access_token=${encodeURIComponent(credentials.pageAccessToken)}`;
      console.log('Sending request to URL:', url);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      
      console.log('Facebook API response status:', response.status);
      console.log('Facebook API response headers:', response.headers);
      
      // Log response body for debugging
      const responseText = await response.text();
      console.log('Facebook API response body:', responseText);
      
      // Check if response is JSON
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse Facebook API response as JSON:', responseText);
        throw new Error(`Facebook API error: ${responseText}`);
      }
      
      if (!response.ok) {
        console.error('Failed to send message to Facebook:', responseData);
        // Handle specific Facebook error codes
        if (responseData.error) {
          const errorCode = responseData.error.code;
          const errorSubcode = responseData.error.error_subcode;
          const errorMessage = responseData.error.message;
          
          console.error('Facebook Error Code:', errorCode);
          console.error('Facebook Error Subcode:', errorSubcode);
          console.error('Facebook Error Message:', errorMessage);
          
          // Specific error handling for common issues
          if (errorCode === 100 && errorSubcode === 2018001) {
            console.error('This error typically means the PSID is invalid or the user has not initiated a conversation with the page.');
            throw new Error(`Invalid user ID or user has not initiated conversation with page. Error: ${errorMessage}. ` +
                          `Please ensure you have first sent a message to the Facebook page before trying to receive responses.`);
          }
        }
        throw new Error(`Facebook API error: ${JSON.stringify(responseData)}`);
      }
      
      console.log('Message sent to Facebook successfully:', responseData);
      return responseData;
    } catch (error) {
      console.error('Error sending message to Facebook:', error);
      throw error;
    }
  }

  // Send message from your chatbot to Facebook
  async sendChatbotMessage(integration, senderPsid, messageText, options = null) {
    return await this.sendMessage(integration, senderPsid, messageText, options);
  }

  // Process incoming Facebook message
  async processMessage(integration, senderPsid, receivedMessage) {
    try {
      console.log('=== PROCESSING FACEBOOK/INSTAGRAM MESSAGE ===');
      console.log('Integration:', integration);
      console.log('Sender PSID:', senderPsid);
      console.log('Received message:', receivedMessage);
      
      // Validate inputs
      if (!senderPsid) {
        console.error('No sender PSID provided');
        return;
      }
      
      // Handle case where integration is empty or not found
      if (!integration || !integration.id) {
        console.log('No integration found, sending simple hello response');
        try {
          // Even for missing integration, we still try to respond
          // This is for testing purposes
          await this.sendMessage(integration, senderPsid, "Hello! Thanks for your message. I'm your chatbot assistant.");
        } catch (sendError) {
          console.error('Error sending response:', sendError);
        }
        return;
      }
      
      // Get the chatbot associated with this integration
      if (!integration.chatbotId) {
        console.error(`No chatbot associated with integration ${integration.id}`);
        // Send a simple response
        try {
          await this.sendMessage(integration, senderPsid, "Hello! Thanks for messaging us. We'll get back to you soon.");
        } catch (sendError) {
          console.error('Error sending response:', sendError);
        }
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
        try {
          await this.sendMessage(integration, senderPsid, "Hello! Thanks for your message. I'm currently being set up.");
        } catch (sendError) {
          console.error('Error sending response:', sendError);
        }
        return;
      }
      
      console.log(`Found chatbot ${chatbot.id} for integration ${integration.id}`);
      
      // Use the chatbot service to process the message and generate a response
      // Use the sender PSID as the user ID to maintain conversation context
      let userMessage = receivedMessage.text || "Hello";
      
      // Normalize common greetings to trigger the start of the flow
      const greetings = ['hi', 'hello', 'hey', 'sain uu', 'сайн уу', 'сайна уу'];
      const normalizedMessage = userMessage.toLowerCase().trim();
      
      if (greetings.includes(normalizedMessage)) {
        console.log('Recognized greeting, using "hi" to trigger flow');
        userMessage = 'hi';
      }
      
      console.log(`Processing message through chatbot service for chatbot ${chatbot.id}`);
      console.log(`User message: "${userMessage}"`);
      
      // Process the message through the chatbot service
      const response = await chatbotService.processMessage(
        chatbot.id, 
        senderPsid, // Use sender PSID as user ID
        userMessage
      );
      
      console.log(`Generated response:`, response);
      
      // Extract text and options from response
      const responseText = response.text;
      const options = response.options;
      
      // Send the response message with options if available
      await this.sendMessage(integration, senderPsid, responseText, options);
    } catch (error) {
      console.error('Error processing Facebook/Instagram message:', error);
      try {
        // Try to send an error response with more helpful information
        let errorMessage = "Hello! Thanks for your message. I'm currently experiencing technical difficulties.";
        
        // Check if this is the specific Facebook error we're handling
        if (error.message && error.message.includes('No matching user found')) {
          errorMessage += " Please note that I can only respond to users who have first initiated a conversation with this page. " +
                         "To start a conversation, please send a message directly to our Facebook page first, then try again.";
        } else {
          errorMessage += " Please try sending your message again later.";
        }
        
        console.log('Sending error response to user:', errorMessage);
        // Only send error response if we have a valid sender PSID
        if (senderPsid) {
          await this.sendMessage(integration, senderPsid, errorMessage);
        }
      } catch (sendError) {
        console.error('Error sending error response:', sendError);
      }
    }
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
      // Convert pageId to string to handle type differences
      const pageIdStr = String(pageId);
      const matchingIntegration = integrations.find(integration => {
        try {
          const config = typeof integration.config === 'string' 
            ? JSON.parse(integration.config) 
            : integration.config;
          console.log(`Checking integration ${integration.id} with config:`, config);
          // Convert config.pageId to string for comparison
          return config && String(config.pageId) === pageIdStr;
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

  // Verify Facebook webhook
  verifyWebhook(integration, mode, token, challenge) {
    console.log('Verifying webhook with:', { integration, mode, token, challenge });
    
    // Check if mode is subscribe
    if (mode !== 'subscribe') {
      console.log('Invalid mode for webhook verification:', mode);
      return { success: false, status: 403 };
    }
    
    // Get the verify token from the integration config
    let verifyToken = null;
    if (integration && integration.config) {
      try {
        const config = typeof integration.config === 'string' 
          ? JSON.parse(integration.config) 
          : integration.config;
        verifyToken = config && config.verifyToken;
      } catch (e) {
        console.error('Error parsing config for webhook verification:', e);
      }
    }
    
    console.log('Integration verify token:', verifyToken);
    console.log('Request verify token:', token);
    
    // Check if verify token matches
    if (!verifyToken || verifyToken !== token) {
      console.log('Verify token mismatch');
      return { success: false, status: 403 };
    }
    
    // If we get here, verification is successful
    console.log('Webhook verification successful');
    return { success: true, challenge: challenge, status: 200 };
  }

  // Process Facebook postback (button clicks)
  async processPostback(integration, senderPsid, postback) {
    try {
      console.log('=== PROCESSING FACEBOOK POSTBACK ===');
      console.log('Integration:', integration);
      console.log('Sender PSID:', senderPsid);
      console.log('Postback:', postback);
      
      // Validate inputs
      if (!senderPsid) {
        console.error('No sender PSID provided for postback');
        return;
      }
      
      if (!postback) {
        console.error('No postback data provided');
        return;
      }
      
      // Handle case where integration is empty or not found
      if (!integration || !integration.id) {
        console.log('No integration found for postback, sending simple response');
        try {
          await this.sendMessage(integration, senderPsid, "Thanks for your interaction!");
        } catch (sendError) {
          console.error('Error sending postback response:', sendError);
        }
        return;
      }
      
      // Get the chatbot associated with this integration
      if (!integration.chatbotId) {
        console.error(`No chatbot associated with integration ${integration.id} for postback`);
        try {
          await this.sendMessage(integration, senderPsid, "Thanks for your interaction! We'll get back to you soon.");
        } catch (sendError) {
          console.error('Error sending postback response:', sendError);
        }
        return;
      }
      
      const chatbot = await prisma.chatbot.findUnique({
        where: {
          id: integration.chatbotId
        }
      });
      
      if (!chatbot) {
        console.error(`Chatbot not found for integration ${integration.id} with chatbotId ${integration.chatbotId} for postback`);
        try {
          await this.sendMessage(integration, senderPsid, "Thanks for your interaction! I'm currently being set up.");
        } catch (sendError) {
          console.error('Error sending postback response:', sendError);
        }
        return;
      }
      
      console.log(`Found chatbot ${chatbot.id} for integration ${integration.id} for postback processing`);
      
      // Process the postback payload
      const payload = postback.payload || "POSTBACK";
      console.log(`Processing postback with payload: "${payload}"`);
      
      // Process the postback through the chatbot service
      const responseText = await chatbotService.processMessage(
        chatbot.id, 
        senderPsid, // Use sender PSID as user ID
        payload
      );
      
      console.log(`Generated postback response: "${responseText}"`);
      
      // Send the response message
      await this.sendMessage(integration, senderPsid, responseText);
    } catch (error) {
      console.error('Error processing Facebook postback:', error);
      try {
        let errorMessage = "Thanks for your interaction! I'm currently experiencing technical difficulties.";
        
        // Check if this is the specific Facebook error we're handling
        if (error.message && error.message.includes('No matching user found')) {
          errorMessage += " Please note that I can only respond to users who have first initiated a conversation with this page. " +
                         "To start a conversation, please send a message directly to our Facebook page first, then try again.";
        } else {
          errorMessage += " Please try interacting again later.";
        }
        
        // Only send error response if we have a valid sender PSID
        if (senderPsid) {
          await this.sendMessage(integration, senderPsid, errorMessage);
        }
      } catch (sendError) {
        console.error('Error sending postback error response:', sendError);
      }
    }
  }
}

module.exports = new FacebookService();