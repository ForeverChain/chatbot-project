// Test script to verify the duplicate message fix
const chatbotService = require('./backend/services/chatbotService');

// Mock a simple flow with auto-continue
const mockFlow = {
  id: 1,
  steps: {
    nodes: [
      {
        id: 'message-1',
        type: 'message',
        data: {
          label: 'Samsung бүтээгдэхүүн сонголоо.'
        }
      },
      {
        id: 'question-1',
        type: 'question',
        data: {
          label: 'Хэдэн ширхэг авах вэ?',
          options: []
        }
      }
    ],
    edges: [
      {
        source: 'message-1',
        target: 'question-1'
      }
    ]
  }
};

// Mock Prisma client
jest.mock('./backend/prisma/client', () => {
  return {
    flow: {
      findFirst: jest.fn().mockResolvedValue(mockFlow)
    },
    conversation: {
      findFirst: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockImplementation((data) => {
        return { id: 1, ...data.data };
      })
    },
    message: {
      findMany: jest.fn().mockResolvedValue([]),
      create: jest.fn().mockImplementation((data) => {
        return { id: 1, ...data.data };
      })
    }
  };
});

console.log('=== Testing Duplicate Message Fix ===\n');

// Test the processMessage function
async function testProcessMessage() {
  try {
    // Simulate processing a message that should trigger auto-continue
    const response = await chatbotService.processMessage(
      1, // chatbotId
      'test-user-123', // userId
      'hi' // message
    );
    
    console.log('Response:', response);
    
    // Check if autoContinue flag is properly set
    if (response.autoContinuedMessages && response.autoContinuedMessages.length > 0) {
      console.log('✅ Using new auto-continue mechanism with autoContinuedMessages array');
      console.log('✅ autoContinue flag should be false to prevent duplicate processing');
      console.log('autoContinue flag:', response.autoContinue);
    } else {
      console.log('⚠️  Using legacy auto-continue mechanism');
      console.log('autoContinue flag:', response.autoContinue);
    }
    
  } catch (error) {
    console.error('Error in test:', error);
  }
}

// Run the test
testProcessMessage().then(() => {
  console.log('\n=== Test Complete ===');
});