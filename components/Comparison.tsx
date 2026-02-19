import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { X, Check } from 'lucide-react';

const comparisonData = [
  {
    feature: "Focus",
    others: "Generalist (E-com, Info, Local)",
    us: "Specialized (Industrial & Trades)",
  },
  {
    feature: "Metrics",
    others: "Vanity (Clicks, Impressions, Likes)",
    us: "Revenue (Cost Per Qualified Lead)",
  },
  {
    feature: "Reporting",
    others: "Monthly PDF Reports",
    us: "Live 24/7 Data Dashboard",
  },
  {
    feature: "Creative",
    others: "Stock Photos & Canva",
    us: "High-Fidelity Motion & Video",
  },
  {
    feature: "Structure",
    others: "Hourly Billing / Retainer",
    us: "Performance-Based Incentives",
  },
];

export const Comparison: React.FC = () => {
  return (
    <div id="comparison" className="py-32 relative">
      <SectionWrapper>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">The Gap</h2>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white">
              Stop burning cash on <br />
              <span className="text-gray-500 line-through decoration-red-500">generic agencies.</span>
            </h3>
          </div>

          {/* Transparent Glass Table */}
          <div className="border border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
              <div className="p-6 font-mono text-xs text-text-secondary uppercase tracking-wider">Feature</div>
              <div className="p-6 font-mono text-xs text-red-400 uppercase tracking-wider border-l border-white/10">Traditional Agency</div>
              <div className="p-6 font-mono text-xs text-accent uppercase tracking-wider border-l border-white/10 bg-accent/5">Nexus Industrial</div>
            </div>

            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <div className="p-6 font-sans font-bold text-white flex items-center">
                  {row.feature}
                </div>
                <div className="p-6 font-mono text-sm text-text-secondary border-l border-white/10 flex items-center gap-3">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  {row.others}
                </div>
                <div className="p-6 font-mono text-sm text-white border-l border-white/10 bg-accent/[0.02] flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent shrink-0" />
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