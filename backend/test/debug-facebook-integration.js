const prisma = require('../prisma/client');
const facebookService = require('../services/facebookService');

async function debugFacebookIntegration() {
  console.log('=== Debugging Facebook Integration ===');
  
  try {
    // List all Facebook integrations
    const integrations = await prisma.integration.findMany({
      where: {
        type: 'facebook'
      }
    });
    
    console.log('Found', integrations.length, 'Facebook integrations');
    
    for (const integration of integrations) {
      console.log('\n--- Integration', integration.id, '---');
      console.log('Chatbot ID:', integration.chatbotId);
      console.log('Token length:', integration.token ? integration.token.length : 0);
      
      // Parse config
      let config = null;
      if (integration.config) {
        try {
          config = typeof integration.config === 'string' 
            ? JSON.parse(integration.config) 
            : integration.config;
          console.log('Config:', JSON.stringify(config, null, 2));
        } catch (e) {
          console.error('Error parsing config:', e);
        }
      }
      
      // Test page access token
      if (integration.token) {
        console.log('Testing page access token...');
        const tokenTestResult = await facebookService.testPageAccessToken(integration.token);
        console.log('Token test result:', tokenTestResult);
      }
    }
  } catch (error) {
    console.error('Error debugging Facebook integration:', error);
  }
  
  console.log('\n=== Debug Complete ===');
}

// Run the debug function if this script is executed directly
if (require.main === module) {
  debugFacebookIntegration()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = debugFacebookIntegration;