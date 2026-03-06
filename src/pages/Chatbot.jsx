import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane, FaRobot, FaUser, FaTimes } from 'react-icons/fa';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BOOK_CONTENT } from '../data/bookContent';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';

const Chatbot = () => {
  const navigate = useNavigate();

  // --- CẤU HÌNH GEMINI ---
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  if (!API_KEY) {
    console.error("Chưa cấu hình API Key!");
  }
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Chào bạn! Tôi là trợ lý AI chuyên về Triết học Mác-Lênin. Tôi có thể hỗ trợ bạn về các kiến thức liên quan đến vấn đề tôn giáo trong Chương VI. Bạn cần hỏi gì không?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef(null);

  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- HÀM GỬI TIN NHẮN ---
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const extraKnowledge = `
      - Chủ đề dự án: Sống tốt đời, đẹp đạo - Tôn giáo đồng hành cùng dân tộc.
      - Môn học: MLN131 - Triết học Mác-Lênin, Chương VI: Vấn đề tôn giáo trong thời kỳ quá độ lên CNXH.
      - Hiến pháp 2013 (Điều 24): Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật.
      - Luật Tín ngưỡng, tôn giáo 2016 có hiệu lực từ 01/01/2018.
      - Việt Nam có hơn 26 triệu tín đồ, 16 tôn giáo được công nhận.
      - Các tôn giáo lớn ở VN: Phật giáo (14 triệu), Công giáo (7 triệu), Cao Đài (2,4 triệu), Hòa Hảo (1,5 triệu), Tin Lành (1 triệu).
      - Tín ngưỡng thờ Mẫu Tam phủ được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại (2016).
    `;

      const prompt = `
      Bạn là một Chuyên gia/Giảng viên cao cấp về môn "Triết học Mác-Lênin", chuyên sâu về vấn đề tôn giáo (Chương VI).

      NHIỆM VỤ CỦA BẠN:
      Trả lời câu hỏi của sinh viên dựa trên 2 nguồn dữ liệu sau:
      1. Nguồn cốt lõi (Giáo trình Chương VI):
      ---
      ${BOOK_CONTENT}
      ---
      2. Nguồn bổ sung (Thông tin cập nhật):
      ---
      ${extraKnowledge}
      ---

      QUY TẮC QUAN TRỌNG (BẮT BUỘC TUÂN THỦ):
      1. **Phạm vi trả lời:** CHỈ trả lời các câu hỏi liên quan đến Triết học Mác-Lênin về tôn giáo, chính sách tôn giáo Việt Nam, các tôn giáo ở Việt Nam, tín ngưỡng dân gian, và chủ đề "Sống tốt đời, đẹp đạo".
      2. **Cơ chế từ chối:** Nếu người dùng hỏi các vấn đề KHÔNG LIÊN QUAN (ví dụ: hỏi giờ, thời tiết, toán học, giải trí, code, phim ảnh, tình yêu...), bạn hãy trả lời chính xác câu sau:
         "Xin lỗi, tôi là trợ lý học tập môn Triết học Mác-Lênin. Tôi chỉ hỗ trợ giải đáp các vấn đề về tôn giáo, tín ngưỡng và chính sách tôn giáo của Việt Nam."
      3. **Phong cách:** Trả lời ngắn gọn, súc tích, học thuật nhưng dễ hiểu. Sử dụng định dạng Markdown (in đậm, gạch đầu dòng) để trình bày đẹp.

      Câu hỏi của sinh viên: "${userMsg.text}"
    `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const botMsg = { id: Date.now() + 1, text: text, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Lỗi gọi API:", error);
      const errorMsg = { id: Date.now() + 1, text: "Hệ thống đang bận, vui lòng thử lại sau.", sender: 'bot' };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-page">
      <main className="chatbot-body">
        <div className="chat-container">
          <div className="chat-header">
            <button className="btn-close-chat" onClick={() => navigate('/')} title="Thoát">
              <FaTimes />
            </button>

            <h2>Hỏi đáp Triết học Mác-Lênin - Tôn giáo (AI)</h2>
            <p>Sử dụng công nghệ Gemini</p>
          </div>

          <div className="chat-window" ref={chatWindowRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="avatar">
                  {msg.sender === 'bot' ? <FaRobot /> : <FaUser />}
                </div>
                <div className="bubble">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message bot">
                <div className="avatar"><FaRobot /></div>
                <div className="bubble typing">Đang phân tích kiến thức...</div>
              </div>
            )}

          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Nhập câu hỏi về tôn giáo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" disabled={isTyping}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
