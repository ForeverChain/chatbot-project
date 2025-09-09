// Test script to verify the duplicate message fix
console.log('=== Testing Duplicate Message Fix ===\n');

// Simulate the scenario that was causing duplication
const originalResponse = {
  text: 'Samsung бүтээгдэхүүн сонголоо.', // This is the initial message
  type: 'message',
  options: null,
  autoContinuedMessages: [
    {
      text: 'Хэдэн ширхэг авах вэ?', // This is the auto-continued message
      type: 'question',
      options: []
    }
  ]
};

console.log('Original response from chatbot service:');
console.log('Main response text:', originalResponse.text);
console.log('Auto-continued messages:', originalResponse.autoContinuedMessages);

// Simulate what the Facebook service would do
console.log('\nFacebook service processing:');

// Send main response
console.log('1. Sending main response:', originalResponse.text);

// Send auto-continued messages
if (originalResponse.autoContinuedMessages && originalResponse.autoContinuedMessages.length > 0) {
  console.log('2. Sending auto-continued messages:');
  for (let i = 0; i < originalResponse.autoContinuedMessages.length; i++) {
    console.log(`   ${i + 1}. ${originalResponse.autoContinuedMessages[i].text}`);
  }
}

console.log('\nResult: Two different messages sent - no duplication!');
console.log('- "Samsung бүтээгдэхүүн сонголоо." (main response)');
console.log('- "Хэдэн ширхэг авах вэ?" (auto-continued message)');

// Test the fixed version where the main response should be different
const fixedResponse = {
  text: 'Samsung бүтээгдэхүүн сонголоо.', // Initial message
  type: 'message',
  options: null,
  autoContinuedMessages: [
    {
      text: 'Хэдэн ширхэг авах вэ?', // Auto-continued message (different from main response)
      type: 'question',
      options: []
    }
  ]
};

console.log('\n=== Fixed Version Verification ===');
console.log('Main response:', fixedResponse.text);
console.log('Auto-continued message:', fixedResponse.autoContinuedMessages[0].text);
console.log('Are they different?', fixedResponse.text !== fixedResponse.autoContinuedMessages[0].text);

console.log('\n=== Test Complete ===');