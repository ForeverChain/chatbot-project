const express = require('express');
const prisma = require('../prisma/client');
const auth = require('../middleware/auth');

const router = express.Router();

// Log an interaction
router.post('/chatbot/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;
    const { action, userId } = req.body;
    const requesterId = req.user.id;

    // Verify the chatbot belongs to the user
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(chatbotId),
        userId: requesterId,
      },
    });

    if (!chatbot) {
      return res.status(404).json({ error: 'Chatbot not found' });
    }

    const analyticsEntry = await prisma.analytics.create({
      data: {
        chatbotId: parseInt(chatbotId),
        userId: userId ? parseInt(userId) : null,
        action,
      },
    });

    res.status(201).json(analyticsEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get analytics data for a chatbot
router.get('/chatbot/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;
    const { startDate, endDate } = req.query;
    const userId = req.user.id;

    // Verify the chatbot belongs to the user
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(chatbotId),
        userId,
      },
    });

    if (!chatbot) {
      return res.status(404).json({ error: 'Chatbot not found' });
    }

    // Build where clause for date filtering
    const whereClause = {
      chatbotId: parseInt(chatbotId),
    };

    if (startDate || endDate) {
      whereClause.timestamp = {};
      if (startDate) {
        whereClause.timestamp.gte = new Date(startDate);
      }
      if (endDate) {
        whereClause.timestamp.lte = new Date(endDate);
      }
    }

    const analyticsData = await prisma.analytics.findMany({
      where: whereClause,
      orderBy: {
        timestamp: 'desc',
      },
    });

    // Aggregate data for charts
    const actionCounts = {};
    const dailyCounts = {};

    analyticsData.forEach(entry => {
      // Count by action
      actionCounts[entry.action] = (actionCounts[entry.action] || 0) + 1;

      // Count by day
      const date = entry.timestamp.toISOString().split('T')[0];
      dailyCounts[date] = (dailyCounts[date] || 0) + 1;
    });

    res.json({
      rawData: analyticsData,
      actionCounts,
      dailyCounts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;