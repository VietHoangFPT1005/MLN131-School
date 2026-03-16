import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import Page from '../components/Page';
import './BookReader.css';

// Import Icons
import {
    FaChevronLeft, FaChevronRight, FaPlay, FaPause,
    FaSearchPlus, FaSearchMinus, FaList, FaExpand, FaCompress, FaTimes
} from 'react-icons/fa';

/*
  Cấu trúc sách (16 trang):
  0  - 1.jpg  : Trang Bìa
  1  - 2.jpg  : Quan điểm tổng quan MLN về Tôn giáo
  2  - 3.jpg  : Mục tiêu: Hạnh phúc của Nhân dân
  3  - 4.jpg  : Bảo đảm Quyền Tự do Tín ngưỡng
  4  - 5.jpg  : Phát huy Giá trị Tốt đẹp của Tôn giáo
  5  - 6.jpg  : Sống Tốt Đời, Đẹp Đạo (tóm tắt 3 hoạt động)
  6  - 7.jpg  : Tôn giáo Đồng hành cùng Dân tộc
  7  - 8.jpg  : Tôn giáo Xây dựng Nông thôn Mới
  8  - 9.jpg  : Tôn giáo Bảo vệ Môi trường
  9  - 10.jpg : Đặc điểm Tôn giáo ở Việt Nam
  10 - 11.jpg : Đoàn kết & Cảnh giác với Lợi dụng Tôn giáo
  11 - 12.jpg : Vận dụng Thực tiễn — Trách nhiệm Thế hệ Trẻ
  12 - 13.jpg : Lời kết — Đại Đoàn kết Toàn Dân tộc
  13 - 14.jpg : Giá trị Đạo đức, Nhân văn của Tôn giáo
  14 - 15.jpg : Thách thức & Giải pháp Tôn giáo Thời kỳ Mới
  15 - 16.jpg : Tổng kết Chương VI — Vấn đề Tôn giáo
*/

const pages = [
    { type: 'image', src: '/img/1.jpg',  label: 'Trang Bìa' },
    { type: 'image', src: '/img/2.jpg',  label: 'Quan điểm MLN về Tôn giáo' },
    { type: 'image', src: '/img/3.jpg',  label: 'Mục tiêu: Hạnh phúc Nhân dân' },
    { type: 'image', src: '/img/4.jpg',  label: 'Bảo đảm Quyền Tự do Tín ngưỡng' },
    { type: 'image', src: '/img/5.jpg',  label: 'Phát huy Giá trị Tốt đẹp Tôn giáo' },
    { type: 'image', src: '/img/6.jpg',  label: 'Sống Tốt Đời, Đẹp Đạo' },
    { type: 'image', src: '/img/7.jpg',  label: 'Tôn giáo Đồng hành Dân tộc' },
    { type: 'image', src: '/img/8.jpg',  label: 'Tôn giáo Xây dựng Nông thôn Mới' },
    { type: 'image', src: '/img/9.jpg',  label: 'Tôn giáo Bảo vệ Môi trường' },
    { type: 'image', src: '/img/10.jpg', label: 'Đặc điểm Tôn giáo ở Việt Nam' },
    { type: 'image', src: '/img/11.jpg', label: 'Đoàn kết & Cảnh giác Lợi dụng TG' },
    { type: 'image', src: '/img/12.jpg', label: 'Trách nhiệm Thế hệ Trẻ' },
    { type: 'image', src: '/img/13.jpg', label: 'Lời kết: Đại Đoàn kết Dân tộc' },
    { type: 'image', src: '/img/14.jpg', label: 'Giá trị Đạo đức, Nhân văn Tôn giáo' },
    { type: 'image', src: '/img/15.jpg', label: 'Thách thức & Giải pháp Tôn giáo' },
    { type: 'image', src: '/img/16.jpg', label: 'Tổng kết Chương VI' },
];

