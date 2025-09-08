const express = require('express');
const prisma = require('../prisma/client');
const chatbotService = require('../services/chatbotService');

const router = express.Router();

// Chat endpoint - process user messages and generate bot responses
router.post('/chat/:chatbotId', async (req, res) => {
  try {
    const { chatbotId } = req.params;
    const { message, userId } = req.body;
    
    console.log('=== CHAT REQUEST ===');
    console.log('Chatbot ID:', chatbotId);
    console.log('User ID:', userId);
    console.log('Message:', message);
    
    // Validate input
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    // Process the message through the chatbot service
    const response = await chatbotService.processMessage(chatbotId, userId, message);
    
    console.log('Generated response:', response);
    
    res.json({ response });
  } catch (error) {
    console.error('Error processing chat message:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;