import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/8 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark strictly "Ad Creative" */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-white uppercase font-display hover:opacity-90 transition-opacity"
        >
          Ad Creative
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a
            href="#work"
            className="hover:text-white transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#process"
            className="hover:text-white transition-colors duration-200"
          >
            Process
          </a>
          <a
            href="#showreel"
            className="hover:text-white transition-colors duration-200"
          >
            Showreel
          </a>
          <a
            href="#why-us"
            className="hover:text-white transition-colors duration-200"
          >
            Why Us
          </a>
          <a
            href="#clients"
            className="hover:text-white transition-colors duration-200"
          >
            Clients
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onStartProject}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 rounded-none transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0d] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-zinc-300">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Work
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Process
            </a>
            <a
              href="#showreel"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Showreel
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Why Us
            </a>
            <a
              href="#clients"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Clients
            </a>
          </div>
          <div className="pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-black bg-white rounded-none"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
