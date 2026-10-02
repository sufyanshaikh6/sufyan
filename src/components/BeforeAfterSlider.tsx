import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, ArrowRight, Eye, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { BEFORE_AFTER_DATA } from '../data/portfolioData';

export const BeforeAfterSlider: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = BEFORE_AFTER_DATA[activeItemIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-28 md:py-36 bg-[#070709] border-t border-white/5 relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
            TRANSFORMATION BENCHMARK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white font-display text-balance leading-[0.95]">
            THE PRODUCT IS ALREADY GOOD.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              WE MAKE IT LOOK THAT WAY.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-4 max-w-2xl leading-relaxed text-balance">
            Compare flat manufacturer photos with cinematic Ad Creative commercial art direction. Drag the slider to reveal the difference in perceived luxury.
          </p>
        </div>

        {/* Product Switcher Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {BEFORE_AFTER_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all border ${
                idx === activeItemIndex
                  ? 'bg-white text-black border-white'
                  : 'bg-[#101015] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <span>{item.title}</span>
              <span className="ml-2 text-[10px] opacity-70">({item.category})</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Slider Viewport (8 Columns) */}
          <div className="lg:col-span-8 bg-[#0c0c11] border border-white/15 overflow-hidden">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden cursor-ew-resize touch-none select-none bg-black"
            >
              {/* "AFTER" Image (Full background layer) */}
              <div className="absolute inset-0">
                <img
                  src={currentItem.afterImg}
                  alt={`${currentItem.title} - After`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-amber-400/40 text-amber-300 text-xs uppercase font-semibold tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>AFTER: {currentItem.afterLabel}</span>
                </div>
              </div>

              {/* "BEFORE" Image (Clipped layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentItem.beforeImg}
                  alt={`${currentItem.title} - Before`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none filter grayscale-[30%] contrast-[0.9]"
                  style={{
                    width: containerRef.current
                      ? `${containerRef.current.clientWidth}px`
                      : '100%',
                    height: '100%',
                  }}
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/20 text-zinc-300 text-xs uppercase font-semibold tracking-wider">
                  BEFORE: {currentItem.beforeLabel}
                </div>
              </div>

              {/* Draggable Divider Line & Knob */}
              <div
                className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-black flex items-center justify-center shadow-2xl border border-black/20">
                  <MoveHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Touch Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-4 py-1.5 border border-white/10 text-[11px] text-zinc-300 tracking-wider uppercase pointer-events-none flex items-center gap-2">
                <span>Drag slider left / right to compare</span>
              </div>
            </div>
          </div>

          {/* Analytical Breakdown Column (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#0c0c11] border border-white/10 space-y-4">
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                DIAGNOSTIC COMPARISON
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-red-950/20 border border-red-900/30 text-xs">
                  <div className="text-red-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Raw Product Problem</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {currentItem.beforeNotes}
                  </p>
                </div>

                <div className="p-3 bg-amber-950/20 border border-amber-900/30 text-xs">
                  <div className="text-amber-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ad Creative Direction</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    {currentItem.afterNotes}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#121217] border border-white/10 space-y-2">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                COMMERCIAL LIFT
              </div>
              <p className="text-sm font-semibold text-white leading-snug">
                {currentItem.perceivedValueLift}
              </p>
              <div className="text-xs text-zinc-400 pt-2">
                Visual fidelity directly controls price elasticity and consumer trust.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
