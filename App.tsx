import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { Comparison } from './components/Comparison';
import { Metrics } from './components/Metrics';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Qualifier } from './components/Qualifier';
import { Footer } from './components/Footer';
import { StarBackground } from './components/StarBackground';

function App() {
  return (
    <main className="bg-background text-text-primary selection:bg-accent selection:text-black relative min-h-screen">
       {/* Global Animated Star Background */}
       <StarBackground />

       {/* Additional ambient effects layered on top if needed, or kept minimal */}
       <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top Spotlight - Kept for the 'Hero' emphasis */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
       </div>

       <div className="relative z-10">
        <Navbar />
        
        <Hero />
        
        <Methodology />
        
        <Comparison />
        
        <Metrics />
        
        <CaseStudies />

        <Testimonials />
        
        <Qualifier />

        <Footer />
       </div>
    </main>
  );
}

export default App;