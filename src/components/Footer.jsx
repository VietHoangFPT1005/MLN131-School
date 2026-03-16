import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">

        {/* Cột 1 */}
        <div className="footer-column">
          <h3>Triết Học Mác - Lênin</h3>
          <p className="subtitle">Chương VI: Vấn đề tôn giáo trong thời kỳ quá độ lên CNXH</p>
          <div className="quote-box">
            "Sống tốt đời, đẹp đạo — Tôn giáo đồng hành cùng dân tộc. Phát huy những giá trị văn hóa, đạo đức tốt đẹp của tôn giáo cho sự phát triển đất nước."
          </div>
        </div>

        {/* Cột 2 */}
        <div className="footer-column">
          <h3>Nội dung cốt lõi Chương 6</h3>
          <ul className="footer-list">
            <li>• Quan điểm Mác-Lênin về tôn giáo</li>
            <li>• Bản chất và nguồn gốc tôn giáo</li>
            <li>• Quyền tự do tín ngưỡng, tôn giáo</li>
            <li>• Chính sách tôn giáo của Nhà nước VN</li>
            <li>• Tôn giáo đồng hành cùng dân tộc</li>
            <li>• Hoạt động từ thiện, nhân đạo</li>
            <li>• Bảo vệ môi trường</li>
            <li>• Phong trào thi đua yêu nước</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-column">
          <h3>Thông tin nhóm thực hiện</h3>
          <ul className="footer-info">
            <li><span>Môn học:</span>Triết học Mác-Lênin (MLN131)</li>
            <li><span>Nhóm thực hiện: Nhóm 2</span></li>
            <li>
              <ul>
                <li>Nguyễn Viết Hoàng - SE183852</li>
                <li>Nguyễn Văn Quốc Khánh</li>
                <li>Đỗ Đức Nhật Anh</li>
                <li>Nguyễn Công Huy</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 MLN131 Project. All rights reserved and for Group 07</p>
      </div>
    </footer>
  );
};

export default Footer;
