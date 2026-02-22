import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { X, Check } from 'lucide-react';

const comparisonData = [
  {
    feature: "Focus",
    others: "Generalist",
    us: "Specialized",
  },
  {
    feature: "Metrics",
    others: "Vanity (Clicks)",
    us: "Revenue (Cost/Lead)",
  },
  {
    feature: "Reporting",
    others: "Monthly PDFs",
    us: "Live Dashboard",
  },
  {
    feature: "Creative",
    others: "Stock Photos",
    us: "High-Fidelity Video",
  },
  {
    feature: "Structure",
    others: "Hourly/Retainer",
    us: "Performance-Based",
  },
];

export const Comparison: React.FC = () => {
  return (
    <div id="comparison" className="py-20 md:py-32 relative">
      <SectionWrapper>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xs md:text-sm font-mono text-accent uppercase tracking-widest mb-4">The Gap</h2>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white">
              Stop burning cash with <br />
              <span className="text-gray-500 line-through decoration-red-500">traditional agencies.</span>
            </h3>
          </div>

          {/* Transparent Glass Table */}
          <div className="border border-white/10 bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden">
            {/* Header - Hidden on small screens */}
            <div className="hidden md:grid grid-cols-3 border-b border-white/10 bg-white/5">
              <div className="p-6 font-mono text-xs text-text-secondary uppercase tracking-wider">Feature</div>
              <div className="p-6 font-mono text-xs text-red-400 uppercase tracking-wider border-l border-white/10">Traditional Agency</div>
              <div className="p-6 font-mono text-xs text-accent uppercase tracking-wider border-l border-white/10 bg-accent/5">Premmisus</div>
            </div>

            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-none">
                {/* Feature Name */}
                <div className="p-4 md:p-6 font-sans font-bold text-white flex items-center bg-white/5 md:bg-transparent border-b md:border-b-0 border-white/5">
                  {row.feature}
                </div>
                
                {/* Others */}
                <div className="p-4 md:p-6 font-mono text-sm text-text-secondary md:border-l border-white/10 flex items-center gap-3">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="md:hidden text-xs uppercase tracking-wider text-red-400 mr-2">Them:</span>
                  {row.others}
                </div>
                
                {/* Us */}
                <div className="p-4 md:p-6 font-mono text-sm text-white md:border-l border-white/10 bg-accent/[0.02] flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="md:hidden text-xs uppercase tracking-wider text-accent mr-2">Us:</span>
                  {row.us}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};