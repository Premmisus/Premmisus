import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: ' The System', href: '#system' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'Data', href: '#metrics' },
  { label: 'Results', href: '#work' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-accent rounded-sm rotate-45 blur-[1px] opacity-80" />
           <span className="font-sans font-bold text-xl tracking-tight text-white relative z-10 -ml-5 mix-blend-difference">NEXUS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-mono text-text-secondary hover:text-accent transition-colors duration-200 uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#qualify"
            className="px-5 py-2 text-xs font-bold font-mono bg-accent text-black hover:bg-white transition-all uppercase tracking-wider"
          >
            Check Availability
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 md:hidden">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-sans text-text-secondary hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};