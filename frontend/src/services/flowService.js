import axiosInstance from './axiosInstance';

class FlowService {
  // Create a new flow
  async createFlow(chatbotId, flowData) {
    try {
      const response = await axiosInstance.post(`/flows/chatbot/${chatbotId}`, flowData);
      return response.data;
    } catch (error) {
      console.error('Error creating flow:', error);
      throw error;
    }
  }

  // Get all flows for a chatbot
  async getFlows(chatbotId) {
    try {
      const response = await axiosInstance.get(`/flows/chatbot/${chatbotId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching flows:', error);
      throw error;
    }
  }

  // Get a specific flow
  async getFlow(flowId) {
    try {
      const response = await axiosInstance.get(`/flows/${flowId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching flow:', error);
      throw error;
    }
  }

  // Update a flow
  async updateFlow(flowId, flowData) {
    try {
      const response = await axiosInstance.put(`/flows/${flowId}`, flowData);
      return response.data;
    } catch (error) {
      console.error('Error updating flow:', error);
      throw error;
    }
  }

  // Delete a flow
  async deleteFlow(flowId) {
    try {
      const response = await axiosInstance.delete(`/flows/${flowId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting flow:', error);
      throw error;
    }
  }
}

export default new FlowService();