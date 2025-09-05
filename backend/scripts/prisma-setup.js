#!/usr/bin/env node

// Script to set up Prisma client and run migrations
const { execSync } = require('child_process');
const path = require('path');

console.log('Setting up Prisma...');

try {
  // Change to the backend directory
  const backendDir = path.join(__dirname, '..');
  console.log(`Working in directory: ${backendDir}`);
  
  // Generate Prisma client
  console.log('1. Generating Prisma client...');
  execSync('npx prisma generate', { 
    stdio: 'inherit',
    cwd: backendDir
  });
  console.log('✅ Prisma client generated successfully');
  
  // Apply migrations
  console.log('2. Applying database migrations...');
  execSync('npx prisma migrate deploy', { 
    stdio: 'inherit',
    cwd: backendDir
  });
  console.log('✅ Database migrations applied successfully');
  
  console.log('\n🎉 Prisma setup completed successfully!');
  
} catch (error) {
  console.error('❌ Error during Prisma setup:', error.message);
  console.error('Exit code:', error.status);
  process.exit(1);
}