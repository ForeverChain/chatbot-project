import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';

const Integrations = () => {
  const { chatbotId } = useParams();
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingIntegration, setEditingIntegration] = useState(null);
  const [formData, setFormData] = useState({
    type: 'web',
    token: '',
    config: {}
  });

  const platformOptions = [
    { value: 'web', label: 'Web Chat' },
    { value: 'facebook', label: 'Facebook Messenger' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'telegram', label: 'Telegram' }
  ];

  useEffect(() => {
    fetchIntegrations();
  }, [chatbotId]);

  const fetchIntegrations = async () => {
    try {
      const res = await axiosInstance.get(`/integrations/chatbot/${chatbotId}`);
      setIntegrations(res.data);
    } catch (err) {
      setError('Failed to fetch integrations');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingIntegration(null);
    setFormData({ 
      type: 'web', 
      token: '',
      config: {}
    });
    setShowModal(true);
  };

  const handleEdit = (integration) => {
    setEditingIntegration(integration);
    setFormData({
      type: integration.type,
      token: integration.token || '',
      config: integration.config || {}
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this integration?')) {
      try {
        await axiosInstance.delete(`/integrations/${id}`);
        setIntegrations(integrations.filter(integration => integration.id !== id));
      } catch (err) {
        setError('Failed to delete integration');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare data for submission
      const submitData = {
        type: formData.type,
        chatbotId
      };
      
      // Add token if provided
      if (formData.token) {
        submitData.token = formData.token;
      }
      
      // Add config if provided
      if (Object.keys(formData.config).length > 0) {
        submitData.config = formData.config;
      }
      
      let res;
      if (editingIntegration) {
        // Update existing integration
        res = await axiosInstance.put(`/integrations/${editingIntegration.id}`, submitData);
        setIntegrations(integrations.map(i => i.id === editingIntegration.id ? res.data : i));
      } else {
        // Create new integration
        res = await axiosInstance.post('/integrations', submitData);
        setIntegrations([...integrations, res.data]);
      }
      setShowModal(false);
    } catch (err) {
      setError('Failed to save integration');
    }
  };

  const handleConfigChange = (field, value) => {
    setFormData({
      ...formData,
      config: {
        ...formData.config,
        [field]: value
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
          <button
            onClick={handleCreate}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Integration
          </button>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4 mb-6">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {integrations.map((integration) => (
              <li key={integration.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-indigo-600 truncate">
                      {platformOptions.find(p => p.value === integration.type)?.label || integration.type}
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <button
                        onClick={() => handleEdit(integration)}
                        className="mr-2 text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(integration.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {integration.type === 'facebook' && integration.config && (
                          <span>Page ID: {integration.config.pageId}</span>
                        )}
                        {integration.type !== 'facebook' && (
                          <span>Configuration: {JSON.stringify(integration.config || {}).substring(0, 50)}...</span>
                        )}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>
                        Created {new Date(integration.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {editingIntegration ? 'Edit Integration' : 'Add Integration'}
                        </h3>
                        <div className="mt-4">
                          <div className="mb-4">
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                              Platform
                            </label>
                            <select
                              id="type"
                              name="type"
                              required
                              value={formData.type}
                              onChange={(e) => setFormData({...formData, type: e.target.value})}
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              {platformOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          {formData.type === 'facebook' ? (
                            <div className="space-y-4">
                              <div>
                                <label htmlFor="pageAccessToken" className="block text-sm font-medium text-gray-700">
                                  Page Access Token
                                </label>
                                <input
                                  type="password"
                                  id="pageAccessToken"
                                  name="pageAccessToken"
                                  value={formData.token}
                                  onChange={(e) => setFormData({...formData, token: e.target.value})}
                                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  placeholder="Enter your Facebook Page Access Token"
                                />
                                <p className="mt-1 text-sm text-gray-500">
                                  Get this from Facebook Developer Portal
                                </p>
                              </div>
                              
                              <div>
                                <label htmlFor="pageId" className="block text-sm font-medium text-gray-700">
                                  Facebook Page ID
                                </label>
                                <input
                                  type="text"
                                  id="pageId"
                                  name="pageId"
                                  value={formData.config.pageId || ''}
                                  onChange={(e) => handleConfigChange('pageId', e.target.value)}
                                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  placeholder="Enter your Facebook Page ID"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="verifyToken" className="block text-sm font-medium text-gray-700">
                                  Verify Token
                                </label>
                                <input
                                  type="text"
                                  id="verifyToken"
                                  name="verifyToken"
                                  value={formData.config.verifyToken || ''}
                                  onChange={(e) => handleConfigChange('verifyToken', e.target.value)}
                                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  placeholder="Enter your Verify Token"
                                />
                                <p className="mt-1 text-sm text-gray-500">
                                  This is used to verify your webhook with Facebook
                                </p>
                              </div>
                              
                              <div className="bg-blue-50 p-4 rounded-md">
                                <h4 className="text-sm font-medium text-blue-800 mb-2">Webhook URL</h4>
                                <p className="text-sm text-blue-700">
                                  Set your Facebook webhook URL to: 
                                  <code className="block mt-1 p-2 bg-white rounded text-xs">
                                    http://your-domain.com/api/integrations/facebook/webhook
                                  </code>
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <label htmlFor="token" className="block text-sm font-medium text-gray-700">
                                Token/Key
                              </label>
                              <input
                                type="password"
                                id="token"
                                name="token"
                                value={formData.token}
                                onChange={(e) => setFormData({...formData, token: e.target.value})}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your API token/key"
                              />
                              
                              <label htmlFor="config" className="block text-sm font-medium text-gray-700 mt-4">
                                Configuration (JSON)
                              </label>
                              <textarea
                                id="config"
                                name="config"
                                rows={6}
                                value={JSON.stringify(formData.config, null, 2)}
                                onChange={(e) => {
                                  try {
                                    const parsed = JSON.parse(e.target.value);
                                    setFormData({...formData, config: parsed});
                                  } catch (err) {
                                    // If invalid JSON, keep as string
                                    setFormData({...formData, config: e.target.value});
                                  }
                                }}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono"
                                placeholder='{"apiKey": "your-api-key", "pageId": "your-page-id"}'
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Integrations;