import React from 'react';

export default function MaroonCTA() {
  return (
    <section className="bg-[#1e4b8a] py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* The Bold Message */}
        <h2 className="text-white text-xl md:text-2xl font-bold uppercase leading-relaxed mb-10 tracking-wide">
          Contact AFBAM for repairs and installation today! <br className="hidden md:block" />
          <span className="text-white/80 font-medium">
            We look forward to hearing from you and working with you on your next project.
          </span>
        </h2>

        {/* The Clean White Button */}
        <div className="flex justify-center">
          <a 
            href="/contact" 
            className="bg-white text-maroon hover:bg-zinc-100 px-12 py-4 font-black uppercase text-sm tracking-[0.2em] transition-all duration-300 shadow-xl active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}