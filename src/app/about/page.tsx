"use client";
import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative bg-[#09090b] py-24 overflow-hidden ">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      {/* Subtle Background Pattern to match the "Integrated Services" tech feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The "Object" Image Style */}
          <div className="relative group">
            {/* The Pinterest-style "Floating" Frame */}
            <div className="absolute -inset-4 border-2 border-white/20 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-700" />
            
            <div className="relative z-10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white">
              <img 
                src="/about.jpg" 
                alt="AFBAM Professionalism" 
                className="w-full h-[890px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Stat Badge - Swapped to White/Blue to match the new theme */}
              <div className="absolute bottom-0 right-0 bg-white p-8 rounded-tl-3xl shadow-2xl">
                <p className="text-[#1e4b8a] text-5xl font-black italic tracking-tighter leading-none">15+</p>
                <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.2em] mt-2">Years of Service</p>
              </div>
            </div>
          </div>

          {/* Right Side: High-Contrast Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-blue-300" />
                <span className="text-blue-200 font-bold uppercase text-xs tracking-[0.4em]">Expertise</span>
              </div>
              <h2 className="text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                AFBAM <br />
                <span className="text-blue-300">INTEGRATED</span>
              </h2>
            </div>

            <p className="text-blue-50/80 text-lg leading-relaxed max-w-lg">
              We provide more than just pipe repairs. Our team specializes in the 
              full integration of plumbing systems for modern residential and 
              commercial estates across Osogbo. 
            </p>

            {/* Icon Feature List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg border border-white/20">
                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">Licensed Technicians</h4>
                  <p className="text-blue-200/60 text-xs mt-1 italic">Verified skills for reliable installations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg border border-white/20">
                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">Integrated Solutions</h4>
                  <p className="text-blue-200/60 text-xs mt-1 italic">Smart systems for water efficiency.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
<Link href="services">
  <button className="bg-white text-[#1e4b8a] font-black py-4 px-12 rounded-full hover:bg-blue-400 hover:text-white transition-all uppercase text-[11px] tracking-widest shadow-xl active:scale-95">
    Our Services
  </button>
</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}