#!/usr/bin/env node

// Script to resolve the failed migration and apply all migrations
const { execSync } = require('child_process');
const path = require('path');

console.log('Resolving migration issues and applying all migrations...');

try {
  // Change to the backend directory
  const backendDir = path.join(__dirname);
  console.log(`Working in directory: ${backendDir}`);
  
  // Generate Prisma client first
  console.log('Generating Prisma client...');
  execSync('npx prisma generate', { 
    stdio: 'inherit',
    cwd: backendDir
  });
  
  // Try to apply migrations
  console.log('Applying database migrations...');
  execSync('npx prisma migrate deploy', { 
    stdio: 'inherit',
    cwd: backendDir
  });
  
  console.log('✅ All migrations applied successfully!');
  
} catch (error) {
  console.error('❌ Error applying migrations:', error.message);
  console.error('Exit code:', error.status);
  
  // Provide guidance for manual resolution
  console.log('\n--- MANUAL RESOLUTION STEPS ---');
  console.log('1. Check your database connection:');
  console.log('   - Ensure DATABASE_URL is correctly set in your environment');
  console.log('   - Verify the database is accessible');
  console.log('');
  console.log('2. If the issue persists, you may need to manually resolve the migration:');
  console.log('   npx prisma migrate resolve --rolled-back "20250905070000_fix_table_names"');
  console.log('   npx prisma migrate deploy');
  console.log('');
  console.log('3. As a last resort, you can reset the migration history (WARNING: This will lose migration history):');
  console.log('   npx prisma migrate reset --force');
}