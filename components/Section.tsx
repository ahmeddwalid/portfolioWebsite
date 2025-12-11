
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div
        ref={elementRef}
        className={`container mx-auto px-4 animate-on-scroll ${isVisible ? 'visible' : ''}`}
      >
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-center">
            <span className="glitch-effect inline-block tracking-wider">./{title}</span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
