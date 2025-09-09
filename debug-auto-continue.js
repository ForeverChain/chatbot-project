// Simple debug script to test the flow service auto-continue functionality
const flowService = require('./backend/services/flowService');

// Recreate the exact flow from your database
const yourFlow = {
  id: 1,
  name: 'Your Exact Flow',
  steps: {
    nodes: [
      // Start node
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
      // Next question that should appear after the message
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
      { id: 'e2-3', source: '2', target: '3', sourceHandle: 'opt1' }, // Assuming user selected "Цахилгаан бараа"
      { id: 'e3-4', source: '3', target: '4', sourceHandle: 'opt1' }, // Assuming user selected "Samsung"
      { id: 'e4-5', source: '4', target: '5' } // This is the auto-continue edge
    ]
  }
};

// Simulate the exact conversation state from your database
// After the bot sent "Samsung бүтээгдэхүүн сонголоо."
const conversationState = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:07.792000000')
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:07.874000000')
  },
  {
    content: 'Бүтээгдэхүүн захиала',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:12.826000000')
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:12.889000000')
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:16.799000000')
  },
  {
    content: 'Таны сонирхож буй брэндийг сонгоно уу?',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:16.855000000')
  },
  {
    content: 'Samsung',
    sender: 'user',
    createdAt: new Date('2025-09-08 09:00:20.058000000')
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо.',
    sender: 'bot',
    createdAt: new Date('2025-09-08 09:00:20.113000000')
  }
];

console.log('=== DEBUGGING AUTO-CONTINUE ISSUE ===');
console.log('Testing your exact flow scenario...');

try {
  // Test generating flow response - should automatically continue to the next question
  const response = flowService.generateFlowResponse(conversationState, yourFlow);
  
  console.log('Flow service response:', response);
  
  // Check if response contains the expected next question
  if (response.text === 'Хэдэн ширхэг авах вэ?' && 
      response.type === 'question' &&
      response.options && response.options.length === 3) {
    console.log('✅ Your exact flow is working correctly - auto-continuing to next question');
  } else {
    console.log('❌ Your exact flow is not working as expected');
    console.log('Expected text: "Хэдэн ширхэг авах вэ?"');
    console.log('Expected type: "question"');
    console.log('Expected options: 3 options');
    console.log('Actual response:', response);
  }
} catch (error) {
  console.error('Error testing your exact flow:', error);
}

console.log('\n=== DEBUG COMPLETE ===');