class FlowService {
  constructor() {
    this.conversationStates = new Map(); // Track conversation states
  }

  // Initialize conversation state
  initializeConversation(conversationId, flow) {
    this.conversationStates.set(conversationId, {
      flowId: flow.id,
      currentStepIndex: 0,
      currentNodeId: null, // Track current node instead of step index
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
      console.log('Messages:', JSON.stringify(messages, null, 2));
      console.log('Flow:', JSON.stringify(flow, null, 2));
      
      const flowData = typeof flow.steps === 'string' ? JSON.parse(flow.steps) : flow.steps;
      console.log('Flow data:', JSON.stringify(flowData, null, 2));
      
      const { nodes, edges } = flowData;
      const userMessages = messages.filter(msg => msg.sender === 'user');
      
      console.log('User messages count:', userMessages.length);
      
      // If no user messages, return the first node that should be presented
      if (userMessages.length === 0) {
        console.log('No user messages, finding start node');
        
        // First, look for nodes with no incoming edges (true start nodes)
        const startNodes = nodes.filter(node => 
          !edges.some(edge => edge.target === node.id)
        );
        
        console.log('Start nodes (no incoming edges):', startNodes);
        
        // Log details about all nodes and edges for debugging
        console.log('All nodes:', nodes.map(n => ({
          id: n.id,
          type: n.type,
          label: n.data.label
        })));
        
        console.log('All edges:', edges.map(e => ({
          source: e.source,
          target: e.target,
          sourceHandle: e.sourceHandle
        })));
        
        // If we found start nodes, prioritize question nodes, then message nodes
        if (startNodes.length > 0) {
          const startQuestionNode = startNodes.find(node => node.type === 'question');
          const startMessageNode = startNodes.find(node => node.type === 'message');
          const startNode = startQuestionNode || startMessageNode;
          
          if (startNode) {
            console.log('Found start node with no incoming edges:', startNode);
            return {
              text: startNode.data.label,
              type: startNode.type,
              options: startNode.type === 'question' ? startNode.data.options : null
            };
          }
        }
        
        // If no nodes without incoming edges, look for the first question node
        const firstQuestionNode = nodes.find(node => node.type === 'question');
        if (firstQuestionNode) {
          console.log('Found first question node:', firstQuestionNode);
          return {
            text: firstQuestionNode.data.label,
            type: firstQuestionNode.type,
            options: firstQuestionNode.data.options
          };
        }
        
        // Fallback to first message node
        const firstMessageNode = nodes.find(node => node.type === 'message');
        if (firstMessageNode) {
          console.log('Found first message node:', firstMessageNode);
          return {
            text: firstMessageNode.data.label,
            type: firstMessageNode.type,
            options: null
          };
        }
        
        console.log('No suitable start node found, returning default message');
        return {
          text: "Сайн байна уу! Би танд яаж тусалж чадах вэ?",
          type: 'message',
          options: null
        };
      }
      
      // Get the last user message
      const lastUserMessage = userMessages[userMessages.length - 1];
      console.log('Last user message:', lastUserMessage);
      
      // Get the last bot message
      const botMessages = messages.filter(msg => msg.sender === 'bot');
      const lastBotMessage = botMessages[botMessages.length - 1];
      console.log('Last bot message:', lastBotMessage);
      
      // Try to determine which node the last bot message came from
      let lastBotNode = null;
      if (lastBotMessage) {
        // Try to match exactly
        lastBotNode = nodes.find(node => 
          (node.type === 'message' || node.type === 'question') && 
          node.data.label === lastBotMessage.content
        );
        
        // If no exact match, try partial match for questions
        if (!lastBotNode) {
          lastBotNode = nodes.find(node => 
            node.type === 'question' && 
            lastBotMessage.content.includes(node.data.label)
          );
        }
      }
      
      console.log('Last bot node:', lastBotNode);
      
      // If we found the last bot node, determine the next node
      if (lastBotNode) {
        // If the last node was a question, we need to process the user's response
        if (lastBotNode.type === 'question') {
          console.log('Last node was a question, processing user response');
          
          // For a question node, we need to process the user's response
          // Match the user's response to the question options
          // The user response could be either the option text or the option ID (payload)
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
            
            // If not found, try matching with explicit payload
            if (!selectedOption && lastUserMessage.content !== 'hi') {
              selectedOption = lastBotNode.data.options.find(option => 
                option.payload && option.payload === lastUserMessage.content
              );
              console.log('Payload match result:', selectedOption);
            }
            
            // If not found, try partial matching (user response contained in option text)
            if (!selectedOption) {
              selectedOption = lastBotNode.data.options.find(option => 
                option.text.toLowerCase().includes(lastUserMessage.content.toLowerCase()) ||
                lastUserMessage.content.toLowerCase().includes(option.text.toLowerCase())
              );
              console.log('Partial match result:', selectedOption);
            }
            
            // Special handling for Mongolian "Сонголт X" pattern
            if (!selectedOption) {
              // Check if user sent something like "Сонголт 1", "Сонголт 2", etc.
              const songoltMatch = lastUserMessage.content.match(/сонголт\s*(\d+)/i);
              if (songoltMatch) {
                const optionNumber = parseInt(songoltMatch[1]);
                // Try to find an option that contains this number
                selectedOption = lastBotNode.data.options.find((option, index) => {
                  // Match by index (first option is option 1, second is option 2, etc.)
                  return (index + 1) === optionNumber;
                });
                console.log('Mongolian "Сонголт X" pattern match result:', selectedOption);
              }
            }
            
            // Additional matching for direct number input (user sends just "1", "2", etc.)
            if (!selectedOption) {
              const numberMatch = lastUserMessage.content.match(/^(\d+)$/);
              if (numberMatch) {
                const optionNumber = parseInt(numberMatch[1]);
                // Try to find an option by index (1-based)
                if (optionNumber >= 1 && optionNumber <= lastBotNode.data.options.length) {
                  selectedOption = lastBotNode.data.options[optionNumber - 1];
                  console.log('Direct number input match result:', selectedOption);
                }
              }
            }
          }
          
          console.log('Final selected option:', selectedOption);
          
          // Find outgoing edges from the question node
          const outgoingEdges = edges.filter(edge => edge.source === lastBotNode.id);
          console.log('Outgoing edges from question:', outgoingEdges);
          
          // If we found a matching option, follow the edge with the matching sourceHandle
          let targetEdge = null;
          if (selectedOption) {
            targetEdge = outgoingEdges.find(edge => edge.sourceHandle === selectedOption.id);
            console.log('Target edge for selected option:', targetEdge);
            
            // If we couldn't find an edge with the exact option ID, try with the option text
            if (!targetEdge) {
              targetEdge = outgoingEdges.find(edge => 
                edge.sourceHandle && 
                selectedOption.text && 
                edge.sourceHandle.includes(selectedOption.text)
              );
              console.log('Target edge for option text match:', targetEdge);
            }
            
            // If we still couldn't find an edge, try with the option index
            if (!targetEdge) {
              const optionIndex = lastBotNode.data.options.findIndex(opt => opt.id === selectedOption.id);
              if (optionIndex !== -1) {
                // Try to find an edge where the sourceHandle contains the option index
                targetEdge = outgoingEdges.find(edge => 
                  edge.sourceHandle && 
                  edge.sourceHandle.includes((optionIndex + 1).toString())
                );
                console.log('Target edge for option index match:', targetEdge);
              }
            }
          }
          
          // Instead of falling back to first edge, provide a better response when no option matches
          if (!targetEdge) {
            if (selectedOption) {
              console.log('Warning: Found selected option but no matching edge. This might indicate a flow configuration issue.');
            } else {
              console.log('Warning: Could not match user response to any option. User response:', lastUserMessage.content);
            }
            
            // Return a response asking the user to select a valid option
            const validOptions = lastBotNode.data.options.map(option => option.text).join(', ');
            return {
              text: `Уучлаарай, би таны хариултыг ойлгосонгүй. Дараах сонголтуудаас нэгийг сонгоно уу: ${validOptions}`,
              type: 'question',
              options: lastBotNode.data.options
            };
          }
          
          console.log('Final target edge:', targetEdge);
          
          if (targetEdge) {
            const targetNodeId = targetEdge.target;
            const targetNode = nodes.find(node => node.id === targetNodeId);
            console.log('Target node:', targetNode);
            
            if (targetNode) {
              switch (targetNode.type) {
                case 'question':
                  return {
                    text: targetNode.data.label,
                    type: targetNode.type,
                    options: targetNode.data.options
                  };
                case 'message':
                  return {
                    text: targetNode.data.label,
                    type: targetNode.type,
                    options: null
                  };
                case 'condition':
                  return {
                    text: "Нөхцөл шалгаж байна...",
                    type: targetNode.type,
                    options: null
                  };
                case 'final':
                  return {
                    text: targetNode.data.label,
                    type: targetNode.type,
                    options: null
                  };
                default:
                  return {
                    text: targetNode.data.label || "Хариулт...",
                    type: targetNode.type,
                    options: null
                  };
              }
            }
          }
          
          // If we couldn't find a target node, provide a better fallback response
          console.log('Warning: Could not find target node for edge');
          return {
            text: "Уучлаарай, алдаа гарлаа. Хариулт өгөхөд асуудал гарлаа.",
            type: 'message',
            options: null
          };
        } else {
          // Last node was a message, find the next node
          console.log('Last node was a message, finding next node');
          
          // Find outgoing edges from the message node
          const outgoingEdges = edges.filter(edge => edge.source === lastBotNode.id);
          console.log('Outgoing edges from message:', outgoingEdges);
          
          if (outgoingEdges.length > 0) {
            // Follow the first edge (messages typically have only one outgoing edge)
            const targetEdge = outgoingEdges[0];
            const targetNodeId = targetEdge.target;
            const targetNode = nodes.find(node => node.id === targetNodeId);
            console.log('Target node:', targetNode);
            
            if (targetNode) {
              // Check if target node is a question
              if (targetNode.type === 'question') {
                return {
                  text: targetNode.data.label,
                  type: targetNode.type,
                  options: targetNode.data.options
                };
              } else if (targetNode.type === 'message') {
                return {
                  text: targetNode.data.label,
                  type: targetNode.type,
                  options: null
                };
              } else if (targetNode.type === 'condition') {
                return {
                  text: "Нөхцөл шалгаж байна...",
                  type: targetNode.type,
                  options: null
                };
              } else if (targetNode.type === 'final') {
                return {
                  text: targetNode.data.label,
                  type: targetNode.type,
                  options: null
                };
              } else {
                return {
                  text: targetNode.data.label || "Хариулт...",
                  type: targetNode.type,
                  options: null
                };
              }
            }
          }
          
          // If we couldn't find a target node, provide a better fallback response
          console.log('Warning: Could not find target node for message');
          return {
            text: "Би таны асуултанд хариулахыг оролдож байна. Та өөрийн асуултаа дэлгэрэнгүй тайлбарлаж чадах уу?",
            type: 'message',
            options: null
          };
        }
      }
      
      // If we couldn't determine the flow path, try to find a reasonable next node
      console.log('Could not determine flow path, finding reasonable next node');
      
      // Look for any question node that hasn't been used yet
      const unusedQuestionNodes = nodes.filter(node => 
        node.type === 'question' && 
        !botMessages.some(msg => msg.content === node.data.label)
      );
      
      if (unusedQuestionNodes.length > 0) {
        console.log('Found unused question node:', unusedQuestionNodes[0]);
        return {
          text: unusedQuestionNodes[0].data.label,
          type: unusedQuestionNodes[0].type,
          options: unusedQuestionNodes[0].data.options
        };
      }
      
      // Look for any message node that hasn't been used yet
      const unusedMessageNodes = nodes.filter(node => 
        node.type === 'message' && 
        !botMessages.some(msg => msg.content === node.data.label)
      );
      
      if (unusedMessageNodes.length > 0) {
        console.log('Found unused message node:', unusedMessageNodes[0]);
        return {
          text: unusedMessageNodes[0].data.label,
          type: unusedMessageNodes[0].type,
          options: null
        };
      }
      
      // If no unused nodes, look for a final node
      const finalNode = nodes.find(node => node.type === 'final');
      if (finalNode) {
        console.log('Found final node:', finalNode);
        return {
          text: finalNode.data.label,
          type: finalNode.type,
          options: null
        };
      }
      
      // Default response
      return {
        text: "Би таны асуултанд хариулахыг оролдож байна. Та өөрийн асуултаа дэлгэрэнгүй тайлбарлаж чадах уу?",
        type: 'message',
        options: null
      };
    } catch (error) {
      console.error('Error generating flow response:', error);
      return {
        text: "Уучлаарай, алдаа гарлаа. Хариулт өгөхөд асуудал гарлаа.",
        type: 'message',
        options: null
      };
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

  // Debug function to analyze flow structure
  debugFlowStructure(flow) {
    try {
      console.log('=== DEBUGGING FLOW STRUCTURE ===');
      console.log('Flow ID:', flow.id);
      console.log('Flow Name:', flow.name);
      
      const flowData = typeof flow.steps === 'string' ? JSON.parse(flow.steps) : flow.steps;
      const { nodes, edges } = flowData;
      
      console.log('Total nodes:', nodes.length);
      console.log('Total edges:', edges.length);
      
      // Categorize nodes by type
      const questionNodes = nodes.filter(node => node.type === 'question');
      const messageNodes = nodes.filter(node => node.type === 'message');
      const conditionNodes = nodes.filter(node => node.type === 'condition');
      const finalNodes = nodes.filter(node => node.type === 'final');
      
      console.log('Question nodes:', questionNodes.length);
      console.log('Message nodes:', messageNodes.length);
      console.log('Condition nodes:', conditionNodes.length);
      console.log('Final nodes:', finalNodes.length);
      
      // Show details of question nodes
      questionNodes.forEach((node, index) => {
        console.log(`Question Node ${index + 1}:`, {
          id: node.id,
          label: node.data.label,
          options: node.data.options
        });
      });
      
      // Find start nodes (nodes with no incoming edges)
      const startNodes = nodes.filter(node => 
        !edges.some(edge => edge.target === node.id)
      );
      
      console.log('Start nodes (no incoming edges):', startNodes.map(node => ({
        id: node.id,
        type: node.type,
        label: node.data.label
      })));
      
      // Show edge connections
      console.log('Edge connections:');
      edges.forEach((edge, index) => {
        console.log(`Edge ${index + 1}:`, {
          source: edge.source,
          sourceHandle: edge.sourceHandle,
          target: edge.target,
          targetHandle: edge.targetHandle
        });
      });
      
      return {
        totalNodes: nodes.length,
        totalEdges: edges.length,
        questionNodes: questionNodes.length,
        messageNodes: messageNodes.length,
        startNodes: startNodes.length,
        questionNodeDetails: questionNodes.map(node => ({
          id: node.id,
          label: node.data.label,
          options: node.data.options
        }))
      };
    } catch (error) {
      console.error('Error debugging flow structure:', error);
      return null;
    }
  }
}

module.exports = new FlowService();