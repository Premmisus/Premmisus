import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export const Metrics: React.FC = () => {
  return (
    <div id="metrics" className="py-24 border-y border-white/5 relative">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
             <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Total Transparency</h2>
             <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
               If we can't track it, <br/> we don't do it.
             </h3>
             <p className="text-text-secondary font-mono mb-6 leading-relaxed">
               We utilize Server-Side GA4 tracking and offline conversion events. We know exactly which ad creative generated the lead that signed the $50k contract.
             </p>
             <ul className="space-y-4 font-mono text-sm text-white">
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-accent" />
                   Real-time CPA Monitoring
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-accent" />
                   CRM Integration (HubSpot, Pipedrive)
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-accent" />
                   Weekly Strategy Audits
                </li>
             </ul>
          </div>
          
          <div className="flex-1 w-full relative">
             {/* Abstract Dashboard Visualization - Transparent */}
             <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-6 relative z-10">
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                   <span className="font-mono text-xs text-text-secondary">Live Campaign Data</span>
                   <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="font-mono text-xs text-green-500">Active</span>
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="bg-black/20 p-4 border border-white/5">
                      <div className="text-xs text-text-secondary mb-1">Total Leads</div>
                      <div className="text-2xl font-bold text-white">427</div>
                      <div className="text-xs text-green-400 mt-1">↑ 12% vs last mo</div>
                   </div>
                   <div className="bg-black/20 p-4 border border-white/5">
                      <div className="text-xs text-text-secondary mb-1">Cost Per Lead</div>
                      <div className="text-2xl font-bold text-white">$24.10</div>
                      <div className="text-xs text-green-400 mt-1">↓ 18% optimized</div>
                   </div>
                </div>

                <div className="h-32 flex items-end justify-between gap-1 opacity-50">
                   {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                      <div key={i} className="w-full bg-accent" style={{ height: `${h}%` }} />
                   ))}
                </div>
             </div>
             
             {/* Glow behind dashboard */}
             <div className="absolute -top-10 -right-10 w-full h-full bg-accent/5 blur-3xl -z-10" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};