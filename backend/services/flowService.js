class FlowService {
  constructor() {
    this.conversationStates = new Map(); // Track conversation states
  }

  // Initialize conversation state
  initializeConversation(conversationId, flow) {
    this.conversationStates.set(conversationId, {
      flowId: flow.id,
      currentStepIndex: 0,
      variables: {}, // Store conversation variables
      history: [] // Track user responses
    });
  }

  // Get current conversation state
  getConversationState(conversationId) {
    return this.conversationStates.get(conversationId);
  }

  // Update conversation state
  updateConversationState(conversationId, updates) {
    const currentState = this.conversationStates.get(conversationId);
    if (currentState) {
      this.conversationStates.set(conversationId, { ...currentState, ...updates });
    }
  }

  // Convert React Flow data to steps
  convertFlowToSteps(flowData) {
    const { nodes, edges } = flowData;
    const steps = [];
    
    // Convert nodes to steps
    nodes.forEach(node => {
      switch (node.type) {
        case 'message':
          steps.push({
            id: node.id,
            type: 'message',
            content: node.data.label
          });
          break;
        case 'question':
          steps.push({
            id: node.id,
            type: 'question',
            content: node.data.label,
            options: node.data.options
          });
          break;
        case 'condition':
          steps.push({
            id: node.id,
            type: 'condition',
            content: node.data.label,
            expression: node.data.expression
          });
          break;
        case 'final':
          steps.push({
            id: node.id,
            type: 'final',
            content: node.data.label
          });
          break;
      }
    });
    
    // Add connections as transitions
    edges.forEach(edge => {
      const sourceStep = steps.find(step => step.id === edge.source);
      if (sourceStep) {
        if (!sourceStep.transitions) {
          sourceStep.transitions = [];
        }
        sourceStep.transitions.push({
          targetId: edge.target,
          sourceHandle: edge.sourceHandle
        });
      }
    });
    
    return steps;
  }

  // Generate response based on flow
  generateFlowResponse(messages, flow) {
    try {
      console.log('=== GENERATING FLOW RESPONSE ===');
      console.log('Messages:', messages);
      console.log('Flow:', flow);
      
      const flowData = typeof flow.steps === 'string' ? JSON.parse(flow.steps) : flow.steps;
      console.log('Flow data:', flowData);
      
      const steps = Array.isArray(flowData) ? flowData : this.convertFlowToSteps(flowData);
      console.log('Steps:', steps);
      
      const userMessages = messages.filter(msg => msg.sender === 'user');
      console.log('User messages:', userMessages);
      
      // If no user messages, return the first message step
      if (userMessages.length === 0) {
        const firstMessageStep = steps.find(step => step.type === 'message');
        const response = firstMessageStep ? firstMessageStep.content : "Сайн байна уу! Би танд яаж тусалж чадах вэ?";
        console.log('No user messages, returning first message step:', response);
        return response;
      }
      
      // Get the last user message
      const lastUserMessage = userMessages[userMessages.length - 1];
      console.log('Last user message:', lastUserMessage);
      
      // For simplicity, we'll just find the next message step
      // In a real implementation, you would have more sophisticated logic
      const nextMessageStep = steps.find(step => 
        step.type === 'message' && 
        step.content && 
        !messages.some(msg => msg.content === step.content)
      );
      
      console.log('Next message step:', nextMessageStep);
      
      if (nextMessageStep) {
        console.log('Returning next message step content:', nextMessageStep.content);
        return nextMessageStep.content;
      }
      
      // If no next message step found, return a default response
      const defaultResponse = "Би таны асуултанд хариулахыг оролдож байна. Та өөрийн асуултаа дэлгэрэнгүй тайлбарлаж чадах уу?";
      console.log('No next message step found, returning default:', defaultResponse);
      return defaultResponse;
    } catch (error) {
      console.error('Error generating flow response:', error);
      const errorMessage = "Уучлаарай, алдаа гарлаа. Хариулт өгөхөд асуудал гарлаа.";
      console.log('Returning error message:', errorMessage);
      return errorMessage;
    }
  }

  // Process user response in the context of a flow
  processUserResponse(conversationId, userMessage, flow) {
    try {
      const flowData = typeof flow.steps === 'string' ? JSON.parse(flow.steps) : flow.steps;
      const steps = Array.isArray(flowData) ? flowData : this.convertFlowToSteps(flowData);
      const state = this.getConversationState(conversationId) || {
        currentStepIndex: 0,
        variables: {},
        history: []
      };
      
      // Update conversation history
      state.history.push({
        stepIndex: state.currentStepIndex,
        message: userMessage.content
      });
      
      // Update state
      this.updateConversationState(conversationId, state);
      
      // Find the next appropriate step
      const nextStep = this.getNextStep(steps, state.currentStepIndex, userMessage.content);
      
      if (nextStep) {
        state.currentStepIndex = steps.indexOf(nextStep);
        this.updateConversationState(conversationId, state);
        return nextStep.content;
      }
      
      // Default response if no next step found
      return "Би таны хариултыг хүлээн авлаа. Бид үргэлжлүүлж болох уу?";
    } catch (error) {
      console.error('Error processing user response:', error);
      return "Уучлаарай, алдаа гарлаа. Хариултыг боловсруулахэд асуудал гарлаа.";
    }
  }

  // Get the next step based on user response
  getNextStep(steps, currentStepIndex, userResponse) {
    // For now, just return the next step in sequence
    // In a real implementation, you would analyze the user response
    // and determine the appropriate next step based on conditions
    
    const nextStepIndex = currentStepIndex + 1;
    if (nextStepIndex < steps.length) {
      return steps[nextStepIndex];
    }
    
    // If we've reached the end, look for a final step
    const finalStep = steps.find(step => step.type === 'final');
    return finalStep || null;
  }

  // Reset conversation state
  resetConversationState(conversationId) {
    this.conversationStates.delete(conversationId);
  }
}

module.exports = new FlowService();