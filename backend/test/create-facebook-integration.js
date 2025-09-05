const axios = require('axios');

// Configuration - Update these values with your actual data
const CONFIG = {
  // Your deployed backend URL
  backendUrl: 'https://chatbot-project-ymdb.onrender.com',
  
  // Your JWT token for authentication (get this from your login)
  authToken: 'YOUR_JWT_TOKEN_HERE',
  
  // Your chatbot ID (you need to have a chatbot created first)
  chatbotId: 1,
  
  // Your Facebook Page Access Token (get this from Facebook Developer Console)
  pageAccessToken: 'YOUR_FACEBOOK_PAGE_ACCESS_TOKEN',
  
  // Your Facebook Page ID (get this from your Facebook Page settings)
  pageId: 'YOUR_FACEBOOK_PAGE_ID',
  
  // Your verify token (make up a secure string)
  verifyToken: 'YOUR_VERIFY_TOKEN',
  
  // Your Facebook App ID
  appId: 'YOUR_FACEBOOK_APP_ID'
};

async function createFacebookIntegration() {
  try {
    console.log('Creating Facebook integration...');
    
    // Validate required configuration
    if (!CONFIG.authToken || CONFIG.authToken === 'YOUR_JWT_TOKEN_HERE') {
      console.error('❌ Please update the authToken in the CONFIG section');
      return;
    }
    
    if (!CONFIG.pageAccessToken || CONFIG.pageAccessToken === 'YOUR_FACEBOOK_PAGE_ACCESS_TOKEN') {
      console.error('❌ Please update the pageAccessToken in the CONFIG section');
      return;
    }
    
    if (!CONFIG.pageId || CONFIG.pageId === 'YOUR_FACEBOOK_PAGE_ID') {
      console.error('❌ Please update the pageId in the CONFIG section');
      return;
    }
    
    // Integration data
    const integrationData = {
      chatbotId: CONFIG.chatbotId,
      type: 'facebook',
      token: CONFIG.pageAccessToken,
      config: {
        pageId: CONFIG.pageId,
        verifyToken: CONFIG.verifyToken,
        appId: CONFIG.appId
      }
    };
    
    console.log('Sending integration data:', JSON.stringify(integrationData, null, 2));
    
    // Make the API request
    const response = await axios.post(
      `${CONFIG.backendUrl}/api/integrations`,
      integrationData,
      {
        headers: {
          'Authorization': `Bearer ${CONFIG.authToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('\n✅ Facebook integration created successfully!');
    console.log('Integration ID:', response.data.id);
    console.log('Type:', response.data.type);
    console.log('Page ID:', response.data.config.pageId);
    console.log('Verify Token:', response.data.config.verifyToken);
    
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('❌ Error creating Facebook integration:');
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('❌ Error creating Facebook integration:', error.message);
    }
    throw error;
  }
}

// Function to test the integration by sending a simulated webhook
async function testWebhook(integration) {
  try {
    console.log('\nTesting webhook with created integration...');
    
    // Simulate the Facebook webhook payload
    const webhookPayload = {
      "object": "page",
      "entry": [
        {
          "time": Date.now(),
          "id": integration.config.pageId,
          "messaging": [
            {
              "sender": {
                "id": "123456789"
              },
              "recipient": {
                "id": integration.config.pageId
              },
              "timestamp": Date.now(),
              "message": {
                "text": "Hello! This is a test message from Facebook."
              }
            }
          ]
        }
      ]
    };
    
    // Send POST request to your webhook endpoint
    const response = await axios.post(
      `${CONFIG.backendUrl}/api/integrations/facebook/webhook`,
      webhookPayload,
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'facebookexternalua'
        }
      }
    );
    
    if (response.status === 200 && response.data === 'EVENT_RECEIVED') {
      console.log('✅ Webhook test successful!');
    } else {
      console.log('⚠ Webhook test response:', response.status, response.data);
    }
  } catch (error) {
    console.error('❌ Error testing webhook:', error.message);
  }
}

// Main function
async function main() {
  console.log('=== Facebook Integration Setup ===\n');
  
  try {
    // Create the integration
    const integration = await createFacebookIntegration();
    
    // Test the webhook
    await testWebhook(integration);
    
    console.log('\n=== Setup Complete ===');
    console.log('Next steps:');
    console.log('1. Configure your Facebook app webhook URL to:');
    console.log(`   ${CONFIG.backendUrl}/api/integrations/facebook/webhook`);
    console.log('2. Use this verify token in Facebook Developer Console:');
    console.log(`   ${CONFIG.verifyToken}`);
    console.log('3. Send a message from your Facebook page to test!');
  } catch (error) {
    console.error('\n❌ Setup failed. Please check the errors above and try again.');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { createFacebookIntegration, testWebhook };