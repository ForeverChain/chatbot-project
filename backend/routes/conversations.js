const express = require('express');
const prisma = require('../prisma/client');
const auth = require('../middleware/auth');
const aiService = require('../services/aiService');
const flowService = require('../services/flowService');

const router = express.Router();

// Create a new conversation
router.post('/', auth, async (req, res) => {
  try {
    const { chatbotId } = req.body;

    // Verify the chatbot belongs to the user
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(chatbotId),
      },
    });

    if (!chatbot || chatbot.userId !== req.user.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const conversation = await prisma.conversation.create({
      data: {
        chatbotId: parseInt(chatbotId),
      },
      include: {
        messages: true,
      },
    });

    res.status(201).json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all conversations for a chatbot
router.get('/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;

    // Verify the chatbot belongs to the user
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(chatbotId),
      },
    });

    if (!chatbot || chatbot.userId !== req.user.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const conversations = await prisma.conversation.findMany({
      where: {
        chatbotId: parseInt(chatbotId),
      },
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json(conversations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a message to a conversation
router.post('/:conversationId/messages', auth, async (req, res) => {
  return null
});

module.exports = router;