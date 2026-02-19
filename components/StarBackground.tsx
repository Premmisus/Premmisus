import React, { useMemo } from 'react';

const generateBoxShadow = (n: number) => {
  let value = '';
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2500);
    const y = Math.floor(Math.random() * 2500);
    // Add cyan accents to ~15% of stars
    const color = Math.random() > 0.85 ? '#00e5ff' : '#FFF';
    value += `${x}px ${y}px ${color}`;
    if (i < n - 1) value += ', ';
  }
  return value;
};

export const StarBackground: React.FC = () => {
  const shadowsSmall = useMemo(() => generateBoxShadow(700), []);
  const shadowsMedium = useMemo(() => generateBoxShadow(200), []);
  const shadowsBig = useMemo(() => generateBoxShadow(100), []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <style>{`
        .stars-bg {
          width: 1px;
          height: 1px;
          background: transparent;
          animation: animStar 50s linear infinite;
        }
        .stars-bg:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
        }
        
        .stars-bg-2 {
          width: 2px;
          height: 2px;
          background: transparent;
          animation: animStar 100s linear infinite;
        }
        .stars-bg-2:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
        }
        
        .stars-bg-3 {
          width: 3px;
          height: 3px;
          background: transparent;
          animation: animStar 150s linear infinite;
        }
        .stars-bg-3:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 3px;
          height: 3px;
          background: transparent;
        }
      `}</style>

      {/* Radial Gradient Background - Much darker now */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#050a10_0%,#000000_100%)]" />
      
      {/* Subtle overlay to enhance cyan feel without washing out the black */}
      <div className="absolute inset-0 bg-accent/[0.02] mix-blend-screen" />

      {/* Star Layers */}
      <div 
        className="stars-bg absolute left-0 top-0" 
        style={{ boxShadow: shadowsSmall, opacity: 0.8 } as React.CSSProperties}
      >
        <div 
          style={{ 
            position: 'absolute', 
            top: '2000px', 
            width: '1px', 
            height: '1px', 
            background: 'transparent', 
            boxShadow: shadowsSmall 
          }} 
        />
      </div>

      <div 
        className="stars-bg-2 absolute left-0 top-0" 
        style={{ boxShadow: shadowsMedium, opacity: 0.8 } as React.CSSProperties}
      >
        <div 
          style={{ 
            position: 'absolute', 
            top: '2000px', 
            width: '2px', 
            height: '2px', 
            background: 'transparent', 
            boxShadow: shadowsMedium 
          }} 
        />
      </div>

      <div 
        className="stars-bg-3 absolute left-0 top-0" 
        style={{ boxShadow: shadowsBig, opacity: 0.9 } as React.CSSProperties}
      >
        <div 
          style={{ 
            position: 'absolute', 
            top: '2000px', 
            width: '3px', 
            height: '3px', 
            background: 'transparent', 
            boxShadow: shadowsBig 
          }} 
        />
      </div>
    </div>
  );
};