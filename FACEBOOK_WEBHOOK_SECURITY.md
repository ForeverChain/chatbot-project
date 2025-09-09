# Facebook Webhook Security and Testing Guide

## Overview

This document explains the security mechanisms for Facebook webhooks and how to properly test them without requiring client certificates.

## Facebook Webhook Security Mechanisms

### 1. URL Verification

When you first set up a webhook, Facebook sends a GET request to verify your endpoint:

```
GET /webhook?hub.mode=subscribe&hub.challenge=CHALLENGE&hub.verify_token=TOKEN
```

Your server must:
- Verify the `hub.verify_token` matches your configured token
- Respond with the `hub.challenge` value and HTTP 200

### 2. Request Signature Verification

For all POST requests, Facebook includes signatures in headers:
- `x-hub-signature` (SHA1 hash)
- `x-hub-signature-256` (SHA256 hash)

Your server should verify these signatures to ensure requests come from Facebook.

## Implementation Details

### Signature Verification Process

1. Extract the signature from headers
2. Generate a hash using your App Secret and request payload
3. Compare signatures using a timing-safe comparison function
4. Reject requests with invalid signatures

### Code Example

```javascript
verifySignature(signature, payload) {
  if (!this.defaultAppSecret) return true; // Skip in development
  if (!signature) return false; // No signature provided
  
  try {
    // Extract hash from signature
    const signatureHash = signature.split('sha256=')[1] || signature.split('sha1=')[1];
    if (!signatureHash) return false;
    
    // Determine algorithm
    const algorithm = signature.includes('sha256=') ? 'sha256' : 'sha1';
    
    // Generate expected hash
    const expectedHash = crypto
      .createHmac(algorithm, this.defaultAppSecret)
      .update(payload, 'utf8')
      .digest('hex');
    
    // Timing-safe comparison
    const expectedSignature = `${algorithm}=${expectedHash}`;
    return crypto.timingSafeEqual(
      Buffer.from(signature, 'utf8'),
      Buffer.from(expectedSignature, 'utf8')
    );
  } catch (error) {
    return false;
  }
}
```

## Testing Facebook Webhooks

### Option 1: Facebook's Built-in Testing Tools

Facebook provides testing tools in the Developer Console:
1. Go to your app in Facebook Developers
2. Navigate to Messenger > Webhooks
3. Use the "Test" button to send sample payloads
4. Monitor your server logs for processing

### Option 2: Manual Testing with curl

```bash
# Test webhook verification
curl -X GET "https://your-domain.com/api/integrations/facebook/webhook?hub.mode=subscribe&hub.challenge=123456&hub.verify_token=your_token"

# Test message webhook
curl -X POST "https://your-domain.com/api/integrations/facebook/webhook" \
  -H "Content-Type: application/json" \
  -H "x-hub-signature-256: sha256=signature_here" \
  -d '{"object":"page","entry":[{"id":"123","messaging":[{"sender":{"id":"456"},"message":{"text":"Hello"}}]}]}'
```

### Option 3: Using the Test Scripts

Run the test scripts we've created:
```bash
cd backend
node test/simulate-facebook-chat.js
```

## Client Certificates: Do You Need Them?

### Short Answer: No

Facebook webhooks do not require client certificates. Facebook uses signature verification instead.

### When You Might Consider Client Certificates

1. Enterprise security requirements
2. Internal systems with mutual TLS
3. Custom security implementations

### How to Implement (If Needed)

Client certificate validation is typically done at the server/proxy level:

**Nginx Configuration:**
```nginx
ssl_client_certificate /path/to/ca-cert.pem;
ssl_verify_client on;
```

**Node.js HTTPS Server:**
```javascript
const options = {
  requestCert: true,
  rejectUnauthorized: true,
  ca: [fs.readFileSync('ca-cert.pem')]
};
https.createServer(options, app).listen(443);
```

## Best Practices

### Security
1. Always verify signatures in production
2. Use HTTPS for all webhook endpoints
3. Keep your App Secret secure
4. Validate all incoming data
5. Implement rate limiting

### Testing
1. Test with Facebook's built-in tools first
2. Monitor server logs during testing
3. Test various message types
4. Verify error handling
5. Test with invalid signatures

### Monitoring
1. Log all webhook requests
2. Monitor for failed verifications
3. Set up alerts for errors
4. Track message processing times

## Common Issues and Solutions

### 1. Signature Verification Fails
- Check that your App Secret is correct
- Ensure you're using the right signature header
- Verify payload encoding

### 2. Webhook Verification Fails
- Check that your verify token matches
- Ensure your endpoint responds correctly
- Verify the challenge is echoed back

### 3. Messages Not Received
- Check if your app is published
- Verify Page subscription
- Confirm webhook URL is accessible

## Conclusion

For standard Facebook webhook integration:
- Focus on proper signature verification
- Use Facebook's testing tools
- Monitor your server logs
- Client certificates are not required

Only implement client certificates if specifically required by your organization's security policies.