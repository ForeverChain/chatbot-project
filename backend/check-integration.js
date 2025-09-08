const prisma = require('./prisma/client');

async function checkIntegration() {
  try {
    console.log('Checking for Facebook integrations...');
    
    // Find all Facebook integrations
    const integrations = await prisma.integration.findMany({
      where: {
        type: 'facebook'
      }
    });
    
    console.log(`Found ${integrations.length} Facebook integration(s):`);
    
    for (const integration of integrations) {
      console.log('\n--- Integration ---');
      console.log('ID:', integration.id);
      console.log('Type:', integration.type);
      console.log('Token:', integration.token ? '[REDACTED]' : 'None');
      
      if (integration.config) {
        try {
          const config = JSON.parse(integration.config);
          console.log('Config:', JSON.stringify(config, null, 2));
          
          if (config.verifyToken) {
            console.log('Verify Token:', config.verifyToken);
          }
        } catch (e) {
          console.log('Config (parse error):', integration.config);
        }
      }
    }
    
    // Check specifically for the token you mentioned
    const targetToken = 'a40b1a33348483d9816e7367276d30db5ab5ae567ce22395287172fe4fb8ff5c';
    console.log(`\n--- Checking for specific token: ${targetToken.substring(0, 10)}... ---`);
    
    const matchingIntegration = integrations.find(int => {
      try {
        const config = typeof int.config === 'string' 
          ? JSON.parse(int.config) 
          : int.config;
        return config && config.verifyToken === targetToken;
      } catch (e) {
        return false;
      }
    });
    
    if (matchingIntegration) {
      console.log('Found matching integration with that verify token:');
      console.log('ID:', matchingIntegration.id);
      console.log('Type:', matchingIntegration.type);
    } else {
      console.log('No integration found with that verify token');
    }
    
  } catch (error) {
    console.error('Error checking integrations:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkIntegration();