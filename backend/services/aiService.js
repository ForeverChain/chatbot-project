const natural = require('natural');
const axios = require('axios');

// Initialize natural language processing
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;
const sw = require('stopword');

class AIService {
  constructor() {
    // Initialize intent recognition for English
    this.intents = {
      greeting: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
      goodbye: ['bye', 'goodbye', 'see you', 'farewell', 'take care'],
      help: ['help', 'support', 'assist', 'assistance', 'need help'],
      thanks: ['thank you', 'thanks', 'appreciate', 'grateful'],
      info: ['information', 'info', 'details', 'tell me', 'what is', 'how does'],
    };

    // Initialize intent recognition for Mongolian
    this.mongolianIntents = {
      greeting: ['сайн байна уу', 'сайн уу', 'өглөөний мэнд', 'оройны мэнд', 'сайхан байна уу'],
      goodbye: ['баяртай', 'үүрэх', 'дахин уулзая', 'харамсалтай'],
      help: ['тусламж', 'туслаач', 'тусламж хэрэгтэй', 'тусална уу'],
      thanks: ['баярлалаа', 'үнэхээр баярлалаа', 'их баярлалаа', 'танд баярлалаа'],
      info: ['мэдээлэл', 'мэдээлэл өгнө үү', 'юу вэ', 'хэрхэн вэ'],
    };

    // Initialize response templates for English
    this.responses = {
      greeting: [
        "Hello! How can I assist you today?",
        "Hi there! What can I help you with?",
        "Greetings! How may I be of service?"
      ],
      goodbye: [
        "Goodbye! Have a great day!",
        "See you later! Take care!",
        "Farewell! Feel free to reach out if you need anything else."
      ],
      help: [
        "I'm here to help! What do you need assistance with?",
        "Sure, I can help with that. What specifically do you need?",
        "I'd be happy to assist you. Please tell me more about what you need."
      ],
      thanks: [
        "You're welcome! Is there anything else I can help with?",
        "Happy to help! Let me know if you need anything else.",
        "My pleasure! Feel free to ask if you have more questions."
      ],
      info: [
        "I can provide information on that. What specifically would you like to know?",
        "That's a great question. Let me share what I know about that.",
        "I have some information on that topic. Would you like me to share it?"
      ],
      default: [
        "I understand. Can you tell me more about that?",
        "That's interesting. How can I help you further?",
        "Thanks for sharing. What else would you like to know?",
        "I'm here to help. Is there anything specific you'd like assistance with?",
        "I've processed your request. How else can I be of service?"
      ]
    };

    // Initialize response templates for Mongolian
    this.mongolianResponses = {
      greeting: [
        "Сайн байна уу! Би танд өнөөдөр яаж тусалж чадах вэ?",
        "Сайн уу! Би танд ямар тусалж чадах вэ?",
        "Өглөөний мэнд! Би танд яаж тусалж чадах вэ?"
      ],
      goodbye: [
        "Баяртай! Сайхан өдрийг танд хүсье!",
        "Дахин уулзая! Анхааралтай байгаарай!",
        "Үүрэх! Хэрэв танд ямар нэгэн зүйл хэрэгтэй бол над руу хандана уу."
      ],
      help: [
        "Би туслахад бэлэн! Танд ямар тусламж хэрэгтэй вэ?",
        "Тиймээ, би танд тусалж чадна. Та яг одоо юу хэрэгтэй вэ?",
        "Би танд тусалж дуртай. Та өөрийн хэрэгцээгээ дэлгэрэнгүй тайлбарлана уу."
      ],
      thanks: [
        "Хүлээн авна уу! Та өөр ямар нэгэн зүйлд хэрэгтэй юу?",
        "Тусалж байгаад баярлалаа! Хэрэв танд өөр юу хэрэгтэй бол над руу хандана уу.",
        "Миний хүсэл! Хэрэв танд асуух зүйл илүү байвал асуугаарай."
      ],
      info: [
        "Би тухай мэдээлэл өгч чадна. Та яг одоо юу мэдэхийг хүсэж байна вэ?",
        "Энэ бол сайн асуулт. Би энийг мэддэг зүйлээ таньд хуваалцая.",
        "Би энэ сэдэвт хамаарах мэдээлэлтэй. Та үүнийг хуваалцахыг хүсч буй өөр зүйл байна уу?"
      ],
      default: [
        "Би ойлголоо. Та энийг талаар дэлгэрэнгүй тайлбарлаж чадах уу?",
        "Энэ сонирхолтой. Би танд цаашид яаж тусалж чадах вэ?",
        "Хуваалцсанд баярлалаа. Та өөрийн мэдэхийг хүсч буй өөр зүйл байна уу?",
        "Би туслахад бэлэн. Та тодорхой хүсэлтэй байна уу?",
        "Би таны хүсэлтийг боловсрууллаа. Би танд өөр ямар аргаар тусалж чадах вэ?"
      ]
    };
  }

