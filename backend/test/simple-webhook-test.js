const axios = require('axios');

// Simple test for Facebook webhook message endpoint
async function testFacebookWebhookMessage() {
  try {
    console.log('Testing Facebook webhook message endpoint...');
    
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

    console.log('Sending webhook payload:', JSON.stringify(webhookPayload, null, 2));
    
    // Send POST request to your webhook endpoint
    const response = await axios.post('https://chatbot-project-ymdb.onrender.com/api/integrations/facebook/webhook', webhookPayload, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'facebookexternalua'
      }
    });

    console.log('Facebook webhook message test completed:');
    console.log('Status:', response.status);
    console.log('Response:', response.data);
    
    if (response.status === 200 && response.data === 'EVENT_RECEIVED') {
      console.log('✓ Facebook webhook message endpoint is working');
      return true;
    } else {
      console.log('✗ Unexpected response from webhook message endpoint');
      return false;
    }
  } catch (error) {
    console.error('Error testing Facebook webhook message:', error.response?.data || error.message);
    return false;
  }
}

// Run the test
testFacebookWebhookMessage()
  .then(success => {
    if (success) {
      console.log('Test completed successfully');
    } else {
      console.log('Test failed');
    }
  })
  .catch(error => {
    console.error('Test failed with error:', error);
  });