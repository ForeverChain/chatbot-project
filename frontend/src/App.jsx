import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FlowBuilder from './pages/FlowBuilder';
import MessageTemplates from './pages/MessageTemplates';
import Integrations from './pages/Integrations';
import Analytics from './pages/Analytics';
import Navbar from './components/Navbar';
import './App.css';

// Simple auth check
const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Protected Route component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Navbar />
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/flow-builder/:chatbotId" 
            element={
              <ProtectedRoute>
                <Navbar />
                <FlowBuilder />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/flow-builder/:chatbotId/:flowId" 
            element={
              <ProtectedRoute>
                <Navbar />
                <FlowBuilder />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/templates/:chatbotId" 
            element={
              <ProtectedRoute>
                <Navbar />
                <MessageTemplates />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/integrations/:chatbotId" 
            element={
              <ProtectedRoute>
                <Navbar />
                <Integrations />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/analytics/:chatbotId" 
            element={
              <ProtectedRoute>
                <Navbar />
                <Analytics />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;