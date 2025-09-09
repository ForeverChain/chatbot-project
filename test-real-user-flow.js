const flowService = require('./backend/services/flowService');

// Test the flow with the real user scenario
const testFlow = {
  id: 1,
  name: 'Test Flow',
  steps: {
    "nodes": [
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
          "options": []
        }
      }
    ],
    "edges": [
      {
        "source": "message-1757317336859",
        "target": "question-1757317028004"
      }
    ]
  }
};

console.log('=== Testing Real User Flow ===\n');

// Simulate the scenario where the bot just sent "Samsung бүтээгдэхүүн сонголоо."
// and should auto-continue to "Хэдэн ширхэг авах вэ?"
console.log('1. Bot sends "Samsung бүтээгдэхүүн сонголоо." and should auto-continue');
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

let response1 = flowService.generateFlowResponse(messages1, testFlow);
console.log('Bot response:', response1.text);

// Check if the response is the expected question
if (response1.text === 'Хэдэн ширхэг авах вэ?') {
  console.log('\n✅ SUCCESS: Flow correctly auto-continued to the next question!');
  console.log('The bot should send "Хэдэн ширхэг авах вэ?" after "Samsung бүтээгдэхүүн сонголоо."');
} else {
  console.log('\n❌ ISSUE: Flow did not auto-continue as expected.');
  console.log('Expected: "Хэдэн ширхэг авах вэ?"');
  console.log('Actual:', response1.text);
}

console.log('\n=== Test Complete ===');