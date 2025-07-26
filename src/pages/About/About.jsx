import React from 'react';
import { Bot, Code, Zap, Shield, Users, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About ChatBot AI</h1>
            <p>
              Discover the story behind our innovative AI chatbot platform that brings 
              together the world's most advanced conversational AI models in one seamless experience.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                ChatBot AI was born from a simple idea: make advanced AI conversation 
                accessible to everyone. We noticed that users often needed to switch 
                between different AI platforms to get diverse perspectives and capabilities.
              </p>
              <p>
                Our platform integrates multiple AI models including ChatGPT, DeepSeek, 
                and Claude, allowing users to compare responses, find the best solutions, 
                and enjoy a more comprehensive AI experience.
              </p>
            </div>
            <div className="story-image">
              <div className="story-card">
                <Bot size={60} />
                <h3>AI Innovation</h3>
                <p>Pushing the boundaries of conversational AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title">Built With Modern Technology</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <Code size={40} />
              <h3>React & Vite</h3>
              <p>Modern frontend development with fast build times and hot module replacement</p>
            </div>
            
            <div className="tech-card">
              <Zap size={40} />
              <h3>Performance First</h3>
              <p>Optimized for speed with lazy loading, code splitting, and efficient state management</p>
            </div>
            
            <div className="tech-card">
              <Shield size={40} />
              <h3>Security</h3>
              <p>Built with security best practices, secure authentication, and data protection</p>
            </div>
            
            <div className="tech-card">
              <Users size={40} />
              <h3>User Experience</h3>
              <p>Intuitive interface design with accessibility and responsive design principles</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-icon">
              <Heart size={50} />
            </div>
            <h2>Our Mission</h2>
            <p>
              To democratize access to advanced AI technology and create a platform where 
              users can harness the power of multiple AI models to enhance their productivity, 
              creativity, and learning.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Continuously exploring new ways to improve AI interaction and user experience</p>
            </div>
            
            <div className="value-item">
              <h3>Accessibility</h3>
              <p>Making advanced AI technology available and usable for everyone</p>
            </div>
            
            <div className="value-item">
              <h3>Privacy</h3>
              <p>Protecting user data and ensuring conversations remain private and secure</p>
            </div>
            
            <div className="value-item">
              <h3>Quality</h3>
              <p>Delivering reliable, fast, and accurate AI responses across all models</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;