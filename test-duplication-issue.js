const flowService = require('./backend/services/flowService');

// Recreate your exact flow
const yourFlow = {
  id: 1,
  name: 'Your Flow',
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

console.log('=== Testing Duplication Issue ===\n');

// First, simulate sending the initial "hi" message
console.log('1. User sends "hi"');
const messages1 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  }
];

let response1 = flowService.generateFlowResponse(messages1, yourFlow);
console.log('Bot response:', response1);

// Simulate the bot sending "Samsung бүтээгдэхүүн сонголоо." (auto-continue)
console.log('\n2. Bot sends "Samsung бүтээгдэхүүн сонголоо." (auto-continue)');
const messages2 = [
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

let response2 = flowService.generateFlowResponse(messages2, yourFlow);
console.log('Bot response:', response2);

// Simulate user sending "4" as response to the question
console.log('\n3. User sends "4"');
const messages3 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо.',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: '4',
    sender: 'user',
    createdAt: new Date()
  }
];

let response3 = flowService.generateFlowResponse(messages3, yourFlow);
console.log('Bot response:', response3);

// Simulate the bot sending the question again (the duplication issue)
console.log('\n4. Bot sends "Хэдэн ширхэг авах вэ?" again (duplication)');
const messages4 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо.',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: '4',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Хэдэн ширхэг авах вэ?',
    sender: 'bot',
    createdAt: new Date()
  }
];

let response4 = flowService.generateFlowResponse(messages4, yourFlow);
console.log('Bot response:', response4);

console.log('\n=== Test Complete ===');