  // Detect language (simple implementation)
  detectLanguage(text) {
    // Simple language detection based on character sets
    // Mongolian Cyrillic characters
    const mongolianChars = /[А-Яа-яЁё]/; // Cyrillic characters used in Mongolian
    
    // English characters
    const englishChars = /[a-zA-Z]/;
    
    let mongolianCount = 0;
    let englishCount = 0;
    
    // Count characters of each type
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (mongolianChars.test(char)) {
        mongolianCount++;
      } else if (englishChars.test(char)) {
        englishCount++;
      }
    }
    
    // If there are more Mongolian characters, assume it's Mongolian
    if (mongolianCount > englishCount) {
      return 'mongolian';
    }
    // If there are English characters and more English than Mongolian, assume it's English
    else if (englishCount > 0) {
      return 'english';
    }
    // Default to English
    else {
      return 'english';
    }
  }

  // Preprocess text for analysis
  preprocessText(text) {
    // Convert to lowercase
    let processed = text.toLowerCase();
    
    // Tokenize
    let tokens = tokenizer.tokenize(processed);
    
    // Remove stopwords
    tokens = sw.removeStopwords(tokens);
    
    // Stem words
    tokens = tokens.map(token => stemmer.stem(token));
    
    return tokens;
  }

  // Identify intent from user message
  identifyIntent(message) {
    const language = this.detectLanguage(message);
    const messageText = message.toLowerCase();
    
    // Choose the appropriate intents based on language
    const intents = language === 'mongolian' ? this.mongolianIntents : this.intents;
    
    // Check for exact matches first
    for (const [intent, keywords] of Object.entries(intents)) {
      for (const keyword of keywords) {
        if (messageText.includes(keyword)) {
          return { intent, language };
        }
      }
    }
    
    // If no exact match found, check with preprocessing
    const tokens = this.preprocessText(message);
    for (const [intent, keywords] of Object.entries(intents)) {
      for (const keyword of keywords) {
        const stemmedKeyword = stemmer.stem(keyword);
        if (tokens.includes(stemmedKeyword)) {
          return { intent, language };
        }
      }
    }
    
    return { intent: 'default', language };
  }

  // Generate a response based on the conversation history and intent
  async generateResponse(conversationHistory) {
    // Get the latest user message
    const latestMessage = conversationHistory[conversationHistory.length - 1];
    
    if (latestMessage.sender !== 'user') {
      // If the latest message is from the bot, don't respond
      return null;
    }
    
    // Identify intent and language
    const { intent, language } = this.identifyIntent(latestMessage.content);
    
    // Get appropriate response templates based on language
    const responses = language === 'mongolian' ? this.mongolianResponses : this.responses;
    const templates = responses[intent] || responses.default;
    
    // Select a random response from templates
    const randomIndex = Math.floor(Math.random() * templates.length);
    let response = templates[randomIndex];
    
    // Enhance response with context from conversation history
    response = this.enhanceResponseWithContext(response, conversationHistory, language);
    
    return response;
  }

  // Enhance response with context from conversation history
  enhanceResponseWithContext(response, conversationHistory, language) {
    // Extract key information from conversation history
    const userMessages = conversationHistory
      .filter(msg => msg.sender === 'user')
      .map(msg => msg.content);
      
    if (userMessages.length === 0) {
      return response;
    }
    
    // Get the last user message for context
    const lastUserMessage = userMessages[userMessages.length - 1];
    
    // Simple context enhancement (in a real implementation, you would use more sophisticated NLP)
    if (language === 'english') {
      if (lastUserMessage.toLowerCase().includes('name') && response.includes('I')) {
        return response.replace('I', 'I am');
      }
      
      if (lastUserMessage.toLowerCase().includes('help') && response.includes('help')) {
        return response.replace('help', 'assist you with that');
      }
    } else if (language === 'mongolian') {
      // Add Mongolian-specific context enhancements here if needed
    }
    
    return response;
  }

  // Extract keywords from text
  extractKeywords(text) {
    const tokens = this.preprocessText(text);
    return [...new Set(tokens)]; // Remove duplicates
  }

  // Calculate similarity between two texts
  calculateSimilarity(text1, text2) {
    const tokens1 = this.preprocessText(text1);
    const tokens2 = this.preprocessText(text2);
    
    // Simple Jaccard similarity
    const intersection = tokens1.filter(token => tokens2.includes(token));
    const union = [...new Set([...tokens1, ...tokens2])];
    
    return union.length > 0 ? intersection.length / union.length : 0;
  }
}

module.exports = new AIService();