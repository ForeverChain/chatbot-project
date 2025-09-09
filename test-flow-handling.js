// Test script to verify improved flow handling
const flowService = require('./backend/services/flowService');

// Mock flow with a question that should accept free-text responses
const testFlow = {
  steps: {
    nodes: [
      {
        id: 'question-1',
        type: 'question',
        data: {
          label: 'Хэдэн ширхэг авах вэ?', // How many pieces to buy?
          options: [] // No predefined options - should accept free text
        }
      },
      {
        id: 'message-1',
        type: 'message',
        data: {
          label: 'Таны захиалгыг хүлээн авлаа.' // Your order has been received
        }
      }
    ],
    edges: [
      {
        source: 'question-1',
        target: 'message-1'
      }
    ]
  }
};

console.log('=== Testing Flow Handling with Free Text Response ===\n');

// Test 1: Normal flow with valid response
console.log('Test 1: Processing normal response to free-text question');
const currentNode = testFlow.steps.nodes[0]; // The question node
const response = flowService.generateFlowResponse(testFlow, currentNode, null);
console.log('Generated response:', response);

// Test 2: Getting next node with free-text input
console.log('\nTest 2: Getting next node with free-text input "Tugsonlinestore"');
const nextNode = flowService.getNextNode(testFlow, 'question-1', 'Tugsonlinestore');
console.log('Next node:', nextNode ? nextNode.id : 'null');

// Test 3: Getting next node with numeric input
console.log('\nTest 3: Getting next node with numeric input "5"');
const nextNode2 = flowService.getNextNode(testFlow, 'question-1', '5');
console.log('Next node:', nextNode2 ? nextNode2.id : 'null');

console.log('\n=== Test Complete ===');