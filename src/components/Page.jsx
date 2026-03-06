import React, { forwardRef } from 'react';
import './Page.css';

const Page = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
        {/* Nếu có truyền prop 'image' thì hiển thị ảnh, ngược lại hiển thị nội dung text */}
        {props.image ? (
            <img 
                src={props.image} 
                alt={`Page ${props.number}`} 
                className="page-image" 
            />
        ) : (
            <div className="page-content">
                <div className="page-text">{props.children}</div>
                <div className="page-footer">{props.number}</div>
            </div>
        )}
    </div>
  );
});

export default Page;