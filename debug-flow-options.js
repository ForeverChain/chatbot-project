const { PrismaClient } = require('./backend/generated/prisma/index.js');
const prisma = new PrismaClient();

async function debugFlowOptions() {
  try {
    console.log('=== DEBUGGING FLOW OPTIONS ===');
    
    // Get the flow
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
      
      if (steps && steps.nodes) {
        // Find the specific question node
        const brandQuestionNode = steps.nodes.find(node => 
          node.id === 'question-1757314795617'
        );
        
        if (brandQuestionNode) {
          console.log('Brand question node:', brandQuestionNode);
          console.log('Options:', brandQuestionNode.data?.options);
        } else {
          console.log('Brand question node not found');
          
          // Show all question nodes
          const questionNodes = steps.nodes.filter(node => node.type === 'question');
          questionNodes.forEach((node, index) => {
            console.log(`Question Node ${index + 1}:`, {
              id: node.id,
              label: node.data?.label,
              options: node.data?.options
            });
          });
        }
      }
    } catch (parseError) {
      console.error('Error parsing steps:', parseError);
    }
  } catch (error) {
    console.error('Error debugging flow options:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugFlowOptions();