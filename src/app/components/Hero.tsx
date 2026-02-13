"use client";
import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#1e4b8a] h-[100vh] md:h-[700px] overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e4b8a] via-[#215299] to-[#255ba8]" />
      
      <div className="container mx-auto px-4 relative z-10 h-full">
        {/* Force 2 columns even on mobile with 'grid-cols-2' */}
        <div className="grid grid-cols-2 gap-2 md:gap-8 items-center h-full">
          
          {/* Left Side: Text (Scales down for mobile) */}
          <div className="flex flex-col justify-center z-30">
            <div className="bg-white/10 self-start px-2 py-1 rounded-md border border-white/20 mb-3 backdrop-blur-sm">
              <p className="text-blue-200 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                Premium
              </p>
            </div>
            
            <h1 className="text-white text-3xl sm:text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-4">
              AFBAM <br />
              <span className="text-blue-300">PLUMBING</span>
            </h1>
            
            <p className="text-blue-50 text-[10px] md:text-xl font-medium mb-6 max-w-[150px] md:max-w-sm opacity-90">
              Expert solutions. <br className="md:hidden" /> Guaranteed results.
            </p>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <button className="bg-white text-[#1e4b8a] font-black py-3 px-6 md:py-5 md:px-12 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all uppercase text-[9px] md:text-[11px] tracking-widest">
                Book Now
              </button>
              
              <div className="hidden md:block">
                <p className="text-blue-300 text-[9px] uppercase font-black tracking-widest mb-1">Emergency</p>
                <p className="text-white font-black text-lg">+234 703 206 9993</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Plumber (Fixed to the right) */}
          <div className="relative flex items-end justify-center h-full pt-20">
            {/* Glow effect */}
            <div className="absolute bottom-20 w-[150px] md:w-[400px] h-[150px] md:h-[400px] bg-white/20 rounded-full blur-[60px] md:blur-[100px]" />
            
            <img 
              src="/ala.png" 
              alt="AFBAM Professional" 
              className="relative z-20 w-full max-w-[200px] md:max-w-[500px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}