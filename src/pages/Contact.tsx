import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const ContactHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Emergency Support Available</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Request a <span className="text-secondary">Digital Consultation.</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          Our diagnostic team is ready to analyze your infrastructure. Reach out to start your performance optimization journey.
        </p>
      </motion.div>
    </div>
  </section>
);

const ContactForm = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold font-headline mb-8">Clinical Intake Form</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold font-label uppercase tracking-widest text-slate-500">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 p-4 font-body focus:outline-none focus:border-secondary transition-colors" 
                  placeholder="Dr. John Smith"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold font-label uppercase tracking-widest text-slate-500">Company Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 p-4 font-body focus:outline-none focus:border-secondary transition-colors" 
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold font-label uppercase tracking-widest text-slate-500">Subject / Symptoms</label>
              <select className="w-full bg-slate-50 border border-slate-200 p-4 font-body focus:outline-none focus:border-secondary transition-colors appearance-none">
                <option>Performance Optimization</option>
                <option>Infrastructure Overhaul</option>
                <option>Marketing Strategy</option>
                <option>Custom Software Development</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold font-label uppercase tracking-widest text-slate-500">Detailed Description</label>
              <textarea 
                rows={5}
                className="w-full bg-slate-50 border border-slate-200 p-4 font-body focus:outline-none focus:border-secondary transition-colors" 
                placeholder="Describe the challenges your digital ecosystem is currently facing..."
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white py-5 font-headline font-bold text-lg hover:bg-secondary transition-all flex items-center justify-center gap-3 cursor-pointer">
              Submit for Analysis <Send size={20} />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-bold font-headline mb-8">Direct Channels</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold font-headline text-lg">Email Dispatch</div>
                  <p className="text-on-surface-variant font-body">triage@internetdoctors.com</p>
                  <p className="text-xs text-slate-400 mt-1 font-label">Response time: &lt; 4 hours</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold font-headline text-lg">Direct Line</div>
                  <p className="text-on-surface-variant font-body">+1 (888) 555-DOCS</p>
                  <p className="text-xs text-slate-400 mt-1 font-label">Mon-Fri, 9AM - 6PM EST</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold font-headline text-lg">Global Headquarters</div>
                  <p className="text-on-surface-variant font-body">77 Digital Plaza, Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 ghost-border">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-secondary" size={20} />
              <span className="font-bold font-headline uppercase tracking-widest text-sm">Operating Hours</span>
            </div>
            <div className="space-y-2 font-body text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>Monday - Friday</span>
                <span className="font-bold">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>Saturday</span>
                <span className="font-bold">10:00 - 14:00</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Sunday</span>
                <span className="font-bold uppercase">Emergency Only</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function Contact() {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
