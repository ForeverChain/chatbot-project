import { useState } from 'react';
import axios from 'axios';

const useFlows = () => {
  const [flows, setFlows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchFlows = async (chatbotId) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.get(`http://localhost:3003/api/flows/chatbot/${chatbotId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setFlows(res.data);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch flows');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createFlow = async (chatbotId, flowData) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.post(`http://localhost:3003/api/flows/chatbot/${chatbotId}`, flowData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setFlows([...flows, res.data]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create flow');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateFlow = async (flowId, flowData) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      const res = await axios.put(`http://localhost:3003/api/flows/${flowId}`, flowData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setFlows(flows.map(flow => flow.id === flowId ? res.data : flow));
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update flow');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteFlow = async (flowId) => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3003/api/flows/${flowId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setFlows(flows.filter(flow => flow.id !== flowId));
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete flow');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    flows,
    loading,
    error,
    fetchFlows,
    createFlow,
    updateFlow,
    deleteFlow
  };
};

export default useFlows;