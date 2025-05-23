
import React, { useState, useEffect, useCallback } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchChars?: string;
  interval?: number; // How often to attempt a glitch
  duration?: number; // How long a glitch character stays
}

const defaultGlitchChars = "!<>-_\\/[]{}—=+*^?#________"; // Added more underscores for "blank" effect

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = '', 
  glitchChars = defaultGlitchChars,
  interval = 1500, // More frequent glitches
  duration = 100
}) => {
  const [displayText, setDisplayText] = useState(text);

  const applyGlitch = useCallback(() => {
    if (Math.random() > 0.3) { // 70% chance to glitch
        let glitchedText = "";
        for (let i = 0; i < text.length; i++) {
            if (Math.random() < 0.15) { // Chance for each character to glitch
                glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitchedText += text[i];
            }
        }
        setDisplayText(glitchedText);

        setTimeout(() => {
            setDisplayText(text);
        }, duration + Math.random() * 50); // Variable glitch duration
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, glitchChars, duration]);


  useEffect(() => {
    const glitchInterval = setInterval(applyGlitch, interval * (0.5 + Math.random())); // Randomize interval slightly
    return () => clearInterval(glitchInterval);
  }, [applyGlitch, interval]);

  // Initial set to original text
  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  return <span className={`${className} glitch-effect-custom`}>{displayText}</span>;
};

// Note: The 'glitch-effect' class from index.html provides a CSS-based glitch.
// This component provides a JS-based character shuffle glitch. They can be combined or used separately.
// For now, this component's logic will be primary, and you can add `glitch-effect` class for CSS layer if desired.

export default GlitchText;
