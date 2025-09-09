// Test script to verify web auto-continue functionality with a clean conversation
const chatbotService = require('./backend/services/chatbotService');

async function testWebAutoContinue() {
  console.log('=== Testing Web Auto-Continue Functionality (Clean Conversation) ===\n');
  
  try {
    // Use a new userId to ensure we start with a clean conversation
    const chatbotId = 1;
    const userId = 'new-user-' + Date.now(); // Unique user ID for clean conversation
    
    // Process initial messages to set up the conversation state
    console.log('1. Starting new conversation with user:', userId);
    await chatbotService.processMessage(chatbotId, userId, 'hi');
    console.log('2. Sent "hi" message');
    
    await chatbotService.processMessage(chatbotId, userId, 'Бүтээгдэхүүн захиалах');
    console.log('3. Sent "Бүтээгдэхүүн захиалах" message');
    
    await chatbotService.processMessage(chatbotId, userId, 'Цахилгаан бараа');
    console.log('4. Sent "Цахилгаан бараа" message');
    
    await chatbotService.processMessage(chatbotId, userId, 'Samsung');
    console.log('5. Sent "Samsung" message');
    
    console.log('\n6. Checking conversation state after sending "Samsung"...');
    
    // Now check what happens when we process the auto-continue
    console.log('\n7. Processing auto-continue request...');
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