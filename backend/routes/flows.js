const express = require('express');
const prisma = require('../prisma/client');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new flow
router.post('/chatbot/:chatbotId', auth, async (req, res) => {
  try {
    const { chatbotId } = req.params;
    const { name, nodes, edges } = req.body; // Accept nodes and edges from React Flow
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

    // Create the flow with React Flow data
    const flow = await prisma.flow.create({
      data: {
        chatbotId: parseInt(chatbotId),
        name,
        steps: JSON.stringify({ nodes, edges }), // Store React Flow data
      },
    });

    res.status(201).json({ ...flow, steps: JSON.parse(flow.steps) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all flows for a chatbot
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

    // Get all flows for the chatbot
    const flows = await prisma.flow.findMany({
      where: {
        chatbotId: parseInt(chatbotId),
      },
    });

    // Parse the steps JSON
    const flowsWithParsedSteps = flows.map(flow => ({
      ...flow,
      steps: JSON.parse(flow.steps)
    }));

    res.json(flowsWithParsedSteps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific flow
router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get the flow and verify it belongs to a chatbot owned by the user
    const flow = await prisma.flow.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        chatbot: true,
      },
    });

    if (!flow || flow.chatbot.userId !== userId) {
      return res.status(404).json({ error: 'Flow not found' });
    }

    res.json({ ...flow, steps: JSON.parse(flow.steps) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a flow
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, nodes, edges } = req.body; // Accept nodes and edges from React Flow
    const userId = req.user.id;

    // Get the flow and verify it belongs to a chatbot owned by the user
    const flow = await prisma.flow.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        chatbot: true,
      },
    });

    if (!flow || flow.chatbot.userId !== userId) {
      return res.status(404).json({ error: 'Flow not found' });
    }

    // Update the flow with React Flow data
    const updatedFlow = await prisma.flow.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        steps: JSON.stringify({ nodes, edges }), // Store React Flow data
      },
    });

    res.json({ ...updatedFlow, steps: JSON.parse(updatedFlow.steps) });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Flow not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a flow
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get the flow and verify it belongs to a chatbot owned by the user
    const flow = await prisma.flow.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        chatbot: true,
      },
    });

    if (!flow || flow.chatbot.userId !== userId) {
      return res.status(404).json({ error: 'Flow not found' });
    }

    // Delete the flow
    await prisma.flow.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json({ message: 'Flow deleted successfully' });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Flow not found' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;