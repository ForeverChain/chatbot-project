class FlowService {
  // Generate flow response based on current conversation state in database
  generateFlowResponse(flow, currentNode, lastBotMessage) {
    // Parse flow steps if they're stored as string
    let nodes = [], edges = [];
    try {
      const flowData = typeof flow.steps === 'string' ? JSON.parse(flow.steps) : flow.steps;
      nodes = flowData?.nodes || [];
      edges = flowData?.edges || [];
    } catch (err) {
      console.error('Error parsing flow steps:', err);
      return { text: 'Error processing flow.', type: 'error', options: null };
    }

    // If no current node provided, start from first node
    if (!currentNode) {
      currentNode = nodes[0];
    }

    if (!currentNode) {
      return { text: 'End of flow.', type: 'end', options: null };
    }

    let response = null;
    console.log("Processing node:", currentNode);

    // Helper function to get node by ID
    const getNodeById = (nodeId) => {
      return nodes.find(n => n.id === nodeId) || null;
    };

    switch (currentNode.type) {
      case 'message':
        response = { 
          text: currentNode.data.label, 
          type: 'message', 
          options: null,
          nodeId: currentNode.id
        };
        
        // Check if this message node should auto-continue
        const outgoingEdges = edges.filter(e => e.source === currentNode.id);
        console.log(`Node ${currentNode.id} has ${outgoingEdges.length} outgoing edges`);
        
        // Auto-continue if there's exactly one outgoing edge
        if (outgoingEdges.length === 1) {
          const nextNodeId = outgoingEdges[0].target;
          const nextNode = getNodeById(nextNodeId);
          if (nextNode) {
            console.log('Auto-continuing to next node:', nextNode.id);
            response.autoContinue = true;
            response.nextNode = nextNode;
          } else {
            response.autoContinue = false;
          }
        } else {
          response.autoContinue = false;
        }
        break;

      case 'question':
        response = { 
          text: currentNode.data.label, 
          type: 'question', 
          options: currentNode.data.options || [],
          nodeId: currentNode.id
        };
        response.autoContinue = false;
        break;

      case 'final':
        response = { 
          text: currentNode.data.label, 
          type: 'final', 
          options: null,
          nodeId: currentNode.id
        };
        response.autoContinue = false;
        break;

      default:
        response = { 
          text: 'End of flow.', 
          type: 'end', 
          options: null,
          nodeId: currentNode.id
        };
        response.autoContinue = false;
        break;
    }

    return response;
  }

  // Get next node based on user input and current node
  getNextNode(flow, currentNodeId, userInput = null) {
    // Parse flow steps if they're stored as string
    let nodes = [], edges = [];
    try {
      const flowData = typeof flow.steps === 'string' ? JSON.parse(flow.steps) : flow.steps;
      nodes = flowData?.nodes || [];
      edges = flowData?.edges || [];
    } catch (err) {
      console.error('Error parsing flow steps:', err);
      return null;
    }

    const currentNode = nodes.find(n => n.id === currentNodeId);
    if (!currentNode) {
      console.log('Current node not found');
      return null;
    }

    const outgoingEdges = edges.filter(e => e.source === currentNode.id);
    console.log(`Outgoing edges from ${currentNode.id}:`, outgoingEdges);

    // If node has options and we have input, match user's choice
    if (userInput && currentNode.data?.options?.length) {
      const normalizedInput = String(userInput).toLowerCase().trim();
      console.log(`Matching input: ${normalizedInput} against options`);

      // Try multiple matching strategies
      for (const option of currentNode.data.options) {
        const optionText = String(option.text).toLowerCase().trim();
        console.log(`Checking option: ${optionText}`);
        
        // Exact match
        if (optionText === normalizedInput) {
          console.log(`Exact match found: ${optionText}`);
          const edge = outgoingEdges.find(e => e.sourceHandle === option.id);
          if (edge) {
            console.log(`Found edge with sourceHandle ${option.id}, target: ${edge.target}`);
            return nodes.find(n => n.id === edge.target) || null;
          }
        }
        
        // Partial match (user input contained in option)
        if (optionText.includes(normalizedInput)) {
          console.log(`Partial match (option contains input): ${optionText}`);
          const edge = outgoingEdges.find(e => e.sourceHandle === option.id);
          if (edge) {
            console.log(`Found edge with sourceHandle ${option.id}, target: ${edge.target}`);
            return nodes.find(n => n.id === edge.target) || null;
          }
        }
        
        // Partial match (input contained in option)
        if (normalizedInput.includes(optionText)) {
          console.log(`Partial match (input contains option): ${optionText}`);
          const edge = outgoingEdges.find(e => e.sourceHandle === option.id);
          if (edge) {
            console.log(`Found edge with sourceHandle ${option.id}, target: ${edge.target}`);
            return nodes.find(n => n.id === edge.target) || null;
          }
        }
      }
      
      // Try matching by option ID directly
      const idMatch = outgoingEdges.find(e => e.sourceHandle === userInput);
      if (idMatch) {
        console.log(`ID match found: ${userInput}`);
        return nodes.find(n => n.id === idMatch.target) || null;
      }
    }

    // For questions without options (free-text questions) or when no option matches,
    // take the first outgoing edge as default if there's exactly one outgoing edge
    if (outgoingEdges.length === 1) {
      const firstEdge = outgoingEdges[0];
      console.log(`Taking default first edge: ${firstEdge?.sourceHandle}`);
      return firstEdge ? nodes.find(n => n.id === firstEdge.target) || null : null;
    }

    // If there are multiple edges or no edges, return null (wait for user input)
    // Exception: For questions without options, we should still continue with the first edge
    if (currentNode.type === 'question' && (!currentNode.data?.options || currentNode.data.options.length === 0) && outgoingEdges.length > 0) {
      const firstEdge = outgoingEdges[0];
      console.log(`Taking default first edge for free-text question: ${firstEdge?.sourceHandle}`);
      return firstEdge ? nodes.find(n => n.id === firstEdge.target) || null : null;
    }

    console.log(`No default edge taken - ${outgoingEdges.length} edges found`);
    return null;
  }
}

module.exports = new FlowService();