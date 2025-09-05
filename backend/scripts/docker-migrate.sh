#!/bin/sh

# Wait for the database to be ready
echo "Waiting for database to be ready..."
sleep 10

# Run Prisma migrations
echo "Running Prisma migrations..."
npx prisma migrate deploy

# Start the application
echo "Starting the application..."
npm start