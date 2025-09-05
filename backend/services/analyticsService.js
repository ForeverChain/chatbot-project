const prisma = require('../prisma/client');

class AnalyticsService {
  // Get conversation statistics for a chatbot
  async getConversationStats(chatbotId) {
    try {
      const totalConversations = await prisma.conversation.count({
        where: {
          chatbotId: parseInt(chatbotId),
        },
      });

      const totalMessages = await prisma.message.count({
        where: {
          conversation: {
            chatbotId: parseInt(chatbotId),
          },
        },
      });

      // Get messages grouped by sender type
      const userMessages = await prisma.message.count({
        where: {
          conversation: {
            chatbotId: parseInt(chatbotId),
          },
          sender: 'user',
        },
      });

      const botMessages = await prisma.message.count({
        where: {
          conversation: {
            chatbotId: parseInt(chatbotId),
          },
          sender: 'bot',
        },
      });

      return {
        totalConversations,
        totalMessages,
        userMessages,
        botMessages,
        averageMessagesPerConversation: totalConversations > 0 ? (totalMessages / totalConversations).toFixed(2) : 0,
      };
    } catch (error) {
      console.error('Error fetching conversation stats:', error);
      throw error;
    }
  }

  // Get message volume over time
  async getMessageVolume(chatbotId, days = 30) {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const messages = await prisma.message.findMany({
        where: {
          conversation: {
            chatbotId: parseInt(chatbotId),
          },
          createdAt: {
            gte: startDate,
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      });

      // Group messages by date
      const dailyStats = {};
      messages.forEach(message => {
        const date = message.createdAt.toISOString().split('T')[0];
        if (!dailyStats[date]) {
          dailyStats[date] = { date, user: 0, bot: 0 };
        }
        dailyStats[date][message.sender]++;
      });

      return Object.values(dailyStats);
    } catch (error) {
      console.error('Error fetching message volume:', error);
      throw error;
    }
  }

  // Get popular topics based on message content
  async getPopularTopics(chatbotId, limit = 10) {
    try {
      // This is a simplified implementation
      // In a real application, you would use NLP to extract topics
      const messages = await prisma.message.findMany({
        where: {
          conversation: {
            chatbotId: parseInt(chatbotId),
          },
          sender: 'user',
        },
        take: 100, // Limit to recent messages for performance
        orderBy: {
          createdAt: 'desc',
        },
      });

      // Simple keyword extraction (in a real app, you would use NLP)
      const keywords = {};
      messages.forEach(message => {
        const words = message.content.toLowerCase().split(/\s+/);
        words.forEach(word => {
          // Filter out common words
          if (word.length > 3 && !['hello', 'help', 'please', 'thank', 'thanks', 'what', 'how', 'can', 'you'].includes(word)) {
            keywords[word] = (keywords[word] || 0) + 1;
          }
        });
      });

      // Sort and limit results
      const sortedKeywords = Object.entries(keywords)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([keyword, count]) => ({ keyword, count }));

      return sortedKeywords;
    } catch (error) {
      console.error('Error fetching popular topics:', error);
      throw error;
    }
  }

  // Get user engagement metrics
  async getUserEngagement(chatbotId) {
    try {
      const conversations = await prisma.conversation.findMany({
        where: {
          chatbotId: parseInt(chatbotId),
        },
        include: {
          messages: true,
        },
      });

      // Calculate engagement metrics
      let totalConversationLength = 0;
      let conversationsWithMultipleMessages = 0;

      conversations.forEach(conversation => {
        const userMessages = conversation.messages.filter(msg => msg.sender === 'user').length;
        if (userMessages > 1) {
          conversationsWithMultipleMessages++;
        }
        totalConversationLength += conversation.messages.length;
      });

      const engagementRate = conversations.length > 0 
        ? ((conversationsWithMultipleMessages / conversations.length) * 100).toFixed(2)
        : 0;

      const averageConversationLength = conversations.length > 0
        ? (totalConversationLength / conversations.length).toFixed(2)
        : 0;

      return {
        totalConversations: conversations.length,
        engagementRate: parseFloat(engagementRate),
        averageConversationLength: parseFloat(averageConversationLength),
      };
    } catch (error) {
      console.error('Error fetching user engagement:', error);
      throw error;
    }
  }
}

module.exports = new AnalyticsService();