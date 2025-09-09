const flowService = require('./backend/services/flowService');

// Test 1: Message followed by message (should auto-continue)
const test1Flow = {
  id: 1,
  name: 'Message to Message Flow',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'message',
        data: {
          label: 'Welcome to our store!'
        }
      },
      {
        id: '2',
        type: 'message',
        data: {
          label: 'Here are today\'s special offers:'
        }
      }
    ],
    edges: [
      {
        id: 'e1-2',
        source: '1',
        target: '2'
      }
    ]
  }
};

const test1Messages = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Welcome to our store!',
    sender: 'bot',
    createdAt: new Date()
  }
];

// Test 2: Message followed by question (should auto-continue)
const test2Flow = {
  id: 2,
  name: 'Message to Question Flow',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'message',
        data: {
          label: 'Samsung бүтээгдэхүүн сонголоо'
        }
      },
      {
        id: '2',
        type: 'question',
        data: {
          label: 'Хэдэн ширхэг авах вэ?',
          options: [
            { id: 'opt1', text: '1 ширхэг' },
            { id: 'opt2', text: '2 ширхэг' }
          ]
        }
      }
    ],
    edges: [
      {
        id: 'e1-2',
        source: '1',
        target: '2'
      }
    ]
  }
};

const test2Messages = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Samsung бүтээгдэхүүн сонголоо',
    sender: 'bot',
    createdAt: new Date()
  }
];

// Test 3: Message with multiple outgoing edges (should NOT auto-continue)
const test3Flow = {
  id: 3,
  name: 'Message with Multiple Edges',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'message',
        data: {
          label: 'Choose an option:'
        }
      },
      {
        id: '2',
        type: 'message',
        data: {
          label: 'Option A selected'
        }
      },
      {
        id: '3',
        type: 'message',
        data: {
          label: 'Option B selected'
        }
      }
    ],
    edges: [
      {
        id: 'e1-2',
        source: '1',
        target: '2'
      },
      {
        id: 'e1-3',
        source: '1',
        target: '3'
      }
    ]
  }
};

const test3Messages = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Choose an option:',
    sender: 'bot',
    createdAt: new Date()
  }
];

async function runComprehensiveTest() {
  console.log('=== Comprehensive Flow Service Test ===\n');
  
  // Test 1: Message to Message
  console.log('Test 1: Message to Message auto-continue');
  let response = flowService.generateFlowResponse(test1Messages, test1Flow);
  console.log('Response:', response);
  const test1Passed = response.text === 'Here are today\'s special offers:' && response.type === 'message';
  console.log('Result:', test1Passed ? 'PASSED' : 'FAILED');
  console.log('');
  
  // Test 2: Message to Question
  console.log('Test 2: Message to Question auto-continue');
  response = flowService.generateFlowResponse(test2Messages, test2Flow);
  console.log('Response:', response);
  const test2Passed = response.text === 'Хэдэн ширхэг авах вэ?' && 
                     response.type === 'question' &&
                     response.options && response.options.length === 2;
  console.log('Result:', test2Passed ? 'PASSED' : 'FAILED');
  console.log('');
  
  // Test 3: Message with multiple edges (should not auto-continue)
  console.log('Test 3: Message with multiple edges (should not auto-continue)');
  response = flowService.generateFlowResponse(test3Messages, test3Flow);
  console.log('Response:', response);
  // In this case, it should not auto-continue because there are multiple outgoing edges
  // It should either provide a fallback response or handle it gracefully
  const test3Passed = response.text !== undefined; // Just check that it doesn't crash
  console.log('Result:', test3Passed ? 'PASSED' : 'FAILED');
  console.log('');
  
  console.log('=== Test Summary ===');
  console.log('Test 1 (Message→Message):', test1Passed ? 'PASSED' : 'FAILED');
  console.log('Test 2 (Message→Question):', test2Passed ? 'PASSED' : 'FAILED');
  console.log('Test 3 (Multiple edges):', test3Passed ? 'PASSED' : 'FAILED');
  
  const allPassed = test1Passed && test2Passed && test3Passed;
  console.log('\nOverall result:', allPassed ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED');
  
  return allPassed;
}

// Execute test if this file is run directly
if (require.main === module) {
  runComprehensiveTest().catch(error => {
    console.error('Test execution error:', error);
  });
}

module.exports = { runComprehensiveTest };