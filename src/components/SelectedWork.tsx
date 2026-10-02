import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'fitness', label: 'Protein & Fitness' },
  { id: 'beverage', label: 'Coffee & Beverage' },
  { id: 'beauty', label: 'Skincare & Beauty' },
  { id: 'fashion', label: 'Fashion & Apparel' },
];

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fitness') return p.category.toLowerCase().includes('fitness') || p.category.toLowerCase().includes('protein');
    if (activeFilter === 'beverage') return p.category.toLowerCase().includes('coffee') || p.category.toLowerCase().includes('beverage');
    if (activeFilter === 'beauty') return p.category.toLowerCase().includes('beauty') || p.category.toLowerCase().includes('skincare');
    if (activeFilter === 'fashion') return p.category.toLowerCase().includes('fashion');
    return true;
  });

  return (
    <section id="work" className="py-28 md:py-36 bg-[#070709] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
              SELECTED WORK
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display text-balance">
              SELECTED WORK
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mt-3 max-w-xl text-balance">
              From product launches to social-first campaigns.
            </p>
          </div>

          {/* Filter Bar (Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#101014] border border-white/10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all duration-200 whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-white text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 || idx === 3;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer flex flex-col justify-between bg-[#0c0c10] border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Media Container with Image Zoom & Overlay */}
                <div
                  className={`relative overflow-hidden bg-black ${
                    isFeatured ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.brand} - ${project.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs text-zinc-300 font-medium tracking-wider">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10 text-white uppercase">
                      {project.brand}
                    </span>
                    <span className="text-zinc-300 bg-black/50 backdrop-blur-sm px-2.5 py-1 border border-white/5">
                      {project.category}
                    </span>
                  </div>

                  {/* Floating Action Hint on Hover */}
                  <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white text-black">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Project Details Footer */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-1">
                      {project.campaignType}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white font-display group-hover:text-amber-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Deliverable Snapshot */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span>{project.deliverables[0]}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span>{project.deliverables.length} Deliverable Formats</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-white group-hover:translate-x-1 transition-transform duration-200">
                      <span className="font-medium uppercase tracking-wider text-[11px]">Explore</span>
                      <ArrowUpRight className="w-3 h-3 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 border border-white/10 bg-[#0d0d12] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
              CUSTOM CAMPAIGN PRODUCTION
            </div>
            <div className="text-lg md:text-xl font-bold text-white font-display">
              Have a product launching in the next 30–60 days?
            </div>
            <p className="text-sm text-zinc-400 mt-1">
              We turn initial CAD, photos or dielines into high-impact campaigns in 7–10 days.
            </p>
          </div>
          <a
            href="#why-us"
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white border border-white/20 hover:border-white hover:bg-white/5 transition-all whitespace-nowrap"
          >
            See Our Production Model →
          </a>
        </div>
      </div>
    </section>
  );
};
