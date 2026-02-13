export default function BodySections() {
  return (
    <div className="bg-white">
      {/* Section 1: The Spanner Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-maroon font-bold text-2xl uppercase mb-6">
          Plumbing Company in Osogbo, Osun State
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          AFBAM is a fully-licensed plumbing company that serves customers in need of residential & commercial plumbing services. 
          No matter how large or small the project is, our team is equipped to provide you with prompt, reliable solutions.
        </p>
      </section>

      {/* The Tool Banner */}
      <div className="w-full h-[300px] md:h-[450px] overflow-hidden border-y-8 border-zinc-100 shadow-inner">
        <img 
          src="/sss.jpg" 
          alt="Plumbing Tools" 
          className="w-full h-full object-cover object-center grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
        />
      </div>

      {/* Section 2: Emergency Services & The Floating Pipe */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h3 className="text-maroon font-bold text-3xl uppercase italic tracking-tighter">
            24/7 EMERGENCY REPAIRS
          </h3>
          <p className="text-gray-700 text-sm italic font-medium">
            Got a burst pipe or a major leak? AFBAM is ready to respond immediately to protect your property from water damage.
          </p>
          
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-maroon rounded-full" />
                <p className="text-sm text-gray-600 font-bold uppercase tracking-widest">Rapid Leak Detection</p>
             </div>
             <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-maroon rounded-full" />
                <p className="text-sm text-gray-600 font-bold uppercase tracking-widest">Pipe Burst Restoration</p>
             </div>
             <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-maroon rounded-full" />
                <p className="text-sm text-gray-600 font-bold uppercase tracking-widest">Sewage Backup Solutions</p>
             </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-xl font-black text-maroon">CALL NOW: +234 703 206 9993</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Available across Osun State</p>
          </div>
        </div>

        {/* The Water Pipe Graphic - Standalone Object */}
        <div className="relative flex justify-center items-center">
          <img 
            src="/ppp.png" 
            alt="Water Pipe Flowing" 
            className="w-full max-w-md h-auto mix-blend-multiply transition-transform hover:scale-105 duration-500"
            style={{ 
              backgroundColor: 'transparent',
              // This filter helps hide any lingering "fake" checkerboard or grey background pixels
              filter: 'contrast(1.1) brightness(1.05)' 
            }}
          />
        </div>
      </section>

{/* Section 3: Dual-Action Service Banner */}
<section className="relative w-full overflow-hidden">
  <div className="flex flex-col md:flex-row">
    
    {/* Left Side: The Emergency Hook (Maroon) */}
    <div className="w-full md:w-1/2 bg-maroon py-16 px-10 text-center md:text-right flex flex-col items-center md:items-end justify-center">
      <div className="space-y-4 max-w-sm">
        <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter">
          Urgent Repair?
        </h3>
        <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
          24/7 Priority Emergency <br /> Dispatch is standing by.
        </p>
        <a 
          href="tel:+2347032069993"
          className="inline-block bg-white text-maroon px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-zinc-900 hover:text-white transition-all shadow-xl"
        >
          Call For Emergency
        </a>
      </div>
    </div>

    {/* Right Side: The Project Hook (Deep Blue) */}
    <div className="w-full md:w-1/2 bg-[#1e4b8a] py-16 px-10 text-center md:text-left flex flex-col items-center md:items-start justify-center border-t-4 md:border-t-0 md:border-l-4 border-white/10">
      <div className="space-y-4 max-w-sm">
        <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
          New Project?
        </h3>
        <p className="text-blue-100/80 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
          Integrated solutions for <br /> modern property development.
        </p>
        <a 
          href="https://wa.me/2347032069993?text=Hello AFBAM, I'm planning a new project and would like to discuss integrated plumbing solutions."
          target="_blank"
          className="inline-block bg-white text-[#1e4b8a] px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-blue-400 hover:text-white transition-all shadow-xl"
        >
          Message on WhatsApp
        </a>
      </div>
    </div>

  </div>

  {/* Center Badge (Optional - Adds a "Pinterest" professional touch) */}
  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full items-center justify-center shadow-2xl z-20">
    <span className="text-[#1e4b8a] font-black text-xl italic">OR</span>
  </div>
</section>
    </div>
  );
}