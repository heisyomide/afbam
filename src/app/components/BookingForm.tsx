"use client";

import { useState, ChangeEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 1. Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Emergency Plumbing",
    message: ""
  });

  // 2. Typing Handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 3. The WhatsApp Number (Company Number)
    const companyWhatsApp = "2347032069993"; 

    // 4. Formatting the Message
    const textMessage = `*NEW BOOKING REQUEST*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Message:* ${formData.message}`;

    // 5. Open WhatsApp Link
    const whatsappUrl = `https://wa.me/${companyWhatsApp}?text=${textMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="bg-blue-50 p-8 rounded-2xl text-center border border-blue-200">
        <CheckCircle2 className="mx-auto text-blue-600 mb-4" size={48} />
        <h3 className="text-2xl font-bold text-slate-900">Redirecting to WhatsApp...</h3>
        <p className="text-slate-600 mt-2">Please click 'Send' in WhatsApp to finish.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-blue-600 font-semibold underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
        
        {/* Contact Info Sidebar */}
        <div className="bg-blue-600 p-10 text-white md:w-1/3">
          <h3 className="text-2xl font-bold mb-6 text-white">Work with AFBAM</h3>
          <p className="text-blue-100 mb-8">
            From smart sensors to emergency pipe repairs, we've got you covered.
          </p>
          <div className="space-y-4 text-sm">
            <p><strong>📍 Location:</strong> Plot 6 Tunji, Odebunmi St, Osogbo</p>
            <p><strong>📞 Phone:</strong> +2347032069993</p>
            <p><strong>✉️ Email:</strong> info@afbam.com</p>
          </div>
        </div>

        {/* Form Field */}
        <form onSubmit={handleSubmit} className="p-10 md:w-2/3 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                name="name" 
                type="text" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" 
                placeholder="Kunle Afolabi" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input 
                name="phone" 
                type="tel" 
                required 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" 
                placeholder="+234..." 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
            <select 
              name="service" 
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white text-slate-900"
            >
              <option>Emergency Plumbing</option>
              <option>Smart System Integration</option>
              <option>General Maintenance</option>
              <option>Commercial Project</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea 
              name="message" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" 
              placeholder="Describe your issue..."
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 transition-all">
            <Send size={18} /> Submit
          </button>
        </form>
      </div>
    </section>
  );
}