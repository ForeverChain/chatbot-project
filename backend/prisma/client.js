let prisma;

try {
  // Try to use the generated client first
  const { PrismaClient } = require('../generated/prisma/index.js');
  prisma = new PrismaClient();
} catch (error) {
  console.warn('Failed to load generated Prisma client, falling back to @prisma/client');
  console.warn('Error:', error.message);
  
  // Fallback to the installed @prisma/client package
  try {
    const { PrismaClient } = require('@prisma/client');
    prisma = new PrismaClient();
  } catch (fallbackError) {
    console.error('Failed to initialize Prisma client completely');
    console.error('Error:', fallbackError.message);
    throw fallbackError;
  }
}

module.exports = prisma;