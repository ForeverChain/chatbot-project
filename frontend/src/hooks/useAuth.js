import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      
      const res = await axios.post('http://localhost:3003/api/auth/login', {
        email,
        password
      });
      
      localStorage.setItem('token', res.data.token);
      setUser(res.data);
      return { success: true };
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Login failed';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      setError('');
      
      const res = await axios.post('http://localhost:3003/api/auth/register', {
        name,
        email,
        password
      });
      
      localStorage.setItem('token', res.data.token);
      setUser(res.data);
      return { success: true };
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Registration failed';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const getCurrentUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      
      const res = await axios.get('http://localhost:3003/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setUser(res.data);
    } catch (err) {
      localStorage.removeItem('token');
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    getCurrentUser
  };
};

export default useAuth;