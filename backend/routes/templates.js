const express = require('express');
const prisma = require('../prisma/client');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new message template
router.post('/', auth, async (req, res) => {
  try {
    const { chatbotId, title, content } = req.body;
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

    const template = await prisma.messageTemplate.create({
      data: {
        chatbotId: parseInt(chatbotId),
        title,
        content,
      },
    });

    res.status(201).json(template);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all message templates for a chatbot
router.get('/chatbot/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;
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

    const templates = await prisma.messageTemplate.findMany({
      where: {
        chatbotId: parseInt(chatbotId),
      },
    });

    res.json(templates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific message template
router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get the template and verify it belongs to a chatbot owned by the user
    const template = await prisma.messageTemplate.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        chatbot: true,
      },
    });

    if (!template || template.chatbot.userId !== userId) {
      return res.status(404).json({ error: 'Message template not found' });
    }

    res.json(template);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a message template
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.user.id;

    // Get the template and verify it belongs to a chatbot owned by the user
    const template = await prisma.messageTemplate.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        chatbot: true,
      },
    });

    if (!template || template.chatbot.userId !== userId) {
      return res.status(404).json({ error: 'Message template not found' });
    }

    const updatedTemplate = await prisma.messageTemplate.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        content,
      },
    });

    res.json(updatedTemplate);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Message template not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a message template
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get the template and verify it belongs to a chatbot owned by the user
    const template = await prisma.messageTemplate.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        chatbot: true,
      },
    });

    if (!template || template.chatbot.userId !== userId) {
      return res.status(404).json({ error: 'Message template not found' });
    }

    // Delete the template
    await prisma.messageTemplate.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json({ message: 'Message template deleted successfully' });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Message template not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;