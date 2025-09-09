// Test script to verify web auto-continue functionality
const chatbotService = require('./backend/services/chatbotService');

async function testWebAutoContinue() {
  console.log('=== Testing Web Auto-Continue Functionality ===\n');
  
  try {
    // Simulate the exact scenario from the user's conversation
    // After sending "Samsung", the bot should respond with "Samsung бүтээгдэхүүн сонголоо."
    // and then auto-continue to "Хэдэн ширхэг авах вэ?"
    
    // First, process the conversation up to the point where we send "Samsung"
    console.log('1. Processing conversation up to "Samsung" selection...');
    
    // We'll simulate the conversation by processing each message in sequence
    const chatbotId = 1;
    const userId = 1; // This will be converted to string in the service
    
    // Process initial messages to set up the conversation state
    await chatbotService.processMessage(chatbotId, userId, 'hi');
    await chatbotService.processMessage(chatbotId, userId, 'Бүтээгдэхүүн захиалах');
    await chatbotService.processMessage(chatbotId, userId, 'Цахилгаан бараа');
    await chatbotService.processMessage(chatbotId, userId, 'Samsung');
    
    console.log('\n2. Checking conversation state after sending "Samsung"...');
    
    // Now check what happens when we process the auto-continue
    console.log('\n3. Processing auto-continue request...');
    const autoContinueResponse = await chatbotService.processMessage(chatbotId, userId, '__AUTO_CONTINUE__');
    
    console.log('Auto-continue response:', autoContinueResponse);
    
    // Check if we got the expected response
    if (autoContinueResponse.text === 'Хэдэн ширхэг авах вэ?' && autoContinueResponse.type === 'question') {
      console.log('\n✅ SUCCESS: Auto-continue is working correctly!');
      console.log('The backend correctly continues from "Samsung бүтээгдэхүүн сонголоо." to "Хэдэн ширхэг авах вэ?"');
      return true;
    } else {
      console.log('\n❌ ISSUE: Auto-continue is not working as expected.');
      console.log('Expected: "Хэдэн ширхэг авах вэ?" question');
      console.log('Actual:', autoContinueResponse);
      return false;
    }
  } catch (error) {
    console.error('Error testing web auto-continue:', error);
    return false;
  }
}

// Run the test
testWebAutoContinue().then(success => {
  console.log('\n=== Test Summary ===');
  if (success) {
    console.log('Web auto-continue functionality is working correctly.');
    console.log('The issue is likely in the frontend implementation.');
  } else {
    console.log('There may be an issue with the backend auto-continue functionality.');
  }
}).catch(error => {
  console.error('Test execution error:', error);
});