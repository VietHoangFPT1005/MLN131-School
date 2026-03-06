import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BOOK_CONTENT } from '../data/bookContent';
import ReactMarkdown from 'react-markdown';
import './ChatWidget.css';

const ChatWidget = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Chào bạn! Tôi có thể giúp gì về Triết học Mác-Lênin (Chương VI - Tôn giáo)?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef(null);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;
  const model = genAI ? genAI.getGenerativeModel({ model: "gemini-2.5-flash" }) : null;

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  // Ẩn trên trang chatbot
  if (location.pathname === '/ai-chatbot') return null;

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || !model) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const prompt = `
      Bạn là trợ lý AI về Triết học Mác-Lênin, chuyên sâu Chương VI: Vấn đề tôn giáo.

      Nguồn kiến thức:
      ---
      ${BOOK_CONTENT}
      ---

      QUY TẮC:
      1. CHỈ trả lời về tôn giáo, tín ngưỡng, chính sách tôn giáo VN.
      2. Nếu hỏi ngoài phạm vi: "Xin lỗi, tôi chỉ hỗ trợ về tôn giáo và tín ngưỡng trong Triết học Mác-Lênin."
      3. Trả lời ngắn gọn, dễ hiểu. Dùng Markdown.

      Câu hỏi: "${userMsg.text}"
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botMsg = { id: Date.now() + 1, text: response.text(), sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    } catch {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Hệ thống đang bận, vui lòng thử lại.", sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Nút mở chat AI */}
      <button
        className={`chat-widget-toggle ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        title="Nhắn tin với AI"
      >
        <FaRobot />
        <span className="cw-toggle-label">AI</span>
      </button>

      {/* Cửa sổ chat */}
      <div className={`chat-widget-window ${isOpen ? 'open' : ''}`}>
        <div className="cw-header">
          <div className="cw-header-info">
            <FaRobot />
            <span>Trợ lý AI - Tôn giáo</span>
          </div>
          <button className="cw-close" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="cw-messages" ref={chatWindowRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`cw-msg ${msg.sender}`}>
              <div className="cw-avatar">
                {msg.sender === 'bot' ? <FaRobot /> : <FaUser />}
              </div>
              <div className="cw-bubble">
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="cw-msg bot">
              <div className="cw-avatar"><FaRobot /></div>
              <div className="cw-bubble typing">Đang suy nghĩ...</div>
            </div>
          )}
        </div>

        <form className="cw-input" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Hỏi về tôn giáo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
          />
          <button type="submit" disabled={isTyping}>
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
