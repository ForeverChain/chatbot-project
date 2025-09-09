const { PrismaClient } = require('./backend/generated/prisma/index.js');
const prisma = new PrismaClient();

// Simulate the option matching logic
function debugOptionMatching() {
  try {
    console.log('=== DEBUGGING OPTION MATCHING ===');
    
    // Simulate the data from the database
    const lastBotNode = {
      id: 'question-1757314795617',
      type: 'question',
      data: {
        label: 'Таны сонирхож буй брэндийг сонгоно уу?',
        options: [
          { id: 'opt1', text: 'Samsung' },
          { id: 'opt2', text: 'LG' }
        ]
      }
    };
    
    const lastUserMessage = {
      content: 'Samsung'
    };
    
    console.log('Last bot node:', lastBotNode);
    console.log('Last user message:', lastUserMessage);
    
    // Simulate the option matching logic from flowService.js
    let selectedOption = null;
    if (lastBotNode.data.options) {
      console.log('Trying to match user response:', lastUserMessage.content);
      console.log('Available options:', lastBotNode.data.options);
      
      // First try exact match with option text
      selectedOption = lastBotNode.data.options.find(option => 
        option.text === lastUserMessage.content
      );
      console.log('Exact text match result:', selectedOption);
      
      // If not found, try case-insensitive match
      if (!selectedOption) {
        selectedOption = lastBotNode.data.options.find(option => 
          option.text.toLowerCase() === lastUserMessage.content.toLowerCase()
        );
        console.log('Case-insensitive text match result:', selectedOption);
      }
      
      // If not found, try matching with option ID
      if (!selectedOption) {
        selectedOption = lastBotNode.data.options.find(option => 
          option.id === lastUserMessage.content
        );
        console.log('ID match result:', selectedOption);
      }
    }
    
    console.log('Final selected option:', selectedOption);
    
    if (selectedOption) {
      // Simulate edge matching
      const edges = [
        {
          id: 'reactflow__edge-question-1757314795617opt1-message-1757317336859',
          source: 'question-1757314795617',
          target: 'message-1757317336859',
          sourceHandle: 'opt1'
        }
      ];
      
      const outgoingEdges = edges.filter(edge => edge.source === lastBotNode.id);
      console.log('Outgoing edges:', outgoingEdges);
      
      let targetEdge = null;
      if (selectedOption) {
        targetEdge = outgoingEdges.find(edge => edge.sourceHandle === selectedOption.id);
        console.log('Target edge for selected option:', targetEdge);
      }
      
      if (targetEdge) {
        console.log('SUCCESS: Found target edge!');
        console.log('Should continue to node:', targetEdge.target);
      } else {
        console.log('ERROR: Could not find target edge');
      }
    }
  } catch (error) {
    console.error('Error in option matching:', error);
  }
}

debugOptionMatching();