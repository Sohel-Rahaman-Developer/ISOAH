import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // Typing speed in ms
  delay?: number; // Delay before typing starts in ms
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 150,
  delay = 500,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    if (index < text.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, text, speed]);

  useEffect(() => {
    // Reset the typewriter effect when the text changes
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  return <h1 className={className}>{displayedText}<span className="cursor">|</span></h1>;
};

export default Typewriter;
