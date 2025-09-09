// Test script to verify the specific scenario mentioned in the query
const flowService = require('./backend/services/flowService');

// Mock a more complete flow that matches the user's scenario
const userFlow = {
  steps: {
    nodes: [
      {
        id: 'message-1',
        type: 'message',
        data: {
          label: 'Samsung бүтээгдэхүүн сонголоо.' // Samsung product selected
        }
      },
      {
        id: 'question-1',
        type: 'question',
        data: {
          label: 'Хэдэн ширхэг авах вэ?', // How many pieces to buy?
          options: [] // Free text question
        }
      },
      {
        id: 'message-2',
        type: 'message',
        data: {
          label: 'Таны захиалгыг хүлээн авлаа.' // Your order has been received
        }
      }
    ],
    edges: [
      {
        source: 'message-1',
        target: 'question-1'
      },
      {
        source: 'question-1',
        target: 'message-2'
      }
    ]
  }
};

console.log('=== Testing Specific User Scenario ===\n');

// Simulate the flow:
// 1. Bot sends "Samsung бүтээгдэхүүн сонголоо."
console.log('Step 1: Bot sends "Samsung бүтээгдэхүүн сонголоо."');
const messageNode = userFlow.steps.nodes.find(n => n.id === 'message-1');
const response1 = flowService.generateFlowResponse(userFlow, messageNode, null);
console.log('Response:', response1);

// 2. Auto-continue to "Хэдэн ширхэг авах вэ?"
console.log('\nStep 2: Auto-continue to "Хэдэн ширхэг авах вэ?"');
const questionNode = userFlow.steps.nodes.find(n => n.id === 'question-1');
const response2 = flowService.generateFlowResponse(userFlow, questionNode, null);
console.log('Response:', response2);

// 3. User responds with "Tugsonlinestore" (unexpected response)
console.log('\nStep 3: User responds with "Tugsonlinestore"');
const nextNode = flowService.getNextNode(userFlow, 'question-1', 'Tugsonlinestore');
console.log('Next node:', nextNode ? nextNode.id : 'null');

// 4. Should continue to "Таны захиалгыг хүлээн авлаа."
if (nextNode && nextNode.id === 'message-2') {
  console.log('\nStep 4: Continue to "Таны захиалгыг хүлээн авлаа."');
  const response3 = flowService.generateFlowResponse(userFlow, nextNode, null);
  console.log('Response:', response3);
}

console.log('\n=== Test Complete ===');