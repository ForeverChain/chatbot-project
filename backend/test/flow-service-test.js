const flowService = require('../services/flowService');

// Mock flow data with Mongolian options
const mockFlow = {
  id: 1,
  name: 'Test Flow',
  steps: {
    nodes: [
      {
        id: '1',
        type: 'question',
        data: {
          label: 'Сайна байна уу',
          options: [
            { id: 'opt1', text: 'Сонголт 1' },
            { id: 'opt2', text: 'Сонголт 2' }
          ]
        }
      },
      {
        id: '2',
        type: 'message',
        data: {
          label: 'test1'
        }
      },
      {
        id: '3',
        type: 'message',
        data: {
          label: 'test2'
        }
      }
    ],
    edges: [
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        sourceHandle: 'opt1'
      },
      {
        id: 'e1-3',
        source: '1',
        target: '3',
        sourceHandle: 'opt2'
      }
    ]
  }
};

// Mock messages
const mockMessages1 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Сайна байна уу',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Сонголт 1',
    sender: 'user',
    createdAt: new Date()
  }
];

const mockMessages2 = [
  {
    content: 'hi',
    sender: 'user',
    createdAt: new Date()
  },
  {
    content: 'Сайна байна уу',
    sender: 'bot',
    createdAt: new Date()
  },
  {
    content: 'Сонголт 2',
    sender: 'user',
    createdAt: new Date()
  }
];

async function testFlowService() {
  console.log('Testing Flow Service with Mongolian options...');
  
  try {
    // Test with "Сонголт 1"
    console.log('\n--- Test 1: User sends "Сонголт 1" ---');
    const response1 = flowService.generateFlowResponse(mockMessages1, mockFlow);
    console.log('Flow service response:', response1);
    console.log('Expected: test1');
    console.log('Actual:', response1.text);
    console.log('Result:', response1.text === 'test1' ? 'PASS' : 'FAIL');
    
    // Test with "Сонголт 2"
    console.log('\n--- Test 2: User sends "Сонголт 2" ---');
    const response2 = flowService.generateFlowResponse(mockMessages2, mockFlow);
    console.log('Flow service response:', response2);
    console.log('Expected: test2');
    console.log('Actual:', response2.text);
    console.log('Result:', response2.text === 'test2' ? 'PASS' : 'FAIL');
    
  } catch (error) {
    console.error('Error testing flow service:', error);
  }
}

// Run the test
if (require.main === module) {
  testFlowService();
}

module.exports = { testFlowService };