import React from 'react';
import './Navbar.css'; // 필요 시 별도의 CSS 파일을 사용하여 스타일링

const Navbar = ({ sections, currentIndex, setCurrentIndex }) => {
  return (
    <nav className="navbar">
      {sections.map((section, index) => (
        <button
          key={index}
          className={`nav-button ${index === currentIndex ? 'active' : ''}`}
          onClick={() => setCurrentIndex(index)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
