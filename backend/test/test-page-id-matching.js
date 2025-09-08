const prisma = require('../prisma/client');
const facebookService = require('../services/facebookService');

// Test the findIntegrationByPageId method with different data types
async function testPageIdMatching() {
  console.log('=== Testing Page ID Matching ===');
  
  try {
    // Create a test integration if one doesn't exist
    const testPageId = '707768715760619';
    
    // List all Facebook integrations
    const integrations = await prisma.integration.findMany({
      where: {
        type: 'facebook'
      }
    });
    
    console.log('Existing integrations:', integrations.length);
    
    // Test with string page ID
    console.log('\n--- Testing with string page ID ---');
    const result1 = await facebookService.findIntegrationByPageId(testPageId);
    console.log('String page ID result:', result1 ? result1.id : 'Not found');
    
    // Test with numeric page ID
    console.log('\n--- Testing with numeric page ID ---');
    const numericPageId = parseInt(testPageId, 10);
    const result2 = await facebookService.findIntegrationByPageId(numericPageId);
    console.log('Numeric page ID result:', result2 ? result2.id : 'Not found');
    
    // Test with page ID as number
    console.log('\n--- Testing with page ID as number ---');
    const result3 = await facebookService.findIntegrationByPageId(Number(testPageId));
    console.log('Number page ID result:', result3 ? result3.id : 'Not found');
    
  } catch (error) {
    console.error('Error testing page ID matching:', error);
  }
  
  console.log('\n=== Test Complete ===');
}

// Run the test function if this script is executed directly
if (require.main === module) {
  testPageIdMatching()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = testPageIdMatching;