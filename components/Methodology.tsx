import React from 'react';
import { Database, Workflow, ShieldCheck, TrendingUp } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const steps = [
  {
    id: "01",
    title: 'The Infrastructure',
    description: 'We don’t start ads until we fix the foundation. We build high-converting landing pages specifically for high-ticket quotes. If your website leaks, we plug the holes first.',
    icon: Database,
  },
  {
    id: "02",
    title: 'The Capture Mechanism',
    description: 'We deploy "lead magnets" that qualified buyers actually want (Calculators, Price Guides, Case Studies) to filter out tire-kickers and capture intent early.',
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: 'The Nurture System',
    description: 'Leads are useless if they don\'t pick up the phone. We implement SMS & Email automation to warm up leads before you call, doubling contact rates.',
    icon: Workflow,
  },
  {
    id: "04",
    title: 'The Scale Protocol',
    description: 'Once CPA is stable, we increase budget vertically. We use GA4 server-side tracking to feed high-quality data back to Meta, optimizing for profit, not clicks.',
    icon: TrendingUp,
  },
];

export const Methodology: React.FC = () => {
  return (
    <div id="system" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:w-5/12">
            <div className="lg:sticky lg:top-32">
                <SectionWrapper>
                  <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Proprietary Method</h2>
                  <h3 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">
                    The Ontario Industrial <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Lead Engine.</span>
                  </h3>
                  <p className="text-text-secondary font-mono leading-relaxed mb-8 text-lg">
                    An engineered approach in 4 stages to pilot your growth with lucidity. We handle every dimension of your acquisition model, with a simple and scalable logic.
                  </p>
                  <div className="hidden lg:flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider opacity-80">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    System Active
                  </div>
                </SectionWrapper>
            </div>
          </div>

          {/* Right Column: Stacking Cards */}
          <div className="lg:w-7/12">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="sticky top-24 md:top-32 mb-12 last:mb-0" 
                style={{ zIndex: idx + 1 }} 
              >
                {/* Changed bg-surface to transparent glass */}
                <div className="bg-black/40 border border-white/10 p-8 md:p-10 rounded-sm backdrop-blur-md min-h-[280px] flex flex-col justify-center group transition-all duration-300 hover:border-accent/30 hover:bg-black/60">
                    
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                        <div className="shrink-0">
                           <span className="text-4xl md:text-5xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent/20">
                            {step.id}.
                           </span>
                        </div>
                        
                        <div>
                           <h4 className="text-2xl font-sans font-bold text-white mb-4">
                            {step.title}
                           </h4>
                           <p className="text-text-secondary font-mono text-sm md:text-base leading-relaxed">
                            {step.description}
                           </p>

                           <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3 text-xs font-mono text-white/30 uppercase tracking-widest group-hover:text-accent/70 transition-colors">
                                <step.icon className="w-4 h-4" />
                                <span>Deployment Phase {step.id}</span>
                           </div>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};