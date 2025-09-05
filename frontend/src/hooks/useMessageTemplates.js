import { useState } from 'react';
import axios from 'axios';

const useMessageTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Use environment variable for API base URL, with a fallback
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3003';

  const fetchTemplates = async (chatbotId) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.get(`${API_BASE_URL}/api/templates/chatbot/${chatbotId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setTemplates(res.data);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch templates');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createTemplate = async (chatbotId, templateData) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.post(`${API_BASE_URL}/api/templates`, 
        { ...templateData, chatbotId },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      setTemplates([...templates, res.data]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create template');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateTemplate = async (templateId, templateData) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.put(`${API_BASE_URL}/api/templates/${templateId}`, templateData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setTemplates(templates.map(template => template.id === templateId ? res.data : template));
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update template');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTemplate = async (templateId) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      await axios.delete(`${API_BASE_URL}/api/templates/${templateId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setTemplates(templates.filter(template => template.id !== templateId));
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete template');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    templates,
    loading,
    error,
    fetchTemplates,
    createTemplate,
    updateTemplate,
    deleteTemplate
  };
};

export default useMessageTemplates;