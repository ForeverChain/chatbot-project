const flowService = require('./backend/services/flowService');

// Recreate a more complete flow that matches your scenario
const yourFlow = {
  id: 1,
  name: 'Complete Flow',
  steps: {
    nodes: [
      // Start message
      {
        id: '1',
        type: 'message',
        data: {
          label: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?'
        }
      },
      // Question nodes
      {
        id: '2',
        type: 'question',
        data: {
          label: 'Бүтээгдэхүүн төрөл сонгоно уу?',
          options: [
            { id: 'opt1', text: 'Цахилгаан бараа' },
            { id: 'opt2', text: 'Гоо сайхан' },
            { id: 'opt3', text: 'Хүнс' }
          ]
        }
      },
      {
        id: '3',
        type: 'question',
        data: {
          label: 'Таны сонирхож буй брэндийг сонгоно уу?',
          options: [
            { id: 'opt1', text: 'Samsung' },
            { id: 'opt2', text: 'Apple' },
            { id: 'opt3', text: 'Xiaomi' }
          ]
        }
      },
      // Message node that should auto-continue
      {
        id: '4',
        type: 'message',
        data: {
          label: 'Samsung бүтээгдэхүүн сонголоо.'
        }
      },
      // Next question
      {
        id: '5',
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
      // Flow connections
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3', sourceHandle: 'opt1' }, // User selects "Цахилгаан бараа"
      { id: 'e3-4', source: '3', target: '4', sourceHandle: 'opt1' }, // User selects "Samsung"
      { id: 'e4-5', source: '4', target: '5' } // Auto-continue edge
    ]
  }
};

console.log('=== Testing Exact Sequence ===\n');

// Simulate the exact conversation sequence
console.log('1. User sends "hi"');
const messages1 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:07.792')
  }
];

let response1 = flowService.generateFlowResponse(messages1, yourFlow);
console.log('Bot response:', response1.text);

console.log('\n2. User sends "Бүтээгдэхүүн захиала"');
const messages2 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:07.792')
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:07.874')
  },
  {
    content: 'Бүтээгдэхүүн захиала',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:12.826')
  }
];

let response2 = flowService.generateFlowResponse(messages2, yourFlow);
console.log('Bot response:', response2.text);

console.log('\n3. User sends "Цахилгаан бараа"');
const messages3 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:07.792')
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:07.874')
  },
  {
    content: 'Бүтээгдэхүүн захиала',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:12.826')
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:12.889')
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:16.799')
  }
];

let response3 = flowService.generateFlowResponse(messages3, yourFlow);
console.log('Bot response:', response3.text);

console.log('\n4. User sends "Samsung"');
const messages4 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:07.792')
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:07.874')
  },
  {
    content: 'Бүтээгдэхүүн захиала',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:12.826')
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:12.889')
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:16.799')
  },
  {
    content: 'Таны сонирхож буй брэндийг сонгоно уу?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:16.855')
  },
  {
    content: 'Samsung',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:20.058')
  }
];

let response4 = flowService.generateFlowResponse(messages4, yourFlow);
console.log('Bot response:', response4.text);

console.log('\n5. Bot should auto-continue to question');
const messages5 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:07.792')
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:07.874')
  },
  {
    content: 'Бүтээгдэхүүн захиала',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:12.826')
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:12.889')
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:16.799')
  },
  {
    content: 'Таны сонирхож буй брэндийг сонгоно уу?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:16.855')
  },
  {
    content: 'Samsung',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:20.058')
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо.',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:20.113')
  }
];

let response5 = flowService.generateFlowResponse(messages5, yourFlow);
console.log('Bot response:', response5.text);
console.log('Response type:', response5.type);
console.log('Response options:', response5.options);

console.log('\n6. User sends "4" (the duplication issue)');
const messages6 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:07.792')
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:07.874')
  },
  {
    content: 'Бүтээгдэхүүн захиала',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:12.826')
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:12.889')
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:16.799')
  },
  {
    content: 'Таны сонирхож буй брэндийг сонгоно уу?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:16.855')
  },
  {
    content: 'Samsung',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:20.058')
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо.',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:20.113')
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

let response6 = flowService.generateFlowResponse(messages6, yourFlow);
console.log('Bot response:', response6.text);
console.log('Response type:', response6.type);

console.log('\n=== Test Complete ===');