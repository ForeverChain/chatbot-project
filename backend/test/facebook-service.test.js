const facebookService = require('../services/facebookService');

describe('Facebook Service', () => {
  describe('getCredentials', () => {
    it('should extract credentials from integration with config', () => {
      const integration = {
        token: 'page-access-token',
        config: {
          verifyToken: 'verify-token',
          pageId: 'page-id',
          appId: 'app-id'
        }
      };

      const credentials = facebookService.getCredentials(integration);
      
      expect(credentials).toEqual({
        pageAccessToken: 'page-access-token',
        verifyToken: 'verify-token',
        appSecret: process.env.FACEBOOK_APP_SECRET // This will be undefined in test
      });
    });

    it('should use default values when integration fields are missing', () => {
      const integration = {
        // No token or config
      };

      // Set default values for testing
      process.env.FACEBOOK_PAGE_ACCESS_TOKEN = 'default-page-token';
      process.env.FACEBOOK_VERIFY_TOKEN = 'default-verify-token';
      process.env.FACEBOOK_APP_SECRET = 'default-app-secret';
      
      facebookService.defaultPageAccessToken = 'default-page-token';
      facebookService.defaultVerifyToken = 'default-verify-token';
      facebookService.defaultAppSecret = 'default-app-secret';

      const credentials = facebookService.getCredentials(integration);
      
      expect(credentials).toEqual({
        pageAccessToken: 'default-page-token',
        verifyToken: 'default-verify-token',
        appSecret: 'default-app-secret'
      });
    });
  });

  describe('verifyWebhook', () => {
    it('should verify webhook with correct credentials', () => {
      const integration = {
        token: 'page-access-token',
        config: {
          verifyToken: 'verify-token'
        }
      };

      const result = facebookService.verifyWebhook(
        integration,
        'subscribe',
        'verify-token',
        'challenge-string'
      );
      
      expect(result).toEqual({
        success: true,
        challenge: 'challenge-string'
      });
    });

    it('should reject webhook with incorrect verify token', () => {
      const integration = {
        token: 'page-access-token',
        config: {
          verifyToken: 'correct-verify-token'
        }
      };

      const result = facebookService.verifyWebhook(
        integration,
        'subscribe',
        'incorrect-verify-token',
        'challenge-string'
      );
      
      expect(result).toEqual({
        success: false,
        status: 403
      });
    });
  });
});