let prisma;

try {
  // Try to use the generated client first
  const { PrismaClient } = require('../generated/prisma/index.js');
  prisma = new PrismaClient();
  console.log('Using generated Prisma client');
} catch (error) {
  console.warn('Failed to load generated Prisma client, falling back to @prisma/client');
  console.warn('Error:', error.message);
  
  // Fallback to the installed @prisma/client package
  try {
    const { PrismaClient } = require('@prisma/client');
    prisma = new PrismaClient();
    console.log('Using installed @prisma/client package');
  } catch (fallbackError) {
    console.error('Failed to initialize Prisma client completely');
    console.error('Error:', fallbackError.message);
    // In migration contexts, we might want to handle this differently
    // Let's re-throw the original error to preserve the stack trace
    throw error;
  }
}

module.exports = prisma;