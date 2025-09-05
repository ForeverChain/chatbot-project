const express = require('express');
const prisma = require('../prisma/client');
const auth = require('../middleware/auth');

const router = express.Router();

// Get customization for a chatbot
router.get('/chatbot/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;

    // Verify the chatbot belongs to the user
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(chatbotId),
        userId: req.user.id,
      },
    });

    if (!chatbot) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const customization = await prisma.chatbotCustomization.findUnique({
      where: {
        chatbotId: parseInt(chatbotId),
      },
    });

    res.json(customization || {});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create or update customization for a chatbot
router.post('/chatbot/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;
    const { name, avatar, greeting, personality, tone, language, config } = req.body;

    // Verify the chatbot belongs to the user
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(chatbotId),
        userId: req.user.id,
      },
    });

    if (!chatbot) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Check if customization already exists
    const existingCustomization = await prisma.chatbotCustomization.findUnique({
      where: {
        chatbotId: parseInt(chatbotId),
      },
    });

    let customization;
    if (existingCustomization) {
      // Update existing customization
      customization = await prisma.chatbotCustomization.update({
        where: {
          chatbotId: parseInt(chatbotId),
        },
        data: {
          name,
          avatar,
          greeting,
          personality,
          tone,
          language,
          config: config ? JSON.stringify(config) : '{}',
        },
      });
    } else {
      // Create new customization
      customization = await prisma.chatbotCustomization.create({
        data: {
          chatbotId: parseInt(chatbotId),
          name,
          avatar,
          greeting,
          personality,
          tone,
          language,
          config: config ? JSON.stringify(config) : '{}',
        },
      });
    }

    res.status(201).json(customization);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update specific customization field
router.patch('/chatbot/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;
    const { name, avatar, greeting, personality, tone, language, config } = req.body;

    // Verify the chatbot belongs to the user
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(chatbotId),
        userId: req.user.id,
      },
    });

    if (!chatbot) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Update customization
    const customization = await prisma.chatbotCustomization.update({
      where: {
        chatbotId: parseInt(chatbotId),
      },
      data: {
        name,
        avatar,
        greeting,
        personality,
        tone,
        language,
        config: config ? JSON.stringify(config) : '{}',
      },
    });

    res.json(customization);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Customization not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Reset customization to default
router.delete('/chatbot/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;

    // Verify the chatbot belongs to the user
    const chatbot = await prisma.chatbot.findUnique({
      where: {
        id: parseInt(chatbotId),
        userId: req.user.id,
      },
    });

    if (!chatbot) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Delete customization (will reset to default)
    await prisma.chatbotCustomization.delete({
      where: {
        chatbotId: parseInt(chatbotId),
      },
    });

    res.json({ message: 'Customization reset to default' });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Customization not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Get available customization options
router.get('/options', auth, async (req, res) => {
  try {
    const options = {
      personalities: [
        { id: 'friendly', name: 'Friendly' },
        { id: 'professional', name: 'Professional' },
        { id: 'helpful', name: 'Helpful' },
        { id: 'enthusiastic', name: 'Enthusiastic' },
        { id: 'calm', name: 'Calm' },
      ],
      tones: [
        { id: 'formal', name: 'Formal' },
        { id: 'casual', name: 'Casual' },
        { id: 'playful', name: 'Playful' },
        { id: 'serious', name: 'Serious' },
      ],
      languages: [
        { id: 'en', name: 'English' },
        { id: 'mn', name: 'Mongolian' },
        { id: 'es', name: 'Spanish' },
        { id: 'fr', name: 'French' },
        { id: 'de', name: 'German' },
      ],
    };

    res.json(options);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;