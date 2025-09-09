const { PrismaClient } = require('./backend/generated/prisma/index.js');
const prisma = new PrismaClient();

async function debugFlow() {
  try {
    console.log('=== DEBUGGING FLOW DATA ===');
    
    // Get all flows
    const flows = await prisma.flow.findMany({
      include: {
        chatbot: true
      }
    });
    
    console.log('Total flows found:', flows.length);
    
    for (const flow of flows) {
      console.log('\n--- Flow ---');
      console.log('ID:', flow.id);
      console.log('Name:', flow.name);
      console.log('Chatbot ID:', flow.chatbotId);
      console.log('Chatbot Name:', flow.chatbot?.name);
      
      // Parse the steps
      let steps;
      try {
        steps = typeof flow.steps === 'string' ? JSON.parse(flow.steps) : flow.steps;
        console.log('Steps type:', typeof steps);
        
        if (steps && steps.nodes) {
          console.log('Nodes count:', steps.nodes.length);
          console.log('Edges count:', steps.edges?.length || 0);
          
          // Show node details
          steps.nodes.forEach((node, index) => {
            console.log(`  Node ${index + 1}:`, {
              id: node.id,
              type: node.type,
              label: node.data?.label
            });
          });
          
          // Show edge details
          if (steps.edges) {
            steps.edges.forEach((edge, index) => {
              console.log(`  Edge ${index + 1}:`, {
                id: edge.id,
                source: edge.source,
                target: edge.target,
                sourceHandle: edge.sourceHandle
              });
            });
          }
        } else if (Array.isArray(steps)) {
          console.log('Steps array length:', steps.length);
          steps.forEach((step, index) => {
            console.log(`  Step ${index + 1}:`, step);
          });
        }
      } catch (parseError) {
        console.error('Error parsing steps:', parseError);
        console.log('Raw steps:', flow.steps);
      }
    }
  } catch (error) {
    console.error('Error debugging flow:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugFlow();