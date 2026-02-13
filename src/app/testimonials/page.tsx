"use client";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ibraheem Qoyum",
    role: "Local Guide",
    text: "I’ve used AFBAM for several jobs now — from fixing leaks to installing new fittings — and they’ve never disappointed. Definitely a top choice in Osogbo!",
  },
  {
    name: "Jannet Hannah",
    role: "Verified Client",
    text: "Exceptional service from a truly dedicated team. They took time to explain the work done and provided practical maintenance advice.",
  },
  {
    name: "Abu Rasidat",
    role: "Verified Client",
    text: "Tested and trusted, prompt delivery and price is reasonable. Great customer service also 👍",
  },
  {
    name: "Cozysimpleliving",
    role: "Verified Client",
    text: "Outstanding experience! They were responsive to inquiries, arrived promptly, and handled the plumbing job with great skill.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#09090b] text-white overflow-hidden">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <h2 className="text-4xl font-bold">4.9/5 Rating from Our Clients</h2>
          <p className="text-slate-400 mt-4">Real feedback from over 23+ satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-slate-800 p-8 rounded-2xl relative border border-slate-700 hover:border-blue-500 transition-colors">
              <Quote className="text-blue-500 mb-4 opacity-50" size={32} />
              <p className="text-slate-300 italic mb-6 leading-relaxed">"{rev.text}"</p>
              <div>
                <p className="font-bold text-white">{rev.name}</p>
                <p className="text-xs text-blue-400 uppercase tracking-widest">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://maps.app.goo.gl/G1cHqcM9MT57QHQc7" // Link to your actual Google Business profile
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 underline"
          >
            Read all 23 reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}