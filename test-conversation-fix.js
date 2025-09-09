// Test script to verify the conversation duplication fix
const prisma = require('./backend/prisma/client');

async function testConversationFix() {
  console.log('=== Testing Conversation Fix ===\n');
  
  try {
    // Check existing conversations
    const conversations = await prisma.conversation.findMany({
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc'
          }
        }
      }
    });
    
    console.log('Current conversations:');
    conversations.forEach(conv => {
      console.log(`\nConversation ID: ${conv.id}`);
      console.log(`Chatbot ID: ${conv.chatbotId}`);
      console.log(`User ID: ${conv.userId}`);
      console.log('Messages:');
      conv.messages.forEach(msg => {
        console.log(`  ${msg.id} - ${msg.sender}: ${msg.content} (${msg.nodeId})`);
      });
    });
    
    console.log('\n=== Test Complete ===');
  } catch (error) {
    console.error('Error in test:', error);
  }
}

// Run the test
testConversationFix();