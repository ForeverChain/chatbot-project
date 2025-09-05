const axios = require('axios');

// Test creating a Facebook integration with all required fields
async function testFacebookIntegration() {
  try {
    console.log('Testing Facebook integration creation...');
    
    // Integration data with all three required fields
    const integrationData = {
      chatbotId: 1, // You'll need to replace this with an actual chatbot ID
      type: 'facebook',
      token: 'your-page-access-token-here',
      config: {
        pageId: '0', // Based on your logs, this should be '0'
        verifyToken: 'your-verify-token-here',
        appId: 'your-app-id-here'
      }
    };

    // Make the API request to your deployed server
    const response = await axios.post('https://chatbot-project-ymdb.onrender.com/api/integrations', integrationData, {
      headers: {
        'Authorization': 'Bearer your-jwt-token-here', // You'll need to replace this with a valid JWT token
        'Content-Type': 'application/json'
      }
    });

    console.log('Facebook integration created successfully:');
    console.log('ID:', response.data.id);
    console.log('Type:', response.data.type);
    console.log('Token:', response.data.token);
    console.log('Config:', response.data.config);
    
    // Verify that all three fields are present
    if (response.data.type && response.data.token && response.data.config) {
      console.log('✓ All three required fields are present');
    } else {
      console.log('✗ Missing required fields');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error creating Facebook integration:', error.response?.data || error.message);
    throw error;
  }
}

// Run the test
testFacebookIntegration()
  .then(() => console.log('Test completed successfully'))
  .catch(error => console.error('Test failed:', error));