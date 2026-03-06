import React from 'react';
import { FaComments } from 'react-icons/fa';
import './DiscussButton.css';

const PADLET_URL = 'https://padlet.com/hoangnv10052004/mln131-tri-t-h-c-m-c-l-nin-ch-ng-vi-v-n-t-n-gi-o-p6iws9em0svsxdh2';

const DiscussButton = () => {
  return (
    <a
      href={PADLET_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="discuss-btn"
      title="Thảo luận trên Padlet"
    >
      <FaComments />
      <span className="discuss-label">Chat</span>
    </a>
  );
};

export default DiscussButton;
