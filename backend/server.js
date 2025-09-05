const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Use Render's PORT or default to 3003
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/chatbots', require('./routes/chatbots'));
app.use('/api/flows', require('./routes/flows'));
app.use('/api/templates', require('./routes/templates'));
app.use('/api/integrations', require('./routes/integrations'));
app.use('/api/uploads', require('./routes/uploads'));
app.use('/api/analytics', require('./routes/analytics'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;