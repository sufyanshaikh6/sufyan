import React, { useState } from 'react';
import { ArrowUpRight, Film, Camera, Smartphone, Compass, SunMedium, Rocket } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface WhatWeCreateProps {
  onStartProject: (serviceName?: string) => void;
}

const SERVICE_ICONS = [
  Film,
  Camera,
  Smartphone,
  Compass,
  SunMedium,
  Rocket
];

export const WhatWeCreate: React.FC<WhatWeCreateProps> = ({ onStartProject }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 md:py-36 bg-[#070709] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
            CORE CAPABILITIES
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display text-balance">
            FROM PRODUCT TO CAMPAIGN.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed text-balance">
            End-to-end creative deliverables engineered to capture attention, communicate value, and scale your brand across all modern channels.
          </p>
        </div>

        {/* 6 Visual Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
            const isHovered = activeCard === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative flex flex-col justify-between p-8 bg-[#0b0b0f] border transition-all duration-300 ${
                  isHovered
                    ? 'border-white/30 bg-[#101016] translate-y-[-2px]'
                    : 'border-white/10'
                }`}
              >
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                    <span className="text-xs font-mono tracking-widest text-zinc-400">
                      {service.number}
                    </span>
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white font-display mb-2 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-zinc-300 mb-4 leading-snug">
                    {service.tagline}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section: Deliverable items & CTA */}
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400/80 font-bold">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-400">
                      {service.formats.join(' / ')}
                    </span>
                    <button
                      onClick={() => onStartProject(service.title)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white uppercase tracking-wider group-hover:text-amber-300 transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Note */}
        <div className="mt-12 text-center text-xs text-zinc-400">
          All creative productions include dedicated creative director oversight, high-resolution color grading, and commercial broadcast rights.
        </div>
      </div>
    </section>
  );
};
