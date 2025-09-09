const axios = require('./backend/node_modules/axios').default;

// Test the chat endpoint
async function testChatEndpoint() {
  try {
    console.log('Testing chat endpoint...');
    
    // Use localhost:3003 as default, or the PORT environment variable
    const port = process.env.PORT || 3003;
    const baseUrl = `http://localhost:${port}/api`;
    
    console.log(`Testing endpoint: ${baseUrl}/chat/chat/1`);
    
    // Test with a simple message
    const response = await axios.post(`${baseUrl}/chat/chat/1`, {
      message: 'hi',
      userId: 'test-user-123'
    }, {
      timeout: 5000 // 5 second timeout
    });
    
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    
    if (response.data && response.data.response) {
      console.log('✅ Chat endpoint is working correctly');
      console.log('Bot response:', response.data.response);
      return true;
    } else {
      console.log('❌ Chat endpoint returned unexpected data');
      return false;
    }
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.log('❌ Could not connect to backend server. Make sure the server is running on port 3003');
      console.log('Start the server with: cd backend && npm start');
    } else if (error.response) {
      console.log('❌ Server responded with error:');
      console.log('Status:', error.response.status);
      console.log('Data:', error.response.data);
    } else {
      console.log('❌ Error testing chat endpoint:', error.message);
    }
    return false;
  }
}

// Run the test
if (require.main === module) {
  testChatEndpoint().then(success => {
    if (success) {
      console.log('\n🎉 Chat functionality is working!');
    } else {
      console.log('\n❌ Chat functionality needs to be fixed.');
    }
  });
}

module.exports = { testChatEndpoint };