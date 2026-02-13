"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets, Phone } from "lucide-react";
import Testimonials from "../testimonials/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the color change when the user leaves the Hero section (around 500px)
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define dynamic classes based on scroll state
  const navBg = scrolled 
    ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm py-3" 
    : "bg-transparent py-6";
  
  const textColor = scrolled ? "text-zinc-900" : "text-white";
  const logoSubtitle = scrolled ? "text-blue-500" : "text-blue-200";
  const buttonClass = scrolled 
    ? "bg-blue-500 text-white hover:bg-black" 
    : "bg-white text-[#1e4b8a] hover:bg-blue-50";

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className={`p-2 rounded-lg transition-colors duration-500 ${scrolled ? "bg-blue-500" : "bg-white"}`}>
            <Droplets className={scrolled ? "text-white" : "text-[#1e4b8a]"} size={22} />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-tighter leading-none transition-colors duration-500 ${textColor}`}>
              AFBAM
            </span>
            <span className={`text-[8px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${logoSubtitle}`}>
              Plumbing & Integrated Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {["Services", "About", "Testimonials", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`${item.toLowerCase()}`}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 ${textColor} opacity-80 hover:opacity-100`}
            >
              {item}
            </Link>
          ))}
          
          <a 
            href="tel:+2347032069993" 
            className={`flex items-center gap-3 px-6 py-3 rounded-full font-black text-[10px] uppercase transition-all duration-500 shadow-lg ${buttonClass}`}
          >
            <Phone size={14} /> 
            +234 703 206 9993
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden transition-colors duration-500 ${textColor}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-0 left-0 w-full h-screen bg-[#1e4b8a] flex flex-col items-center justify-center gap-8 z-[-1]"
          >
            {["Services", "About", "Reviews", "Careers"].map((item) => (
              <Link 
                key={item} 
                href={`${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black uppercase tracking-widest text-white"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}