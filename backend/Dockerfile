# Use Node.js 18 as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy Prisma schema and generate client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Make the migration script executable
RUN chmod +x scripts/docker-migrate.sh

# Expose the port the app runs on
EXPOSE 3003

# Start the application with migrations
CMD ["./scripts/docker-migrate.sh"]