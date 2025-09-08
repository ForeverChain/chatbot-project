const flowService = require('../services/flowService');

// Mock flow data with a question node
const mockFlow = {
  id: 1,
  name: 'Test Flow',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'question',
        data: {
          label: 'What is your favorite programming language?',
          options: [
            { id: 'opt1', text: 'JavaScript' },
            { id: 'opt2', text: 'Python' },
            { id: 'opt3', text: 'Java' }
          ]
        }
      },
      {
        id: '2',
        type: 'message',
        data: {
          label: 'Great choice! Tell me more about why you like that language.'
        }
      }
    ],
    edges: [
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        sourceHandle: 'opt1'
      }
    ]
  }
};

// Mock messages
const mockMessages = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  }
];

async function testFlowService() {
  console.log('Testing Flow Service question node detection...');
  
  try {
    // Test generating flow response for initial message
    const response = flowService.generateFlowResponse(mockMessages, mockFlow);
    
    console.log('Flow service response:', response);
    
    // Check if response contains the expected question text and options
    if (response.text === 'What is your favorite programming language?' && 
        response.type === 'question' && 
        response.options && response.options.length === 3) {
      console.log('✅ Flow service correctly identified question node with options');
      return true;
    } else {
      console.log('❌ Flow service did not return expected question node response');
      console.log('Expected text: "What is your favorite programming language?"');
      console.log('Expected type: "question"');
      console.log('Expected options: 3 options');
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
  console.log('=== Flow Service Question Node Test ===\n');
  
  const success = await testFlowService();
  
  console.log('\n=== Test Summary ===');
  console.log('Flow service question node test:', success ? 'PASSED' : 'FAILED');
  
  if (success) {
    console.log('\n🎉 Test passed! Flow service correctly identifies question nodes with options.');
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

module.exports = { testFlowService, runTest };