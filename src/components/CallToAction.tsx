import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/portfolioData';

interface CallToActionProps {
  onStartProject: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onStartProject }) => {
  return (
    <section className="relative py-32 md:py-44 bg-[#050508] border-t border-white/10 overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <img
          src={ASSETS.hero}
          alt="Cinematic Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-[#050508]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>DIRECT PRODUCTION RESERVATIONS OPEN</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white font-display leading-[0.92] text-balance mb-8">
          READY TO MAKE<br />
          YOUR PRODUCT<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            IMPOSSIBLE TO IGNORE?
          </span>
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto mb-12 text-balance">
          Tell us what you&apos;re launching. We&apos;ll bring the creative direction.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-semibold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-200 shadow-2xl"
          >
            <span>START A PROJECT →</span>
          </button>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-semibold tracking-wider uppercase text-white border border-white/25 hover:border-white hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
          >
            <span>VIEW OUR WORK</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 text-xs text-zinc-400">
          Typical campaign turnaround 7–10 days · Full commercial usage rights included
        </div>
      </div>
    </section>
  );
};
