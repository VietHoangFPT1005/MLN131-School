import React from 'react';

/* =====================================================================
   SHARED STYLES - Retro Vietnamese Propaganda Poster Aesthetic
   ===================================================================== */

const S = {
  page: {
    width: '100%',
    height: '100%',
    flex: 1,
    background: 'linear-gradient(145deg, #f8edcc 0%, #f0dfa8 40%, #ede0b0 100%)',
    fontFamily: "'Times New Roman', Georgia, serif",
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    border: '6px double #8B1A1A',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    background: 'linear-gradient(90deg, #5C0E0E, #8B1A1A, #B22222, #8B1A1A, #5C0E0E)',
    borderBottom: '3px solid #FFD700',
    borderTop: '2px solid #FFD700',
    padding: '7px 16px',
    textAlign: 'center',
    flexShrink: 0,
  },
  headerMeta: {
    color: '#FFD700',
    fontSize: '9px',
    letterSpacing: '2.5px',
    marginBottom: '3px',
    textTransform: 'uppercase',
  },
  headerTitle: {
    color: '#FFD700',
    fontSize: '22px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
    lineHeight: 1.2,
  },
  headerSub: {
    color: '#FFE57A',
    fontSize: '10px',
    letterSpacing: '2px',
    marginTop: '3px',
  },
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 14px',
    gap: '7px',
    overflow: 'hidden',
  },
  footer: {
    background: 'linear-gradient(90deg, #5C0E0E, #8B1A1A, #5C0E0E)',
    border: '2px solid #FFD700',
    padding: '4px 12px',
    textAlign: 'center',
    flexShrink: 0,
    marginTop: 'auto',
  },
  footerText: {
    color: '#FFD700',
    fontSize: '9px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
  },
  quoteBox: {
    background: 'linear-gradient(90deg, #8B1A1A, #A93226, #8B1A1A)',
    borderRadius: '4px',
    padding: '7px 14px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid #FFD700',
    flexShrink: 0,
  },
  quoteText: {
    color: '#FFFFFF',
    fontSize: '13px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    flex: 1,
  },
  quoteAuthor: {
    color: '#FFD700',
    fontSize: '10px',
    marginTop: '3px',
  },
  card: (borderColor = '#8B1A1A', bgColor = 'rgba(139,26,26,0.05)') => ({
    background: bgColor,
    border: `2px solid ${borderColor}`,
    borderRadius: '4px',
    padding: '7px 10px',
    boxSizing: 'border-box',
  }),
  cardTitle: (color = '#8B1A1A') => ({
    color,
    fontWeight: 'bold',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    borderBottom: `1px solid ${color}`,
    paddingBottom: '4px',
    marginBottom: '6px',
  }),
  bullet: {
    fontSize: '11px',
    color: '#2C1810',
    lineHeight: '1.45',
    marginBottom: '3px',
  },
  row: {
    display: 'flex',
    gap: '8px',
    flex: 1,
    overflow: 'hidden',
  },
  col: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    overflow: 'hidden',
  },
};

/* =====================================================================
   TRANG 1 / 4 — BẢN CHẤT CỦA TÔN GIÁO
   ===================================================================== */
