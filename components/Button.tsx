import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withArrow = false,
  className = '',
  ...props 
}) => {
  // Removed solid backgrounds, focusing on borders, glow, and text
  const baseStyles = "relative font-mono font-bold uppercase tracking-wider text-sm py-4 px-10 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden border backdrop-blur-sm";
  
  const variants = {
    // Primary: White border, text, subtle hover fill
    primary: "border-white/40 text-white hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]",
    
    // Secondary: Darker border
    secondary: "border-white/10 text-text-secondary hover:border-white/30 hover:text-white",
    
    // Outline: Minimal (Same as primary in this new design system to keep consistency)
    outline: "border-white/20 text-white hover:border-accent hover:text-accent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      
      {/* Corner accents for industrial feel */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 group-hover:border-accent transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 group-hover:border-accent transition-colors" />
    </button>
  );
};