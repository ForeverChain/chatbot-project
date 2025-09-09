// Test to check conversation tracking issues
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConversationTracking() {
  console.log('=== Testing Conversation Tracking ===\n');
  
  try {
    // Check all conversations for chatbot 1
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
    
    console.log('All conversations for chatbot 1:');
    console.log(JSON.stringify(conversations, null, 2));
    
    // Check if there are conversations with page ID as userId
    const pageId = '707768715760619';
    const conversationsWithPageId = conversations.filter(conv => conv.userId === pageId);
    
    if (conversationsWithPageId.length > 0) {
      console.log('\n⚠️  WARNING: Found conversations using page ID as userId:');
      console.log(JSON.stringify(conversationsWithPageId, null, 2));
    }
    
    // Check if there are conversations with the real user ID
    const realUserId = '31069937039319757';
    const conversationsWithRealUserId = conversations.filter(conv => conv.userId === realUserId);
    
    if (conversationsWithRealUserId.length > 0) {
      console.log('\n✅ Found conversations with real user ID:');
      console.log(JSON.stringify(conversationsWithRealUserId, null, 2));
    } else {
      console.log('\n❓ No conversations found with real user ID:', realUserId);
    }
    
  } catch (error) {
    console.error('Error testing conversation tracking:', error);
  } finally {
    await prisma.$disconnect();
  }
  
  console.log('\n=== Test Complete ===');
}

// Run the test
testConversationTracking().catch(console.error);