export function BanChatPage() {
  return (
    <div style={S.page}>
      {/* Header */}
      <div style={S.header}>
        <div style={S.headerMeta}>★ CHỦ NGHĨA MÁC - LÊNIN • TRIẾT HỌC MÁC - LÊNIN ★</div>
        <div style={S.headerTitle}>BẢN CHẤT CỦA TÔN GIÁO</div>
        <div style={S.headerSub}>✦ QUAN ĐIỂM CHỦ NGHĨA MÁC - LÊNIN ✦</div>
      </div>

      <div style={S.body}>
        {/* Định nghĩa */}
        <div style={S.card('#8B1A1A', 'rgba(139,26,26,0.06)')}>
          <div style={S.cardTitle('#8B1A1A')}>● ĐỊNH NGHĨA</div>
          <div style={{ fontSize: '12px', color: '#2C1810', lineHeight: '1.6' }}>
            Tôn giáo là <strong>hình thái ý thức xã hội</strong> phản ánh hiện thực khách quan
            một cách <strong>hoang đường, hư ảo</strong>. Con người gán cho tự nhiên và xã hội
            những lực lượng siêu nhiên, thần thánh để lý giải những điều chưa thể hiểu được.
          </div>
        </div>

        {/* Marx quote */}
        <div style={S.quoteBox}>
          <div style={{ color: '#FFD700', fontSize: '32px', lineHeight: 1, flexShrink: 0 }}>"</div>
          <div style={{ flex: 1 }}>
            <div style={S.quoteText}>Tôn giáo là thuốc phiện của nhân dân</div>
            <div style={S.quoteAuthor}>— Karl Marx, Góp phần phê phán triết học pháp quyền Hegel, 1844</div>
          </div>
        </div>

        {/* Ăngghen quote */}
        <div style={{ ...S.card('#6B4A00', 'rgba(107,74,0,0.07)'), flexShrink: 0 }}>
          <div style={{ fontSize: '11px', color: '#3D2C00', lineHeight: '1.55', fontStyle: 'italic' }}>
            Ph. Ăngghen: <em>"Tất cả mọi tôn giáo chẳng qua chỉ là sự phản ánh <strong>hư ảo</strong> vào trong
            đầu óc của con người — của những lực lượng ở bên ngoài <strong>chi phối cuộc sống hàng ngày</strong> của họ"</em>
          </div>
        </div>

        {/* Hai cột: Chức năng & Hai mặt */}
        <div style={S.row}>
          {/* Chức năng */}
          <div style={{ ...S.card('#D4A017', 'rgba(212,160,23,0.07)'), flex: 1, overflow: 'hidden' }}>
            <div style={S.cardTitle('#7A5800')}>📚 Chức năng</div>
            {[
              ['Thế giới quan', 'Giải thích nguồn gốc vũ trụ, con người, cuộc sống'],
              ['Đền bù ảo', 'Xoa dịu nỗi đau, mang lại niềm an ủi tinh thần'],
              ['Liên kết cộng đồng', 'Gắn kết tín đồ qua nghi lễ và đức tin chung'],
              ['Điều chỉnh hành vi', 'Quy định đạo đức, chuẩn mực lối sống'],
            ].map(([t, d], i) => (
              <div key={i} style={{ marginBottom: '4px' }}>
                <span style={{ color: '#8B1A1A', fontWeight: 'bold', fontSize: '10.5px' }}>▶ {t}: </span>
                <span style={{ fontSize: '10.5px', color: '#3D2010' }}>{d}</span>
              </div>
            ))}
          </div>

          {/* Hai mặt */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', overflow: 'hidden' }}>
            <div style={{ ...S.card('#2E7D32', 'rgba(46,125,50,0.07)'), flex: 1, overflow: 'hidden' }}>
              <div style={S.cardTitle('#1B5E20')}>✅ Mặt tích cực</div>
              {['Bảo tồn giá trị đạo đức, văn hóa dân tộc', 'Khuyến khích lòng nhân ái, từ bi', 'Ổn định tinh thần và trật tự xã hội'].map((x, i) => (
                <div key={i} style={S.bullet}>• {x}</div>
              ))}
            </div>
            <div style={{ ...S.card('#B71C1C', 'rgba(183,28,28,0.07)'), flex: 1, overflow: 'hidden' }}>
              <div style={S.cardTitle('#7F0000')}>⚠️ Mặt tiêu cực</div>
              {['Phản ánh hiện thực sai lệch, xa rời thực tế', 'Bị giai cấp thống trị lợi dụng', 'Có thể kìm hãm phát triển khoa học'].map((x, i) => (
                <div key={i} style={S.bullet}>• {x}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={S.footer}>
        <div style={S.footerText}>★ TRIẾT HỌC MÁC - LÊNIN • CHƯƠNG 6: VẤN ĐỀ TÔN GIÁO ★</div>
      </div>
    </div>
  );
}

/* =====================================================================
   TRANG 2 / 4 — NGUỒN GỐC CỦA TÔN GIÁO
   ===================================================================== */
export function NguonGocPage() {
  const origins = [
    {
      icon: '⚒️',
      color: '#1565C0',
      bg: 'rgba(21,101,192,0.07)',
      title: '1. NGUỒN GỐC KINH TẾ - XÃ HỘI',
      sub: '(Nguồn gốc sâu xa, quyết định nhất)',
      items: [
        'Con người bất lực trước sức mạnh của tự nhiên: thiên tai, bão lũ, dịch bệnh...',
        'Trong xã hội có giai cấp: áp bức, bóc lột, bất công, nghèo đói → con người bế tắc',
        'Tìm đến tôn giáo như chỗ dựa tinh thần, nơi gửi gắm hy vọng và khát vọng',
        'Khi lực lượng sản xuất phát triển, con người làm chủ tự nhiên → nguồn gốc này dần mất đi',
      ],
    },
    {
      icon: '🧠',
      color: '#6A1B9A',
      bg: 'rgba(106,27,154,0.07)',
      title: '2. NGUỒN GỐC NHẬN THỨC',
      sub: '(Hạn chế của nhận thức con người)',
      items: [
        'Nhận thức con người có giới hạn, không thể giải thích mọi hiện tượng tự nhiên - xã hội',
        'Sự tuyệt đối hóa, thần thánh hóa những điều chưa hiểu: sấm sét, nhật thực...',
        'Đồng nhất cái chưa biết với cái siêu nhiên → hình thành quan niệm tôn giáo',
        'Khoa học phát triển → thu hẹp không gian của tư duy thần học, tôn giáo',
      ],
    },
    {
      icon: '❤️',
      color: '#C62828',
      bg: 'rgba(198,40,40,0.07)',
      title: '3. NGUỒN GỐC TÂM LÝ',
      sub: '(Nhu cầu tinh thần của con người)',
      items: [
        'Tâm lý sợ hãi, lo âu trước cái chết, tai họa và những điều bí ẩn của cuộc sống',
        'Tình cảm, lòng biết ơn với tổ tiên, ông bà → thờ cúng tổ tiên, tín ngưỡng dân gian',
        'Khát vọng được che chở, bảo vệ, cứu rỗi trước những khổ đau cuộc đời',
        'Nhu cầu tâm linh, tinh thần là nhu cầu tự nhiên, chính đáng của con người',
      ],
    },
  ];

  return (
    <div style={S.page}>
      <div style={S.header}>
        <div style={S.headerMeta}>★ CHỦ NGHĨA MÁC - LÊNIN • TRIẾT HỌC MÁC - LÊNIN ★</div>
        <div style={S.headerTitle}>NGUỒN GỐC CỦA TÔN GIÁO</div>
        <div style={S.headerSub}>✦ BA NGUỒN GỐC CƠ BẢN ✦</div>
      </div>

      <div style={S.body}>
        {origins.map((o, idx) => (
          <div key={idx} style={{ ...S.card(o.color, o.bg), flex: 1, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: `1px solid ${o.color}`, paddingBottom: '4px', marginBottom: '6px' }}>
              <span style={{ fontSize: '18px' }}>{o.icon}</span>
              <div>
                <div style={{ color: o.color, fontWeight: 'bold', fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{o.title}</div>
                <div style={{ color: o.color, fontSize: '9.5px', fontStyle: 'italic', opacity: 0.8 }}>{o.sub}</div>
              </div>
            </div>
            {o.items.map((item, i) => (
              <div key={i} style={{ ...S.bullet, marginBottom: '4px' }}>
                <span style={{ color: o.color, fontWeight: 'bold' }}>• </span>{item}
              </div>
            ))}
          </div>
        ))}

        {/* Bottom insight */}
        <div style={{ ...S.quoteBox, flexShrink: 0 }}>
          <div style={{ color: '#FFD700', fontSize: '28px', lineHeight: 1, flexShrink: 0 }}>"</div>
          <div style={{ flex: 1 }}>
            <div style={{ ...S.quoteText, fontSize: '12px' }}>
              Tôn giáo sinh ra từ sự bất lực của con người trước tự nhiên và xã hội, không phải từ sự sáng tạo của thế lực siêu nhiên nào.
            </div>
            <div style={S.quoteAuthor}>— Lênin, Về thái độ của Đảng Công nhân đối với tôn giáo, 1909</div>
          </div>
        </div>
      </div>

      <div style={S.footer}>
        <div style={S.footerText}>★ TRIẾT HỌC MÁC - LÊNIN • CHƯƠNG 6: VẤN ĐỀ TÔN GIÁO ★</div>
      </div>
    </div>
  );
}

/* =====================================================================
   TRANG 3 / 4 — TÍNH CHẤT CỦA TÔN GIÁO
   ===================================================================== */
export function TinhChatPage() {
  return (
    <div style={S.page}>
      <div style={S.header}>
        <div style={S.headerMeta}>★ CHỦ NGHĨA MÁC - LÊNIN • TRIẾT HỌC MÁC - LÊNIN ★</div>
        <div style={S.headerTitle}>TÍNH CHẤT CỦA TÔN GIÁO</div>
        <div style={S.headerSub}>✦ BA TÍNH CHẤT CƠ BẢN ✦</div>
      </div>

      <div style={S.body}>
        {/* Intro */}
        <div style={{ ...S.card('#5C0E0E', 'rgba(92,14,14,0.06)'), flexShrink: 0 }}>
          <div style={{ fontSize: '11.5px', color: '#2C1810', lineHeight: '1.6', textAlign: 'center' }}>
            Tôn giáo <strong>không phải</strong> là hiện tượng siêu nhiên, vĩnh cửu, mà là <strong>hiện tượng xã hội - lịch sử</strong> mang ba tính chất cơ bản sau:
          </div>
        </div>

        {/* Ba tính chất */}
        {[
          {
            icon: '📜', num: '1', color: '#B45309', bg: 'rgba(180,83,9,0.07)',
            title: 'TÍNH LỊCH SỬ',
            desc: 'Tôn giáo có sự ra đời, phát triển, biến đổi và tiêu vong trong lịch sử.',
            items: [
              'Tôn giáo là hiện tượng xã hội có nguồn gốc lịch sử cụ thể, không vĩnh cửu, bất biến',
              'Gắn liền với điều kiện kinh tế - xã hội của từng thời đại lịch sử',
              'Khi điều kiện kinh tế - xã hội thay đổi, tôn giáo cũng biến đổi theo',
              'Khi con người làm chủ hoàn toàn tự nhiên và xã hội, tôn giáo sẽ mất đi cơ sở tồn tại',
            ],
          },
          {
            icon: '👥', num: '2', color: '#1565C0', bg: 'rgba(21,101,192,0.07)',
            title: 'TÍNH QUẦN CHÚNG',
            desc: 'Tôn giáo phản ánh nhu cầu, khát vọng tinh thần của quần chúng nhân dân.',
            items: [
              'Thế giới có khoảng 4/5 dân số có đời sống tôn giáo, tín ngưỡng',
              'Tôn giáo là nơi người lao động tìm sự an ủi, che chở trước khổ đau',
              'Không thể xóa bỏ tôn giáo bằng mệnh lệnh hành chính hay áp bức cưỡng ép',
              'Phải giải quyết tôn giáo thông qua cải tạo xã hội, xây dựng CNXH',
            ],
          },
          {
            icon: '⚖️', num: '3', color: '#4A1E8B', bg: 'rgba(74,30,139,0.07)',
            title: 'TÍNH CHÍNH TRỊ',
            desc: 'Khi xã hội còn giai cấp, tôn giáo bị giai cấp thống trị lợi dụng.',
            items: [
              'Giai cấp thống trị dùng tôn giáo để bảo vệ địa vị và lợi ích của mình',
              'Che đậy bản chất bóc lột, hướng quần chúng phục tùng và nhẫn nhịn',
              'Phân biệt rõ: tôn giáo thuần túy ≠ tôn giáo bị chính trị hóa, bị lợi dụng',
              'Bảo vệ quyền tự do tín ngưỡng đồng thời đấu tranh chống lợi dụng tôn giáo',
            ],
          },
        ].map((t, idx) => (
          <div key={idx} style={{ ...S.card(t.color, t.bg), flex: 1, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', borderBottom: `1px solid ${t.color}`, paddingBottom: '4px', marginBottom: '5px' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>{t.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: t.color, fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {t.num}. {t.title}
                </div>
                <div style={{ color: t.color, fontSize: '10px', fontStyle: 'italic', opacity: 0.85 }}>{t.desc}</div>
              </div>
            </div>
            {t.items.map((item, i) => (
              <div key={i} style={{ ...S.bullet, marginBottom: '3px' }}>
                <span style={{ color: t.color, fontWeight: 'bold' }}>• </span>{item}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={S.footer}>
        <div style={S.footerText}>★ TRIẾT HỌC MÁC - LÊNIN • CHƯƠNG 6: VẤN ĐỀ TÔN GIÁO ★</div>
      </div>
    </div>
  );
}

/* =====================================================================
   TRANG 4 / 4 — TÌNH HÌNH TÔN GIÁO Ở VIỆT NAM
   ===================================================================== */
export function TinhHinhVNPage() {
  const dacDiem = [
    {
      num: '1', color: '#B22222',
      title: 'Đa dạng tôn giáo',
      desc: '16 tôn giáo được Nhà nước công nhận; Phật giáo, Công giáo, Tin Lành, Cao Đài, Hòa Hảo, Hồi giáo, Baha\'i...',
    },
    {
      num: '2', color: '#1565C0',
      title: 'Nguồn gốc đa dạng',
      desc: 'Các tôn giáo du nhập từ nước ngoài, được bản địa hóa phù hợp văn hóa Việt Nam.',
    },
    {
      num: '3', color: '#2E7D32',
      title: 'Đan xen, hòa bình',
      desc: 'Nhiều tôn giáo cùng tồn tại đan xen, chung sống hòa bình, không có xung đột lớn.',
    },
    {
      num: '4', color: '#6A1B9A',
      title: 'Tín đồ đông đảo',
      desc: '≈ 26,5 triệu tín đồ (~27% dân số); 57.000 chức sắc; hơn 30.000 cơ sở thờ tự.',
    },
    {
      num: '5', color: '#E65100',
      title: 'Gắn bó với dân tộc',
      desc: 'Tín đồ và chức sắc tích cực tham gia kháng chiến, xây dựng, bảo vệ Tổ quốc.',
    },
    {
      num: '6', color: '#4A1E8B',
      title: 'Bị thế lực thù địch lợi dụng',
      desc: 'Các thế lực thù địch lợi dụng tôn giáo kích động chia rẽ dân tộc, chống phá Nhà nước.',
    },
  ];

  return (
    <div style={S.page}>
      <div style={S.header}>
        <div style={S.headerMeta}>★ CHỦ NGHĨA MÁC - LÊNIN • TRIẾT HỌC MÁC - LÊNIN ★</div>
        <div style={S.headerTitle}>TÌNH HÌNH TÔN GIÁO Ở VIỆT NAM</div>
        <div style={S.headerSub}>✦ 6 ĐẶC ĐIỂM CƠ BẢN & CHÍNH SÁCH CỦA ĐẢNG, NHÀ NƯỚC ✦</div>
      </div>

      <div style={S.body}>
        {/* 6 đặc điểm - 2 cột */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', flex: 1 }}>
          {dacDiem.map((d, i) => (
            <div key={i} style={{ background: `${d.color}0d`, border: `2px solid ${d.color}`, borderRadius: '4px', padding: '6px 9px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', borderBottom: `1px solid ${d.color}`, paddingBottom: '3px', marginBottom: '5px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: d.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', flexShrink: 0 }}>{d.num}</div>
                <div style={{ color: d.color, fontWeight: 'bold', fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{d.title}</div>
              </div>
              <div style={{ fontSize: '10.5px', color: '#2C1810', lineHeight: '1.4' }}>{d.desc}</div>
            </div>
          ))}
        </div>

        {/* Chính sách */}
        <div style={{ ...S.card('#8B1A1A', 'rgba(139,26,26,0.06)'), flexShrink: 0 }}>
          <div style={S.cardTitle('#8B1A1A')}>⭐ CHÍNH SÁCH CỦA ĐẢNG VÀ NHÀ NƯỚC VỀ TÔN GIÁO</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              ['🛡️', 'Tôn trọng & bảo đảm quyền tự do tín ngưỡng (Điều 24, HP 2013)'],
              ['🤝', 'Đoàn kết đồng bào có & không có tôn giáo — xây dựng khối đại đoàn kết'],
              ['🌟', 'Phát huy giá trị đạo đức, văn hóa tốt đẹp của tôn giáo'],
              ['⚔️', 'Đấu tranh chống lợi dụng tôn giáo vi phạm pháp luật, chia rẽ dân tộc'],
            ].map(([icon, text], i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '16px' }}>{icon}</div>
                <div style={{ fontSize: '9.5px', color: '#2C1810', lineHeight: '1.4', marginTop: '2px' }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={S.footer}>
        <div style={S.footerText}>★ TRIẾT HỌC MÁC - LÊNIN • CHƯƠNG 6: VẤN ĐỀ TÔN GIÁO ★</div>
      </div>
    </div>
  );
}
