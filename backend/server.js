const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Generate Prisma client at startup (in production)
if (process.env.NODE_ENV === 'production') {
  try {
    console.log('Generating Prisma client...');
    require('child_process').execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('Prisma client generated successfully');
  } catch (error) {
    console.error('Failed to generate Prisma client:', error.message);
  }
}

const app = express();
// Use Render's PORT or environment PORT or default to 3003
const PORT = process.env.PORT || 3003;

// Dynamic CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Allow localhost for development
    if (origin === 'http://localhost:3000') {
      return callback(null, true);
    }
    
    // For development, allow all ngrok domains
    if (process.env.NODE_ENV === 'development' && origin.endsWith('.ngrok-free.app')) {
      return callback(null, true);
    }
    
    // For production, you might want to specify exact domains
    if (process.env.NODE_ENV === 'production') {
      // Add your production frontend domains here
      const allowedOrigins = [
        // Add your production frontend URL here
      ];
      
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
    }
    
    // Log the origin for debugging
    console.log('CORS blocked origin:', origin);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/chatbots', require('./routes/chatbots'));
app.use('/api/flows', require('./routes/flows'));
app.use('/api/templates', require('./routes/templates'));
app.use('/api/integrations', require('./routes/integrations'));
app.use('/api/uploads', require('./routes/uploads'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/chat', require('./routes/chat')); // Add the new chat route

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
  console.log(`CORS is configured to allow localhost:3000 and ngrok domains in development`);
});

module.exports = app;