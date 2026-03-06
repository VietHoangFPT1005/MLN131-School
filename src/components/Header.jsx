import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <nav className="pill-nav">
        <NavLink to="/" className="nav-item" end>
          Trang chủ
        </NavLink>

        <NavLink to="/about" className="nav-item">
          Nội dung
        </NavLink>

        {/* Giả sử mục lục dẫn đến trang đọc sách */}
        <NavLink to="/e-book" className="nav-item">
          E-Book
        </NavLink>

        <NavLink to="/quiz" className="nav-item">
          Mini-game
        </NavLink>

        <NavLink to="/ai-chatbot" className="nav-item">
          AI Chatbot
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;