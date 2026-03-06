import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaQuestionCircle, FaRobot, FaLightbulb, FaGraduationCap, FaRocket, FaMobileAlt, FaGamepad } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* --- VIDEO BACKGROUND --- */}
      <div className="video-background-wrapper">
        <iframe
          className="video-iframe"
          src="https://www.youtube.com/embed/DPSjA0D5lS4?autoplay=1&mute=1&loop=1&playlist=DPSjA0D5lS4&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="video-overlay"></div>
      </div>

      <main className="home-body">
        {/* --- PHẦN 1: HERO & CARDS --- */}
        <div className="hero-section">
          <h1>Sống Tốt Đời, Đẹp Đạo</h1>
          <p>Chào mừng bạn đến với dự án sản phẩm sáng tạo môn học MLN131 - Triết học Mác-Lênin. Chương VI: Vấn đề tôn giáo.</p>

          <div className="action-cards">
            <div className="card card-image" onClick={() => navigate('/about')}>
              <img src="img/card1.jpg" alt="Nội dung" className="card-bg" />
              <div className="card-overlay">
                <div className="icon"><FaBookOpen /></div>
                <h3>Nội dung</h3>
                <p>Tổng quan nội dung cốt lõi của dự án.</p>
              </div>
            </div>

            <div className="card card-image" onClick={() => navigate('/e-book')}>
              <img src="img/1.jpg" alt="Bìa sách" className="card-bg" />
              <div className="card-overlay">
                <div className="icon"><FaBookOpen /></div>
                <h3>Đọc Sách</h3>
                <p>Trải nghiệm lật trang sống động như thật.</p>
              </div>
            </div>

            <div className="card card-image" onClick={() => navigate('/quiz')}>
              <img src="img/card3.jpg" alt="Quiz" className="card-bg" />
              <div className="card-overlay">
                <div className="icon"><FaGamepad /></div>
                <h3>Mini-game</h3>
                <p>Thử thách kiến thức với trò chơi thú vị.</p>
              </div>
            </div>

            <div className="card card-image" onClick={() => navigate('/ai-chatbot')}>
              <img src="img/card4.jpg" alt="AI Chatbot" className="card-bg" />
              <div className="card-overlay">
                <div className="icon"><FaRobot /></div>
                <h3>AI Chatbot</h3>
                <p>Trò chuyện với AI để giải đáp thắc mắc.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- PHẦN 2: GIÁ TRỊ DỰ ÁN --- */}
        <section className="intro-section">
          <div className="intro-container">
            <div className="intro-header">
              <h2>Giá Trị Dự Án Mang Lại</h2>
              <div className="divider-line"></div>
              <p className="intro-desc">
                Website được thiết kế nhằm hỗ trợ sinh viên tiếp cận <strong>Chương VI - Vấn đề tôn giáo trong thời kỳ quá độ lên CNXH</strong> một cách trực quan, sinh động và hiệu quả nhất thông qua việc ứng dụng công nghệ hiện đại.
              </p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon teal"><FaGraduationCap /></div>
                <h3>Kiến Thức Chuẩn Xác</h3>
                <p>Nội dung được biên soạn bám sát giáo trình Triết học Mác-Lênin, đảm bảo tính chính xác và khoa học.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon gold"><FaLightbulb /></div>
                <h3>Học Tập Trực Quan</h3>
                <p>Công nghệ E-book lật trang kèm nội dung, video tư liệu giúp kiến thức trở nên sinh động và dễ nhớ hơn.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon teal"><FaRocket /></div>
                <h3>Công Nghệ AI Tiên Tiến</h3>
                <p>Tích hợp chatbot AI giúp giải đáp mọi thắc mắc về tôn giáo và tín ngưỡng ngay lập tức.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon gold"><FaMobileAlt /></div>
                <h3>Trải Nghiệm Mượt Mà</h3>
                <p>Giao diện tối ưu cho cả máy tính và điện thoại, kết hợp Mini-game để tự đánh giá năng lực.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PHẦN 3: KẾ HOẠCH SỬ DỤNG AI --- */}
        <section className="ai-plan-section">
          <div className="ai-plan-container">
            <div className="intro-header">
              <h2>Kế hoạch sử dụng AI</h2>
              <div className="divider-line"></div>
              <p className="intro-desc">
                Báo cáo về việc sử dụng AI trong quá trình học tập.
              </p>
            </div>

            <div className="ai-grid">
              <div className="ai-card">
                <div className="ai-logos">
                  <img src="img/ai1.jpg" alt="NotebookLM" className="logo-img" />
                  <img src="img/ai2.jpg" alt="ChatGPT" className="logo-img" />
                </div>
                <h3>ChatGPT & NotebookLM</h3>
                <ul>
                  <li>Tóm tắt nội dung Chương VI trong giáo trình Triết học Mác-Lênin.</li>
                  <li>Hỗ trợ hình thành ý chính và cấu trúc nội dung bài học.</li>
                  <li>Gợi ý trình bày nội dung rõ ràng, dễ hiểu.</li>
                </ul>
              </div>

              <div className="ai-card">
                <div className="ai-logos">
                  <img src="img/ai3.jpg" alt="Gemini" className="logo-img single" />
                </div>
                <h3>Gemini</h3>
                <ul>
                  <li>Gemini hỗ trợ tạo hình ảnh minh họa cho E-book và nội dung trên website.</li>
                  <li>Gemini API Key được tích hợp chatbot AI, giúp trả lời các câu hỏi liên quan đến Chương VI.</li>
                </ul>
              </div>

              <div className="ai-card">
                <div className="ai-logos">
                  <img src="img/ai4.jpg" alt="Giáo trình" className="book-img" />
                </div>
                <h3>Giáo trình Triết học Mác-Lênin</h3>
                <p className="ai-desc">
                  Toàn bộ nội dung phân tích, chỉnh sửa và kết luận đều do các thành viên trong nhóm thực hiện dựa trên tài liệu học tập chính thống - Giáo trình Triết học Mác-Lênin.
                </p>
              </div>
            </div>

            <div className="ai-disclaimer">
              AI chỉ được sử dụng như công cụ hỗ trợ. Toàn bộ nội dung phân tích, chỉnh sửa và kết luận đều do thành viên trong nhóm thực hiện dựa trên tài liệu học tập chính thống.
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;
