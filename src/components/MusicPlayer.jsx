import React, { useState, useRef } from 'react';
import './MusicPlayer.css';
import { FaMusic, FaPause } from 'react-icons/fa'; // Icon nốt nhạc và pause

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!isPlaying) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch((error) => console.error("Lỗi phát nhạc:", error));
            }
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="music-player-container" onClick={togglePlay} title="Bật/Tắt nhạc nền">
            {/* Logic CSS: 
         - Nếu đang play -> Thêm class 'spinning' (quay)
         - Nếu pause -> Bỏ class 'spinning' (đứng yên)
      */}
            <div className={`music-disc-wrapper ${isPlaying ? 'spinning' : ''}`}>
                {/* Ảnh đĩa than làm nền */}
                <img
                    src="/img/dvd.jpg"
                    alt="Music Disc"
                    className="music-disc-img"
                />

                {/* Icon nhỏ ở tâm đĩa để người dùng biết trạng thái */}
                <div className="center-knob">
                    {isPlaying ? <FaMusic /> : <FaPlayIcon />}
                </div>
            </div>

            {/* Thẻ Audio ẩn */}
            <audio ref={audioRef} loop>
                <source src="/music/vn.mp3" type="audio/mpeg" />
                Trình duyệt của bạn không hỗ trợ thẻ audio.
            </audio>
        </div>
    );
};

// Component icon tam giác (Play) đơn giản nếu không muốn import nhiều
const FaPlayIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
);

export default MusicPlayer;