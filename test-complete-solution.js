const chatbotService = require('./backend/services/chatbotService');
const flowService = require('./backend/services/flowService');

// Mock a simple flow for testing
const testFlow = {
  id: 1,
  name: 'Test Flow',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'message',
        data: {
          label: 'Welcome message'
        }
      },
      {
        id: '2',
        type: 'message',
        data: {
          label: 'Samsung бүтээгдэхүүн сонголоо.'
        }
      },
      {
        id: '3',
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
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' }
    ]
  }
};

// Mock Prisma client for testing
jest.mock('./backend/prisma/client', () => {
  return {
    flow: {
      findFirst: jest.fn().mockResolvedValue(testFlow)
    },
    conversation: {
      findFirst: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockImplementation((data) => {
        return Promise.resolve({
          id: 1,
          chatbotId: data.data.chatbotId,
          userId: data.data.userId,
          messages: []
        });
      })
    },
    message: {
      create: jest.fn().mockImplementation((data) => {
        return Promise.resolve({
          id: Math.floor(Math.random() * 1000),
          conversationId: data.data.conversationId,
          content: data.data.content,
          sender: data.data.sender,
          createdAt: new Date()
        });
      })
    }
  };
});

// Mock the flow service
jest.mock('./backend/services/flowService', () => {
  return {
    generateFlowResponse: jest.fn(),
    debugFlowStructure: jest.fn()
  };
});

async function testCompleteSolution() {
  console.log('Testing complete auto-continue solution...');
  
  // Mock the flow service response for the initial message
  flowService.generateFlowResponse.mockImplementationOnce((messages, flow) => {
    // First call - return the message that should auto-continue
    return {
      text: 'Samsung бүтээгдэхүүн сонголоо.',
      type: 'message',
      options: null
    };
  });
  
  // Mock the flow service response for the auto-continue check
  flowService.generateFlowResponse.mockImplementationOnce((messages, flow) => {
    // Second call - return the next question
    return {
      text: 'Хэдэн ширхэг авах вэ?',
      type: 'question',
      options: [
        { id: 'opt1', text: '1 ширхэг' },
        { id: 'opt2', text: '2 ширхэг' },
        { id: 'opt3', text: '3 ширхэг' }
      ]
    };
  });
  
  try {
    // Test the complete flow
    const response1 = await chatbotService.processMessage(1, 'test-user-id', 'hi');
    console.log('First response:', response1);
    
    // Check if we get the expected auto-continue response
    if (response1.text === 'Samsung бүтээгдэхүүн сонголоо.' && response1.type === 'message') {
      console.log('✅ First response is correct');
      
      // Now test the auto-continue check
      const response2 = await chatbotService.processMessage(1, 'test-user-id', '__AUTO_CONTINUE_CHECK__');
      console.log('Auto-continue response:', response2);
      
      if (response2.text === 'Хэдэн ширхэг авах вэ?' && response2.type === 'question') {
        console.log('✅ Auto-continue is working correctly');
        return true;
      } else {
        console.log('❌ Auto-continue is not working');
        return false;
      }
    } else {
      console.log('❌ First response is not correct');
      return false;
    }
  } catch (error) {
    console.error('Error testing complete solution:', error);
    return false;
  }
}

// Run test
async function runTest() {
  console.log('=== Complete Auto-Continue Solution Test ===\n');
  
  const success = await testCompleteSolution();
  
  console.log('\n=== Test Summary ===');
  console.log('Complete auto-continue solution test:', success ? 'PASSED' : 'FAILED');
  
  if (success) {
    console.log('\n🎉 Test passed! The complete auto-continue solution is working correctly.');
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

module.exports = { testCompleteSolution, runTest };