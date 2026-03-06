import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  const sections = [
    {
      id: 1,
      title: "Bản chất và nguồn gốc tôn giáo",
      subtitle: "Quan điểm Mác - Lênin",
      content: (
        <>
          <p>Theo chủ nghĩa Mác - Lênin, tôn giáo là một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan. Tôn giáo ra đời từ ba nguồn gốc: kinh tế - xã hội (bất lực trước tự nhiên và áp bức giai cấp), nhận thức (hạn chế trong hiểu biết) và tâm lý (sợ hãi, mong cầu bình an).</p>
          <blockquote className="quote-box">
            "Tôn giáo là tiếng thở dài của chúng sinh bị áp bức, là trái tim của thế giới không có trái tim." — C. Mác
          </blockquote>
        </>
      ),
      img: "img/about1.jpg",
      reverse: false
    },
    {
      id: 2,
      title: "Tính chất của tôn giáo",
      subtitle: "Lịch sử - Quần chúng - Chính trị",
      content: (
        <>
          <ul className="custom-list">
            <li><strong>Tính lịch sử:</strong> Tôn giáo ra đời, biến đổi và có thể mất đi trong những điều kiện lịch sử nhất định.</li>
            <li><strong>Tính quần chúng:</strong> Tôn giáo là nơi sinh hoạt tinh thần của đông đảo nhân dân, hơn 80% dân số thế giới theo tôn giáo.</li>
            <li><strong>Tính chính trị:</strong> Tôn giáo có thể bị lợi dụng phục vụ mục đích chính trị, nhưng cũng có những phong trào tôn giáo tiến bộ.</li>
          </ul>
        </>
      ),
      img: "img/about2.jpg",
      reverse: true
    },
    {
      id: 3,
      title: "Quyền tự do tín ngưỡng, tôn giáo",
      subtitle: "Hiến pháp và Pháp luật Việt Nam",
      content: (
        <>
          <p>Hiến pháp 2013 (Điều 24) khẳng định: Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật. Luật Tín ngưỡng, tôn giáo 2016 bảo đảm quyền này được thực thi đầy đủ.</p>
          <blockquote className="quote-box">
            "Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật." — Hiến pháp 2013
          </blockquote>
        </>
      ),
      img: "img/about3.jpg",
      reverse: false
    },
    {
      id: 4,
      title: "Đa dạng tôn giáo ở Việt Nam",
      subtitle: "Hơn 26 triệu tín đồ - 16 tôn giáo được công nhận",
      content: (
        <>
          <ul className="custom-list">
            <li><strong>Phật giáo:</strong> Hơn 14 triệu tín đồ, gắn bó lâu đời với dân tộc Việt Nam.</li>
            <li><strong>Công giáo:</strong> Khoảng 7 triệu tín đồ, có mặt tại Việt Nam từ thế kỷ XVI.</li>
            <li><strong>Cao Đài:</strong> Khoảng 2,4 triệu tín đồ, tôn giáo nội sinh mang tinh thần hòa hợp.</li>
            <li><strong>Phật giáo Hòa Hảo:</strong> Khoảng 1,5 triệu tín đồ, chủ trương học Phật tu nhân.</li>
          </ul>
        </>
      ),
      img: "img/about4.jpg",
      reverse: true
    },
    {
      id: 5,
      title: "Sống tốt đời, đẹp đạo",
      subtitle: "Hài hòa trách nhiệm công dân và đời sống tín ngưỡng",
      content: (
        <>
          <p>"Tốt đời" là làm công dân tốt, chấp hành pháp luật, đóng góp cho xã hội. "Đẹp đạo" là thực hành đúng giáo lý, sống hướng thiện, nhân ái. Phương châm này thể hiện sự thống nhất giữa lợi ích dân tộc và tự do tôn giáo, giữa đạo và đời.</p>
          <blockquote className="quote-box">
            "Phát huy những giá trị văn hóa, đạo đức tốt đẹp và nguồn lực của các tôn giáo cho sự phát triển đất nước." — Nghị quyết 43/NQ-TW
          </blockquote>
        </>
      ),
      img: "img/about5.jpg",
      reverse: false
    },
    {
      id: 6,
      title: "Tôn giáo trong hoạt động từ thiện",
      subtitle: "Vì cộng đồng và người yếu thế",
      content: (
        <>
          <ul className="custom-list">
            <li><strong>Y tế:</strong> Xây dựng bệnh viện, phòng khám từ thiện, khám chữa bệnh miễn phí cho người nghèo.</li>
            <li><strong>Giáo dục:</strong> Mở trường học, lớp tình thương, mái ấm cho trẻ mồ côi.</li>
            <li><strong>Cứu trợ:</strong> Hỗ trợ đồng bào bị thiên tai, lũ lụt; phát cơm, quần áo cho người vô gia cư.</li>
            <li><strong>COVID-19:</strong> Nhiều cơ sở tôn giáo hỗ trợ lương thực, cho mượn cơ sở làm khu cách ly.</li>
          </ul>
        </>
      ),
      img: "img/about6.jpg",
      reverse: true
    },
    {
      id: 7,
      title: "Tôn giáo bảo vệ môi trường",
      subtitle: "Sống hài hòa với thiên nhiên",
      content: (
        <>
          <p>Các tổ chức tôn giáo tích cực tham gia bảo vệ môi trường: Phật giáo với phong trào "Chùa xanh", trồng cây, hạn chế đốt vàng mã. Công giáo xây dựng giáo xứ xanh - sạch - đẹp. Tin Lành triển khai chương trình nước sạch cho đồng bào dân tộc thiểu số.</p>
          <blockquote className="quote-box">
            "Bảo vệ môi trường là bảo vệ sự sống, là trách nhiệm chung của mọi người, mọi tôn giáo."
          </blockquote>
        </>
      ),
      img: "img/about7.jpg",
      reverse: false
    },
    {
      id: 8,
      title: "Phong trào thi đua yêu nước",
      subtitle: "Đồng hành cùng dân tộc",
      content: (
        <>
          <p>Các tổ chức tôn giáo tích cực hưởng ứng phong trào "Toàn dân đoàn kết xây dựng nông thôn mới, đô thị văn minh". Phong trào "Xứ, họ đạo bình yên" trong Công giáo, "Chùa tinh tiến" trong Phật giáo đã góp phần giữ gìn an ninh trật tự, xây dựng cộng đồng đoàn kết.</p>
          <blockquote className="quote-box">
            "Đoàn kết tôn giáo là nguồn sức mạnh to lớn trong khối đại đoàn kết toàn dân tộc."
          </blockquote>
        </>
      ),
      img: "img/about8.jpg",
      reverse: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="about-page">
      <main className="about-body">
        <div className="about-hero animate-on-scroll">
          <h1>Triết Học Mác - Lênin Về Tôn Giáo</h1>
          <p className="subtitle">Sống tốt đời, đẹp đạo — Tôn giáo đồng hành cùng dân tộc</p>
        </div>

        <div className="content-container">
          {sections.map((item) => (
            <section
              key={item.id}
              className={`info-section animate-on-scroll ${item.reverse ? 'reverse' : ''}`}
            >
              <div className="text-content">
                <div className="section-number">Phần 0{item.id}</div>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <div className="description">{item.content}</div>
              </div>
              <div className="image-content">
                <img src={item.img} alt={item.title} />
              </div>
            </section>

          ))}

          {/* --- PHẦN VIDEO TƯ LIỆU --- */}
          <div className="video-section animate-on-scroll">
            <div className="section-header">
              <h2>Tư Liệu Tham Khảo</h2>
              <p>Video tư liệu về chính sách tôn giáo và đời sống tín ngưỡng tại Việt Nam</p>
            </div>

            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DPSjA0D5lS4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
