const flowService = require('./backend/services/flowService');

// Mock flow data that matches the user's scenario
const mockFlow = {
  id: 1,
  name: 'Age Question Flow',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'question',
        data: {
          label: 'Та хэдэн настай вэ?'
          // No options = free text question
        }
      },
      {
        id: '2',
        type: 'message',
        data: {
          label: 'Би таны насны талаар мэдээлэл авлаа. Баярлалаа!'
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

// Mock messages - simulating the user interaction
const mockMessages = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Та хэдэн настай вэ?',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Би 25 настай', // Free text response
    sender: 'user',
    createdAt: new Date()
  }
];

async function testFreeTextFlow() {
  console.log('Testing Flow Service with the user scenario...');
  
  try {
    // Test generating flow response for free text input
    const response = flowService.generateFlowResponse(mockMessages, mockFlow);
    
    console.log('Flow service response:', response);
    
    // Check if response contains the expected message after free text input
    if (response.text === 'Би таны насны талаар мэдээлэл авлаа. Баярлалаа!' && 
        response.type === 'message') {
      console.log('✅ Flow service correctly handled the user scenario');
      return true;
    } else {
      console.log('❌ Flow service did not handle the user scenario correctly');
      console.log('Expected text: "Би таны насны талаар мэдээлэл авлаа. Баярлалаа!"');
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
  console.log('=== Flow Service User Scenario Test ===\n');
  
  const success = await testFreeTextFlow();
  
  console.log('\n=== Test Summary ===');
  console.log('Flow service user scenario test:', success ? 'PASSED' : 'FAILED');
  
  if (success) {
    console.log('\n🎉 Test passed! Flow service correctly handles the user scenario with free text questions.');
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

module.exports = { testFreeTextFlow, runTest };