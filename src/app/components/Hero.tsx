"use client";
import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#1e4b8a] min-h-screen md:min-h-[700px] overflow-hidden flex items-center pt-20 md:pt-0">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e4b8a] via-[#215299] to-[#255ba8]" />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
        
        {/* Text Content: Centered on mobile, Left-aligned on laptop */}
        <div className="flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 order-2 md:order-1">
          <div className="bg-white/10 self-center md:self-start px-4 py-1.5 rounded-full border border-white/20 mb-6 backdrop-blur-sm">
            <p className="text-blue-200 text-[10px] font-black uppercase tracking-[0.4em]">
              Premium Service
            </p>
          </div>
          
          <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
            AFBAM <br />
            <span className="text-blue-300">PLUMBING</span>
          </h1>
          
          <p className="text-blue-50 text-base md:text-xl font-medium mb-8 max-w-sm mx-auto md:mx-0 opacity-80">
            Expert solutions for modern infrastructure. Guaranteed results in Osogbo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <button className="w-full sm:w-auto bg-white text-[#1e4b8a] font-black py-5 px-12 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all uppercase text-[11px] tracking-widest">
              Book Now
            </button>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-blue-300 text-[9px] uppercase font-black tracking-widest mb-1">Emergency Call</p>
              <a href="tel:+2347032069993" className="text-white font-black text-lg hover:text-blue-200 transition-colors">
                +234 703 206 9993
              </a>
            </div>
          </div>
        </div>

        {/* Image Content: Positioned carefully for mobile overlay */}
        <div className="relative flex items-end justify-center h-full order-1 md:order-2 px-10 md:px-0">
          {/* Back glow behind image */}
          <div className="absolute bottom-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/20 rounded-full blur-[100px]" />
          
          <img 
            src="/ala.png" 
            alt="AFBAM Professional" 
            className="relative z-20 w-full max-w-[320px] md:max-w-[500px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-fade-in-up"
          />
        </div>
      </div>
    </section>
  );
}