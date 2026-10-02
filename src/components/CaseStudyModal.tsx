import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Clock, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0c0c10] border border-white/15 my-auto overflow-hidden shadow-2xl">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c0c10]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3 text-xs tracking-wider text-zinc-400 uppercase font-medium">
            <span className="text-white font-bold">{project.brand}</span>
            <span className="text-zinc-600" aria-hidden="true">/</span>
            <span>{project.category}</span>
            <span className="hidden sm:inline text-zinc-600" aria-hidden="true">/</span>
            <span className="hidden sm:inline text-zinc-400">{project.campaignType}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 md:p-12 space-y-12">
          {/* Hero Banner */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
                CASE STUDY OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white font-display">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Performance Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#121217] border border-white/10">
            {project.metrics.map((metric, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-zinc-400">
                  {metric.label}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white font-display tabular-nums">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Grid: Strategic Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
                <span>THE BRIEF & CHALLENGE</span>
              </div>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                {project.fullDescription}
              </p>
              <div className="p-4 bg-zinc-950/80 border border-white/5 text-xs text-zinc-400 leading-relaxed">
                <strong className="text-white block mb-1">Production Friction:</strong>
                {project.challenge}
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
                <span>OUR CREATIVE DIRECTION</span>
              </div>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
              <div className="p-4 bg-zinc-950/80 border border-amber-400/20 text-xs text-zinc-300 leading-relaxed">
                <strong className="text-amber-300 block mb-1">Commercial Impact:</strong>
                {project.quote?.text}
                <div className="mt-2 text-zinc-400 font-medium">
                  — {project.quote?.author}, {project.quote?.role}
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables Breakdown */}
          <div className="p-6 md:p-8 bg-[#121217] border border-white/10">
            <h3 className="text-base font-bold uppercase tracking-wider text-white font-display mb-4">
              CAMPAIGN ASSET SUITE DELIVERED
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-black/40 border border-white/5 text-xs md:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400">
              Need a campaign of this caliber for your product?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
              >
                Close Case Study
              </button>
              <button
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
                className="w-1/2 sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>Brief This Style</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
