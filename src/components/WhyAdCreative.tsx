import React from 'react';
import { ArrowUpRight, Zap, Check, X, ShieldAlert, Sparkles } from 'lucide-react';

interface WhyAdCreativeProps {
  onStartProject: () => void;
}

export const WhyAdCreative: React.FC<WhyAdCreativeProps> = ({ onStartProject }) => {
  return (
    <section id="why-us" className="py-28 md:py-36 bg-[#070709] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-4">
            THE PRODUCTION MODEL
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white font-display leading-[0.95] text-balance mb-8">
            TRADITIONAL PRODUCTION<br />
            ISN&apos;T THE ONLY WAY TO MAKE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              GREAT ADVERTISING.
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed text-balance">
            Ad Creative combines creative strategy, cinematic direction and modern AI production to help consumer brands create more visual content, faster.
          </p>
        </div>

        {/* Concise Side-by-Side Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Legacy Production Agencies */}
          <div className="p-8 bg-[#0c0c10] border border-white/10 space-y-6">
            <div className="pb-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-400 block font-mono">
                  THE LEGACY PARADIGM
                </span>
                <h3 className="text-xl font-bold text-white uppercase font-display mt-1">
                  Traditional Production
                </h3>
              </div>
              <span className="text-xs text-red-400 font-mono">[ SLOW & RIGID ]</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-300 block">8 to 14 Week Production Timelines:</strong>
                  Endless pre-production calls, location scouting, casting, physical stage prep, and delayed post-production.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-300 block">$60,000–$120,000 Shoot Days:</strong>
                  High studio overhead, equipment rentals, lighting crews, and catering eat up the budget before creative begins.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-300 block">Restricted to 1 Physical Location:</strong>
                  Shooting on a single rented kitchen or cyclorama limits visual diversity across campaign iterations.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-300 block">Low Asset Yield (3–5 Exports):</strong>
                  You get one primary commercial cut and a handful of stills, leaving ad teams starved for testing assets.
                </div>
              </div>
            </div>
          </div>

          {/* Ad Creative Model */}
          <div className="p-8 bg-[#101016] border border-white/30 space-y-6 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 blur-2xl pointer-events-none" />

            <div className="pb-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 block font-mono">
                  OUR STUDIO ADVANTAGE
                </span>
                <h3 className="text-xl font-bold text-white uppercase font-display mt-1">
                  Ad Creative Studio
                </h3>
              </div>
              <span className="text-xs text-amber-300 font-mono">[ DIRECT & NIMBLE ]</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">7 to 10 Business Day Turnaround:</strong>
                  Go from initial concept storyboard to finished commercial assets in under two weeks.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Predictable, Flat Creative Investment:</strong>
                  No studio rental markups, equipment surcharges, or physical travel fees. 100% of budget funds craft.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Infinite Cinematic Worlds:</strong>
                  Place products on black volcanic stone, underwater reflections, golden hour architectural vistas, or macro voids.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">High-Volume Omnichannel Assets (30+ Units):</strong>
                  Receive multiple hook angles, 9:16 vertical cuts, e-commerce PDP stills, and retail presentation decks.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-8 bg-[#0c0c11] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold uppercase tracking-tight text-white font-display">
              Ready to modernize your brand&apos;s advertising pipeline?
            </h4>
            <p className="text-xs text-zinc-400">
              Review our selected work or book a 15-minute creative strategy review.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
