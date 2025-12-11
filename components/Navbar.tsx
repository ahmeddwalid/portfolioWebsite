import React, { useState, useEffect, useCallback } from 'react';
import { NavItem } from '../types';
import HamburgerIcon from './icons/HamburgerIcon';

const navItems: NavItem[] = [
  { name: 'status_report', href: '#about' },
  { name: 'skill_matrix', href: '#skills' },
  { name: 'accomplishment_log', href: '#projects' },
  { name: 'secure_channel', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out p-4 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-green-500/20' : 'bg-transparent'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#hero"
            className="text-3xl glitch-effect flex items-center"
            aria-label="Ahmed Walid - Home"
          >
            Ahmed Walid
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-xl" role="menubar">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white hover:underline underline-offset-4 decoration-green-500 transition-colors duration-200"
                role="menuitem"
              >
                _{item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black rounded"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-72 bg-black border-l border-green-500/30 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="menu"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col pt-20 px-6">
          <div className="text-green-500/60 text-sm mb-4 font-mono">
            {'>'} navigation_menu
          </div>
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-2xl py-4 border-b border-green-500/20 hover:text-white hover:border-green-400 transition-all duration-200 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : '0ms' }}
              onClick={closeMobileMenu}
              role="menuitem"
            >
              <span className="text-green-500/60">$</span> _{item.name}
            </a>
          ))}
          <div className="mt-8 text-green-500/40 text-sm">
            <p>// Press ESC to close</p>
            <p className="mt-2 animate-pulse">_</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;