# Chatbot Platform

A full-stack chatbot platform built with React, Vite, Node.js, Express, Prisma, and MySQL.

## Features

- User authentication (register/login)
- Create and manage multiple chatbots
- Real-time chat functionality with Socket.IO
- AI-powered responses with natural language processing
- Social media integration (Facebook, Instagram)
- Bot templates for different use cases
- Analytics and reporting
- Customizable bot personalities and appearances

## Tech Stack

- **Frontend**: React, Vite, Socket.IO Client
- **Backend**: Node.js, Express, Socket.IO
- **Database**: MySQL with Prisma ORM
- **Authentication**: JWT
- **NLP**: Natural library for text processing

## Prerequisites

- Node.js (v14 or higher)
- MySQL database
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chatbot
   ```

2. Set up the backend:
   ```bash
   cd backend
   npm install
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   ```

## Environment Variables

### Backend
Create a `backend/.env` file with the following variables:
```
# Development Environment Variables
NODE_ENV=development
PORT=3003

# Database - Update with your MySQL credentials
DATABASE_URL="mysql://username:password@localhost:3306/chatbot"

# Security - Generate strong secrets
JWT_SECRET=your_jwt_secret_here
BCRYPT_SALT_ROUNDS=10

# Facebook Integration (Development)
# FACEBOOK_PAGE_ACCESS_TOKEN=your_development_page_access_token
# FACEBOOK_VERIFY_TOKEN=your_development_verify_token
# FACEBOOK_APP_SECRET=your_development_app_secret
```

### Frontend
Create a `frontend/.env` file with the following variables:
```
# Development Environment Variables
VITE_API_URL=http://localhost:3003
```

For different environments, you can use:
- `frontend/.env.production` - for production settings
- `frontend/.env.staging` - for staging settings

## Database Setup

1. Create a MySQL database for the project
2. Update the `backend/.env` file with your database credentials:
   ```
   DATABASE_URL="mysql://username:password@localhost:3306/chatbot"
   ```

3. Run Prisma migrations:
   ```bash
   cd backend
   npx prisma migrate dev --name init
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
chatbot/
├── backend/
│   ├── prisma/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── server.js
│   └── .env
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── App.jsx
    │   └── App.css
    └── index.html
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Chatbots
- `POST /api/chatbots` - Create a new chatbot
- `GET /api/chatbots` - Get all chatbots for a user
- `GET /api/chatbots/:id` - Get a specific chatbot
- `PUT /api/chatbots/:id` - Update a chatbot
- `DELETE /api/chatbots/:id` - Delete a chatbot

### Conversations
- `POST /api/conversations` - Create a new conversation
- `GET /api/conversations/:chatbotId` - Get all conversations for a chatbot
- `POST /api/conversations/:conversationId/messages` - Add a message to a conversation

### Social Media Integration
- `GET /api/integrations` - Get user's social media integrations
- `POST /api/integrations` - Add a new social media integration
- `DELETE /api/integrations/:id` - Delete a social media integration
- `GET /api/integrations/chatbot/:chatbotId` - Get chatbot integrations
- `POST /api/integrations/chatbot/:chatbotId` - Add chatbot integration
- `DELETE /api/integrations/chatbot/:chatbotId/:integrationId` - Delete chatbot integration

### Bot Templates
- `GET /api/templates` - Get all available bot templates
- `GET /api/templates/:templateId` - Get a specific template
- `GET /api/templates/chatbot/:chatbotId` - Get templates for a chatbot
- `POST /api/templates/chatbot/:chatbotId/apply/:templateId` - Apply a template to a chatbot
- `POST /api/templates/chatbot/:chatbotId` - Create a custom template
- `PUT /api/templates/:templateId` - Update a chatbot template
- `DELETE /api/templates/:templateId` - Delete a chatbot template

### Analytics
- `GET /api/analytics/chatbot/:chatbotId` - Get analytics for a chatbot
- `GET /api/analytics/chatbot/:chatbotId/stats` - Get conversation statistics
- `GET /api/analytics/chatbot/:chatbotId/volume` - Get message volume over time
- `GET /api/analytics/chatbot/:chatbotId/topics` - Get popular topics
- `GET /api/analytics/chatbot/:chatbotId/engagement` - Get user engagement metrics

### Customization
- `GET /api/customization/chatbot/:chatbotId` - Get customization for a chatbot
- `POST /api/customization/chatbot/:chatbotId` - Create or update customization
- `PATCH /api/customization/chatbot/:chatbotId` - Update specific customization field
- `DELETE /api/customization/chatbot/:chatbotId` - Reset customization to default
- `GET /api/customization/options` - Get available customization options

## Development Scripts

- `npm run dev` - Start development server (both frontend and backend)
- `npm run build` - Build for production
- `npm start` - Start production server

## License

This project is licensed under the MIT License.