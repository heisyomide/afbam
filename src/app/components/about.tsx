"use client";
import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutGallery() {
  return (
    <section className="bg-[#1e4b8a] py-24 text-white relative overflow-hidden">
      {/* Background Brand Accent */}
      <div className="absolute top-0 right-0 p-20 opacity-5 select-none pointer-events-none">
        <h2 className="text-[200px] font-black leading-none">AFBAM</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Large Showcase (6 Cols) */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-4 border-white"
            >
              <img 
                src="/te.jpeg" 
                alt="AFBAM Professional Work" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-6 left-6 bg-white text-[#1e4b8a] px-4 py-2 rounded-full font-black text-[10px] tracking-widest uppercase shadow-lg">
                On-Site Excellence
              </div>
            </motion.div>
            
            {/* Overlapping Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute -bottom-10 -right-6 lg:right-10 bg-white p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block"
            >
              <p className="text-[#1e4b8a] font-black text-xs uppercase tracking-widest mb-2 italic underline">
                The AFBAM Standard
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                "Our technicians are more than plumbers; they are infrastructure specialists."
              </p>
            </motion.div>
          </div>

          {/* Right Column: Text & Secondary Image (5 Cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight italic">
                LUXURY <span className="text-blue-300">SYSTEMS</span> <br />
                MASTERED.
              </h3>
              <p className="text-blue-100/70 text-lg leading-relaxed">
                From full-building pipe retrofitting to custom luxury fixtures, 
                we deliver flawless plumbing integration for modern Osogbo estates.
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-4">
              {[
                "Custom High-End Shower Valves",
                "Full-Building Pipe Retrofitting",
                "Smart Water Monitoring Systems"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <CheckCircle2 className="text-blue-300 group-hover:scale-125 transition-transform" size={18} />
                  <span className="font-bold text-xs uppercase tracking-widest text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            {/* Secondary Visual Accent */}
            <div className="pt-6">
              <div className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-xl group">
                <img 
                  src="/tec.jpeg" 
                  alt="Precision Finish" 
                  className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-black text-xs uppercase tracking-[0.3em]">Quality Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}