// Mock API service for chatbot responses
const API_DELAYS = {
  'ChatGPT': 1000,
  'DeepSeek': 1200,
  'Claude': 800
};

const MOCK_RESPONSES = {
  'ChatGPT': [
    "Hello! I'm ChatGPT, how can I assist you today?",
    "That's an interesting question! Let me think about that...",
    "I'd be happy to help you with that. Here's what I think...",
    "Thanks for asking! Based on my knowledge, I would say...",
    "That's a great point. From my perspective..."
  ],
  'DeepSeek': [
    "Hi there! I'm DeepSeek, ready to help with your queries.",
    "Interesting! Let me process that with my deep learning capabilities...",
    "I can definitely help with that. Here's my analysis...",
    "Great question! Using my advanced reasoning...",
    "I appreciate your curiosity. My response would be..."
  ],
  'Claude': [
    "Hello! I'm Claude, an AI assistant created by Anthropic.",
    "I'd be delighted to help you with that question.",
    "That's a thoughtful inquiry. Here's how I see it...",
    "I'm here to assist! Let me provide you with a helpful response...",
    "Thank you for reaching out. I think the best approach is..."
  ]
};

export const sendMessage = async (message, model = 'ChatGPT') => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, API_DELAYS[model]));
  
  // Get random response for the selected model
  const responses = MOCK_RESPONSES[model];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  return {
    id: Date.now(),
    text: `${randomResponse} You asked: "${message}"`,
    sender: 'bot',
    model,
    timestamp: new Date().toISOString()
  };
};

export const getAvailableModels = () => {
  return ['ChatGPT', 'DeepSeek', 'Claude'];
};
