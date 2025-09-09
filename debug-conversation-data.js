const { PrismaClient } = require('./backend/generated/prisma/index.js');
const prisma = new PrismaClient();

async function debugConversation() {
  try {
    console.log('=== DEBUGGING CONVERSATION DATA ===');
    
    // Get conversations for chatbot 1
    const conversations = await prisma.conversation.findMany({
      where: {
        chatbotId: 1
      },
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc'
          }
        }
      }
    });
    
    console.log('Total conversations:', conversations.length);
    
    conversations.forEach((conversation, index) => {
      console.log(`\n--- Conversation ${index + 1} ---`);
      console.log('ID:', conversation.id);
      console.log('User ID:', conversation.userId);
      console.log('Created at:', conversation.createdAt);
      console.log('Messages count:', conversation.messages.length);
      
      conversation.messages.forEach((message, msgIndex) => {
        console.log(`  Message ${msgIndex + 1}:`, {
          id: message.id,
          sender: message.sender,
          content: message.content,
          createdAt: message.createdAt
        });
      });
    });
  } catch (error) {
    console.error('Error debugging conversation:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugConversation();