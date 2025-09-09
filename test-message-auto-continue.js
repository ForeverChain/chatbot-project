const flowService = require('./backend/services/flowService');

// Mock flow data that matches the user's scenario
// Message node followed by a question node
const mockFlow = {
  id: 1,
  name: 'Message Auto-Continue Flow',
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

// Mock messages - simulating the scenario where we just sent a message
const mockMessages = [
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

async function testMessageAutoContinue() {
  console.log('Testing Flow Service message auto-continue functionality...');
  
  try {
    // Test generating flow response - should automatically continue to the question
    const response = flowService.generateFlowResponse(mockMessages, mockFlow);
    
    console.log('Flow service response:', response);
    
    // Check if response contains the expected question after message
    if (response.text === 'Хэдэн ширхэг авах вэ?' && 
        response.type === 'question' &&
        response.options && response.options.length === 3) {
      console.log('✅ Flow service correctly auto-continued after message');
      return true;
    } else {
      console.log('❌ Flow service did not auto-continue correctly');
      console.log('Expected text: "Хэдэн ширхэг авах вэ?"');
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
  console.log('=== Flow Service Message Auto-Continue Test ===\n');
  
  const success = await testMessageAutoContinue();
  
  console.log('\n=== Test Summary ===');
  console.log('Flow service message auto-continue test:', success ? 'PASSED' : 'FAILED');
  
  if (success) {
    console.log('\n🎉 Test passed! Flow service correctly auto-continues after message nodes.');
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

module.exports = { testMessageAutoContinue, runTest };