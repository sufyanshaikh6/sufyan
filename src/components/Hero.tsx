import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/portfolioData';

interface HeroProps {
  onStartProject: () => void;
}

const HERO_PRODUCTS = [
  {
    id: 'skincare',
    name: 'Luxury Skincare Serum',
    tag: 'Macro Obsidian Water & Amber Glass',
    image: ASSETS.hero,
  },
  {
    id: 'coffee',
    name: 'Artisan Cold Brew',
    tag: 'Volcanic Slate & Warm Amber Glow',
    image: ASSETS.abcoffee,
  },
  {
    id: 'protein',
    name: 'SURGE Crisp Protein Bar',
    tag: 'Textured Chocolate & Roasted Almonds',
    image: ASSETS.surge,
  },
  {
    id: 'beverage',
    name: 'Aura Sparkling Botanical',
    tag: 'Yuzu Splash & Frosted Glass Dynamics',
    image: ASSETS.aura,
  }
];

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [isPlayingMotion, setIsPlayingMotion] = useState(true);
  const [isAtmosphereOn, setIsAtmosphereOn] = useState(false);

  // Auto rotate product showcase every 8 seconds if playing
  useEffect(() => {
    if (!isPlayingMotion) return;
    const interval = setInterval(() => {
      setActiveProductIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlayingMotion]);

  // Subtle web audio ambient drone generator for cinematic feel
  useEffect(() => {
    if (!isAtmosphereOn) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, ctx.currentTime); // A1 deep cinema drone

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, ctx.currentTime);

      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      return () => {
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
        setTimeout(() => {
          osc.stop();
          ctx.close();
        }, 500);
      };
    } catch {
      // AudioContext fallback
    }
  }, [isAtmosphereOn]);

  const currentProduct = HERO_PRODUCTS[activeProductIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#070709]">
      {/* Background Cinematic Visual with Atmospheric Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {HERO_PRODUCTS.map((prod, idx) => (
          <div
            key={prod.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeProductIndex ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <img
              src={prod.image}
              alt={prod.name}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] transition-transform duration-[10000ms] ease-linear ${
                isPlayingMotion && idx === activeProductIndex ? 'scale-105 translate-y-[-1%]' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Ambient Film Grain & Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/60 to-[#070709]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-[#070709]/80" />
        <div className="absolute inset-0 glow-ambient pointer-events-none" />
        <div className="absolute inset-0 cinematic-grid opacity-30" />
      </div>

      {/* Top Header Label */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-4">
        <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs tracking-widest text-zinc-400 uppercase font-medium">
          <span className="text-white font-semibold">AD CREATIVE</span>
          <span className="hidden sm:inline text-zinc-600" aria-hidden="true">/</span>
          <span className="text-zinc-400">AI-POWERED CREATIVE STUDIO</span>
          <span className="hidden sm:inline text-zinc-600" aria-hidden="true">/</span>
          <span className="text-amber-400/90 font-mono text-[11px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            DIRECTING PRODUCTION 2026
          </span>
        </div>
      </div>

      {/* Main Content Area: Massive Editorial Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full my-auto py-12 md:py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white uppercase leading-[0.92] tracking-tight font-display mb-8 text-balance">
            WE MAKE PRODUCTS<br />
            LOOK IMPOSSIBLE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              TO IGNORE.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mb-10 text-balance">
            Cinematic advertising, product visuals and social creatives built for brands that want to stand out.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-200 shadow-2xl"
            >
              <span>View Our Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white border border-white/25 hover:border-white hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Reel Controls & Product Meta */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Active Shot Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-zinc-900/80 border border-white/15 overflow-hidden shrink-0">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-zinc-400">
              FEATURED CINEMATIC STILL
            </div>
            <div className="text-sm font-semibold text-white">
              {currentProduct.name}
            </div>
            <div className="text-xs text-zinc-400">
              {currentProduct.tag}
            </div>
          </div>
        </div>

        {/* Product Switcher Dots / Tabs */}
        <div className="flex items-center gap-2">
          {HERO_PRODUCTS.map((prod, index) => (
            <button
              key={prod.id}
              onClick={() => {
                setActiveProductIndex(index);
                setIsPlayingMotion(false);
              }}
              className={`text-xs px-3 py-1.5 transition-all duration-200 border ${
                index === activeProductIndex
                  ? 'border-white text-white bg-white/10 font-medium'
                  : 'border-white/10 text-zinc-500 hover:text-zinc-300 hover:border-white/30'
              }`}
            >
              0{index + 1}
            </button>
          ))}
        </div>

        {/* Ambient Simulator Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlayingMotion(!isPlayingMotion)}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-3 py-1.5 border border-white/10 hover:border-white/30 transition-colors"
            title={isPlayingMotion ? 'Pause Ambient Motion' : 'Play Ambient Motion'}
          >
            {isPlayingMotion ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlayingMotion ? 'Motion Active' : 'Motion Paused'}</span>
          </button>

          <button
            onClick={() => setIsAtmosphereOn(!isAtmosphereOn)}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 border transition-colors ${
              isAtmosphereOn
                ? 'border-amber-400/60 text-amber-300 bg-amber-950/20'
                : 'border-white/10 text-zinc-400 hover:text-white'
            }`}
            title="Toggle Studio Ambient Drone"
          >
            {isAtmosphereOn ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{isAtmosphereOn ? 'Sound On' : 'Studio Sound'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
