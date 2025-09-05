class BotTemplateService {
  // Get all available bot templates
  getTemplates() {
    return [
      {
        id: 'customer-support',
        name: 'Customer Support',
        description: 'A bot designed to handle customer inquiries and support requests',
        config: {
          greeting: 'Hello! How can I help you today?',
          personality: 'helpful',
          topics: ['returns', 'shipping', 'product-info', 'account'],
          responses: {
            returns: 'You can return items within 30 days of purchase. Please visit our returns page for more information.',
            shipping: 'We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.',
            'product-info': 'I can help you find information about our products. What are you looking for?',
            account: 'You can manage your account settings in the account section of our website.'
          }
        }
      },
      {
        id: 'lead-generation',
        name: 'Lead Generation',
        description: 'A bot designed to capture leads and schedule appointments',
        config: {
          greeting: 'Hi there! Are you interested in learning more about our services?',
          personality: 'friendly',
          topics: ['services', 'pricing', 'appointment', 'more-info'],
          responses: {
            services: 'We offer a range of services including consulting, training, and implementation.',
            pricing: 'Our pricing varies based on your needs. Can you tell me more about what you\'re looking for?',
            appointment: 'I\'d be happy to schedule a consultation. When would you prefer to meet?',
            'more-info': 'I can send you more information via email. What\'s the best email address to reach you?'
          }
        }
      },
      {
        id: 'ecommerce',
        name: 'E-commerce Assistant',
        description: 'A bot designed to help customers find products and make purchases',
        config: {
          greeting: 'Welcome to our store! How can I help you find what you\'re looking for today?',
          personality: 'enthusiastic',
          topics: ['products', 'recommendations', 'deals', 'checkout'],
          responses: {
            products: 'We have a wide range of products. What category interests you?',
            recommendations: 'Based on popular choices, I recommend checking out our bestsellers.',
            deals: 'We have several ongoing promotions. Would you like me to tell you about them?',
            checkout: 'You can checkout securely on our website. Need help with anything specific?'
          }
        }
      },
      {
        id: 'hr-assistant',
        name: 'HR Assistant',
        description: 'A bot designed to answer employee questions about HR policies',
        config: {
          greeting: 'Hello! I\'m here to help with HR-related questions. What would you like to know?',
          personality: 'professional',
          topics: ['benefits', 'pto', 'policies', 'onboarding'],
          responses: {
            benefits: 'Our benefits package includes health insurance, dental, and vision coverage.',
            pto: 'Full-time employees accrue 15 days of PTO per year, increasing with tenure.',
            policies: 'You can find all company policies in the employee handbook on our intranet.',
            onboarding: 'Welcome! Your onboarding checklist is available in the new hire portal.'
          }
        }
      }
    ];
  }

  // Get a specific template by ID
  getTemplateById(templateId) {
    const templates = this.getTemplates();
    return templates.find(template => template.id === templateId);
  }
}

module.exports = new BotTemplateService();