import { useState, useEffect } from 'react';
import axios from 'axios';

const useChatbots = () => {
  const [chatbots, setChatbots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchChatbots = async () => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3003/api/chatbots', {
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
      const res = await axios.post('http://localhost:3003/api/chatbots', chatbotData, {
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
      const res = await axios.put(`http://localhost:3003/api/chatbots/${id}`, chatbotData, {
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
      await axios.delete(`http://localhost:3003/api/chatbots/${id}`, {
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