import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WhatWeCreate } from './components/WhatWeCreate';
import { HowWeWork } from './components/HowWeWork';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Showreel } from './components/Showreel';
import { WhyAdCreative } from './components/WhyAdCreative';
import { ClientTypes } from './components/ClientTypes';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ProjectBriefModal } from './components/ProjectBriefModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [briefModalOpen, setBriefModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>();
  const [prefilledCategory, setPrefilledCategory] = useState<string | undefined>();

  const handleOpenBrief = (service?: string, category?: string) => {
    setPrefilledService(service);
    setPrefilledCategory(category);
    setBriefModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#F4F4F5] flex flex-col font-sans selection:bg-[#E5A93C] selection:text-black">
      {/* 3-Zone Strict Top Bar */}
      <Navbar onStartProject={() => handleOpenBrief()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onStartProject={() => handleOpenBrief()} />

        {/* Section 2: Selected Work (Editorial Portfolio Grid) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 3: What We Create (Core Services) */}
        <WhatWeCreate onStartProject={(service) => handleOpenBrief(service)} />

        {/* Section 4: How We Work (4-Step Process) */}
        <HowWeWork />

        {/* Section 5: Before / After (Interactive Draggable Comparison) */}
        <BeforeAfterSlider />

        {/* Section 6: Creative Showreel (Cinematic Video Player with Sequencer) */}
        <Showreel />

        {/* Section 7: Why Ad Creative (Production Model vs Legacy Agencies) */}
        <WhyAdCreative onStartProject={() => handleOpenBrief()} />

        {/* Section 8: Client Types (Consumer Product Verticals) */}
        <ClientTypes onStartProject={(cat) => handleOpenBrief(undefined, cat)} />

        {/* Section 9: Visually Dramatic Final CTA */}
        <CallToAction onStartProject={() => handleOpenBrief()} />
      </main>

      {/* Section 10: Footer */}
      <Footer onStartProject={() => handleOpenBrief()} />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={() => {
          const cat = selectedProject?.category;
          handleOpenBrief(selectedProject?.campaignType, cat);
        }}
      />

      {/* Interactive Project Brief / Proposal Drawer Modal */}
      <ProjectBriefModal
        isOpen={briefModalOpen}
        onClose={() => setBriefModalOpen(false)}
        initialService={prefilledService}
        initialCategory={prefilledCategory}
      />
    </div>
  );
}
