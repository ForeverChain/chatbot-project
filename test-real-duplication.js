const flowService = require('./backend/services/flowService');

// Flow that should continue after the question
const flowWithContinuation = {
  id: 1,
  name: 'Flow with Continuation',
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
      },
      {
        id: '3',
        type: 'message',
        data: {
          label: 'Таны захиалгыг хүлээн авлаа.'
        }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' } // Edge from question to next message
    ]
  }
};

console.log('=== Testing Real Duplication Issue ===\n');

// Step 1: Bot sends "Samsung бүтээгдэхүүн сонголоо." (auto-continue)
console.log('1. Bot sends "Samsung бүтээгдэхүүн сонголоо." (auto-continue)');
const messages1 = [
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

let response1 = flowService.generateFlowResponse(messages1, flowWithContinuation);
console.log('Bot response:', response1.text);

// Step 2: User sends "4"
console.log('\n2. User sends "4"');
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
  },
  {
    content: 'Хэдэн ширхэг авах вэ?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: '4',
    sender: 'user',
    createdAt: new Date()
  }
];

let response2 = flowService.generateFlowResponse(messages2, flowWithContinuation);
console.log('Bot response:', response2.text);

console.log('\n=== Test Complete ===');