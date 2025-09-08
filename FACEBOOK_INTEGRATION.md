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

## Quick Replies (Buttons) Support

The Facebook integration now supports sending messages with quick replies (buttons) to enhance user interaction. When a chatbot flow contains a question node with options, these options are automatically converted to quick replies in Facebook Messenger.

### How It Works

1. When a flow contains a question node, the options are extracted
2. These options are sent as quick replies along with the question text
3. Users can click on the quick reply buttons instead of typing their response
4. The button payload is processed the same way as typed text

### Technical Implementation

The `sendMessage` function in the Facebook service has been updated to support an optional `options` parameter:

```javascript
async sendMessage(integration, senderPsid, messageText, options = null)
```

When options are provided, they are converted to Facebook quick replies format:
- Up to 13 quick replies are supported (Facebook limitation)
- Each quick reply has a title (text) and payload
- Titles are truncated to 20 characters to meet Facebook requirements

### Example Usage

```javascript
// Sending a message with quick replies
await facebookService.sendMessage(
  integration,
  senderPsid,
  "What is your favorite color?",
  [
    { text: "Red", payload: "RED" },
    { text: "Blue", payload: "BLUE" },
    { text: "Green", payload: "GREEN" }
  ]
);
```

This will display the message "What is your favorite color?" with three buttons: "Red", "Blue", and "Green" in Facebook Messenger.

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
5. Quick replies functionality

All tests are passing, confirming that the Facebook integration works correctly with all required fields and supports quick replies.

## Common Issues and Troubleshooting

### "No matching user found" Error

This error typically occurs when:

1. The PSID (Page Scoped ID) is invalid
2. The user hasn't initiated a conversation with the page yet
3. The message is being sent to a page ID instead of a user PSID

To resolve this issue:

1. Ensure the user has sent a message to your Facebook page first
2. Verify that you're using the correct PSID (from the `sender.id` field in the webhook)
3. Check that you're not accidentally using the page ID as the recipient

### Page ID Matching Issues

If the webhook isn't finding the correct integration:

1. Verify that the page ID in your integration config matches the one received in the webhook
2. Check for type mismatches (string vs number)
3. Ensure the page access token is valid

You can use the debug scripts in `backend/test/` to help troubleshoot these issues.