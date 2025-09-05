const express = require('express');
const prisma = require('../prisma/client');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new chatbot
router.post('/', auth, async (req, res) => {
  try {
    const { name, description } = req.body;
    const userId = req.user.id;

    const chatbot = await prisma.chatbot.create({
      data: {
        name,
        description,
        userId,
      },
    });

    res.status(201).json(chatbot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all chatbots for a user
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;

    const chatbots = await prisma.chatbot.findMany({
      where: {
        userId,
      },
      include: {
        conversations: true,
      },
    });

    res.json(chatbots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific chatbot
router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(id),
        userId,
      },
      include: {
        conversations: {
          include: {
            messages: {
              orderBy: {
                createdAt: 'asc',
              },
            },
          },
        },
      },
    });

    if (!chatbot) {
      return res.status(404).json({ error: 'Chatbot not found' });
    }

    res.json(chatbot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a chatbot
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const userId = req.user.id;

    const chatbot = await prisma.chatbot.update({
      where: {
        id: parseInt(id),
        userId,
      },
      data: {
        name,
        description,
      },
    });

    res.json(chatbot);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Chatbot not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a chatbot
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const chatbotId = parseInt(id);

    // First, delete all related records due to foreign key constraints
    await prisma.chatbotCustomization.deleteMany({
      where: { chatbotId }
    });

    await prisma.botTemplate.deleteMany({
      where: { chatbotId }
    });

    await prisma.chatbotIntegration.deleteMany({
      where: { chatbotId }
    });

    await prisma.flow.deleteMany({
      where: { chatbotId }
    });

    // Delete messages and conversations
    // First get all conversations for this chatbot
    const conversations = await prisma.conversation.findMany({
      where: { chatbotId }
    });

    // Delete all messages for each conversation
    for (const conversation of conversations) {
      await prisma.message.deleteMany({
        where: { conversationId: conversation.id }
      });
    }

    // Delete all conversations
    await prisma.conversation.deleteMany({
      where: { chatbotId }
    });

    // Finally, delete the chatbot itself
    await prisma.chatbot.delete({
      where: {
        id: chatbotId,
        userId,
      },
    });

    res.json({ message: 'Chatbot deleted successfully' });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Chatbot not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;