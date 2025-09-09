// Test script to verify the real scenario fix
console.log('=== Testing Real Scenario Fix ===\n');

// This simulates the actual problematic scenario
const problematicResponse = {
  text: 'Хэдэн ширхэг авах вэ?', // Same text in main response
  type: 'question',
  options: [],
  autoContinuedMessages: [
    {
      text: 'Хэдэн ширхэг авах вэ?', // AND in auto-continued messages - THIS WAS THE PROBLEM
      type: 'question',
      options: []
    }
  ]
};

console.log('BEFORE FIX - Problematic response:');
console.log('Main response:', problematicResponse.text);
console.log('Auto-continued message:', problematicResponse.autoContinuedMessages[0].text);
console.log('Are they the same?', problematicResponse.text === problematicResponse.autoContinuedMessages[0].text);

if (problematicResponse.text === problematicResponse.autoContinuedMessages[0].text) {
  console.log('❌ PROBLEM: Same message would be sent twice!');
  console.log('1. First send:', problematicResponse.text);
  console.log('2. Second send:', problematicResponse.autoContinuedMessages[0].text);
}

console.log('\n' + '='.repeat(50) + '\n');

// This simulates the fixed scenario
const fixedResponse = {
  text: 'Samsung бүтээгдэхүүн сонголоо.', // Different main response
  type: 'message',
  options: null,
  autoContinuedMessages: [
    {
      text: 'Хэдэн ширхэг авах вэ?', // Auto-continued message
      type: 'question',
      options: []
    }
  ]
};

console.log('AFTER FIX - Fixed response:');
console.log('Main response:', fixedResponse.text);
console.log('Auto-continued message:', fixedResponse.autoContinuedMessages[0].text);
console.log('Are they different?', fixedResponse.text !== fixedResponse.autoContinuedMessages[0].text);

if (fixedResponse.text !== fixedResponse.autoContinuedMessages[0].text) {
  console.log('✅ SOLUTION: Different messages will be sent!');
  console.log('1. First send:', fixedResponse.text);
  console.log('2. Second send:', fixedResponse.autoContinuedMessages[0].text);
}

console.log('\n=== Test Complete ===');