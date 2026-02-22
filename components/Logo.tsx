import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <span className="font-sans font-medium text-3xl tracking-[0.2em] text-white">PREMM</span>
      
      {/* Combined Icon SVG for consistent rendering and scaling */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-0.5">
        <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5">
          {/* Top - Cyan */}
          <path d="M5 8 L12 3 L19 8" stroke="#00F0FF" />
          
          {/* Middle - White */}
          <path d="M5 14 L12 9 L19 14" stroke="white" />
          
          {/* Bottom - Cyan */}
          <path d="M5 20 L12 15 L19 20" stroke="#00F0FF" />
        </g>
      </svg>
      
      <span className="font-sans font-medium text-3xl tracking-[0.2em] text-white">SUS</span>
    </div>
  );
};
