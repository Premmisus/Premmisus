import React from 'react';
import { Target, BarChart2, Zap, Layers } from 'lucide-react';
import { Service } from '../types';
import { SectionWrapper } from './SectionWrapper';

const services: Service[] = [
  {
    title: 'Paid Social Acquisition',
    description: 'Sniper-focused Facebook & Instagram campaigns designed to acquire customers at the lowest possible CPA.',
    icon: Target,
  },
  {
    title: 'Creative Strategy',
    description: 'We turn data into design. High-converting UGC, static, and video assets that stop the scroll and drive action.',
    icon: Zap,
  },
  {
    title: 'CRO & Funnel Optimization',
    description: 'Traffic is useless if it doesn\'t convert. We engineer your landing pages to maximize revenue per session.',
    icon: Layers,
  },
  {
    title: 'Retention Systems',
    description: 'Increasing LTV through strategic remarketing and email integration. Profit comes from the second purchase.',
    icon: BarChart2,
  },
];

export const Services: React.FC = () => {
  return (
    // Removed bg-background
    <div id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper>
          <div className="mb-16">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Our Protocol</h2>
            <h3 className="text-4xl md:text-5xl font-sans font-bold text-white max-w-2xl">
              A holistic ecosystem for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">aggressive scaling</span>.
            </h3>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <SectionWrapper key={idx} delay={idx * 0.1}>
              <div className="group relative p-8 h-full bg-surface/50 backdrop-blur-sm border border-white/5 rounded-none hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Hover Gradient Reveal */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent/50 transition-all duration-300">
                    <service.icon className="text-white group-hover:text-accent transition-colors" />
                  </div>
                  
                  <h4 className="text-2xl font-sans font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-text-secondary font-mono text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};