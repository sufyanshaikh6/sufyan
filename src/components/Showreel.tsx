import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Maximize2, Volume2, VolumeX, Sparkles, Film, ArrowRight } from 'lucide-react';
import { SHOWREEL_CLIPS } from '../data/portfolioData';

export const Showreel: React.FC = () => {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto sequence progression
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveClipIndex((current) => (current + 1) % SHOWREEL_CLIPS.length);
          return 0;
        }
        return prev + 2.5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, activeClipIndex]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const activeClip = SHOWREEL_CLIPS[activeClipIndex];

  return (
    <section id="showreel" className="py-28 md:py-36 bg-[#050508] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
              MASTER COMMERCIAL REEL
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display text-balance">
              AD CREATIVE SHOWREEL
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mt-2 text-balance">
              Products. Stories. Attention.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-white font-semibold uppercase">MASTER 4K CUT</span>
            <span>·</span>
            <span className="text-amber-400">SEQUENCE 0{activeClipIndex + 1} / 0{SHOWREEL_CLIPS.length}</span>
          </div>
        </div>

        {/* Cinematic Video Container */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black border border-white/15 overflow-hidden group shadow-2xl"
        >
          {/* Active Visual with Ken Burns / Cinematic drift */}
          <div className="absolute inset-0">
            <img
              key={activeClip.id}
              src={activeClip.image}
              alt={activeClip.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.1] transition-transform duration-[4000ms] ease-out ${
                isPlaying ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>

          {/* Cinematic Overlays: Anamorphic Scrim & Film Bars */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />

          {/* Letterbox Mask Accent */}
          <div className="absolute top-0 left-0 right-0 h-4 md:h-6 bg-black pointer-events-none border-b border-white/5" />
          <div className="absolute bottom-0 left-0 right-0 h-4 md:h-6 bg-black pointer-events-none border-t border-white/5" />

          {/* Center Reel Typography Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-6">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium mb-3">
              {activeClip.category} · {activeClip.brand}
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tight text-white font-display max-w-3xl leading-tight">
              {activeClip.title}
            </h3>
            <div className="text-xs uppercase tracking-widest text-zinc-400 mt-3 font-mono">
              [ 4K CINEMATIC MASTER · RAW OPTICS ]
            </div>
          </div>

          {/* Controls Bar at Bottom */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-3">
            {/* Progress Scrubber */}
            <div className="w-full h-1 bg-white/20 overflow-hidden cursor-pointer">
              <div
                className="h-full bg-amber-400 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors uppercase font-medium tracking-wider"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  <span>{isPlaying ? 'Pause Reel' : 'Play Reel'}</span>
                </button>

                <div className="hidden sm:flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
                  <span>TIMECODE</span>
                  <span className="text-white font-bold">{activeClip.time}</span>
                </div>
              </div>

              {/* Clip Jump Markers */}
              <div className="hidden md:flex items-center gap-1.5">
                {SHOWREEL_CLIPS.map((clip, idx) => (
                  <button
                    key={clip.id}
                    onClick={() => {
                      setActiveClipIndex(idx);
                      setProgress(0);
                    }}
                    className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider transition-all border ${
                      idx === activeClipIndex
                        ? 'border-amber-400 text-amber-300 bg-amber-950/40'
                        : 'border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                title="Toggle Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Sequence Descriptions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          {SHOWREEL_CLIPS.map((clip, idx) => (
            <button
              key={clip.id}
              onClick={() => {
                setActiveClipIndex(idx);
                setProgress(0);
              }}
              className={`p-3 text-left border transition-all text-xs ${
                idx === activeClipIndex
                  ? 'border-white/40 bg-[#111116] text-white'
                  : 'border-white/5 bg-[#0a0a0d] text-zinc-500 hover:text-zinc-300 hover:border-white/15'
              }`}
            >
              <div className="font-mono text-[10px] text-zinc-400 mb-1">0{idx + 1} / CUT</div>
              <div className="font-semibold uppercase tracking-tight truncate">{clip.brand}</div>
              <div className="text-[10px] text-zinc-400 truncate">{clip.category}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
