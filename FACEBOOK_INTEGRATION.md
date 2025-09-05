# Facebook Integration Implementation

## Overview
This document describes the implementation of Facebook integration with the three required fields: type, token, and config.

## Database Schema Changes
We added a `config` field to the `integration` table to store Facebook-specific configuration data:

```sql
-- AlterTable
ALTER TABLE `integration` ADD COLUMN `config` TEXT NULL,
    MODIFY `token` TEXT NULL;
```

## Required Fields for Facebook Integration

1. **Type** (`type`): String field identifying the integration type
   - Value: "facebook"

2. **Token** (`token`): String field for the Facebook Page Access Token
   - Used for authenticating API requests to Facebook

3. **Config** (`config`): JSON object containing additional configuration
   - `pageId`: Facebook Page ID
   - `verifyToken`: Token used for webhook verification
   - `appId`: Facebook App ID

## API Usage

### Creating a Facebook Integration
```javascript
POST /integrations
{
  "chatbotId": 1,
  "type": "facebook",
  "token": "EAAG...",
  "config": {
    "pageId": "1234567890",
    "verifyToken": "my-verify-token",
    "appId": "987654321"
  }
}
```

### Response
```javascript
{
  "id": 1,
  "userId": 1,
  "type": "facebook",
  "token": "EAAG...",
  "config": {
    "pageId": "1234567890",
    "verifyToken": "my-verify-token",
    "appId": "987654321"
  },
  "createdAt": "2025-09-05T00:00:00.000Z",
  "updatedAt": "2025-09-05T00:00:00.000Z"
}
```

## Service Implementation

The Facebook service extracts credentials from the integration:

```javascript
getCredentials(integration) {
  return {
    pageAccessToken: integration.token || this.defaultPageAccessToken,
    verifyToken: (integration.config && integration.config.verifyToken) || this.defaultVerifyToken,
    appSecret: this.defaultAppSecret
  };
}
```

## Testing

We've implemented comprehensive tests to verify:
1. Creation of Facebook integrations with all three required fields
2. Proper parsing of the config JSON field
3. Correct extraction of credentials by the Facebook service
4. Webhook verification functionality

All tests are passing, confirming that the Facebook integration works correctly with all required fields.