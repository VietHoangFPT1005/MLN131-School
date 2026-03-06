import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDove, FaStar, FaHeart, FaRegHeart, FaHome, FaRedo, FaTrophy, FaCrown, FaMedal, FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa';
import { supabase } from '../lib/supabase';
import './Quiz.css';

const Quiz = () => {
  const navigate = useNavigate();

  // --- DỮ LIỆU CÂU HỎI ---
  const questionBank = [
    {
      questionText: 'Câu 1: Theo quan điểm chủ nghĩa Mác - Lênin, tôn giáo là gì?',
      answerOptions: [
        { answerText: 'A. Là một hiện tượng tự nhiên vĩnh hằng.', isCorrect: false },
        { answerText: 'B. Là một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan.', isCorrect: true },
        { answerText: 'C. Là công cụ quản lý xã hội duy nhất.', isCorrect: false },
        { answerText: 'D. Là hệ thống triết học duy vật.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 2: Nguồn gốc kinh tế - xã hội của tôn giáo là gì?',
      answerOptions: [
        { answerText: 'A. Do con người có trí tưởng tượng phong phú.', isCorrect: false },
        { answerText: 'B. Do sự phát triển của khoa học công nghệ.', isCorrect: false },
        { answerText: 'C. Do sự bất lực của con người trước sức mạnh tự nhiên và áp bức xã hội.', isCorrect: true },
        { answerText: 'D. Do nhu cầu giải trí của con người.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 3: C. Mác đã gọi tôn giáo là gì?',
      answerOptions: [
        { answerText: 'A. "Linh hồn của thế giới."', isCorrect: false },
        { answerText: 'B. "Thuốc phiện của nhân dân."', isCorrect: true },
        { answerText: 'C. "Ánh sáng của nhân loại."', isCorrect: false },
        { answerText: 'D. "Nền tảng của văn minh."', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 4: Nguồn gốc tâm lý của tôn giáo theo Lênin được tóm tắt bằng câu nào?',
      answerOptions: [
        { answerText: 'A. "Sợ hãi đã tạo ra thần linh."', isCorrect: true },
        { answerText: 'B. "Con người sáng tạo ra thần thánh."', isCorrect: false },
        { answerText: 'C. "Tôn giáo là khoa học chưa phát triển."', isCorrect: false },
        { answerText: 'D. "Trí tuệ sinh ra niềm tin."', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 5: Tính lịch sử của tôn giáo có nghĩa là gì?',
      answerOptions: [
        { answerText: 'A. Tôn giáo tồn tại vĩnh viễn, không bao giờ mất đi.', isCorrect: false },
        { answerText: 'B. Tôn giáo là một hiện tượng xã hội có tính lịch sử, ra đời, biến đổi và có thể mất đi.', isCorrect: true },
        { answerText: 'C. Tôn giáo chỉ tồn tại trong xã hội phong kiến.', isCorrect: false },
        { answerText: 'D. Tôn giáo không thay đổi theo thời gian.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 6: Tính quần chúng của tôn giáo thể hiện ở điều gì?',
      answerOptions: [
        { answerText: 'A. Chỉ có giới trí thức mới theo tôn giáo.', isCorrect: false },
        { answerText: 'B. Tôn giáo là nơi sinh hoạt tinh thần của đông đảo quần chúng nhân dân.', isCorrect: true },
        { answerText: 'C. Tôn giáo chỉ phục vụ giai cấp thống trị.', isCorrect: false },
        { answerText: 'D. Tôn giáo không thu hút đông đảo quần chúng.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 7: Nguyên tắc đầu tiên trong giải quyết vấn đề tôn giáo thời kỳ quá độ lên CNXH là gì?',
      answerOptions: [
        { answerText: 'A. Xóa bỏ tôn giáo bằng mệnh lệnh hành chính.', isCorrect: false },
        { answerText: 'B. Cấm tất cả hoạt động tôn giáo.', isCorrect: false },
        { answerText: 'C. Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng.', isCorrect: true },
        { answerText: 'D. Chỉ cho phép một tôn giáo duy nhất.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 8: Hiến pháp 2013 (Điều 24) quy định về tôn giáo như thế nào?',
      answerOptions: [
        { answerText: 'A. Cấm mọi hoạt động tôn giáo.', isCorrect: false },
        { answerText: 'B. Chỉ công nhận Phật giáo là tôn giáo chính thức.', isCorrect: false },
        { answerText: 'C. Mọi người có quyền tự do tín ngưỡng, tôn giáo. Các tôn giáo bình đẳng trước pháp luật.', isCorrect: true },
        { answerText: 'D. Nhà nước quản lý toàn bộ hoạt động nội bộ tôn giáo.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 9: Luật Tín ngưỡng, tôn giáo của Việt Nam được Quốc hội thông qua năm nào?',
      answerOptions: [
        { answerText: 'A. 2010.', isCorrect: false },
        { answerText: 'B. 2013.', isCorrect: false },
        { answerText: 'C. 2016.', isCorrect: true },
        { answerText: 'D. 2020.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 10: Tôn giáo nào có số lượng tín đồ đông nhất ở Việt Nam?',
      answerOptions: [
        { answerText: 'A. Công giáo.', isCorrect: false },
        { answerText: 'B. Phật giáo.', isCorrect: true },
        { answerText: 'C. Tin Lành.', isCorrect: false },
        { answerText: 'D. Cao Đài.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 11: Phương châm "Sống tốt đời, đẹp đạo" có ý nghĩa gì?',
      answerOptions: [
        { answerText: 'A. Chỉ cần thực hành tôn giáo là đủ.', isCorrect: false },
        { answerText: 'B. Hài hòa giữa trách nhiệm công dân và đời sống tín ngưỡng.', isCorrect: true },
        { answerText: 'C. Tôn giáo quan trọng hơn trách nhiệm xã hội.', isCorrect: false },
        { answerText: 'D. Tách biệt hoàn toàn đời sống xã hội và tôn giáo.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 12: Phong trào "Xứ, họ đạo bình yên" thuộc về tôn giáo nào?',
      answerOptions: [
        { answerText: 'A. Phật giáo.', isCorrect: false },
        { answerText: 'B. Tin Lành.', isCorrect: false },
        { answerText: 'C. Công giáo.', isCorrect: true },
        { answerText: 'D. Cao Đài.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 13: Phong trào "Chùa tinh tiến" thuộc về tôn giáo nào?',
      answerOptions: [
        { answerText: 'A. Phật giáo.', isCorrect: true },
        { answerText: 'B. Công giáo.', isCorrect: false },
        { answerText: 'C. Hồi giáo.', isCorrect: false },
        { answerText: 'D. Cao Đài.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 14: Trong đại dịch COVID-19, các tổ chức tôn giáo ở Việt Nam đã đóng góp gì?',
      answerOptions: [
        { answerText: 'A. Không tham gia hoạt động phòng chống dịch.', isCorrect: false },
        { answerText: 'B. Hỗ trợ lương thực, cho mượn cơ sở làm khu cách ly, hỗ trợ vật tư y tế.', isCorrect: true },
        { answerText: 'C. Chỉ tập trung hoạt động tôn giáo nội bộ.', isCorrect: false },
        { answerText: 'D. Phản đối các biện pháp phòng chống dịch.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 15: Tín ngưỡng nào của Việt Nam được UNESCO công nhận là Di sản văn hóa phi vật thể năm 2016?',
      answerOptions: [
        { answerText: 'A. Tín ngưỡng thờ cúng tổ tiên.', isCorrect: false },
        { answerText: 'B. Tín ngưỡng thờ cúng Hùng Vương.', isCorrect: false },
        { answerText: 'C. Tín ngưỡng thờ Mẫu Tam phủ.', isCorrect: true },
        { answerText: 'D. Tín ngưỡng thờ Thành hoàng.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 16: Để khắc phục dần ảnh hưởng tiêu cực của tôn giáo, theo Mác - Lênin cần phải làm gì?',
      answerOptions: [
        { answerText: 'A. Cấm tất cả tôn giáo.', isCorrect: false },
        { answerText: 'B. Gắn liền với cải tạo xã hội, nâng cao đời sống vật chất và tinh thần cho nhân dân.', isCorrect: true },
        { answerText: 'C. Dùng bạo lực để xóa bỏ tôn giáo.', isCorrect: false },
        { answerText: 'D. Bỏ mặc, không quan tâm đến tôn giáo.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 17: Phật giáo tham gia bảo vệ môi trường thông qua phong trào nào?',
      answerOptions: [
        { answerText: 'A. Phong trào "Chùa xanh", trồng cây, hạn chế đốt vàng mã.', isCorrect: true },
        { answerText: 'B. Phong trào xây dựng nhà máy.', isCorrect: false },
        { answerText: 'C. Phong trào khai thác khoáng sản.', isCorrect: false },
        { answerText: 'D. Phong trào phát triển công nghiệp nặng.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 18: Việt Nam hiện có khoảng bao nhiêu tín đồ tôn giáo?',
      answerOptions: [
        { answerText: 'A. Khoảng 5 triệu.', isCorrect: false },
        { answerText: 'B. Khoảng 15 triệu.', isCorrect: false },
        { answerText: 'C. Hơn 26 triệu.', isCorrect: true },
        { answerText: 'D. Hơn 50 triệu.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 19: Phân biệt hai mặt trong vấn đề tôn giáo bao gồm mặt nào?',
      answerOptions: [
        { answerText: 'A. Mặt kinh tế và mặt văn hóa.', isCorrect: false },
        { answerText: 'B. Mặt chính trị và mặt tư tưởng.', isCorrect: true },
        { answerText: 'C. Mặt quân sự và mặt ngoại giao.', isCorrect: false },
        { answerText: 'D. Mặt giáo dục và mặt y tế.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 20: Giá trị đạo đức cốt lõi mà Phật giáo hướng con người đến là gì?',
      answerOptions: [
        { answerText: 'A. Quyền lực và giàu sang.', isCorrect: false },
        { answerText: 'B. Từ bi, hỉ xả, cứu khổ cứu nạn.', isCorrect: true },
        { answerText: 'C. Chinh phục thiên nhiên.', isCorrect: false },
        { answerText: 'D. Cạnh tranh và thắng lợi.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 21: Đâu là một trong những ngày lễ lớn của đạo Công giáo?',
      answerOptions: [
        { answerText: 'A. Lễ Phật Đản.', isCorrect: false },
        { answerText: 'B. Lễ Giáng Sinh.', isCorrect: true },
        { answerText: 'C. Lễ Vu Lan.', isCorrect: false },
        { answerText: 'D. Lễ hội Katê.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 22: Chữ "Đạo" trong Phật giáo thường được hiểu là gì?',
      answerOptions: [
        { answerText: 'A. Con đường dẫn đến sự giải thoát.', isCorrect: true },
        { answerText: 'B. Quyền lực tối cao.', isCorrect: false },
        { answerText: 'C. Luật lệ hà khắc.', isCorrect: false },
        { answerText: 'D. Một hình thức phép thuật.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 23: Tôn giáo nào ra đời tại Việt Nam vào đầu thế kỷ XX (Năm 1926)?',
      answerOptions: [
        { answerText: 'A. Phật giáo Hòa Hảo.', isCorrect: false },
        { answerText: 'B. Cao Đài.', isCorrect: true },
        { answerText: 'C. Tin Lành.', isCorrect: false },
        { answerText: 'D. Hồi giáo Bani.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 24: Theo Hiến pháp, Nhà nước đối xử như thế nào với các tôn giáo?',
      answerOptions: [
        { answerText: 'A. Phân biệt đối xử theo số lượng tín đồ.', isCorrect: false },
        { answerText: 'B. Chỉ ưu tiên tôn giáo lâu đời.', isCorrect: false },
        { answerText: 'C. Các tôn giáo bình đẳng trước pháp luật.', isCorrect: true },
        { answerText: 'D. Hạn chế các tôn giáo mới.', isCorrect: false },
      ],
    },
    {
      questionText: 'Câu 25: Lễ Vu Lan của Phật giáo mang ý nghĩa giáo dục đạo lý gì của dân tộc Việt Nam?',
      answerOptions: [
        { answerText: 'A. Uống nước nhớ nguồn, hiếu kính cha mẹ.', isCorrect: true },
        { answerText: 'B. Đề cao chủ nghĩa cá nhân.', isCorrect: false },
        { answerText: 'C. Bảo vệ môi trường sinh thái.', isCorrect: false },
        { answerText: 'D. Tinh thần thượng võ.', isCorrect: false },
      ],
    },
  ];

  const QUESTION_LIMIT = 20;

  // --- STATES GAME ---
  const [gameState, setGameState] = useState('welcome'); // 'welcome', 'playing', 'finished', 'leaderboard'
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnswering, setIsAnswering] = useState(false);

  // --- STATES LEADERBOARD ---
  const [playerName, setPlayerName] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoadingBoard, setIsLoadingBoard] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const [saveError, setSaveError] = useState('');

  // --- FETCH LEADERBOARD ---
  const fetchLeaderboard = async () => {
    setIsLoadingBoard(true);
    try {
      const { data, error } = await supabase
        .from('leaderboard')
        .select('*')
        .order('score', { ascending: false })
        .order('created_at', { ascending: true })
        .limit(10);

      if (error) throw error;
      setLeaderboard(data || []);
    } catch (err) {
      console.error('Lỗi tải bảng xếp hạng:', err);
      setLeaderboard([]);
    } finally {
      setIsLoadingBoard(false);
    }
  };

  // --- SAVE SCORE ---
  const handleSaveScore = async () => {
    if (!playerName.trim()) {
      setSaveError('Vui lòng nhập tên của bạn!');
      return;
    }
    if (playerName.trim().length > 30) {
      setSaveError('Tên không được quá 30 ký tự!');
      return;
    }

    setIsSaving(true);
    setSaveError('');

    try {
      const { error } = await supabase
        .from('leaderboard')
        .insert([
          {
            player_name: playerName.trim(),
            score: score,
            total_questions: sessionQuestions.length,
            lives_remaining: Math.max(lives, 0),
          }
        ]);

      if (error) throw error;

      setHasSaved(true);
      await fetchLeaderboard();
    } catch (err) {
      console.error('Lỗi lưu điểm:', err);
      setSaveError('Không thể lưu điểm. Vui lòng thử lại!');
    } finally {
      setIsSaving(false);
    }
  };

  // --- LOGIC GAME ---
  const handleStart = () => {
    // Shuffle question bank and select exactly QUESTION_LIMIT questions
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    setSessionQuestions(shuffled.slice(0, QUESTION_LIMIT));

    setGameState('playing');
    setLives(5);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setSelectedIndex(null);
    setIsAnswering(false);
    setHasSaved(false);
    setPlayerName('');
    setSaveError('');
  };

  const handleShowLeaderboard = async () => {
    setGameState('leaderboard');
    await fetchLeaderboard();
  };

  const handleAnswerClick = (isCorrect, index) => {
    if (isAnswering) return;
    setIsAnswering(true);
    setSelectedAnswer(isCorrect);
    setSelectedIndex(index);

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }

    setTimeout(() => {
      if (lives - (isCorrect ? 0 : 1) <= 0) {
        setGameState('finished');
      } else {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < sessionQuestions.length) {
          setCurrentQuestion(nextQuestion);
          setSelectedAnswer(null);
          setSelectedIndex(null);
          setIsAnswering(false);
        } else {
          setGameState('finished');
        }
      }
    }, 1000);
  };

  // Rank icon helper
  const getRankIcon = (index) => {
    if (index === 0) return <FaCrown className="rank-icon gold" />;
    if (index === 1) return <FaMedal className="rank-icon silver" />;
    if (index === 2) return <FaMedal className="rank-icon bronze" />;
    return <span className="rank-number">{index + 1}</span>;
  };

  const progressPercentage = sessionQuestions.length > 0 ? (score / sessionQuestions.length) * 100 : 0;

  return (
    <div className="quiz-page-wrapper">
      <div className="ambient-glow"></div>

      <main className="quiz-body">

        {/* THANH TIẾN ĐỘ - Chỉ hiện khi đang chơi */}
        {gameState === 'playing' && (
          <div className="game-progress-track">
            <div
              className="progress-icon"
              style={{ left: `${progressPercentage}%` }}
            >
              <FaDove className="dove-moving" />
            </div>
            <div className="flag-icon"><FaStar /></div>
          </div>
        )}

        <div className="quiz-container">

          {/* ========== 1. MÀN HÌNH CHÀO MỪNG ========== */}
          {gameState === 'welcome' && (
            <div className="welcome-section">
              <div className="welcome-icon">
                <FaDove style={{ color: '#00695c', fontSize: '80px' }} />
              </div>
              <h1>Hành Trình Giác Ngộ</h1>
              <p>Chào mừng bạn đến với hành trình khám phá tri thức về tôn giáo và tín ngưỡng!</p>
              <p>Hệ thống sẽ chọn ngẫu nhiên <strong>{QUESTION_LIMIT} câu hỏi</strong> để bạn hoàn thành con đường trí tuệ.</p>
              <div style={{ margin: '20px 0', fontSize: '0.9rem', color: '#666' }}>
                Luật chơi: Bạn có <span style={{ color: '#e74c3c' }}>5 <FaHeart /></span>. Trả lời sai sẽ mất 1 mạng.
              </div>
              <div className="welcome-actions">
                <button className="btn-start" onClick={handleStart}>Bắt Đầu Ngay</button>
                <button className="btn-leaderboard" onClick={handleShowLeaderboard}>
                  <FaTrophy /> Bảng Xếp Hạng
                </button>
              </div>
            </div>
          )}

          {/* ========== 2. MÀN HÌNH CHƠI GAME ========== */}
          {gameState === 'playing' && (
            <>
              <div className="game-header">
                <div className="lives">
                  {[...Array(5)].map((_, i) => (
                    i < lives ? <FaHeart key={i} /> : <FaRegHeart key={i} style={{ opacity: 0.3 }} />
                  ))}
                </div>
                <div className="score-board">
                  Câu: {currentQuestion + 1}/{sessionQuestions.length}
                </div>
              </div>

              <div className="question-text">
                Câu {currentQuestion + 1}: {sessionQuestions[currentQuestion].questionText.replace(/^Câu \d+:\s*/, '')}
              </div>

              <div className="answer-section">
                {sessionQuestions[currentQuestion].answerOptions.map((option, index) => {
                  let btnClass = "answer-btn";
                  if (isAnswering) {
                    if (option.isCorrect) {
                      btnClass += " correct";
                    } else if (selectedIndex === index) {
                      btnClass += " wrong";
                    }
                  }

                  return (
                    <button
                      key={index}
                      className={btnClass}
                      onClick={() => handleAnswerClick(option.isCorrect, index)}
                      disabled={isAnswering}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ textAlign: 'left' }}>{option.answerText}</span>
                        {isAnswering && option.isCorrect && <FaCheck style={{ minWidth: '20px', marginLeft: '10px' }} />}
                        {isAnswering && selectedIndex === index && !option.isCorrect && <FaTimes style={{ minWidth: '20px', marginLeft: '10px' }} />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </>
          )}

          {/* ========== 3. MÀN HÌNH KẾT THÚC ========== */}
          {gameState === 'finished' && (
            <div className="score-section">
              <div className="welcome-icon">
                {lives <= 0 ? (
                  <FaDove style={{ color: '#999', fontSize: '80px', opacity: 0.5 }} />
                ) : score === sessionQuestions.length ? (
                  <FaStar style={{ color: '#e6a817', fontSize: '80px' }} />
                ) : (
                  <FaDove style={{ color: '#00695c', fontSize: '80px' }} />
                )}
              </div>

              <h2>
                {lives <= 0
                  ? "HÀNH TRÌNH DỪNG LẠI!"
                  : score === sessionQuestions.length
                    ? "GIÁC NGỘ VIÊN MÃN!"
                    : "HÀNH TRÌNH KẾT THÚC"}
              </h2>

              <p className="score-text">
                {lives <= 0 ? (
                  `Rất tiếc, hành trình đã dừng lại ở câu số ${currentQuestion + 1}. Hãy ôn tập lại kiến thức nhé!`
                ) : score === sessionQuestions.length ? (
                  `Xuất sắc! Bạn đã trả lời đúng tuyệt đối ${score}/${sessionQuestions.length} câu hỏi và đạt đến đỉnh cao trí tuệ.`
                ) : (
                  `Bạn đã hoàn thành với ${score}/${sessionQuestions.length} câu đúng. Hãy thử lại để đạt điểm tuyệt đối nhé!`
                )}
              </p>

              {/* --- PHẦN LƯU ĐIỂM --- */}
              {!hasSaved ? (
                <div className="save-score-section">
                  <h3><FaTrophy /> Lưu điểm vào Bảng Xếp Hạng</h3>
                  <div className="save-score-form">
                    <input
                      type="text"
                      className="name-input"
                      placeholder="Nhập tên của bạn..."
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      maxLength={30}
                      onKeyDown={(e) => e.key === 'Enter' && handleSaveScore()}
                    />
                    <button
                      className="btn-save"
                      onClick={handleSaveScore}
                      disabled={isSaving}
                    >
                      {isSaving ? 'Đang lưu...' : 'Lưu Điểm'}
                    </button>
                  </div>
                  {saveError && <p className="save-error">{saveError}</p>}
                  <p className="save-hint">Điểm: <strong>{score}/{sessionQuestions.length}</strong> | Mạng còn: <strong>{Math.max(lives, 0)}</strong></p>
                </div>
              ) : (
                <div className="save-success">
                  <p>Đã lưu điểm thành công!</p>
                </div>
              )}

              <div className="score-actions">
                <button className="btn-restart" onClick={handleStart}>
                  <FaRedo /> Thử Lại
                </button>
                <button className="btn-leaderboard" onClick={handleShowLeaderboard}>
                  <FaTrophy /> Xem Bảng Xếp Hạng
                </button>
                <button className="btn-home" onClick={() => navigate('/')}>
                  <FaHome /> Về Trang Chủ
                </button>
              </div>
            </div>
          )}

          {/* ========== 4. MÀN HÌNH BẢNG XẾP HẠNG ========== */}
          {gameState === 'leaderboard' && (
            <div className="leaderboard-section">
              <div className="leaderboard-header">
                <FaTrophy className="trophy-icon" />
                <h2>Bảng Xếp Hạng</h2>
                <p>Top 10 người chơi xuất sắc nhất</p>
              </div>

              {isLoadingBoard ? (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                  <p>Đang tải bảng xếp hạng...</p>
                </div>
              ) : leaderboard.length === 0 ? (
                <div className="empty-board">
                  <FaDove style={{ fontSize: '50px', color: '#ccc', marginBottom: '15px' }} />
                  <p>Chưa có ai trên bảng xếp hạng.</p>
                  <p>Hãy là người đầu tiên chinh phục!</p>
                </div>
              ) : (
                <div className="leaderboard-table">
                  <div className="lb-row lb-header-row">
                    <span className="lb-rank">Hạng</span>
                    <span className="lb-name">Tên</span>
                    <span className="lb-score">Điểm</span>
                    <span className="lb-lives">Mạng</span>
                  </div>
                  {leaderboard.map((entry, index) => (
                    <div
                      key={entry.id}
                      className={`lb-row ${index < 3 ? `lb-top-${index + 1}` : ''}`}
                    >
                      <span className="lb-rank">{getRankIcon(index)}</span>
                      <span className="lb-name">{entry.player_name}</span>
                      <span className="lb-score">{entry.score}/{entry.total_questions}</span>
                      <span className="lb-lives">
                        {[...Array(entry.lives_remaining)].map((_, i) => (
                          <FaHeart key={i} style={{ color: '#e74c3c', fontSize: '12px' }} />
                        ))}
                        {entry.lives_remaining === 0 && <span style={{ color: '#999' }}>0</span>}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="score-actions">
                <button className="btn-start" onClick={handleStart}>
                  <FaDove /> Chơi Ngay
                </button>
                <button className="btn-home" onClick={() => setGameState('welcome')}>
                  <FaArrowLeft /> Quay Lại
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Quiz;
