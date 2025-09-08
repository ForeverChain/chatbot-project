const facebookService = require('../services/facebookService');

// Mock integration data
const mockIntegration = {
  id: 1,
  chatbotId: 1,
  type: 'facebook',
  token: 'test-page-access-token',
  config: {
    pageId: '123456789',
    verifyToken: 'test-verify-token',
    appId: 'test-app-id'
  }
};

// Mock sender PSID
const mockSenderPsid = '987654321';

// Test message with options (quick replies)
async function testQuickReplies() {
  console.log('Testing Facebook quick replies functionality...');
  
  try {
    // Test sending a message with quick replies
    const response = await facebookService.sendMessage(
      mockIntegration,
      mockSenderPsid,
      'What is your favorite color?',
      [
        { text: 'Red', payload: 'RED' },
        { text: 'Blue', payload: 'BLUE' },
        { text: 'Green', payload: 'GREEN' }
      ]
    );
    
    console.log('Quick replies message sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending quick replies message:', error);
    return false;
  }
}

// Test sending a regular message without options
async function testRegularMessage() {
  console.log('Testing regular Facebook message...');
  
  try {
    // Test sending a regular message
    const response = await facebookService.sendMessage(
      mockIntegration,
      mockSenderPsid,
      'Hello! How can I help you today?'
    );
    
    console.log('Regular message sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending regular message:', error);
    return false;
  }
}

// Run tests
async function runTests() {
  console.log('=== Facebook Quick Replies Test ===\n');
  
  // Test regular message
  const regularMessageSuccess = await testRegularMessage();
  console.log('');
  
  // Test quick replies
  const quickRepliesSuccess = await testQuickReplies();
  console.log('');
  
  // Summary
  console.log('=== Test Summary ===');
  console.log('Regular message test:', regularMessageSuccess ? 'PASSED' : 'FAILED');
  console.log('Quick replies test:', quickRepliesSuccess ? 'PASSED' : 'FAILED');
  
  if (regularMessageSuccess && quickRepliesSuccess) {
    console.log('\n🎉 All tests passed! Facebook quick replies implementation is working correctly.');
  } else {
    console.log('\n❌ Some tests failed. Please check the implementation.');
  }
}

// Execute tests if this file is run directly
if (require.main === module) {
  runTests().catch(error => {
    console.error('Test execution error:', error);
  });
}

module.exports = { testQuickReplies, testRegularMessage, runTests };