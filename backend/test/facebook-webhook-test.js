const axios = require('axios');
const crypto = require('crypto');

// Generate a random verify token
const verifyToken = crypto.randomBytes(32).toString('hex');
console.log('Using verify token:', verifyToken);

// First, let's create a Facebook integration
async function createFacebookIntegration() {
  try {
    console.log('Creating Facebook integration...');
    
    // Integration data with all three required fields
    const integrationData = {
      chatbotId: 1, // You'll need to replace this with an actual chatbot ID
      type: 'facebook',
      token: 'EAAG...', // Facebook Page Access Token
      config: {
        pageId: '0', // Based on your logs, this should be '0'
        verifyToken: verifyToken,
        appId: 'your-app-id-here'
      }
    };

    // For now, let's just log what we would send
    console.log('Would create integration with data:', JSON.stringify(integrationData, null, 2));
    
    // In a real test, you would make this API call:
    /*
    const response = await axios.post('https://chatbot-project-ymdb.onrender.com/api/integrations', integrationData, {
      headers: {
        'Authorization': 'Bearer your-jwt-token-here', // You'll need to replace this with a valid JWT token
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Facebook integration created successfully:', response.data);
    return response.data;
    */
    
    // Return mock integration data
    return {
      id: 1,
      type: 'facebook',
      token: 'EAAG...',
      config: {
        pageId: '0',
        verifyToken: verifyToken,
        appId: 'your-app-id-here'
      }
    };
  } catch (error) {
    console.error('Error creating Facebook integration:', error.response?.data || error.message);
    throw error;
  }
}

// Test sending a Facebook webhook message to your endpoint
async function testFacebookWebhook() {
  try {
    console.log('Testing Facebook webhook message...');
    
    // Simulate the Facebook webhook payload based on your logs
    const webhookPayload = {
      "object": "page",
      "entry": [
        {
          "time": Date.now(),
          "id": "0",
          "messaging": [
            {
              "sender": {
                "id": "123456789"
              },
              "recipient": {
                "id": "987654321"
              },
              "timestamp": Date.now(),
              "message": {
                "text": "Hello, this is a test message from Facebook!"
              }
            }
          ]
        }
      ]
    };

    // Send POST request to your webhook endpoint
    const response = await axios.post('https://chatbot-project-ymdb.onrender.com/api/integrations/facebook/webhook', webhookPayload, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'facebookexternalua'
      }
    });

    console.log('Facebook webhook test completed:');
    console.log('Status:', response.status);
    console.log('Response:', response.data);
    
    if (response.status === 200 && response.data === 'EVENT_RECEIVED') {
      console.log('✓ Facebook webhook is working correctly');
    } else {
      console.log('✗ Unexpected response from webhook');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error testing Facebook webhook:', error.response?.data || error.message);
    throw error;
  }
}

// Test the webhook verification endpoint
async function testWebhookVerification(verifyToken) {
  try {
    console.log('Testing Facebook webhook verification...');
    
    // Send GET request to verify webhook
    const response = await axios.get('https://chatbot-project-ymdb.onrender.com/api/integrations/facebook/webhook', {
      params: {
        'hub.mode': 'subscribe',
        'hub.verify_token': verifyToken,
        'hub.challenge': 'challenge_string'
      }
    });

    console.log('Webhook verification test completed:');
    console.log('Status:', response.status);
    console.log('Response:', response.data);
    
    if (response.status === 200) {
      console.log('✓ Webhook verification successful');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error testing webhook verification:', error.response?.data || error.message);
    throw error;
  }
}

// Run both tests
async function runAllTests() {
  try {
    // First create an integration
    const integration = await createFacebookIntegration();
    console.log('---');
    
    // Then test webhook verification
    await testWebhookVerification(integration.config.verifyToken);
    console.log('---');
    
    // Finally test the webhook message
    await testFacebookWebhook();
    console.log('All tests completed successfully');
  } catch (error) {
    console.error('Tests failed:', error);
  }
}

// Run the tests
runAllTests();