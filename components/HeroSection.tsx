
import React from 'react';
import TerminalText from './TerminalText';
import GlitchText from './GlitchText';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center pt-16 pb-8 -mt-16">
      <div className="w-full max-w-4xl px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
          <GlitchText text="HELLO FRIEND." />
        </h1>
        <div className="text-2xl sm:text-3xl md:text-4xl text-green-300 mb-8">
          <TerminalText text="My name is Ahmed Walid. Welcome to my console." speed={70} loop={false} />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
          I am a Cybersecurity Final Year Student, passionate about exploring the digital world, securing systems, and ethical hacking.
          <br />
          <span className="glitch-effect opacity-75">Navigating the complexities of code and networks to build a more secure future.</span>
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            className="text-xl px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
          >
            &gt; enter_system
          </a>
          <a
            href="/Ahmed Walid CV Resume.pdf"
            download="Ahmed_Walid_CV_Resume.pdf"
            className="text-xl px-8 py-3 border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-black transition-all duration-300 flex items-center gap-2"
            aria-label="Download Ahmed Walid's Resume"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            download_resume
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 text-center w-full text-green-400/70 animate-pulse">
        &darr; SCROLL &darr;
      </div>
    </section>
  );
};

export default HeroSection;
