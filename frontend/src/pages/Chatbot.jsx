import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';
import FlowBuilder from './FlowBuilder';

let socket;

const Chatbot = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chatbot, setChatbot] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showCustomization, setShowCustomization] = useState(false);
  const [customization, setCustomization] = useState({});
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showFlows, setShowFlows] = useState(false);
  const [flows, setFlows] = useState([]); // Add back flows state to display flow info
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login');
      return;
    }
    
    // Initialize socket connection
    socket = io('http://localhost:3003');
    
    socket.on('connect', () => {
      console.log('Серверт холбогдлоо');
    });
    
    socket.on('receive_message', (message) => {
      if (message.conversationId === currentConversation?.id) {
        setMessages(prev => [...prev, message]);
      }
    });
    
    fetchChatbot(token);
    fetchConversations(token);
    fetchCustomization(token);
    fetchTemplates(token);
    fetchFlows(token); // Fetch flows to display flow info
    
    return () => {
      socket.disconnect();
    };
  }, [id, navigate, currentConversation?.id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchChatbot = async (token) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/chatbots/${id}`, {
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

  const fetchConversations = async (token) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/conversations/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setConversations(response.data);
    } catch (err) {
      console.error('Харилцан яриаг татаж чадсангүй:', err);
    }
  };

  const fetchCustomization = async (token) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/customization/chatbot/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setCustomization(response.data);
    } catch (err) {
      console.error('Тохиргоог татаж чадсангүй:', err);
    }
  };

  const fetchTemplates = async (token) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/templates/chatbot/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setTemplates(response.data);
    } catch (err) {
      console.error('Загваруудыг татаж чадсангүй:', err);
    }
  };

  const fetchAnalytics = async (token) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/analytics/chatbot/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setAnalytics(response.data);
    } catch (err) {
      console.error('Статистикийг татаж чадсангүй:', err);
    }
  };

  // Fetch flows to display flow info
  const fetchFlows = async (token) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/flows/chatbot/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setFlows(response.data);
    } catch (err) {
      console.error('Урсгалыг татаж чадсангүй:', err);
    }
  };

  const handleCreateConversation = async () => {
    const token = localStorage.getItem('token');
    
    try {
      const response = await axios.post('http://localhost:3003/api/conversations', {
        chatbotId: id
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const newConversation = response.data;
      setConversations(prev => [newConversation, ...prev]);
      setCurrentConversation(newConversation);
      setMessages([]);
      
      // Join the conversation room
      socket.emit('join_conversation', newConversation.id);
    } catch (err) {
      console.error('Харилцан яриа үүсгэж чадсангүй:', err);
    }
  };

  const handleSelectConversation = (conversation) => {
    setCurrentConversation(conversation);
    setMessages(conversation.messages);
    
    // Join the conversation room
    socket.emit('join_conversation', conversation.id);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !currentConversation) return;
    
    const message = {
      conversationId: currentConversation.id,
      content: newMessage,
      sender: 'user'
    };
    
    // Add to local state immediately
    setMessages(prev => [...prev, { ...message, createdAt: new Date() }]);
    setNewMessage('');
    
    // Send to server via socket
    socket.emit('send_message', message);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSaveCustomization = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    try {
      const response = await axios.post(
        `http://localhost:3003/api/customization/chatbot/${id}`,
        customization,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      setCustomization(response.data);
      setShowCustomization(false);
    } catch (err) {
      console.error('Тохиргоог хадгалж чадсангүй:', err);
    }
  };

  const handleApplyTemplate = async (templateId) => {
    const token = localStorage.getItem('token');
    
    try {
      await axios.post(
        `http://localhost:3003/api/templates/chatbot/${id}/apply/${templateId}`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      // Refresh templates
      fetchTemplates(token);
      setShowTemplates(false);
    } catch (err) {
      console.error('Загварыг ашиглаж чадсангүй:', err);
    }
  };

  if (loading) {
    return <div className="chatbot-page">Ачааллаж байна...</div>;
  }

  // Get the active flow for display
  const activeFlow = flows.length > 0 ? flows[0] : null;

  return (
    <div className="chatbot-page">
      <header className="card">
        <h1>{chatbot?.name}</h1>
        <div className="chatbot-actions">
          <button 
            onClick={() => setShowCustomization(!showCustomization)}
            className={`btn ${showCustomization ? 'secondary' : 'outline'}`}
          >
            {showCustomization ? 'Тохиргоог нуух' : 'Тохируулах'}
          </button>
          <button 
            onClick={() => {
              setShowTemplates(!showTemplates);
              if (!showTemplates) setShowAnalytics(false);
            }}
            className={`btn ${showTemplates ? 'secondary' : 'outline'}`}
          >
            {showTemplates ? 'Загварыг нуух' : 'Загварууд'}
          </button>
          <button 
            onClick={() => {
              if (!showAnalytics) fetchAnalytics(localStorage.getItem('token'));
              setShowAnalytics(!showAnalytics);
              if (!showAnalytics) setShowTemplates(false);
            }}
            className={`btn ${showAnalytics ? 'secondary' : 'outline'}`}
          >
            {showAnalytics ? 'Статистикийг нуух' : 'Статистик'}
          </button>
          {/* Button for flows */}
          <button 
            onClick={() => {
              setShowFlows(!showFlows);
              if (!showFlows) {
                setShowTemplates(false);
                setShowAnalytics(false);
                setShowCustomization(false);
              }
            }}
            className={`btn ${showFlows ? 'secondary' : 'outline'}`}
          >
            {showFlows ? 'Урсгалыг нуух' : 'Урсгал'}
          </button>
          <button 
            onClick={() => navigate('/dashboard')} 
            className="btn outline"
          >
            Хяналтын самбарлуу буцах
          </button>
        </div>
      </header>
      
      <div className="chatbot-container">
        <aside className="conversations-sidebar">
          <button onClick={handleCreateConversation} className="btn primary">
            Шинэ харилцан яриа
          </button>
          
          <div className="conversations-list">
            <h3>Харилцан яриа</h3>
            {conversations.map((conversation) => (
              <div 
                key={conversation.id}
                className={`conversation-item ${currentConversation?.id === conversation.id ? 'active' : ''}`}
                onClick={() => handleSelectConversation(conversation)}
              >
                Харилцан яриа {conversation.id}
              </div>
            ))}
          </div>
        </aside>
        
        <main className="chat-main">
          {showCustomization ? (
            <div className="customization-panel">
              <h2>Чатботыг өөрчлөх</h2>
              <form onSubmit={handleSaveCustomization} className="card">
                <div className="form-group">
                  <label htmlFor="botName">Ботын нэр</label>
                  <input
                    type="text"
                    id="botName"
                    value={customization.name || ''}
                    onChange={(e) => setCustomization({...customization, name: e.target.value})}
                    placeholder="Ботын нэрийг оруулна уу"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="greeting">Анхны мэндчилгээ</label>
                  <input
                    type="text"
                    id="greeting"
                    value={customization.greeting || ''}
                    onChange={(e) => setCustomization({...customization, greeting: e.target.value})}
                    placeholder="Жишээ: Сайн байна уу! Танд яаж туслах вэ?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="personality">Хувийн зан ааш</label>
                  <select
                    id="personality"
                    value={customization.personality || ''}
                    onChange={(e) => setCustomization({...customization, personality: e.target.value})}
                  >
                    <option value="">Хувийн зан ааш сонгоно уу</option>
                    <option value="friendly">Найрсаг</option>
                    <option value="professional">Мэргэжлийн</option>
                    <option value="helpful">Тусалдаг</option>
                    <option value="enthusiastic">Идэвхтэй</option>
                    <option value="calm">Тайван</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="tone">Хэлц</label>
                  <select
                    id="tone"
                    value={customization.tone || ''}
                    onChange={(e) => setCustomization({...customization, tone: e.target.value})}
                  >
                    <option value="">Хэлцийг сонгоно уу</option>
                    <option value="formal">Албан ёсны</option>
                    <option value="casual">Сү informal</option>
                    <option value="playful">Тоглоомтой</option>
                    <option value="serious">Нотолсон</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="language">Хэл</label>
                  <select
                    id="language"
                    value={customization.language || ''}
                    onChange={(e) => setCustomization({...customization, language: e.target.value})}
                  >
                    <option value="">Хэл сонгоно уу</option>
                    <option value="en">Англи</option>
                    <option value="mn">Монгол</option>
                    <option value="es">Испани</option>
                    <option value="fr">Франц</option>
                    <option value="de">Герман</option>
                  </select>
                </div>
                
                <button type="submit" className="btn primary">Тохиргоог хадгалах</button>
                <button 
                  type="button" 
                  onClick={() => setShowCustomization(false)}
                  className="btn secondary"
                >
                  Цуцлах
                </button>
              </form>
            </div>
          ) : showTemplates ? (
            <div className="templates-panel">
              <h2>Ботын загварууд</h2>
              <div className="templates-grid">
                <div className="template-card" onClick={() => handleApplyTemplate('customer-support')}>
                  <h3>Үйлчилгээний дэмжлэг</h3>
                  <p>Хэрэглэгчийн лавлагаа, дэмжлэгийн хүсэлтийг боловсруулахад зориулсан бот</p>
                </div>
                <div className="template-card" onClick={() => handleApplyTemplate('lead-generation')}>
                  <h3>Хүсэлт бүртгэх</h3>
                  <p>Хүсэлт бүртгэж, уулзалт товлоход зориулсан бот</p>
                </div>
                <div className="template-card" onClick={() => handleApplyTemplate('ecommerce')}>
                  <h3>Интернэт худалдааны туслах</h3>
                  <p>Хэрэглэгчдэд бүтээгдэхүүн хайж, худалдан авахад туслах бот</p>
                </div>
                <div className="template-card" onClick={() => handleApplyTemplate('hr-assistant')}>
                  <h3>ХН-ийн туслах</h3>
                  <p>Ажилтнуудын ХН-ийн бодлогын талаар хариулах бот</p>
                </div>
              </div>
              
              <h3>Таны загварууд</h3>
              {templates.length > 0 ? (
                <div className="templates-list">
                  {templates.map((template) => (
                    <div key={template.id} className="template-item card">
                      <h4>{template.name}</h4>
                      <p>{template.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Та энэ чатботод загвар ашиглаагүй байна.</p>
              )}
            </div>
          ) : showAnalytics && analytics ? (
            <div className="analytics-panel">
              <h2>Чатботын статистик</h2>
              
              <div className="analytics-summary">
                <div className="stat-card">
                  <h3>{analytics.conversationStats.totalConversations}</h3>
                  <p>Нийт харилцан яриа</p>
                </div>
                <div className="stat-card">
                  <h3>{analytics.conversationStats.totalMessages}</h3>
                  <p>Нийт мессеж</p>
                </div>
                <div className="stat-card">
                  <h3>{analytics.userEngagement.engagementRate}%</h3>
                  <p>Идэвхжилтийн хувь</p>
                </div>
                <div className="stat-card">
                  <h3>{analytics.conversationStats.averageMessagesPerConversation}</h3>
                  <p>Дундаж мессеж/Харилцан яриа</p>
                </div>
              </div>
              
              <div className="analytics-charts">
                <h3>Мессежний эзлэх хувь</h3>
                <div className="chart-placeholder">
                  [Мессежний эзлэх хувийн диаграм энд харагдана]
                </div>
                
                <h3>Алдартай сэдвүүд</h3>
                <div className="topics-list">
                  {analytics.popularTopics.map((topic, index) => (
                    <div key={index} className="topic-item">
                      <span className="topic-name">{topic.keyword}</span>
                      <span className="topic-count">{topic.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : showFlows ? (
            // Using FlowBuilder component with chatbot ID
            <FlowBuilder chatbotId={id} />
          ) : currentConversation ? (
            <>
              {/* Display active flow info */}
              {activeFlow && (
                <div className="flow-info-banner">
                  <p>Идэвхтэй урсгал: <strong>{activeFlow.name}</strong> ({activeFlow.steps.length} алхам)</p>
                </div>
              )}
              
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`message ${message.sender}`}
                  >
                    <div className="message-content">
                      {message.content}
                    </div>
                    <div className="message-time">
                      {new Date(message.createdAt).toLocaleTimeString()}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="chat-input">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Мессежээ бичнэ үү..."
                  rows="3"
                />
                <button onClick={handleSendMessage} className="btn primary">
                  Илгээх
                </button>
              </div>
            </>
          ) : (
            <div className="no-conversation">
              <h2>Харилцан яриа сонгоогүй байна</h2>
              <p>Харилцан яриа сонгох эсвэл шинээр үүсгээд чатлаарай</p>
              <button onClick={handleCreateConversation} className="btn primary">
                Харилцан яриа эхлүүлэх
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Chatbot;