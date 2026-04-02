"use client";

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Globe,
  Code2,
  Layers,
  Smartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { BusinessAreaVisual } from '../BusinessVisuals';

const WebHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Website Design & Development</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          High-performance <span className="text-secondary">websites</span> built to scale.
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body mb-8">
          We combine creative design, robust technical development, and conversion optimization to deliver websites that don’t just look great, but act as a reliable growth engine for your business.
        </p>
        <Link href="/contact" className="bg-primary text-white px-8 py-4 font-headline font-bold text-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-3">
          Start Your Project <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  </section>
);

const FeatureList = () => {
  const features = [
    {
      icon: Globe,
      title: 'Custom Website Design',
      desc: 'Bespoke, user-friendly layouts designed specifically for your brand identity and target audience.'
    },
    {
      icon: Code2,
      title: 'Full-Stack Web Development',
      desc: 'Stable, secure, and fast-loading web applications built using cutting-edge frontend and backend technologies.'
    },
    {
      icon: Layers,
      title: 'CMS & eCommerce Integration',
      desc: 'Powerful content management systems and fully-featured eCommerce setups tailored for frictionless updates.'
    },
    {
      icon: Smartphone,
      title: 'Responsive & Mobile-First',
      desc: 'Flawless performance across all devices, ensuring your customers have a seamless experience anywhere.'
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-4">End-to-End Web Solutions</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
             <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 ghost-border relative overflow-hidden group">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-secondary mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-headline mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 font-body leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HighlightSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
           <div className="font-label text-[10px] text-secondary font-bold uppercase tracking-widest mb-4">Why choose us</div>
           <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-6">Built for speed, security, and search visibility.</h2>
           <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-8">
             Every website we launch goes through rigorous performance testing. From adhering to the latest web accessibility standards to optimizing the codebase for search engines, we deliver complete solutions out of the box.
           </p>
           <ul className="space-y-4">
             {[
               'Search-engine optimized structure (SEO-ready)',
               'Lightning-fast load times and optimized assets',
               'Enterprise-grade security standards',
               'Scalable architectures for future business growth'
             ].map((point, i) => (
               <li key={i} className="flex items-start gap-3">
                 <CheckCircle2 className="text-secondary mt-1 shrink-0" size={18} />
                 <span className="font-body text-slate-700">{point}</span>
               </li>
             ))}
           </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-secondary/5 blur-2xl rounded-full"></div>
          <BusinessAreaVisual variant="website" />
        </div>
      </div>
    </div>
  </section>
);

export default function WebsiteDesign() {
  return (
    <div className="bg-white">
      <WebHero />
      <FeatureList />
      <HighlightSection />
      <section className="py-32 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-8">Ready to upgrade your digital footprint?</h2>
          <p className="text-slate-400 mb-12 font-body text-lg leading-relaxed">
            Let's discuss how a custom-designed website or web application can align with your business goals and drive bottom-line results.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-secondary text-white px-10 py-4 font-headline font-bold text-lg hover:bg-secondary/90 transition-all cursor-pointer">
              Contact Our Engineers
            </Link>
            <Link href="/services" className="bg-slate-800 text-white px-10 py-4 font-headline font-bold text-lg hover:bg-slate-700 transition-all cursor-pointer">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
