"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
      style={{
        background: isScrolled ? '#492efcff' : 'transparent'
      }}
    >
      <div className="flex items-center h-16" style={{ width: '100%' }}>
        {/* Left Half - Aligned with Hero Content */}
        <div className="flex items-center" style={{ width: '50%', paddingLeft: '4rem', paddingRight: '2rem' }}>
          {/* Logo - Left Side Only */}
          <Link href="/" className="flex items-center group relative z-10">
            <span className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 ${
              isScrolled ? 'drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : ''
            }`}>
              Eficsy
            </span>
          </Link>
        </div>

        {/* Right Half - Navigation Links */}
        <div className="flex items-center justify-end" style={{ width: '50%', paddingRight: '4rem', paddingLeft: '2rem' }}>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={`text-sm lg:text-base font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-200 hover:text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}>
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 -z-10 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 blur-sm"></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <button className="relative px-6 lg:px-7 py-2 lg:py-2.5 bg-black text-white rounded-full font-medium text-sm lg:text-base overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none group"
          >
            <span
              className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'mb-1.5'
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-4 px-6 space-y-1 bg-gradient-to-br from-gray-900/98 via-purple-900/95 to-purple-800/95 backdrop-blur-2xl mx-4 mb-4 rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-500/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 pt-3">
            <button className="w-full px-6 py-3 bg-black text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
