const flowService = require('./backend/services/flowService');

// Mock flow data with a free text question (no options)
const mockFlow = {
  id: 1,
  name: 'Test Flow with Free Text Question',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'question',
        data: {
          label: 'Please tell me your name:'
          // No options = free text question
        }
      },
      {
        id: '2',
        type: 'message',
        data: {
          label: 'Nice to meet you! What can I help you with today?'
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

// Mock messages - user responds with free text
const mockMessages = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Please tell me your name:',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'John Doe', // Free text response
    sender: 'user',
    createdAt: new Date()
  }
];

async function testFreeTextQuestion() {
  console.log('Testing Flow Service free text question handling...');
  
  try {
    // Test generating flow response for free text input
    const response = flowService.generateFlowResponse(mockMessages, mockFlow);
    
    console.log('Flow service response:', response);
    
    // Check if response contains the expected message after free text input
    if (response.text === 'Nice to meet you! What can I help you with today?' && 
        response.type === 'message') {
      console.log('✅ Flow service correctly handled free text question');
      return true;
    } else {
      console.log('❌ Flow service did not handle free text question correctly');
      console.log('Expected text: "Nice to meet you! What can I help you with today?"');
      console.log('Expected type: "message"');
      console.log('Actual response:', response);
      return false;
    }
  } catch (error) {
    console.error('Error testing flow service:', error);
    return false;
  }
}

// Run test
async function runTest() {
  console.log('=== Flow Service Free Text Question Test ===\n');
  
  const success = await testFreeTextQuestion();
  
  console.log('\n=== Test Summary ===');
  console.log('Flow service free text question test:', success ? 'PASSED' : 'FAILED');
  
  if (success) {
    console.log('\n🎉 Test passed! Flow service correctly handles free text questions.');
  } else {
    console.log('\n❌ Test failed. Please check the flow service implementation.');
  }
}

// Execute test if this file is run directly
if (require.main === module) {
  runTest().catch(error => {
    console.error('Test execution error:', error);
  });
}

module.exports = { testFreeTextQuestion, runTest };