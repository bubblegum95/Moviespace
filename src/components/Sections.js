import React from 'react';
import { useSwipeable } from 'react-swipeable';
import './Sections.css'; // 필요 시 별도의 CSS 파일을 사용하여 스타일링

const Sections = ({
  sections,
  currentIndex,
  handleSwipedLeft,
  handleSwipedRight,
}) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="sections-container" {...swipeHandlers}>
      {sections.map((section, index) => (
        <div
          key={index}
          className="section"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default Sections;
