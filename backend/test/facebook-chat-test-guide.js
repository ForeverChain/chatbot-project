console.log('=== Facebook Chat Testing Guide ===\n');

console.log('1. PREREQUISITES:');
console.log('   - A Facebook Developer Account');
console.log('   - A Facebook Page');
console.log('   - A Facebook App configured for Messenger\n');

console.log('2. DATABASE SETUP:');
console.log('   Create a Facebook integration in your database:');
console.log('   POST /api/integrations');
console.log('   {');
console.log('     "chatbotId": YOUR_CHATBOT_ID,');
console.log('     "type": "facebook",');
console.log('     "token": "YOUR_PAGE_ACCESS_TOKEN",');
console.log('     "config": {');
console.log('       "pageId": "YOUR_FACEBOOK_PAGE_ID",');
console.log('       "verifyToken": "YOUR_VERIFY_TOKEN",');
console.log('       "appId": "YOUR_APP_ID"');
console.log('     }');
console.log('   }\n');

console.log('3. FACEBOOK DEVELOPER CONSOLE SETUP:');
console.log('   - Go to https://developers.facebook.com/');
console.log('   - Select your app');
console.log('   - Go to Messenger > Settings');
console.log('   - In "Webhooks", click "Add Callback URL"');
console.log('   - URL: https://chatbot-project-ymdb.onrender.com/api/integrations/facebook/webhook');
console.log('   - Verify Token: YOUR_VERIFY_TOKEN');
console.log('   - Subscribe to events: messages, messaging_postbacks\n');

console.log('4. PAGE SUBSCRIPTION:');
console.log('   - In the same Messenger settings');
console.log('   - Under "Access Tokens"');
console.log('   - Select your Page and generate a Page Access Token');
console.log('   - Use this token in your database integration\n');

console.log('5. REAL CHAT TESTING:');
console.log('   - Go to your Facebook Page');
console.log('   - Click "Send Message"');
console.log('   - Type a message and send it');
console.log('   - Check your server logs for processing\n');

console.log('6. WHAT TO EXPECT:');
console.log('   - When you send a message, you should see logs like:');
console.log('     "=== FACEBOOK WEBHOOK MESSAGE REQUEST ==="');
console.log('     "Processing message from user XXX: Your message"');
console.log('     "Successfully processed Facebook webhook event"\n');

console.log('7. TROUBLESHOOTING:');
console.log('   - Check server logs for errors');
console.log('   - Verify pageId in database matches Facebook\'s page ID');
console.log('   - Ensure Page Access Token is valid and not expired');
console.log('   - Confirm webhook URL is publicly accessible\n');

console.log('=== END OF GUIDE ===');