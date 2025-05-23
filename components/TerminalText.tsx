
import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  speed?: number; // Milliseconds per character
  onFinished?: () => void;
  className?: string;
  loop?: boolean;
  cursorChar?: string;
}

const TerminalText: React.FC<TerminalTextProps> = ({ text, speed = 50, onFinished, className = '', loop = false, cursorChar = '_' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      if (onFinished) onFinished();
      if (loop) {
        const loopTimeout = setTimeout(() => {
            setDisplayedText('');
            setCurrentIndex(0);
        }, 2000); // Pause before looping
        return () => clearTimeout(loopTimeout);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, text, speed, onFinished, loop]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length || loop || showCursor ? <span className="animate-pulse">{cursorChar}</span> : ''}
    </span>
  );
};

export default TerminalText;
