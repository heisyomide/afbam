"use client";
import { motion } from "framer-motion";
import { 
  Droplets, Wrench, ShowerHead, Bath, 
  Waves, Thermometer, Database, Hammer, Settings 
} from "lucide-react";

const officialServices = [
  { title: "Plumbing leak detection", icon: <Waves />, desc: "High-tech acoustic and thermal leak tracing." },
  { title: "Plumbing pipe repair", icon: <Droplets />, desc: "Structural restoration of residential and commercial lines." },
  { title: "Shower installation", icon: <ShowerHead />, desc: "Precision fitting of luxury and standard shower systems." },
  { title: "Tap installation", icon: <Wrench />, desc: "Expert mounting of kitchen, bath, and utility faucets." },
  { title: "Tap repair", icon: <Hammer />, desc: "Internal component tuning to eliminate leaks and drips." },
  { title: "Toilet installation", icon: <Bath />, desc: "Seamless integration of high-efficiency sanitary units." },
  { title: "Toilet repair", icon: <Settings />, desc: "Restoring flush mechanics and sealing foundation leaks." },
  { title: "Water heater installation", icon: <Thermometer />, desc: "Smart heating solutions for consistent hot water supply." },
  { title: "Water tank installation", icon: <Database />, desc: "Large-scale storage setup for uninterrupted water flow." },
];

export default function ServicesGrid() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 italic">
            Integrated Solutions
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
            OUR 9 CORE <span className="text-zinc-500">SERVICES</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {officialServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-zinc-900/40 border border-zinc-800 p-10 hover:bg-zinc-800/60 hover:border-blue-500/50 transition-all group"
            >
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-white font-bold text-lg uppercase tracking-wider mb-3">
                {service.title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}