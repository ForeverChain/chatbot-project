const flowService = require('./backend/services/flowService');

// Recreate your specific flow based on the log data
const yourFlow = {
  id: 1,
  name: 'Your Samsung Flow',
  steps: {
    nodes: [
      {
        id: 'question-1757311553175',
        type: 'question',
        data: {
          label: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?'
        }
      },
      {
        id: 'question-1757314754427',
        type: 'question',
        data: {
          label: 'Бүтээгдэхүүн төрөл сонгоно уу?'
        }
      },
      {
        id: 'question-1757314795617',
        type: 'question',
        data: {
          label: 'Таны сонирхож буй брэндийг сонгоно уу?',
          options: [
            { id: 'opt1', text: 'Samsung' },
            { id: 'opt2', text: 'LG' }
          ]
        }
      },
      {
        id: 'message-1757317336859',
        type: 'message',
        data: {
          label: 'Samsung бүтээгдэхүүн сонголоо.'
        }
      },
      {
        id: 'question-1757317028004',
        type: 'question',
        data: {
          label: 'Хэдэн ширхэг авах вэ?',
          options: [] // Free text question
        }
      }
    ],
    edges: [
      {
        source: 'question-1757314795617',
        sourceHandle: 'opt1',
        target: 'message-1757317336859'
      },
      {
        source: 'message-1757317336859',
        target: 'question-1757317028004'
      }
    ]
  }
};

// Simulate the conversation flow that's causing issues
console.log('=== Testing Your Specific Flow Scenario ===\n');

// Scenario 1: Normal flow - should work
console.log('Scenario 1: Normal flow');
const normalMessages = [
  {
    content: 'hi',
    sender: 'user'
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot'
  },
  {
    content: 'Бүтээгдэхүүн худалдаж авах',
    sender: 'user'
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot'
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user'
  },
  {
    content: 'Таны сонирхож буй брэндийг сонгоно уу?',
    sender: 'bot'
  },
  {
    content: 'Samsung',
    sender: 'user'
  }
];

let response = flowService.generateFlowResponse(normalMessages, yourFlow);
console.log('Response after Samsung selection:', response);
console.log('');

// Scenario 2: Error message scenario - this is what's causing issues
console.log('Scenario 2: Error message scenario (the problematic case)');
const errorMessages = [
  {
    content: 'hi',
    sender: 'user'
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot'
  },
  {
    content: 'Бүтээгдэхүүн худалдаж авах',
    sender: 'user'
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot'
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user'
  },
  {
    content: 'Таны сонирхож буй брэндийг сонгоно уу?',
    sender: 'bot'
  },
  {
    content: 'Samsung',
    sender: 'user'
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо.', // This message was sent by the bot
    sender: 'bot'
  },
  {
    content: 'Уучлаарай, би таны хариултыг ойлгосонгүй. Дараах сонголтуудаас нэгийг сонгоно уу: Цахилгаан бараа, Хувцас', // Error message
    sender: 'bot'
  },
  {
    content: 'Хэдэн ширхэг авах вэ?', // User is asking about the next step
    sender: 'user'
  }
];

response = flowService.generateFlowResponse(errorMessages, yourFlow);
console.log('Response after error message scenario:', response);
console.log('');

console.log('=== Analysis ===');
console.log('The fix should help the system recognize that even after an error message,');
console.log('it should be able to continue the flow from the last properly sent message node.');
console.log('In this case, "Samsung бүтээгдэхүүн сонголоо." should auto-continue to "Хэдэн ширхэг авах вэ?".');