function BookReader() {
    const bookRef = useRef();
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(0);
    const [isPlaying, setIsPlaying]     = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [zoomScale, setZoomScale]     = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMobile, setIsMobile]       = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- LẬT TRANG & AUTO PLAY ---
    const nextFlip = () => bookRef.current?.pageFlip().flipNext();
    const prevFlip = () => bookRef.current?.pageFlip().flipPrev();

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                try { bookRef.current?.pageFlip().flipNext(); } catch (e) { setIsPlaying(false); }
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const onFlip = (e) => setCurrentPage(e.data);

    // --- ZOOM ---
    const handleZoom = (direction) => {
        setZoomScale(prev => {
            if (direction === 'in')  return Math.min(prev + 0.2, 2.0);
            if (direction === 'out') return Math.max(prev - 0.2, 0.6);
            return prev;
        });
    };

    // --- FULLSCREEN ---
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    // --- CHUYỂN TRANG TỪ MỤC LỤC ---
    const goToPage = (pageIndex) => {
        if (bookRef.current) bookRef.current.pageFlip().flip(pageIndex);
        setIsSidebarOpen(false);
    };

    return (
        <div className="book-page-layout">
            <div className="book-reader-container">

                {/* SIDEBAR - MỤC LỤC */}
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-header">
                        <span>Mục Lục</span>
                        <FaTimes style={{ cursor: 'pointer' }} onClick={() => setIsSidebarOpen(false)} />
                    </div>
                    <ul className="toc-list">
                        {pages.map((p, i) => (
                            <li
                                key={i}
                                className={`toc-item ${currentPage === i ? 'toc-item-active' : ''}`}
                                onClick={() => goToPage(i)}
                            >
                                <span className="toc-num">{i + 1}.</span> {p.label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* KHU VỰC CHÍNH */}
                <div className="main-content">
                    {/* Top bar */}
                    <div className="top-bar">
                        <span className="page-counter">{currentPage + 1} / {pages.length}</span>
                        <button
                            className="btn-exit"
                            onClick={() => navigate('/')}
                            title="Thoát ra trang chủ"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Sách + mũi tên */}
                    <div className="book-viewport">
                        <button className="nav-btn nav-prev" onClick={prevFlip}>
                            <FaChevronLeft />
                        </button>

                        <div style={{ transform: `scale(${isMobile ? 1 : zoomScale})`, transition: 'transform 0.3s ease' }}>
                            <HTMLFlipBook
                                width={isMobile ? 320 : 1100}
                                height={isMobile ? 480 : 800}
                                size="stretch"
                                minWidth={isMobile ? 250 : 600}
                                maxWidth={isMobile ? 500 : 1500}
                                minHeight={isMobile ? 350 : 400}
                                maxHeight={isMobile ? 800 : 1000}
                                showCover={true}
                                usePortrait={isMobile}
                                mobileScrollSupport={true}
                                onFlip={onFlip}
                                ref={bookRef}
                                className="my-book"
                            >
                                {pages.map((p, i) => (
                                    <Page key={i} number={i + 1} image={p.src} />
                                ))}
                            </HTMLFlipBook>
                        </div>

                        <button className="nav-btn nav-next" onClick={nextFlip}>
                            <FaChevronRight />
                        </button>
                    </div>

                    {/* BOTTOM TOOLBAR */}
                    <div className="bottom-toolbar">
                        <button className="tool-btn" onClick={() => handleZoom('out')} title="Thu nhỏ"><FaSearchMinus /></button>
                        <button className="tool-btn" onClick={() => handleZoom('in')}  title="Phóng to"><FaSearchPlus /></button>

                        <div className="separator"></div>

                        <button className="tool-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)} title="Mục lục">
                            <FaList />
                        </button>
                        <button className={`tool-btn ${isPlaying ? 'active' : ''}`} onClick={() => setIsPlaying(!isPlaying)} title="Tự động lật trang">
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>

                        <div className="separator"></div>

                        <button className="tool-btn" onClick={toggleFullscreen} title="Toàn màn hình">
                            {isFullscreen ? <FaCompress /> : <FaExpand />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookReader;
