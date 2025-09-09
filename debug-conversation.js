const chatbotService = require('./backend/services/chatbotService');
const prisma = require('./backend/prisma/client');

async function debugConversationIssue() {
  console.log('=== Debugging Conversation Issue ===\n');
  
  try {
    // Let's look at the specific conversations from your database records
    console.log('Looking at conversations with IDs 1 and 2...');
    
    const conversation1 = await prisma.conversation.findUnique({
      where: { id: 1 },
      include: { messages: { orderBy: { createdAt: 'asc' } } }
    });
    
    const conversation2 = await prisma.conversation.findUnique({
      where: { id: 2 },
      include: { messages: { orderBy: { createdAt: 'asc' } } }
    });
    
    console.log('Conversation 1:', conversation1);
    console.log('Conversation 2:', conversation2);
    
    // Check if they have the same chatbotId
    if (conversation1 && conversation2) {
      console.log('\n=== Comparison ===');
      console.log('Conversation 1 chatbotId:', conversation1.chatbotId);
      console.log('Conversation 2 chatbotId:', conversation2.chatbotId);
      console.log('Same chatbot?', conversation1.chatbotId === conversation2.chatbotId);
      
      console.log('Conversation 1 userId:', conversation1.userId);
      console.log('Conversation 2 userId:', conversation2.userId);
      console.log('Same userId?', conversation1.userId === conversation2.userId);
      console.log('Same userId as string?', String(conversation1.userId) === String(conversation2.userId));
      
      // Look for all conversations with the same chatbotId
      console.log('\n=== All conversations for chatbot ===');
      const allConversations = await prisma.conversation.findMany({
        where: {
          chatbotId: conversation1.chatbotId
        },
        include: { messages: { orderBy: { createdAt: 'asc' } } }
      });
      
      console.log('All conversations:', allConversations);
    }
    
    // Test the conversation lookup logic
    if (conversation1 && conversation1.userId) {
      console.log('\n=== Testing conversation lookup ===');
      console.log('Testing lookup with chatbotId:', conversation1.chatbotId, 'and userId:', conversation1.userId);
      
      const result = await chatbotService.debugConversation(conversation1.chatbotId, conversation1.userId);
      console.log('Debug result:', result);
    }
    
  } catch (error) {
    console.error('Error debugging conversation issue:', error);
  }
}

// Run the debug function
debugConversationIssue().catch(console.error);