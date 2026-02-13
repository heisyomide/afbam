"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import BookingForm from "../components/BookingForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      {/* Animated Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - Minimal & High Impact */}
        <div className="mb-16 text-center lg:text-left space-y-4">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
             <div className="h-[2px] w-12 bg-blue-300" />
             <span className="text-blue-200 font-bold uppercase text-xs tracking-[0.4em]">Connect With Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            GET IN <span className="text-blue-300">TOUCH</span>
          </h1>
          <p className="text-blue-100/70 text-lg max-w-2xl leading-relaxed">
            From emergency repairs to large-scale integrated infrastructure, 
            the AFBAM team is ready to deliver precision results.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Column 1: Contact Details & Hours */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="text-blue-600" size={24} /> Office Location
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Plot 6 Tunji, Odebunmi Street, <br />
                Adetoro Rd, Layout, <br />
                Osogbo 230103, Osun State
              </p>
              
              <div className="mt-8 pt-8 border-t border-slate-200 space-y-4">
                <a href="tel:+2347032069993" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors">
                  <Phone size={20} className="text-blue-600" /> +234 703 206 9993
                </a>
                <div className="flex items-center gap-4 text-slate-700">
                  <Mail size={20} className="text-blue-600" /> info@afbam.com
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock size={24} /> Working Hours
              </h3>
              <ul className="space-y-3 text-sm opacity-90">
                <li className="flex justify-between"><span>Mon - Sat:</span> <span>7:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between font-bold"><span>Sunday:</span> <span>10:00 AM - 6:00 PM</span></li>
                <li className="mt-4 pt-4 border-t border-blue-400 italic text-xs">
                  *24/7 Support available for Emergency Integrated Services.
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 & 3: Map and Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Embedded Google Map */}
            <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0!2d4.5!3d7.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103823fcc3876a57%3A0x4077505381d2808c!2sAFBAM%20PLUMBING%20%26%20INTEGRATED%20SERVICES!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Reuse our Booking Form */}
            <div className="bg-slate-50 p-2 rounded-3xl">
               <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}