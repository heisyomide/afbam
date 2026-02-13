"use client";
import React from 'react';
import Image from 'next/image'; // 1. Import the Image component

export default function Hero() {
  return (
    <section className="relative bg-[#1e4b8a] h-[85vh] md:h-[600px] overflow-hidden flex items-center pt-12 md:pt-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e4b8a] via-[#215299] to-[#255ba8]" />
      
      <div className="container mx-auto px-5 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-2 gap-0 md:gap-12 items-center w-full">
          
          {/* Left Side: Text Branding */}
          <div className="flex flex-col justify-center z-30">
            <div className="bg-white/10 self-start px-2 py-0.5 rounded-md border border-white/20 mb-4 backdrop-blur-sm">
              <p className="text-blue-200 text-[8px] md:text-xs font-black uppercase tracking-[0.2em]">
                Premium Service
              </p>
            </div>
            
            <h1 className="text-white text-3xl sm:text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-4">
              AFBAM <br />
              <span className="text-blue-300">PLUMBING</span>
            </h1>
            
            <p className="text-blue-50 text-[10px] sm:text-sm md:text-xl font-medium mb-6 max-w-[130px] md:max-w-sm opacity-90 leading-tight">
              Expert solutions for modern infrastructure. <br className="hidden md:block" />
              Guaranteed results in Osogbo.
            </p>
            
            <div className="flex">
              <button className="bg-white text-[#1e4b8a] font-black py-3 px-6 md:py-5 md:px-12 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase text-[9px] md:text-[11px] tracking-widest">
                Book Now
              </button>
            </div>
          </div>

          {/* Right Side: Optimized Image */}
          <div className="relative flex items-end justify-end h-full min-h-[300px] md:min-h-[500px]">
            <div className="absolute bottom-10 right-0 w-[150px] md:w-[450px] h-[150px] md:h-[450px] bg-white/20 rounded-full blur-[50px] md:blur-[120px]" />
            
            {/* 2. Swapped for Next.js Image with 'priority' */}
            <Image 
              src="/ala.png" 
              alt="AFBAM Professional" 
              width={400} // Matches your max-w
              height={500}
              priority // 3. Crucial: Loads this image immediately
              className="relative z-20 w-full max-w-[180px] sm:max-w-[250px] md:max-w-[400px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] md:drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}