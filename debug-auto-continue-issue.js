const { PrismaClient } = require('./backend/generated/prisma/index.js');
// Import the flow service correctly
const flowService = require('./backend/services/flowService');

async function debugAutoContinue() {
  try {
    console.log('=== DEBUGGING AUTO-CONTINUE ISSUE ===');
    
    // Get the flow
    const prisma = new PrismaClient();
    const flow = await prisma.flow.findFirst({
      where: {
        id: 1
      }
    });
    
    if (!flow) {
      console.log('No flow found');
      return;
    }
    
    // Parse the steps
    let steps;
    try {
      steps = typeof flow.steps === 'string' ? JSON.parse(flow.steps) : flow.steps;
      console.log('Flow parsed successfully');
      
      // Simulate the conversation state where we're at the Samsung message
      const messages = [
        { sender: 'user', content: 'hi' },
        { sender: 'bot', content: 'Сайн уу! Та манай вэбсайтад юу хийхийг хүсч байна?' },
        { sender: 'user', content: 'Бүтээгдэхүүн захиалах' },
        { sender: 'bot', content: 'Бүтээгдэхүүн төрөл сонгоно уу?' },
        { sender: 'user', content: 'Цахилгаан бараа' },
        { sender: 'bot', content: 'Таны сонирхож буй брэндийг сонгоно уу?' },
        { sender: 'user', content: 'Samsung' },
        { sender: 'bot', content: 'Samsung бүтээгдэхүүн сонголоо.' }
      ];
      
      console.log('Simulating flow response with messages:', messages);
      
      // Call the flow service generateFlowResponse method
      const flowWithParsedSteps = {
        ...flow,
        steps: steps
      };
      
      // This should trigger auto-continue logic
      const response = flowService.generateFlowResponse(messages, flowWithParsedSteps);
      console.log('Flow service response:', response);
      
    } catch (parseError) {
      console.error('Error parsing steps:', parseError);
    } finally {
      await prisma.$disconnect();
    }
  } catch (error) {
    console.error('Error debugging auto-continue:', error);
  }
}

debugAutoContinue();