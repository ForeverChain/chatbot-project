const flowService = require('./backend/services/flowService');

// Test the specific scenario from the user
// Message node followed by a question node
const userFlow = {
  id: 1,
  name: 'User Flow',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'message',
        data: {
          label: 'Samsung бүтээгдэхүүн сонголоо.'
        }
      },
      {
        id: '2',
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
      {
        id: 'e1-2',
        source: '1',
        target: '2'
      }
    ]
  }
};

// Simulate the scenario where we just sent the message
const messagesAfterSendingMessage = [
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

async function testAutoContinueFix() {
  console.log('Testing auto-continue fix...');
  
  try {
    // Test generating flow response - should automatically continue to the question
    const response = flowService.generateFlowResponse(messagesAfterSendingMessage, userFlow);
    
    console.log('Flow service response:', response);
    
    // Check if response contains the expected question after message
    if (response.text === 'Хэдэн ширхэг авах вэ?' && 
        response.type === 'question' &&
        response.options && response.options.length === 3) {
      console.log('✅ Auto-continue fix is working correctly');
      return true;
    } else {
      console.log('❌ Auto-continue fix is not working');
      console.log('Expected text: "Хэдэн ширхэг авах вэ?"');
      console.log('Expected type: "question"');
      console.log('Expected options: 3 options');
      console.log('Actual response:', response);
      return false;
    }
  } catch (error) {
    console.error('Error testing auto-continue fix:', error);
    return false;
  }
}

// Run test
async function runTest() {
  console.log('=== Auto-Continue Fix Test ===\n');
  
  const success = await testAutoContinueFix();
  
  console.log('\n=== Test Summary ===');
  console.log('Auto-continue fix test:', success ? 'PASSED' : 'FAILED');
  
  if (success) {
    console.log('\n🎉 Test passed! Auto-continue fix is working correctly.');
  } else {
    console.log('\n❌ Test failed. Please check the implementation.');
  }
}

// Execute test if this file is run directly
if (require.main === module) {
  runTest().catch(error => {
    console.error('Test execution error:', error);
  });
}

module.exports = { testAutoContinueFix, runTest };