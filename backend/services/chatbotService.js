const prisma = require('../prisma/client');
const flowService = require('./flowService');

class ChatbotService {
  async processMessage(chatbotId, userId, message, context = {}) {
    try {
      console.log('=== PROCESSING MESSAGE ===');
      console.log('Chatbot ID:', chatbotId);
      console.log('User ID:', userId);
      console.log('Message:', message);

      const isAutoContinue = message === '__AUTO_CONTINUE__';

      if (!chatbotId) throw new Error('Chatbot ID is required');
      if (!userId) throw new Error('User ID (PSID) is required');

      // Load the flow
      const flow = await prisma.flow.findFirst({
        where: { chatbotId: parseInt(chatbotId) }
      });
      if (!flow) {
        return {
          text: `Hello! I'm chatbot ${chatbotId}. Please check back later!`,
          type: 'message',
          options: null
        };
      }

      // Parse flow steps
      let nodes = [], edges = [];
      try {
        const parsed = typeof flow.steps === 'string' ? JSON.parse(flow.steps) : flow.steps;
        nodes = parsed?.nodes || [];
        edges = parsed?.edges || [];
      } catch (err) {
        console.error('Error parsing flow steps:', err);
      }

      if (!nodes.length) {
        return { text: "Flow is empty. Please check the flow configuration.", type: 'message', options: null };
      }

      // For web conversations, use the conversationId as the lookup key
      // For Facebook/other platforms, use the PSID directly
      const isWebConversation = userId.startsWith('web_');
      const conversationLookupId = isWebConversation ? userId : String(userId);

      // Get or create conversation
      let conversation = await prisma.conversation.findFirst({
        where: { chatbotId: parseInt(chatbotId), userId: conversationLookupId }
      });

      console.log('Found conversation:', conversation);

      if (!conversation) {
        console.log('Creating new conversation for chatbot:', chatbotId, 'user:', conversationLookupId);
        conversation = await prisma.conversation.create({
          data: { chatbotId: parseInt(chatbotId), userId: conversationLookupId }
        });
        console.log('Created conversation:', conversation);
      }

      // Fetch messages for this conversation
      const messages = await prisma.message.findMany({
        where: { conversationId: conversation.id },
        orderBy: { createdAt: 'asc' }
      });
      
      console.log('Conversation messages:', messages);

      // Helper function to get node by ID
      const getNodeById = (nodeId) => {
        const node = nodes.find(n => n.id === nodeId) || null;
        console.log(`getNodeById(${nodeId}) =>`, node ? node.id : 'null');
        return node;
      };

      // Get next node based on user input and current node
      const getNextNode = (currentNodeId, input = null) => {
        return flowService.getNextNode(flow, currentNodeId, input);
      };

      // Determine next node based on conversation history
      let currentNode;
      
      // Get the last bot message to determine where we are in the flow
      const lastBotMessages = messages.filter(m => m.sender === 'bot');
      const lastBotMessage = lastBotMessages.length > 0 ? lastBotMessages[lastBotMessages.length - 1] : null;
      
      console.log('Last bot message:', lastBotMessage);

      if (!lastBotMessage || isAutoContinue) {
        // First message or auto-continue request
        if (!lastBotMessage) {
          // First message in conversation, start from first node
          currentNode = nodes[0];
          console.log('Starting from first node:', currentNode ? currentNode.id : 'null');
        } else {
          // Continue from last bot node (auto-continue case)
          currentNode = getNextNode(lastBotMessage.nodeId);
          console.log('Auto-continuing from last node to:', currentNode ? currentNode.id : 'null');
        }
      } else {
        // Response to a question or other node
        console.log('Processing user response to question node');
        console.log('Last bot message nodeId:', lastBotMessage.nodeId);
        currentNode = getNextNode(lastBotMessage.nodeId, message);
        console.log('User response, continuing to:', currentNode ? currentNode.id : 'null');
        
        // If we couldn't find a next node (e.g., invalid response), try to continue anyway
        // This prevents getting stuck asking the same question repeatedly
        if (!currentNode) {
          console.log('Could not match user response, trying to continue with default path');
          // Try to get the default next node without considering the user input
          currentNode = getNextNode(lastBotMessage.nodeId);
          // If that still doesn't work, end the conversation
          if (!currentNode) {
            return { text: "I didn't understand that response. Let's try something else!", type: 'message', options: null };
          }
        }
      }

      if (!currentNode) {
        console.log('No next node found, ending conversation');
        return { text: "Flow ended. Thank you!", type: 'message', options: null };
      }

      // Save user message (unless this is an auto-continue)
      if (!isAutoContinue) {
        console.log('Saving user message:', message);
        // For user messages, the nodeId should be the ID of the question node that prompted this response
        const userMessageNodeId = lastBotMessage?.nodeId || null;
        const savedUserMessage = await prisma.message.create({
          data: {
            conversationId: conversation.id,
            content: message,
            nodeId: userMessageNodeId,
            sender: 'user'
          }
        });
        console.log('Saved user message:', savedUserMessage);
      }

      // Generate response using flow service
      const flowResponse = flowService.generateFlowResponse(flow, currentNode, lastBotMessage);
      console.log('Flow response:', flowResponse);

      // Save bot message
      console.log('Saving bot message:', flowResponse.text);
      const savedBotMessage = await prisma.message.create({
        data: {
          conversationId: conversation.id,
          content: flowResponse.text,
          sender: 'bot',
          nodeId: flowResponse.nodeId
        }
      });
      console.log('Saved bot message:', savedBotMessage);

      // Handle auto-continue for message nodes and collect all auto-continued messages
      let finalResponse = flowResponse;
      let currentProcessingResponse = flowResponse;
      let autoContinuedMessages = []; // Store auto-continued messages for Facebook
      
      // Process nodes sequentially if they are message nodes with single outgoing edges
      while (currentProcessingResponse && currentProcessingResponse.autoContinue) {
        // Get the next node from the auto-continue response
        const nextNode = currentProcessingResponse.nextNode;
        console.log('Auto-continuing to next node:', nextNode ? nextNode.id : 'null');
        
        // Generate response for the next node
        if (nextNode) {
          const nextResponse = flowService.generateFlowResponse(flow, nextNode, savedBotMessage);
          console.log('Next auto-continue response:', nextResponse);
          
          // Save the auto-continued message
          console.log('Saving auto-continued bot message:', nextResponse.text);
          const savedAutoMessage = await prisma.message.create({
            data: {
              conversationId: conversation.id,
              content: nextResponse.text,
              sender: 'bot',
              nodeId: nextResponse.nodeId
            }
          });
          console.log('Saved auto-continued bot message:', savedAutoMessage);
          
          // Collect auto-continued messages for Facebook integration
          // IMPORTANT: Don't include the final response in this array to avoid duplication
          autoContinuedMessages.push({
            text: nextResponse.text,
            type: nextResponse.type || 'message',
            options: nextResponse.options || null
          });
          
          // Update final response to the auto-continued node
          finalResponse = nextResponse;
          currentProcessingResponse = nextResponse;
        } else {
          break;
        }
      }

      console.log('Final response:', finalResponse);

      // Return response with auto-continued messages for Facebook integration
      const response = {
        text: flowResponse.text, // Use the initial response, not the final one
        type: flowResponse.type || 'message',
        options: flowResponse.options || null
      };
      
      // Include auto-continued messages for Facebook to send them sequentially
      if (autoContinuedMessages.length > 0) {
        response.autoContinuedMessages = autoContinuedMessages;
        // Don't set autoContinue flag to avoid duplicate processing in Facebook service
        response.autoContinue = false;
      } else {
        // For backward compatibility, set autoContinue flag if there are no auto-continued messages
        response.autoContinue = finalResponse.autoContinue || false;
      }

      return response;

    } catch (error) {
      console.error('Error processing message:', error);
      return { text: 'Sorry, I encountered an error while processing your message. Please try again.', options: null };
    }
  }

  async getChatbotConfig(chatbotId, userId) {
    try {
      const chatbot = await prisma.chatbot.findUnique({
        where: { id: parseInt(chatbotId), userId: parseInt(userId) }
      });
      return chatbot || { id: chatbotId, name: `Chatbot ${chatbotId}` };
    } catch {
      return { id: chatbotId, name: `Chatbot ${chatbotId}` };
    }
  }

  async resetConversation(conversationId) {
    try {
      await prisma.conversation.delete({ where: { id: conversationId } });
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = new ChatbotService();