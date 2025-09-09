// Simple test to verify the auto-continue solution
const flowService = require('./backend/services/flowService');

// Test flow with message that should auto-continue
const testFlow = {
  id: 1,
  name: 'Test Flow',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'message',
        data: {
          label: 'Samsung бүтээгдэхүүн сонголоо.'
        }
      },
      {
        id: '2',
        type: 'question',
        data: {
          label: 'Хэдэн ширхэг авах вэ?',
          options: [
            { id: 'opt1', text: '1 ширхэг' },
            { id: 'opt2', text: '2 ширхэг' },
            { id: 'opt3', text: '3 ширхэг' }
          ]
        }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' }
    ]
  }
};

// Simulate conversation state after sending the message that should auto-continue
const conversationState = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо.',
    sender: 'bot',
    createdAt: new Date()
  }
];

console.log('=== Simple Auto-Continue Solution Test ===\n');

// Test the flow service directly
console.log('Testing flow service with conversation state...');
const response = flowService.generateFlowResponse(conversationState, testFlow);

console.log('Flow service response:', response);

// Check if we get the expected auto-continue response
if (response.text === 'Хэдэн ширхэг авах вэ?' && 
    response.type === 'question' &&
    response.options && response.options.length === 3) {
  console.log('\n✅ SUCCESS: Auto-continue is working correctly!');
  console.log('After "Samsung бүтээгдэхүүн сонголоо." the flow correctly continues to "Хэдэн ширхэг авах вэ?"');
} else {
  console.log('\n❌ ISSUE: Auto-continue is not working as expected.');
  console.log('Expected: "Хэдэн ширхэг авах вэ?" question with 3 options');
  console.log('Actual response:', response);
}

console.log('\n=== Test Complete ===');