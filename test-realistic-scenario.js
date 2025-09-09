const flowService = require('./backend/services/flowService');

// Create a realistic flow that matches what you described
const realisticFlow = {
  id: 1,
  name: 'Samsung Product Flow',
  steps: '{"nodes":[{"id":"node-1","type":"message","data":{"label":"Samsung бүтээгдэхүүн сонголоо"},"position":{"x":100,"y":100}},{"id":"node-2","type":"question","data":{"label":"Хэдэн ширхэг авах вэ?","options":[{"id":"opt1","text":"1 ширхэг"},{"id":"opt2","text":"2 ширхэг"},{"id":"opt3","text":"3 ширхэг"}]},"position":{"x":100,"y":200}}],"edges":[{"id":"edge-1-2","source":"node-1","target":"node-2"}]}'
};

// Simulate the conversation step by step as it would happen in reality

console.log('=== REALISTIC SCENARIO TEST ===\n');

// Step 1: User sends "hi"
console.log('Step 1: User sends "hi"');
const initialMessages = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  }
];

let response = flowService.generateFlowResponse(initialMessages, realisticFlow);
console.log('Bot response:', response);
console.log('');

// Step 2: After bot sends "Samsung бүтээгдэхүүн сонголоо", we add it to conversation history
console.log('Step 2: Bot sends "Samsung бүтээгдэхүүн сонголоо" and adds it to conversation history');
const conversationWithBotMessage = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо',
    sender: 'bot',
    createdAt: new Date()
  }
];

// Step 3: Process the conversation to see if it auto-continues
console.log('Step 3: Processing conversation to see if it auto-continues');
response = flowService.generateFlowResponse(conversationWithBotMessage, realisticFlow);
console.log('Bot response:', response);
console.log('');

// Check if it correctly auto-continued
if (response.text === 'Хэдэн ширхэг авах вэ?' && response.type === 'question') {
  console.log('✅ SUCCESS: Flow correctly auto-continued to the next question!');
  console.log('This means the fix is working properly.');
  console.log('The issue might be in how the Facebook service handles the response.');
} else {
  console.log('❌ ISSUE: Flow did not auto-continue as expected.');
  console.log('Expected: "Хэдэн ширхэг авах вэ?" question');
  console.log('Actual:', response);
  console.log('This suggests there might be an issue with the flow structure or implementation.');
}

console.log('\n=== ANALYSIS ===');
console.log('If the test above shows SUCCESS, then the flow service fix is working correctly.');
console.log('The issue you\'re experiencing might be due to:');
console.log('1. The Facebook service only sending one message at a time');
console.log('2. The actual flow in your database having a different structure');
console.log('3. There being multiple outgoing edges from the message node');
console.log('4. The message content not matching exactly (whitespace, encoding, etc.)');