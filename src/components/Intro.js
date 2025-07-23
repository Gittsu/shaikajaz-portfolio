import React from 'react';
import './Intro.css';

const Intro = () => {
  const renderSplitText = (text, className) => {
    return (
      <span className={`side-text ${className}`}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="char"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="intro-screen">
      <div className="welcome-text">
        Wellcome to my website
        <div className="center-row">...</div>
      </div>
      <div className="bottom-quote">
  <p className="ar">احلم . صدق . تجرأ . افعل</p>
  <p className="en">dream. believe. dare. do.</p>
</div>

      <div className="center-row">
        {renderSplitText('Violet', 'left')}
        <div className="logo-zoom">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Blue Dragon Logo" />
        </div>
        {renderSplitText('Fang', 'right')}
      </div>
      <div className="bottom-quote">
  <p className="ar">احلم . صدق . تجرأ . افعل</p>
  <p className="en">dream. believe. dare. do.</p>
</div>
    </div>
  );
};

export default Intro;
