const axios = require('axios');

// Configuration
const CONFIG = {
  backendUrl: 'https://chatbot-project-ymdb.onrender.com',
  pageId: '0', // Based on your logs
  userId: '123456789', // Simulated user ID
  pageAccessToken: 'simulated-page-access-token'
};

// Simulate different types of Facebook messages
const testMessages = [
  {
    type: 'text',
    content: 'Hello! How can you help me today?',
    description: 'Simple text message'
  },
  {
    type: 'text',
    content: 'What are your hours of operation?',
    description: 'Another text message'
  },
  {
    type: 'postback',
    content: 'GET_STARTED',
    description: 'Get started postback'
  },
  {
    type: 'text',
    content: 'Thanks for your help!',
    description: 'Closing message'
  }
];

async function simulateFacebookMessage(message, sequence) {
  try {
    console.log(`\n--- Sending Message ${sequence + 1}: ${message.description} ---`);
    console.log(`Content: "${message.content}"`);
    
    // Create the Facebook webhook payload
    const webhookPayload = {
      "object": "page",
      "entry": [
        {
          "time": Date.now(),
          "id": CONFIG.pageId,
          "messaging": [
            {
              "sender": {
                "id": CONFIG.userId
              },
              "recipient": {
                "id": CONFIG.pageId
              },
              "timestamp": Date.now(),
              ...(message.type === 'text' ? {
                "message": {
                  "text": message.content
                }
              } : {
                "postback": {
                  "payload": message.content
                }
              })
            }
          ]
        }
      ]
    };
    
    console.log('Sending payload to webhook...');
    
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
      console.log('✅ Message processed successfully!');
      return true;
    } else {
      console.log('⚠ Unexpected response:', response.status, response.data);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending message:', error.message);
    return false;
  }
}

async function simulateCompleteChat() {
  console.log('=== Simulating Complete Facebook Chat ===\n');
  
  let successCount = 0;
  
  // Send each test message
  for (let i = 0; i < testMessages.length; i++) {
    const success = await simulateFacebookMessage(testMessages[i], i);
    if (success) {
      successCount++;
    }
    
    // Small delay between messages
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n=== Chat Simulation Complete ===');
  console.log(`Successfully processed: ${successCount}/${testMessages.length} messages`);
  
  if (successCount === testMessages.length) {
    console.log('🎉 All messages processed successfully!');
    console.log('\nYour Facebook webhook is working correctly.');
    console.log('To test with real Facebook messages:');
    console.log('1. Set up a Facebook integration in your database');
    console.log('2. Configure your Facebook app webhook');
    console.log('3. Send messages from your Facebook page');
  } else {
    console.log('⚠ Some messages failed to process.');
    console.log('Check your server logs for errors.');
  }
}

// Run the simulation
if (require.main === module) {
  simulateCompleteChat();
}

module.exports = { simulateFacebookMessage, simulateCompleteChat };