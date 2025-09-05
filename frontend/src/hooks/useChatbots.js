import { useState, useEffect } from 'react';
import axios from 'axios';

const useChatbots = () => {
  const [chatbots, setChatbots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Use environment variable for API base URL, with a fallback
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3003';

  const fetchChatbots = async () => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.get(`${API_BASE_URL}/api/chatbots`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setChatbots(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch chatbots');
    } finally {
      setLoading(false);
    }
  };

  const createChatbot = async (chatbotData) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.post(`${API_BASE_URL}/api/chatbots`, chatbotData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setChatbots([...chatbots, res.data]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create chatbot');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateChatbot = async (id, chatbotData) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.put(`${API_BASE_URL}/api/chatbots/${id}`, chatbotData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setChatbots(chatbots.map(chatbot => chatbot.id === id ? res.data : chatbot));
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update chatbot');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteChatbot = async (id) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      await axios.delete(`${API_BASE_URL}/api/chatbots/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setChatbots(chatbots.filter(chatbot => chatbot.id !== id));
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete chatbot');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChatbots();
  }, []);

  return {
    chatbots,
    loading,
    error,
    fetchChatbots,
    createChatbot,
    updateChatbot,
    deleteChatbot
  };
};

export default useChatbots;