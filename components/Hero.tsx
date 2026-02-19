import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Marquee } from './Marquee';

const partners = [
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Google Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg' },
  { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/HubSpot_Logo.svg' },
  { name: 'Zapier', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg' },
  { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Pipedrive', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Pipedrive_logo.svg' },
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
];

const LogoTicker = () => (
  <div className="w-full border-y border-white/5 bg-black/20 backdrop-blur-sm py-10 mt-20 relative z-10">
    <div className="text-center mb-8">
       <span className="text-xs font-mono text-text-secondary uppercase tracking-[0.3em]">
          Powered by Trusted Infrastructure
       </span>
    </div>
    
    <div className="flex w-full overflow-hidden">
       <Marquee className="[--duration:40s] [--gap:5rem]" pauseOnHover>
          {partners.map((partner, idx) => (
             <div key={idx} className="flex items-center justify-center px-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-8 md:h-10 w-auto object-contain opacity-30 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 brightness-0 invert"
                />
             </div>
          ))}
       </Marquee>
    </div>
  </div>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32">
      
      {/* Intense Background Glows */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
         {/* Large slowly moving accent blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[150px] animate-[pulse_8s_infinite]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[150px] animate-[pulse_10s_infinite]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-accent/30 bg-accent/5 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse_1.5s_infinite]" />
          <span className="text-xs font-mono text-accent tracking-widest uppercase">Ontario Industrial & Trades Only</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tighter text-white leading-[0.9] mb-8 uppercase"
        >
          We Engineer <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Revenue Systems.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-text-secondary mb-12 font-mono leading-relaxed"
        >
          Stop relying on word-of-mouth. We build predictable lead acquisition infrastructures for Ontario's <span className="text-white font-bold">HVAC, Construction, and Manufacturing</span> leaders.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button withArrow>Deploy the System</Button>
          <Button variant="outline">View The Data</Button>
        </motion.div>
      </div>

      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 0.5 }}
      >
        <LogoTicker />
      </motion.div>
    </section>
  );
};