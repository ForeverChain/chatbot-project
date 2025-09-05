const axios = require('axios');

// Configuration - Update with your actual credentials
const CONFIG = {
  backendUrl: 'https://chatbot-project-ymdb.onrender.com',
  email: 'your-email@example.com',
  password: 'your-password'
};

async function getAuthToken() {
  try {
    console.log('Getting authentication token...');
    
    // Validate configuration
    if (!CONFIG.email || CONFIG.email === 'your-email@example.com') {
      console.error('❌ Please update the email in the CONFIG section');
      return;
    }
    
    if (!CONFIG.password || CONFIG.password === 'your-password') {
      console.error('❌ Please update the password in the CONFIG section');
      return;
    }
    
    // Login to get JWT token
    const response = await axios.post(
      `${CONFIG.backendUrl}/api/auth/login`,
      {
        email: CONFIG.email,
        password: CONFIG.password
      }
    );
    
    console.log('✅ Authentication successful!');
    console.log('Token:', response.data.token);
    console.log('\nUpdate your create-facebook-integration.js file with this token:');
    console.log(`authToken: '${response.data.token}'`);
    
    return response.data.token;
  } catch (error) {
    if (error.response) {
      console.error('❌ Authentication failed:');
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('❌ Authentication error:', error.message);
    }
    throw error;
  }
}

// Run the script
if (require.main === module) {
  getAuthToken()
    .then(token => {
      console.log('\n🎉 You can now use this token to create Facebook integrations!');
    })
    .catch(error => {
      console.error('\n❌ Failed to get authentication token');
    });
}

module.exports = { getAuthToken };