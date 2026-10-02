import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CLIENT_CATEGORIES } from '../data/portfolioData';

interface ClientTypesProps {
  onStartProject: (categoryName?: string) => void;
}

export const ClientTypes: React.FC<ClientTypesProps> = ({ onStartProject }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(CLIENT_CATEGORIES[0].id);

  const selectedCategory = CLIENT_CATEGORIES.find((c) => c.id === selectedCategoryId) || CLIENT_CATEGORIES[0];

  return (
    <section id="clients" className="py-28 md:py-36 bg-[#09090d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
            TARGET VERTICALS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display text-balance">
            BUILT FOR PRODUCTS PEOPLE WANT.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed text-balance">
            We specialize in consumer categories where visual desire, tactile appetite appeal, and premium aesthetic credibility dictate conversion rates.
          </p>
        </div>

        {/* Category Navigation Pills/Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {CLIENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`p-3 text-center border transition-all text-xs uppercase font-semibold tracking-wider ${
                cat.id === selectedCategoryId
                  ? 'bg-white text-black border-white'
                  : 'bg-[#101015] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Category Spotlight Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0c0c11] border border-white/15 p-6 md:p-10 items-center">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-black border border-white/10 group">
            <img
              src={selectedCategory.image}
              alt={selectedCategory.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="bg-black/70 backdrop-blur-md px-3 py-1 border border-white/10 uppercase tracking-wider font-mono">
                {selectedCategory.name} · CINEMATIC STILL
              </span>
            </div>
          </div>

          {/* Editorial Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 font-mono">
                CATEGORY ART DIRECTION
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-display">
                {selectedCategory.headline}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mt-3">
                {selectedCategory.description}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block font-medium">Visual Focus:</span>
                <span className="text-white font-medium">{selectedCategory.focus}</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block font-medium">Standard Asset Deliverables:</span>
                <span className="text-zinc-300">{selectedCategory.typicalDeliverables}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onStartProject(selectedCategory.name)}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>Brief {selectedCategory.name} Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
