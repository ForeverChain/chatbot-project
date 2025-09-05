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
  try {
    const { conversationId } = req.params;
    const { content, sender } = req.body;

    // Verify the conversation belongs to a chatbot owned by the user
    const conversation = await prisma.conversation.findUnique({
      where: {
        id: parseInt(conversationId),
      },
      include: {
        chatbot: true,
      },
    });

    if (!conversation || conversation.chatbot.userId !== req.user.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Save the user's message
    const userMessage = await prisma.message.create({
      data: {
        conversationId: parseInt(conversationId),
        content,
        sender,
      },
    });

    // Get conversation history for context
    const messages = await prisma.message.findMany({
      where: {
        conversationId: parseInt(conversationId),
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    // Check if there are any flows for this chatbot
    const flows = await prisma.flow.findMany({
      where: {
        chatbotId: conversation.chatbotId,
      },
    });

    let botResponse;

    if (flows.length > 0) {
      // Use flow-based response if flows exist
      botResponse = flowService.generateFlowResponse(messages, flows[0]);
    } else {
      // Use AI service if no flows exist
      botResponse = await aiService.generateResponse(messages);
    }

    // Save the bot's response
    const botMessage = await prisma.message.create({
      data: {
        conversationId: parseInt(conversationId),
        content: botResponse,
        sender: 'bot',
      },
    });

    res.status(201).json({ userMessage, botMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;