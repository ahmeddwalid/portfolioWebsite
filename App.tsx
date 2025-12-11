
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

const App: React.FC = () => {
  return (
    <div className="bg-black text-green-400 min-h-screen font-vt323 selection:bg-green-400 selection:text-black relative">
      {/* Subtle matrix rain background effect */}
      <MatrixBackground opacity={0.15} speed={60} density={0.90} />

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

