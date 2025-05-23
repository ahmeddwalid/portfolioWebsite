
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-green-400 min-h-screen font-vt323 selection:bg-green-400 selection:text-black">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20"> {/* Increased pt slightly for fixed navbar */}
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
