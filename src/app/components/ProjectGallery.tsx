import Image from "next/image";

const projects = [
  {
    title: "Smart Home Water Hub",
    category: "Integration",
    src: "/projects/project1.jpg", // Replace with your actual image paths
  },
  {
    title: "Industrial Pipe Retrofit",
    category: "Commercial",
    src: "/projects/project2.jpg",
  },
  {
    title: "Luxury Bathroom Install",
    category: "Residential",
    src: "/projects/project3.jpg",
  },
  {
    title: "Leak Detection System",
    category: "Integrated Tech",
    src: "/projects/project4.jpg",
  },
  {
    title: "Water Filtration Plant",
    category: "Commercial",
    src: "/projects/project5.jpg",
  },
  {
    title: "Emergency Main Repair",
    category: "Maintenance",
    src: "/projects/project6.jpg",
  },
];

export default function ProjectGallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Work</h2>
            <p className="text-4xl font-extrabold text-slate-900">Proven Results in Every Pipe</p>
          </div>
          <p className="text-slate-600 md:w-1/3">
            Explore our portfolio of traditional plumbing excellence and advanced system integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]"
            >
              {/* Image Placeholder - Replace with <Image /> when you have files */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-500">
                [Project Image: {project.title}]
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-xs font-bold uppercase mb-1">{project.category}</span>
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}