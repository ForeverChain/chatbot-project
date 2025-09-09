// Test script to verify conversation ID generation
console.log('=== Testing Conversation ID Generation ===\n');

// Simulate the conversation ID generation from the frontend
const userId = 123;
const chatbotId = 456;
const conversationId = `web_${userId}_${chatbotId}`;

console.log('User ID:', userId);
console.log('Chatbot ID:', chatbotId);
console.log('Generated Conversation ID:', conversationId);

// Test multiple generations to ensure consistency
console.log('\nTesting consistency:');
for (let i = 0; i < 3; i++) {
  const testConversationId = `web_${userId}_${chatbotId}`;
  console.log(`Generation ${i + 1}:`, testConversationId);
}

console.log('\n=== Test Complete ===');