# Facebook Integration Verify Token Generation

## Overview
This document describes the implementation of automatic verify token generation for Facebook integrations.

## Backend Implementation

### New Endpoint
A new endpoint has been added to the integrations API:
```
POST /api/integrations/:id/generate-verify-token
```

This endpoint:
1. Verifies that the integration exists and belongs to the user
2. Confirms that the integration is of type "facebook"
3. Generates a secure random verify token using Node.js crypto module
4. Updates the integration's config field with the new verify token
5. Returns the generated token to the client

### Security
- The verify token is generated using `crypto.randomBytes(32).toString('hex')` which creates a 32-byte (256-bit) cryptographically secure random string
- Only Facebook integrations can have verify tokens generated
- The endpoint requires authentication and verifies ownership of the integration

## Frontend Implementation

### Automatic Token Generation
When a user creates a Facebook integration:
1. The integration is created with pageId and appId
2. The frontend automatically calls the generate-verify-token endpoint
3. The generated token is displayed to the user in an alert
4. The token is saved in the integration's config field

### User Experience
Users no longer need to manually create verify tokens. The system automatically generates a secure token and displays it to them for use in their Facebook app configuration.

## API Usage

### Generate Verify Token
```javascript
POST /api/integrations/123/generate-verify-token
Authorization: Bearer <jwt-token>

Response:
{
  "message": "Verify token generated successfully",
  "verifyToken": "a1b2c3d4e5f6...",
  "integration": {
    "id": 123,
    "type": "facebook",
    "config": {
      "pageId": "123456789",
      "appId": "987654321",
      "verifyToken": "a1b2c3d4e5f6..."
    }
  }
}
```

## Testing
Comprehensive tests have been implemented to verify:
1. Verify token generation for Facebook integrations
2. Proper rejection of requests for non-Facebook integrations
3. Correct storage and retrieval of the verify token in the database
4. Security checks for user ownership verification

All tests are passing, confirming that the implementation works correctly.