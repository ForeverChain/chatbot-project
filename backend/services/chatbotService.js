const prisma = require('../prisma/client');
const flowService = require('./flowService');

class ChatbotService {
  // Process a message through the chatbot flow engine
  async processMessage(chatbotId, userId, message, context = {}) {
    try {
      console.log('=== PROCESSING CHATBOT MESSAGE ===');
      console.log('Chatbot ID:', chatbotId);
      console.log('User ID:', userId);
      console.log('Message:', message);
      console.log('Context:', context);
      
      // Load the chatbot's flow definition
      const flow = await prisma.flow.findFirst({
        where: {
          chatbotId: parseInt(chatbotId)
        }
      });
      
      console.log('Found flow:', flow);
      
      if (!flow) {
        console.log(`No flow found for chatbot ${chatbotId}, returning default response`);
        const defaultResponse = `Hello! I'm chatbot ${chatbotId}. I'm still learning how to respond. Please check back later!`;
        console.log('Sending default response:', defaultResponse);
        return defaultResponse;
      }
      
      console.log(`Found flow for chatbot ${chatbotId}:`, flow.name);
      
      // Get conversation history
      let conversation = await prisma.conversation.findFirst({
        where: {
          chatbotId: parseInt(chatbotId)
        },
        include: {
          messages: {
            orderBy: {
              createdAt: 'asc'
            }
          }
        }
      });
      
      console.log('Existing conversation:', conversation);
      
      // Create conversation if it doesn't exist
      if (!conversation) {
        console.log(`Creating new conversation for chatbot ${chatbotId}`);
        conversation = await prisma.conversation.create({
          data: {
            chatbotId: parseInt(chatbotId)
          },
          include: {
            messages: true
          }
        });
        console.log('Created conversation:', conversation);
      }
      
      // Save the user's message
      console.log('Saving user message to database');
      const savedMessage = await prisma.message.create({
        data: {
          conversationId: conversation.id,
          content: message,
          sender: 'user'
        }
      });
      console.log('Saved user message:', savedMessage);
      
      // Add the new message to the conversation for processing
      conversation.messages.push({
        content: message,
        sender: 'user',
        createdAt: new Date()
      });
      
      // Process the message through the flow
      console.log('Processing message through flow service');
      const responseText = flowService.generateFlowResponse(conversation.messages, flow);
      console.log('Flow service response:', responseText);
      
      // Save the bot's response
      console.log('Saving bot response to database');
      const savedResponse = await prisma.message.create({
        data: {
          conversationId: conversation.id,
          content: responseText,
          sender: 'bot'
        }
      });
      console.log('Saved bot response:', savedResponse);
      
      console.log(`Generated response for chatbot ${chatbotId}: "${responseText}"`);
      return responseText;
    } catch (error) {
      console.error('Error processing message:', error);
      const errorMessage = "Sorry, I encountered an error while processing your message. Please try again.";
      console.log('Sending error response:', errorMessage);
      return errorMessage;
    }
  }
  
  // Get chatbot configuration
  async getChatbotConfig(chatbotId, userId) {
    try {
      console.log('Getting chatbot config for:', { chatbotId, userId });
      const chatbot = await prisma.chatbot.findUnique({
        where: {
          id: parseInt(chatbotId),
          userId: parseInt(userId)
        }
      });
      
      console.log('Found chatbot config:', chatbot);
      return chatbot || { id: chatbotId, name: `Chatbot ${chatbotId}` };
    } catch (error) {
      console.error('Error getting chatbot config:', error);
      return { id: chatbotId, name: `Chatbot ${chatbotId}` };
    }
  }
}

module.exports = new ChatbotService();