import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Zap, Shield, Users } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">ChatBot AI</span>
            </h1>
            <p className="hero-description">
              Experience the future of AI conversation with multiple advanced models. 
              Chat with ChatGPT, DeepSeek, and Claude all in one place.
            </p>
            <div className="hero-buttons">
              <Link to="/chat" className="primary-btn">
                <MessageCircle size={20} />
                <span>Start Chatting</span>
              </Link>
              <Link to="/about" className="secondary-btn">
                <span>Learn More</span>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <MessageCircle size={40} />
              <h3>AI Powered</h3>
              <p>Multiple AI models at your fingertips</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose ChatBot AI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Zap />
              </div>
              <h3>Lightning Fast</h3>
              <p>Get instant responses from multiple AI models with optimized performance and minimal latency.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield />
              </div>
              <h3>Secure & Private</h3>
              <p>Your conversations are protected with end-to-end encryption and privacy-first architecture.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3>Multiple AI Models</h3>
              <p>Choose from ChatGPT, DeepSeek, and Claude to get diverse perspectives and capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your AI Journey?</h2>
            <p>Join thousands of users already experiencing the power of advanced AI conversation.</p>
            <Link to="/chat" className="cta-btn">
              <MessageCircle size={24} />
              <span>Start Chatting Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;