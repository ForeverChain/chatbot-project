const prisma = require('../prisma/client');

async function clearConversations() {
  try {
    console.log('Clearing all conversations...');
    
    // Delete all messages first (due to foreign key constraints)
    const deletedMessages = await prisma.message.deleteMany({});
    console.log(`Deleted ${deletedMessages.count} messages`);
    
    // Then delete all conversations
    const deletedConversations = await prisma.conversation.deleteMany({});
    console.log(`Deleted ${deletedConversations.count} conversations`);
    
    console.log('All conversations cleared successfully!');
  } catch (error) {
    console.error('Error clearing conversations:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script if executed directly
if (require.main === module) {
  clearConversations();
}

module.exports = { clearConversations };