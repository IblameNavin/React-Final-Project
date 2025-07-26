import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader } from 'lucide-react';
import { sendMessage, getAvailableModels } from '../../services/api';
import './ChatInterface.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('ChatGPT');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const availableModels = getAvailableModels();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message on mount
    setMessages([
      {
        id: 1,
        text: `Hello! I'm ${selectedModel}. How can I help you today?`,
        sender: 'bot',
        model: selectedModel,
        timestamp: new Date().toISOString()
      }
    ]);
  }, []);

  const handleModelChange = (model) => {
    setSelectedModel(model);
    // Add a message about model switch
    const switchMessage = {
      id: Date.now(),
      text: `Switched to ${model}. Hello! I'm ${model}. How can I assist you?`,
      sender: 'bot',
      model: model,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, switchMessage]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const botResponse = await sendMessage(inputValue, selectedModel);
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorMessage = {
        id: Date.now(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        model: selectedModel,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="model-selector">
          <span className="model-label">AI Model:</span>
          <div className="model-tabs">
            {availableModels.map((model) => (
              <button
                key={model}
                className={`model-tab ${selectedModel === model ? 'active' : ''}`}
                onClick={() => handleModelChange(model)}
              >
                {model}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-avatar">
              {message.sender === 'user' ? (
                <User size={20} />
              ) : (
                <Bot size={20} />
              )}
            </div>
            <div className="message-content">
              <div className="message-bubble">
                <p>{message.text}</p>
                {message.model && (
                  <span className="message-model">{message.model}</span>
                )}
              </div>
              <span className="message-time">
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message bot-message">
            <div className="message-avatar">
              <Bot size={20} />
            </div>
            <div className="message-content">
              <div className="message-bubble typing-indicator">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>{selectedModel} is typing...</p>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Ask ${selectedModel} anything...`}
            className="chat-input"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="send-button"
            disabled={!inputValue.trim() || isLoading}
          >
            {isLoading ? (
              <Loader className="spinning" size={20} />
            ) : (
              <Send size={20} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;