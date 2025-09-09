const flowService = require('./backend/services/flowService');

// Test flow with a free text question connecting to a message node
const testFlow = {
  id: 1,
  name: 'Free Text Connection Test',
  steps: {
    nodes: [
      {
        id: 'question-1',
        type: 'question',
        data: {
          label: 'What is your name?'
        }
      },
      {
        id: 'message-1',
        type: 'message',
        data: {
          label: 'Nice to meet you!'
        }
      }
    ],
    edges: [
      {
        id: 'edge-1',
        source: 'question-1',
        target: 'message-1',
        sourceHandle: 'free-text'  // This is the handle ID we added
      }
    ]
  }
};

// Simulate conversation flow
const conversationMessages = [
  {
    content: 'hi',
    sender: 'user'
  },
  {
    content: 'What is your name?',
    sender: 'bot'
  },
  {
    content: 'John Doe',
    sender: 'user'
  }
];

console.log('Testing connection from free text question to message node...\n');

try {
  const response = flowService.generateFlowResponse(conversationMessages, testFlow);
  
  console.log('Flow service response:', response);
  
  if (response.text === 'Nice to meet you!' && response.type === 'message') {
    console.log('\n✅ SUCCESS: Free text question correctly connected to message node');
    console.log('✅ The issue has been fixed!');
  } else {
    console.log('\n❌ FAILURE: Connection not working as expected');
    console.log('Expected: "Nice to meet you!" message');
  }
} catch (error) {
  console.error('Error testing connection:', error);
}

console.log('\n=== Test Complete ===');