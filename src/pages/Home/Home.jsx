// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MessageCircle, Zap, Shield, Users } from 'lucide-react';
// import './Home.css';

// const Home = () => {
//   const rawText = 'welcome to chatbot ai';
//   const fullText = rawText
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' '); // becomes "Welcome To Chatbot Ai"

//   const typingSpeed = 100;
//   const delayBetweenLoops = 3000;

//   const [text, setText] = useState('');
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     let typingTimeout;

//     if (index < fullText.length) {
//       typingTimeout = setTimeout(() => {
//         setText(prev => prev + fullText.charAt(index));
//         setIndex(prev => prev + 1);
//       }, typingSpeed);
//     } else {
//       typingTimeout = setTimeout(() => {
//         setText('');
//         setIndex(0);
//       }, delayBetweenLoops);
//     }

//     return () => clearTimeout(typingTimeout);
//   }, [index, fullText]);

//   return (
//     <div className="home-page">
//       <section className="hero-section">
//         <div className="hero-container">
//           <div className="hero-content">
//             <h1 className="hero-title typing-text">
//               <span>{text}</span>
//               <span className="cursor">|</span>
//             </h1>
//             <p className="hero-description">
//               Experience the future of AI conversation with multiple advanced models. 
//               Chat with ChatGPT, DeepSeek, and Claude all in one place.
//             </p>
//             <div className="hero-buttons">
//               <Link to="/chat" className="primary-btn">
//                 <MessageCircle size={20} />
//                 <span>Start Chatting</span>
//               </Link>
//               <Link to="/about" className="secondary-btn">
//                 <span>Learn More</span>
//               </Link>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="floating-card">
//               <MessageCircle size={40} />
//               <h3>AI Powered</h3>
//               <p>Multiple AI models at your fingertips</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="features-section">
//         <div className="container">
//           <h2 className="section-title">Why Choose ChatBot AI?</h2>
//           <div className="features-grid">
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <Zap />
//               </div>
//               <h3>Lightning Fast</h3>
//               <p>Get instant responses from multiple AI models with optimized performance and minimal latency.</p>
//             </div>
            
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <Shield />
//               </div>
//               <h3>Secure & Private</h3>
//               <p>Your conversations are protected with end-to-end encryption and privacy-first architecture.</p>
//             </div>
            
//             <div className="feature-card">
//               <div className="feature-icon">
//                 <Users />
//               </div>
//               <h3>Multiple AI Models</h3>
//               <p>Choose from ChatGPT, DeepSeek, and Claude to get diverse perspectives and capabilities.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="cta-section">
//         <div className="container">
//           <div className="cta-content">
//             <h2>Ready to Start Your AI Journey?</h2>
//             <p>Join thousands of users already experiencing the power of advanced AI conversation.</p>
//             <Link to="/chat" className="cta-btn">
//               <MessageCircle size={24} />
//               <span>Start Chatting Now</span>
//             </Link>
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Zap, Shield, Users } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-links social-links">
          <a
            href="https://www.instagram.com/iblamenavin?igsh=ZWR3cTR5bG9ia25t"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/navin-ayer-72854231b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/IblameNavin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <div className="footer-links policy-links">
          <Link to="/privacy-policy" className="footer-policy-link">Privacy Policy</Link>
          <Link to="/terms-conditions" className="footer-policy-link">Terms & Conditions</Link>
        </div>
      </div>

      
    </footer>
  );
};

const Home = () => {
  const rawText = 'welcome to chatbot ai';
  const fullText = rawText
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '); // "Welcome To Chatbot Ai"

  const typingSpeed = 100;
  const delayBetweenLoops = 3000;

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingTimeout;

    if (index < fullText.length) {
      typingTimeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, typingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, delayBetweenLoops);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, fullText]);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title typing-text">
              <span>{text}</span>
              <span className="cursor">|</span>
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

      <Footer />
    </div>
  );
};

export default Home;
