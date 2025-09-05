#!/bin/sh

# Generate Prisma client to ensure it's available
echo "Generating Prisma client..."
npx prisma generate || echo "Warning: Prisma client generation failed, continuing with existing client"

# Run migrations
echo "Running database migrations..."
npx prisma migrate deploy

# Start the server
echo "Starting server..."
node server.js