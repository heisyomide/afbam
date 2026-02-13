import React from 'react';

export default function SpannerBanner() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden border-y-8 border-zinc-100">
      {/* The Background Image */}
      <img 
        src="/pll.jpg" 
        alt="Professional Plumbing Tools" 
        className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 ease-in-out"
      />
      
      {/* Subtle Overlay to make it feel premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5 pointer-events-none" />
      
      {/* Optional Brand Mark (Like the sample watermark) */}
      <div className="absolute bottom-4 right-8 opacity-20 hidden md:block">
        <span className="text-4xl font-black text-white italic tracking-tighter">AFBAM</span>
      </div>
    </section>
  );
}