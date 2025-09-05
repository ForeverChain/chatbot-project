# API Documentation

## Authentication

### Register a new user
**POST** `/api/auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "id": 1,
  "email": "john@example.com",
  "name": "John Doe",
  "token": "jwt_token"
}
```

### Login
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "id": 1,
  "email": "john@example.com",
  "name": "John Doe",
  "token": "jwt_token"
}
```

## Chatbots

### Create a new chatbot
**POST** `/api/chatbots`

**Headers:**
```
Authorization: Bearer jwt_token
```

**Request Body:**
```json
{
  "name": "Customer Support Bot",
  "description": "Handles customer support queries"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Customer Support Bot",
  "description": "Handles customer support queries",
  "userId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

### Get all chatbots for a user
**GET** `/api/chatbots`

**Headers:**
```
Authorization: Bearer jwt_token
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Customer Support Bot",
    "description": "Handles customer support queries",
    "userId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "conversations": []
  }
]
```

### Get a specific chatbot
**GET** `/api/chatbots/:id`

**Headers:**
```
Authorization: Bearer jwt_token
```

**Response:**
```json
{
  "id": 1,
  "name": "Customer Support Bot",
  "description": "Handles customer support queries",
  "userId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z",
  "conversations": [
    {
      "id": 1,
      "chatbotId": 1,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "messages": []
    }
  ]
}
```

### Update a chatbot
**PUT** `/api/chatbots/:id`

**Headers:**
```
Authorization: Bearer jwt_token
```

**Request Body:**
```json
{
  "name": "Updated Bot Name",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Updated Bot Name",
  "description": "Updated description",
  "userId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

### Delete a chatbot
**DELETE** `/api/chatbots/:id`

**Headers:**
```
Authorization: Bearer jwt_token
```

**Response:**
```json
{
  "message": "Chatbot deleted successfully"
}
```

## Conversations

### Create a new conversation
**POST** `/api/conversations`

**Headers:**
```
Authorization: Bearer jwt_token
```

**Request Body:**
```json
{
  "chatbotId": 1
}
```

**Response:**
```json
{
  "id": 1,
  "chatbotId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z",
  "messages": []
}
```

### Get all conversations for a chatbot
**GET** `/api/conversations/:chatbotId`

**Headers:**
```
Authorization: Bearer jwt_token
```

**Response:**
```json
[
  {
    "id": 1,
    "chatbotId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "messages": [
      {
        "id": 1,
        "conversationId": 1,
        "content": "Hello!",
        "sender": "user",
        "createdAt": "2023-01-01T00:00:00.000Z"
      }
    ]
  }
]
```

### Add a message to a conversation
**POST** `/api/conversations/:conversationId/messages`

**Headers:**
```
Authorization: Bearer jwt_token
```

**Request Body:**
```json
{
  "content": "Hello, how can you help me?",
  "sender": "user"
}
```

**Response:**
```json
{
  "userMessage": {
    "id": 1,
    "conversationId": 1,
    "content": "Hello, how can you help me?",
    "sender": "user",
    "createdAt": "2023-01-01T00:00:00.000Z"
  },
  "botMessage": {
    "id": 2,
    "conversationId": 1,
    "content": "I can help you with various queries. What would you like to know?",
    "sender": "bot",
    "createdAt": "2023-01-01T00:00:00.000Z"
  }
}
```