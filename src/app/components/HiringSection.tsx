"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, Settings } from "lucide-react";

export default function ExcellenceSection() {
  return (
    <section className="relative py-24 bg-[#1e4b8a] overflow-hidden">
      {/* Background Tools Image (Low Opacity) - Swapped to Blue Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/tools-bg.jpg')] bg-cover bg-fixed grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e4b8a] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The "Attack" Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-blue-300 font-black text-4xl md:text-5xl uppercase italic tracking-tighter leading-none">
              ENGINEERED <br /> FOR RELIABILITY
            </h2>
            <p className="text-white font-medium text-lg italic opacity-90">
              AFBAM Plumbing & Integrated Services sets the gold standard in Osun State.
            </p>
          </div>

          {/* Feature Grid replacing the hiring list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-3 rounded-xl border border-white/20 group-hover:bg-white transition-all">
                <ShieldCheck className="text-white group-hover:text-[#1e4b8a]" size={20} />
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-widest">Fully Licensed</span>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-3 rounded-xl border border-white/20 group-hover:bg-white transition-all">
                <Zap className="text-white group-hover:text-[#1e4b8a]" size={20} />
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-widest">Rapid Response</span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-3 rounded-xl border border-white/20 group-hover:bg-white transition-all">
                <Settings className="text-white group-hover:text-[#1e4b8a]" size={20} />
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-widest">Smart Systems</span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-3 rounded-xl border border-white/20 group-hover:bg-white transition-all">
                <Award className="text-white group-hover:text-[#1e4b8a]" size={20} />
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-widest">Quality Parts</span>
            </div>
          </div>

          <p className="text-blue-100/70 text-sm leading-relaxed max-w-md">
            We don't just fix leaks; we build sustainable, high-efficiency water 
            infrastructure. From residential estates to commercial complexes, 
            our workmanship is guaranteed.
          </p>

          <a 
            href="https://wa.me/2347032069993"
            target="_blank"
            className="inline-block bg-white text-[#1e4b8a] px-10 py-4 font-black text-xs uppercase tracking-widest rounded-full hover:bg-blue-300 hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Experience The Difference
          </a>
        </div>

        {/* The Water Pipe Focus - Kept but styled for the new theme */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Subtle light effect behind the pipe */}
          <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full" />
          
          <img 
            src="/sp.jpg" 
            alt="Advanced Plumbing Component" 
            className="relative z-10 w-full max-w-md rounded-3xl border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] transform -rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}