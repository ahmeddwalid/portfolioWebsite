import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
// import { EyeIcon } from './icons/EyeIcon'; // Removed fsociety icon from brand

const navItems: NavItem[] = [
  { name: 'status_report', href: '#about' },
  { name: 'skill_matrix', href: '#skills' },
  { name: 'accomplishment_log', href: '#projects' }, // Updated name
  { name: 'secure_channel', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out p-4 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-green-500/20' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-3xl glitch-effect flex items-center">
          {/* <EyeIcon className="w-8 h-8 mr-2 text-green-400" /> Removed */}
          Ahmed Walid
        </a>
        <div className="space-x-6 text-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-white hover:underline underline-offset-4 decoration-green-500 transition-colors duration-200"
            >
              _{item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;