import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, Send, Calendar, Clock } from 'lucide-react';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCategory?: string;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialCategory,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brandName: '',
    website: '',
    category: initialCategory || 'Protein / Fitness',
    selectedServices: initialService ? [initialService] : ['Cinematic Product Ads'],
    launchTimeline: 'Next 14–30 Days',
    budgetTier: '$5k – $15k',
    productDescription: '',
    contactName: '',
    contactEmail: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: [initialService],
      }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({
        ...prev,
        category: initialCategory,
      }));
    }
  }, [initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(srv);
      if (exists) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== srv),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, srv],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0c0c11] border border-white/15 overflow-hidden shadow-2xl my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c0c11] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white font-bold font-display">
              AD CREATIVE
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-mono">
              PROJECT INQUIRY
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close Project Brief"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-display mb-1">
                    Tell us about your brand
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Step 1 of 2: Brand positioning and product category.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold uppercase tracking-wider mb-2">
                      Brand Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SURGE Nutrition"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#13131a] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold uppercase tracking-wider mb-2">
                      Website or Instagram Handle
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. @yourbrand or yourbrand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 bg-[#13131a] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold uppercase tracking-wider mb-2">
                      Product Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-[#13131a] border border-white/10 text-white focus:outline-none focus:border-white transition-colors text-sm"
                    >
                      <option value="Protein / Fitness">Protein & Fitness Nutrition</option>
                      <option value="Food & Beverage">Food & Beverage / Adaptogens</option>
                      <option value="Skincare & Beauty">Skincare & Luxury Beauty</option>
                      <option value="Specialty Coffee">Specialty Coffee</option>
                      <option value="Fashion & Lifestyle">Fashion & Technical Apparel</option>
                      <option value="Consumer Products">Consumer Hardware & Electronics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold uppercase tracking-wider mb-2">
                      Brief Product Description & Goal
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What makes your product special? Are you preparing for a new launch or scaling paid ads?"
                      value={formData.productDescription}
                      onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                      className="w-full px-4 py-3 bg-[#13131a] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.brandName) {
                        setFormData({ ...formData, brandName: 'Brand Partner' });
                      }
                      setStep(2);
                    }}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors flex items-center gap-2"
                  >
                    <span>Next: Campaign Needs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-display mb-1">
                    Select Your Deliverables
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Step 2 of 2: Required creative formats and contact details.
                  </p>
                </div>

                {/* Service Selection Pills */}
                <div className="space-y-2">
                  <label className="block text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    Required Creative Services
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      'Cinematic Product Ads',
                      'AI Product Photography',
                      'Social Media Ad Creatives',
                      'Short-Form Commercials',
                      'Campaign Storyboards',
                      'Full Product Launch Suite'
                    ].map((srv) => {
                      const isSelected = formData.selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`p-3 text-left border transition-all ${
                            isSelected
                              ? 'border-amber-400 bg-amber-950/20 text-white font-medium'
                              : 'border-white/10 bg-[#13131a] text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          <span className="block truncate">{srv}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#13131a] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@brand.com"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className="w-full px-4 py-3 bg-[#13131a] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="text-xs">
                  <label className="block text-zinc-300 font-semibold uppercase tracking-wider mb-2">
                    Target Launch Window
                  </label>
                  <select
                    value={formData.launchTimeline}
                    onChange={(e) => setFormData({ ...formData, launchTimeline: e.target.value })}
                    className="w-full px-4 py-3 bg-[#13131a] border border-white/10 text-white focus:outline-none focus:border-white transition-colors text-sm"
                  >
                    <option value="Urgent (Next 7–10 Days)">Urgent (Next 7–10 Days)</option>
                    <option value="Next 14–30 Days">Next 14–30 Days</option>
                    <option value="Next 30–60 Days">Next 30–60 Days</option>
                    <option value="Q3/Q4 Planning">Later / Exploratory</option>
                  </select>
                </div>

                {/* Navigation Buttons */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-zinc-400 hover:text-white uppercase tracking-wider"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Project Brief</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-14 h-14 bg-amber-400/10 border border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-mono block mb-2">
                BRIEF RECEIVED & LOGGED
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-display">
                Thank you, {formData.contactName || 'Partner'}.
              </h3>
              <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto leading-relaxed">
                Our creative directors are reviewing your product profile for <strong className="text-white">{formData.brandName || 'your brand'}</strong>. We will return a tailored visual treatment and timeline estimate within 24 hours.
              </p>
            </div>

            <div className="p-4 bg-[#111117] border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between text-zinc-400">
                <span>Category:</span>
                <span className="text-white font-medium">{formData.category}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Target Turnaround:</span>
                <span className="text-amber-300 font-medium">7–10 Business Days</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Selected Focus:</span>
                <span className="text-white font-medium">{formData.selectedServices.join(', ')}</span>
              </div>
              <div className="flex justify-between text-zinc-400 pt-1 border-t border-white/5">
                <span>Studio Inbox:</span>
                <span className="text-amber-400 font-mono">adscreativeofficial9@gmail.com</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <a
                href={`mailto:adscreativeofficial9@gmail.com?subject=Project Brief: ${encodeURIComponent(formData.brandName || 'New Brand')}&body=Brand: ${encodeURIComponent(formData.brandName)}%0D%0ACategory: ${encodeURIComponent(formData.category)}%0D%0ATimeline: ${encodeURIComponent(formData.launchTimeline)}%0D%0AServices: ${encodeURIComponent(formData.selectedServices.join(', '))}`}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors"
              >
                Send Email Backup
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-white transition-colors"
              >
                Back to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
