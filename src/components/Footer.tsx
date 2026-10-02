import React, { useState } from 'react';
import { ArrowUp, Mail, Copy, Check } from 'lucide-react';

interface FooterProps {
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartProject }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adscreativeofficial9@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white uppercase font-display block"
            >
              AD CREATIVE
            </a>
            <p className="text-sm text-zinc-400 max-w-sm">
              Cinematic advertising for modern brands.
            </p>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              We engineer high-retention commercials, macro photography, and social campaigns for ambitious consumer companies worldwide.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onStartProject}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Inquiries (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-4">
              CONNECT
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/adscreativeofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <span className="text-zinc-600">·</span>
                <a
                  href="https://instagram.com/adscreativeofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  @adscreativeofficial
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:adscreativeofficial9@gmail.com"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Email: adscreativeofficial9@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 text-zinc-500 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-amber-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={onStartProject}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 Ad Creative. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-400">Global Production Studio</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
