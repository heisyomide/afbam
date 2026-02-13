"use client";
import React from 'react';
import Link from 'next/link';
import { Droplets, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Subtle Background Brand Watermark */}
      <div className="absolute bottom-0 left-0 text-[12vw] font-black text-white/5 leading-none select-none pointer-events-none translate-y-10">
        AFBAM
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <Droplets className="text-[#1e4b8a]" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">AFBAM</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Leading the way in professional plumbing and integrated infrastructure solutions across Osun State. Quality you can see, reliability you can trust.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 transition-all">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black uppercase text-xs tracking-[0.3em] mb-8 text-blue-400">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'About', 'Gallery', 'Contact', 'Reviews'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black uppercase text-xs tracking-[0.3em] mb-8 text-blue-400">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-blue-400 shrink-0" size={20} />
                <span className="text-zinc-400 text-sm leading-snug">
                  Plot 6 Tunji, Odebunmi St, Adetoro Rd, Layout, Osogbo
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-blue-400 shrink-0" size={20} />
                <span className="text-zinc-400 text-sm font-bold">+234 703 206 9993</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-blue-400 shrink-0" size={20} />
                <span className="text-zinc-400 text-sm font-bold">info@afbam.com</span>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative group">
            <h4 className="text-white font-black text-lg mb-4 italic tracking-tighter">Ready to start?</h4>
            <p className="text-zinc-400 text-xs mb-6">Skip the wait and message our experts directly on WhatsApp.</p>
            <a 
              href="https://wa.me/2347032069993"
              className="block w-full bg-white text-[#0f172a] text-center py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-400 hover:text-white transition-all shadow-xl"
            >
              Message Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
            © 2026 AFBAM PLUMBING & INTEGRATED SERVICES. ALL RIGHTS RESERVED.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}