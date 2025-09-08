import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chat from '../components/Chat';
import axios from '../services/axiosInstance';

const ChatPage = () => {
  const { chatbotId } = useParams();
  const [user, setUser] = useState(null);
  const [chatbot, setChatbot] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      window.location.href = '/login';
      return;
    }
    
    setUser(JSON.parse(userData));
    fetchChatbot(token);
  }, [chatbotId]);

  const fetchChatbot = async (token) => {
    try {
      const response = await axios.get(`/chatbots/${chatbotId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setChatbot(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Чатботыг татаж чадсангүй:', err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg">Ачааллаж байна...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">
            {chatbot?.name || 'Чатбот'}
          </h1>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Буцах
          </button>
        </div>
      </header>
      
      <main className="flex-1 overflow-hidden p-4">
        <div className="h-full max-w-4xl mx-auto">
          <Chat chatbotId={chatbotId} userId={user?.id} />
        </div>
      </main>
    </div>
  );
};

export default ChatPage;