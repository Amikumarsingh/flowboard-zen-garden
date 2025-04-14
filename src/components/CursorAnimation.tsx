
import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const CursorAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const computedStyle = hoveredElement ? window.getComputedStyle(hoveredElement).cursor : '';
      setIsPointer(computedStyle === 'pointer');
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', updateCursorType);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', updateCursorType);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y]);

  if (isHidden) return null;

  const cursorColor = theme === 'light' ? '#9b87f5' : '#6b5bb5';
  const cursorRingColor = theme === 'light' ? 'rgba(155, 135, 245, 0.3)' : 'rgba(107, 91, 181, 0.3)';

  return (
    <>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.1s ease-out, width 0.2s, height 0.2s',
        }}
      >
        <div 
          className={`rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
            isPointer ? 'scale-150 opacity-70' : 'scale-100 opacity-100'
          }`}
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: cursorColor
          }}
        />
      </div>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div 
          className={`rounded-full absolute -translate-x-1/2 -translate-y-1/2 ${
            isPointer ? 'scale-125 opacity-30' : 'scale-100 opacity-40'
          }`}
          style={{
            width: '40px',
            height: '40px',
            border: `1px solid ${cursorRingColor}`,
            backgroundColor: 'transparent',
            transition: 'all 0.2s ease-out',
          }}
        />
      </div>
    </>
  );
};

export default CursorAnimation;
