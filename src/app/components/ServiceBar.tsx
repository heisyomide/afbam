import { Pipette, Bath, Construction } from "lucide-react";

const barItems = [
  { 
    title: "Plumbing", 
    icon: <Pipette size={48} strokeWidth={1} />, 
    bg: "bg-zinc-800" 
  },
  { 
    title: "Bathroom Remodeling", 
    icon: <Bath size={48} strokeWidth={1} />, 
    bg: "bg-zinc-700" 
  },
  { 
    title: "Excavation", 
    icon: <Construction size={48} strokeWidth={1} />, 
    bg: "bg-zinc-600" 
  },
];

export default function ServiceBar() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 w-full border-b-4 border-maroon">
      {barItems.map((item, index) => (
        <div 
          key={index}
          className={`${item.bg} py-12 flex flex-col items-center justify-center gap-4 group cursor-pointer transition-all duration-300 hover:brightness-110`}
        >
          {/* Line-art Icon */}
          <div className="text-white group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          
          {/* High-Impact Heading */}
          <h3 className="text-white font-black text-sm uppercase tracking-[0.3em] text-center px-4">
            {item.title}
          </h3>

          {/* Hidden Hover Effect: Maroon Bar */}
          <div className="h-1 w-0 bg-maroon group-hover:w-24 transition-all duration-500" />
        </div>
      ))}
    </section>
  );
}