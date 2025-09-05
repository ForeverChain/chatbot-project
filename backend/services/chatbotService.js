const prisma = require('../prisma/client');
const flowService = require('./flowService');

class ChatbotService {
  // Process a message through the chatbot flow engine
  async processMessage(chatbotId, userId, message, context = {}) {
    try {
      console.log(`Processing message for chatbot ${chatbotId}: "${message}"`);
      
      // Load the chatbot's flow definition
      const flow = await prisma.flow.findFirst({
        where: {
          chatbotId: parseInt(chatbotId)
        }
      });
      
      if (!flow) {
        console.log(`No flow found for chatbot ${chatbotId}, returning default response`);
        return `Hello! I'm chatbot ${chatbotId}. I'm still learning how to respond. Please check back later!`;
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
      }
      
      // Save the user's message
      await prisma.message.create({
        data: {
          conversationId: conversation.id,
          content: message,
          sender: 'user'
        }
      });
      
      // Add the new message to the conversation for processing
      conversation.messages.push({
        content: message,
        sender: 'user',
        createdAt: new Date()
      });
      
      // Process the message through the flow
      const responseText = flowService.generateFlowResponse(conversation.messages, flow);
      
      // Save the bot's response
      await prisma.message.create({
        data: {
          conversationId: conversation.id,
          content: responseText,
          sender: 'bot'
        }
      });
      
      console.log(`Generated response for chatbot ${chatbotId}: "${responseText}"`);
      return responseText;
    } catch (error) {
      console.error('Error processing message:', error);
      return "Sorry, I encountered an error while processing your message. Please try again.";
    }
  }
  
  // Get chatbot configuration
  async getChatbotConfig(chatbotId, userId) {
    try {
      const chatbot = await prisma.chatbot.findUnique({
        where: {
          id: parseInt(chatbotId),
          userId: parseInt(userId)
        }
      });
      
      return chatbot || { id: chatbotId, name: `Chatbot ${chatbotId}` };
    } catch (error) {
      console.error('Error getting chatbot config:', error);
      return { id: chatbotId, name: `Chatbot ${chatbotId}` };
    }
  }
}

module.exports = new ChatbotService();