import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Home, Info, Mail, LogOut, MessageCircle, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setIsDark(newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <MessageCircle size={24} />
          <span>ChatBot AI</span>
        </Link>

        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          
          <Link 
            to="/about" 
            className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            <Info size={18} />
            <span>About</span>
          </Link>
          
          <Link 
            to="/contact" 
            className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            <Mail size={18} />
            <span>Contact</span>
          </Link>
          
          <Link 
            to="/chat" 
            className={`navbar-link ${location.pathname === '/chat' ? 'active' : ''}`}
          >
            <MessageCircle size={18} />
            <span>Chat</span>
          </Link>
        </div>

        <div className="navbar-user">
          {/* Toggle switch */}
          <input 
            type="checkbox" 
            id="checkboxInput" 
            checked={isDark} 
            onChange={toggleTheme} 
            style={{ display: 'none' }} 
          />
          <label htmlFor="checkboxInput" className="toggleSwitch" aria-label="Toggle dark mode">
            <div className="toggle-knob">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </div>
          </label>

          <span className="user-name">Hello, {user.name}</span>

          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
