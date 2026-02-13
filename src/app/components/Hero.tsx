"use client";
import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#1e4b8a] min-h-[85vh] md:h-[600px] overflow-hidden flex items-center">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e4b8a] via-[#215299] to-[#2b6abf]" />
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Left Side: Minimalist & Aggressive Branding */}
        <div className="flex flex-col justify-center">
          <div className="bg-blue-400/20 self-start px-3 py-1 rounded mb-4">
            <p className="text-white text-xs font-bold uppercase tracking-[0.3em]">
              Premium Service
            </p>
          </div>
          
          <h1 className="text-white text-6xl md:text-8xl font-black leading-none tracking-tighter mb-4">
            AFBAM <br />
            <span className="text-blue-300">PLUMBING</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-medium mb-8 max-w-sm">
            Expert solutions. Guaranteed results.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="bg-white text-[#1e4b8a] font-black py-4 px-10 rounded-full shadow-2xl hover:scale-105 transition-transform uppercase text-xs">
              Book Now
            </button>
            <div className="hidden sm:block">
              <p className="text-blue-200 text-[10px] uppercase font-bold tracking-widest">Call Expert</p>
              <p className="text-white font-bold text-sm">+234 703 206 9993</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Plumber (Visual Focus) */}
        <div className="relative flex items-end justify-center h-full pt-10 md:pt-0">
          {/* Back glow to make the man stand out as an object */}
          <div className="absolute bottom-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
          
          <img 
            src="/ala.png" 
            alt="AFBAM Professional" 
            className="relative z-20 w-full max-w-[400px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}