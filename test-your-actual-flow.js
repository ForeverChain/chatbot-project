const flowService = require('./backend/services/flowService');

// Your actual flow JSON
const yourFlow = {
  id: 1,
  name: 'Шинэ урсгал',
  steps: {
    "nodes": [
      {
        "id": "question-1757311553175",
        "type": "question",
        "data": {
          "label": "Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?",
          "options": [
            {
              "id": "opt1",
              "text": "Бүтээгдэхүүн захиалах"
            },
            {
              "id": "opt2",
              "text": "Үйлчилгээ захиалах"
            }
          ]
        }
      },
      {
        "id": "question-1757314754427",
        "type": "question",
        "data": {
          "label": "Бүтээгдэхүүн төрөл сонгоно уу?",
          "options": [
            {
              "id": "opt1",
              "text": "Цахилгаан бараа"
            },
            {
              "id": "opt2",
              "text": "Хувцас"
            }
          ]
        }
      },
      {
        "id": "question-1757314795617",
        "type": "question",
        "data": {
          "label": "Таны сонирхож буй брэндийг сонгоно уу?",
          "options": [
            {
              "id": "opt1",
              "text": "Samsung"
            },
            {
              "id": "opt2",
              "text": "LG"
            }
          ]
        }
      },
      {
        "id": "message-1757317336859",
        "type": "message",
        "data": {
          "label": "Samsung бүтээгдэхүүн сонголоо."
        }
      },
      {
        "id": "question-1757317028004",
        "type": "question",
        "data": {
          "label": "Хэдэн ширхэг авах вэ?",
          "options": [] // Free text question
        }
      },
      {
        "id": "message-1757317051643",
        "type": "message",
        "data": {
          "label": "Таны захиалга батлагдлаа."
        }
      }
    ],
    "edges": [
      {
        "source": "question-1757311553175",
        "sourceHandle": "opt1",
        "target": "question-1757314754427"
      },
      {
        "source": "question-1757314754427",
        "sourceHandle": "opt1",
        "target": "question-1757314795617"
      },
      {
        "source": "question-1757314795617",
        "sourceHandle": "opt1",
        "target": "message-1757317336859"
      },
      {
        "source": "message-1757317336859",
        "sourceHandle": null,
        "target": "question-1757317028004"
      },
      {
        "source": "question-1757317028004",
        "sourceHandle": "free-text",
        "target": "message-1757317051643"
      }
    ]
  }
};

console.log('=== Testing Your Actual Flow ===\n');

// Simulate the conversation up to the point where the issue occurs
console.log('1. User sends "hi"');
const messages1 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  }
];

let response1 = flowService.generateFlowResponse(messages1, yourFlow);
console.log('Bot response:', response1.text);

console.log('\n2. User sends "Бүтээгдэхүүн захиалах"');
const messages2 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Бүтээгдэхүүн захиалах',
    sender: 'user',
    createdAt: new Date()
  }
];

let response2 = flowService.generateFlowResponse(messages2, yourFlow);
console.log('Bot response:', response2.text);

console.log('\n3. User sends "Цахилгаан бараа"');
const messages3 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Бүтээгдэхүүн захиалах',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user',
    createdAt: new Date()
  }
];

let response3 = flowService.generateFlowResponse(messages3, yourFlow);
console.log('Bot response:', response3.text);

console.log('\n4. User sends "Samsung"');
const messages4 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Бүтээгдэхүүн захиалах',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Таны сонирхож буй брэндийг сонгоно уу?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Samsung',
    sender: 'user',
    createdAt: new Date()
  }
];

let response4 = flowService.generateFlowResponse(messages4, yourFlow);
console.log('Bot response:', response4.text);

console.log('\n5. Bot should auto-continue to question');
const messages5 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Бүтээгдэхүүн захиалах',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Таны сонирхож буй брэндийг сонгоно уу?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Samsung',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо.',
    sender: 'bot',
    createdAt: new Date()
  }
];

let response5 = flowService.generateFlowResponse(messages5, yourFlow);
console.log('Bot response:', response5.text);

console.log('\n6. User sends "4" (number of items)');
const messages6 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Бүтээгдэхүүн захиалах',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Бүтээгдэхүүн төрөл сонгоно уу?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Цахилгаан бараа',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Таны сонирхож буй брэндийг сонгоно уу?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Samsung',
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

let response6 = flowService.generateFlowResponse(messages6, yourFlow);
console.log('Bot response:', response6.text);

console.log('\n=== Test Complete ===');