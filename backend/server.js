const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Use Render's PORT or environment PORT or default to 3003
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

// Temporary migration endpoint for fixing database schema issues
// Remove this endpoint after the issue is resolved
if (process.env.NODE_ENV === 'production') {
  app.post('/api/migrate', async (req, res) => {
    try {
      const { PrismaClient } = require('@prisma/client');
      const prisma = new PrismaClient();
      
      // Run migrations
      const { execSync } = require('child_process');
      const output = execSync('npx prisma migrate deploy', { encoding: 'utf-8' });
      
      await prisma.$disconnect();
      res.status(200).json({ message: 'Migrations applied successfully', output });
    } catch (error) {
      console.error('Migration error:', error);
      res.status(500).json({ error: 'Migration failed', details: error.message });
    }
  });
}

// Health check endpoint for production monitoring
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Log error details in production
  if (process.env.NODE_ENV === 'production') {
    // In production, don't expose error details to client
    res.status(500).json({ error: 'Internal server error' });
  } else {
    // In development, show error details
    res.status(500).json({ error: 'Something went wrong!', details: err.message });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Listen on all interfaces for Docker compatibility
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});

module.exports = app;