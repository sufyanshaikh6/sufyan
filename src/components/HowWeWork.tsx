import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const HowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-28 md:py-36 bg-[#09090d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
              THE WORKFLOW
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display text-balance">
              FROM IDEA TO AD.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mt-3 max-w-xl text-balance">
              A streamlined, high-velocity creative pipeline built for modern brands that need to move fast.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-black/40 text-xs text-zinc-300">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Average Campaign Turnaround: <strong className="text-white font-semibold">7–10 Business Days</strong></span>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer p-8 bg-[#0c0c11] border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-white/40 bg-[#121218] ring-1 ring-white/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <span className="text-2xl font-bold font-display text-white">
                      {step.step}
                    </span>
                    <span className="text-xs font-mono text-amber-400/90 tracking-wider">
                      {step.turnaround}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-white font-display mb-2">
                    {step.name}
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed font-medium mb-4">
                    {step.headline}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Key Deliverable
                  </div>
                  <div className="text-xs text-white font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="truncate">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Comparison Bar */}
        <div className="mt-12 p-6 md:p-8 bg-[#0c0c11] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-bold uppercase text-white font-display">
                Zero Physical Logistics Hassle
              </div>
              <div className="text-xs text-zinc-400">
                No shipping prototypes across continents, no customs delays, no weather-dependent shoots.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-300">
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase">Traditional Studio</span>
              <span className="line-through text-zinc-400">8–12 Weeks</span>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600" />
            <div>
              <span className="text-amber-400 block text-[10px] uppercase font-semibold">Ad Creative</span>
              <span className="text-white font-bold text-sm">7–10 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
