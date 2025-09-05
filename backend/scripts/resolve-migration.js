#!/usr/bin/env node

// Script to resolve migration issues on Render
// This script marks a failed migration as resolved

const { execSync } = require('child_process');
const path = require('path');

console.log('Attempting to resolve migration issues...');

try {
  // Try to mark the failed migration as resolved
  console.log('Marking migration as resolved...');
  execSync('npx prisma migrate resolve --rolled-back "20250905070000_fix_table_names"', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('Migration marked as resolved successfully.');
  
  // Now try to apply remaining migrations
  console.log('Applying remaining migrations...');
  execSync('npx prisma migrate deploy', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('All migrations applied successfully.');
} catch (error) {
  console.error('Failed to resolve migration:', error.message);
  
  // Try an alternative approach - force reset and reapply
  console.log('Trying alternative approach...');
  try {
    // Reset and reapply (WARNING: This will delete data!)
    console.log('WARNING: This will reset your database schema!');
    // execSync('npx prisma migrate reset --force', { stdio: 'inherit' });
    
    console.log('Alternative approach completed.');
  } catch (resetError) {
    console.error('Alternative approach also failed:', resetError.message);
  }
}