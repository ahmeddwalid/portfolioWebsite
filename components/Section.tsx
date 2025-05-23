
import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
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
