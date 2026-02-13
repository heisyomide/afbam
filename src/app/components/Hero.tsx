"use client";
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#1e4b8a] h-[80vh] md:h-[650px] overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e4b8a] via-[#215299] to-[#255ba8]" />
      
      {/* Background Glow - Positioned behind the worker */}
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/10 rounded-full blur-[80px] md:blur-[150px] translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="grid grid-cols-2 items-center h-full gap-0">
          
          {/* Left Side: Bold Text Branding */}
          <div className="flex flex-col justify-center z-20 pr-2">
            <div className="bg-white/10 self-start px-2 py-0.5 rounded-md border border-white/20 mb-4 backdrop-blur-sm">
              <p className="text-blue-200 text-[8px] md:text-xs font-black uppercase tracking-[0.2em]">
                Premium Service
              </p>
            </div>
            
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter mb-4">
              AFBAM <br />
              <span className="text-blue-300">PLUMBING</span>
            </h1>
            
            <p className="text-blue-50 text-[11px] sm:text-base md:text-xl font-medium mb-8 max-w-[160px] md:max-w-sm opacity-90 leading-tight">
              Expert solutions for modern infrastructure. <br className="hidden md:block" />
              Guaranteed results in Osogbo.
            </p>
            
            <div>
              <button className="bg-white text-[#1e4b8a] font-black py-4 px-8 md:py-6 md:px-14 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all uppercase text-[10px] md:text-xs tracking-widest">
                Book Now
              </button>
            </div>
          </div>

          {/* Right Side: The Full-Height Image Wrapper */}
          <div className="absolute bottom-0 right-[-10%] w-[60%] h-[90%] md:relative md:right-0 md:w-full md:h-full flex items-end justify-end">
            <div className="relative w-full h-full">
               <Image 
                src="/ala.png" 
                alt="AFBAM Professional" 
                fill
                priority
                className="object-contain object-bottom drop-shadow-[-20px_0_50px_rgba(0,0,0,0.3)] md:drop-shadow-[-40px_0_80px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}