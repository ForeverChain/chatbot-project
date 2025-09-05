import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../services/axiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/auth/login', {
        email,
        password
      });
      
      // Save token to localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Нэвтрэхэд алдаа гарлаа:', err);
      setError('Буруу нэвтрэх мэдээлэл. Дахин оролдоно уу.');
    }
  };

  return (
    <div className="auth-form">
      <div className="form-container card">
        <h2>Бүртгэлд нэвтрэх</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Имэйл хаяг</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Нууц үг</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Нууц үгээ оруулна уу"
            />
          </div>
          
          <button type="submit" className="btn primary">Нэвтрэх</button>
        </form>
        
        <p className="auth-link">
          Бүртгэлгүй юу? <Link to="/register">Энд бүртгүүлнэ үү</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;