const axios = require('axios');

class SocialMediaService {
  // Facebook integration
  async postToFacebook(pageId, accessToken, message) {
    try {
      const response = await axios.post(
        `https://graph.facebook.com/v18.0/${pageId}/feed`,
        {
          message,
          access_token: accessToken,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error posting to Facebook:', error);
      throw error;
    }
  }

  // Instagram integration
  async postToInstagram(accountId, accessToken, message, imageUrl = null) {
    try {
      if (imageUrl) {
        // First, create a media object
        const mediaResponse = await axios.post(
          `https://graph.facebook.com/v18.0/${accountId}/media`,
          {
            image_url: imageUrl,
            caption: message,
            access_token: accessToken,
          }
        );

        // Then publish the media
        const publishResponse = await axios.post(
          `https://graph.facebook.com/v18.0/${accountId}/media_publish`,
          {
            creation_id: mediaResponse.data.id,
            access_token: accessToken,
          }
        );

        return publishResponse.data;
      } else {
        // For text-only posts, we need to use Facebook API as Instagram doesn't support text-only posts
        const response = await axios.post(
          `https://graph.facebook.com/v18.0/${accountId}/feed`,
          {
            message,
            access_token: accessToken,
          }
        );
        return response.data;
      }
    } catch (error) {
      console.error('Error posting to Instagram:', error);
      throw error;
    }
  }

  // Get Facebook pages for a user
  async getFacebookPages(accessToken) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/me/accounts?access_token=${accessToken}`
      );
      return response.data.data;
    } catch (error) {
      console.error('Error fetching Facebook pages:', error);
      throw error;
    }
  }

  // Get Instagram accounts for a user
  async getInstagramAccounts(accessToken) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/me/accounts?access_token=${accessToken}`
      );
      
      // Filter for Instagram accounts
      const instagramAccounts = response.data.data.filter(
        account => account.instagram_business_account
      );
      
      return instagramAccounts;
    } catch (error) {
      console.error('Error fetching Instagram accounts:', error);
      throw error;
    }
  }
}

module.exports = new SocialMediaService();