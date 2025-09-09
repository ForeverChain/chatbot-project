import React, { useState, useRef, useEffect } from 'react';
import axios from '../services/axiosInstance';

const Chat = ({ chatbotId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  // Use a consistent conversation ID for this user and chatbot combination
  const [conversationId] = useState(() => `web_${userId}_${chatbotId}`);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;
    
    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Send message to backend
      const response = await axios.post(`/chat/chat/${chatbotId}`, {
        message: inputValue,
        userId: conversationId // Use conversationId instead of userId
      });
      
      // Add bot response to chat
      // Handle both string responses and object responses
      let botResponseContent = '';
      let botResponseOptions = null;
      let botResponseType = 'message';
      
      if (typeof response.data.response === 'string') {
        botResponseContent = response.data.response;
      } else if (response.data.response && response.data.response.text) {
        botResponseContent = response.data.response.text;
        botResponseOptions = response.data.response.options;
        botResponseType = response.data.response.type || 'message';
      } else {
        botResponseContent = 'Хариулт...';
      }
      
      const botMessage = {
        id: Date.now() + 1,
        content: botResponseContent,
        sender: 'bot',
        timestamp: new Date(),
        options: botResponseOptions,
        type: botResponseType
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message to chat
      const errorMessage = {
        id: Date.now() + 1,
        content: 'Уучлаарай, алдаа гарлаа. Дахин оролдоно уу.',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  // Handle quick reply button click
  const handleQuickReplyClick = (optionText) => {
    if (isLoading) return;
    
    setInputValue(optionText);
    // Trigger form submission
    const form = document.querySelector('form');
    if (form) {
      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Чатбот</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Чатботтой ярилцахыг эхлүүлэхийн тулд мессеж бичнэ үү.
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id}>
              <div
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="text-sm">{message.content}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
              
              {/* Render quick reply buttons if they exist */}
              {message.sender === 'bot' && message.options && message.options.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2 justify-start">
                  {message.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReplyClick(option.text)}
                      className="px-3 py-1 bg-white border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      disabled={isLoading}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Мессежээ бичнэ үү..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={isLoading || !inputValue.trim()}
          >
            Илгээх
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;