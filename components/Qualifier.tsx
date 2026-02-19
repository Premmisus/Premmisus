import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Which industry describes you best?",
    options: ["Construction / General Contracting", "HVAC / Plumbing / Electrical", "Manufacturing / Logistics", "Other"]
  },
  {
    id: 2,
    text: "What is your current monthly revenue?",
    options: ["Under $50k", "$50k - $150k", "$150k - $500k", "$500k+"]
  },
  {
    id: 3,
    text: "What is your primary bottleneck?",
    options: ["Not enough leads", "Poor lead quality", "Can't track ROI", "Need automated follow-up"]
  }
];

export const Qualifier: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isQualified, setIsQualified] = useState<boolean | null>(null);

  const handleOptionClick = (option: string) => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsQualified(true);
    }
  };

  return (
    <div id="qualify" className="py-32 border-y border-white/5 relative overflow-hidden">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Capacity Audit</h2>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
              Are you ready to scale?
            </h3>
            <p className="text-text-secondary font-mono max-w-lg mx-auto">
              We operate on a partnership model. We do not accept every client. Use the calculator below to check availability for your territory.
            </p>
          </div>

          {/* Changed bg-background/border to glassmorphism */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden shadow-2xl">
            {/* Progress Bar */}
            {!isQualified && (
                <div className="absolute top-0 left-0 h-1 bg-accent transition-all duration-500" style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }} />
            )}

            <AnimatePresence mode="wait">
              {!isQualified ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <span className="text-xs font-mono text-text-secondary mb-4 block">Question {currentStep + 1} of {questions.length}</span>
                  <h4 className="text-2xl md:text-3xl font-sans font-bold text-white mb-8">
                    {questions[currentStep].text}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questions[currentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                        className="p-4 text-left border border-white/10 hover:border-accent hover:bg-white/5 hover:text-accent transition-all duration-200 font-mono text-sm text-text-secondary"
                      >
                        <span className="mr-3 text-white/20">0{idx + 1}</span>
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6 border border-accent/50">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-3xl font-sans font-bold text-white mb-4">You are eligible for a Growth Protocol.</h4>
                  <p className="text-text-secondary font-mono mb-8 max-w-md">
                    Based on your answers, your business structure fits our scaling parameters. We have 2 slots available for Q4.
                  </p>
                  <button className="border border-accent text-accent font-mono font-bold uppercase py-4 px-12 hover:bg-accent hover:text-black transition-colors">
                    Book Priority Consultation
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};