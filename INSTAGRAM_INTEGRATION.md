# Instagram Integration Guide

This document explains how to set up Instagram integration for your chatbot.

## Prerequisites

1. A Facebook Business account
2. An Instagram Business account connected to Facebook
3. A Facebook Developer app
4. A Facebook Page connected to your Instagram account

## Setup Process

### 1. Create a Facebook Developer App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app or use an existing one
3. Add the Instagram product to your app

### 2. Configure Instagram Integration

1. In your chatbot dashboard, select "Instagram" as the platform
2. Obtain the required credentials:
   - Page Access Token (same as Facebook)
   - Instagram Account ID
   - App Secret

### 3. Webhook Configuration

Instagram uses the same Graph API endpoints as Facebook Messenger for messaging. The webhook URLs are:

- Verification URL: `/api/integrations/instagram/webhook`
- Message webhook URL: `/api/integrations/instagram/webhook`

### 4. Integration with Your Chatbot

Once configured, your Instagram messages will be processed through the same chatbot logic as Facebook Messenger.

## Technical Details

Instagram integration shares the same backend implementation as Facebook integration, with the following considerations:

1. Instagram uses the Facebook Graph API for messaging
2. The same verification and message processing logic applies
3. Instagram-specific webhooks are handled at `/api/integrations/instagram/webhook`

## Troubleshooting

If you encounter issues:

1. Verify your Instagram account is properly connected to your Facebook Page
2. Ensure your Page Access Token has the required permissions
3. Check that your webhook URLs are correctly configured in the Facebook Developer Console