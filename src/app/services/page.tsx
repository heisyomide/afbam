"use client";

import { motion } from "framer-motion";
import { 
  Droplets, Wrench, ShowerHead, Bath, 
  Waves, Thermometer, Database, Hammer, Settings, Phone
} from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Plumbing leak detection", icon: <Waves />, desc: "Pinpoint accuracy using thermal and acoustic tech." },
  { title: "Plumbing pipe repair", icon: <Droplets />, desc: "Seamless replacement of critical infrastructure." },
  { title: "Shower installation", icon: <ShowerHead />, desc: "Luxury fittings with precision pressure balancing." },
  { title: "Tap installation", icon: <Wrench />, desc: "Modern fixture integration for kitchens and baths." },
  { title: "Tap repair", icon: <Hammer />, desc: "Restoring flow and efficiency to premium hardware." },
  { title: "Toilet installation", icon: <Bath />, desc: "High-efficiency, leak-proof sanitary solutions." },
  { title: "Toilet repair", icon: <Settings />, desc: "Rapid internal component restoration and tuning." },
  { title: "Water heater installation", icon: <Thermometer />, desc: "Smart heating solutions for consistent comfort." },
  { title: "Water tank installation", icon: <Database />, desc: "Industrial-grade storage for uninterrupted supply." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function ModernServices() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white pt-24 pb-12 overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent"
          >
            Integrated Precision
          </motion.h1>
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
            9 Specialized Services. 1 Standard of Excellence.
          </p>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(24, 24, 27, 0.8)" }}
              className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl backdrop-blur-md hover:border-blue-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* The "Closing" CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[2rem] bg-gradient-to-r from-blue-600 to-blue-400 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <Link href="contact">
          <p className="mb-8 opacity-90 font-medium">Osogbo's most trusted plumbing integrators.</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all active:scale-95">
            Contact AFBAM Now
          </button>
         </Link>
        </motion.div>
      </div>
    </main>
  );
}