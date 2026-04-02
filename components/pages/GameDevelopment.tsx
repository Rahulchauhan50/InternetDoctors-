"use client";

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Gamepad2,
  Rocket,
  ShieldCheck,
  Cpu,
  Activity,
} from 'lucide-react';

const GameDevelopmentHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 text-secondary font-label text-[10px] uppercase font-bold tracking-[0.2em] rounded-full">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Game Development
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight leading-[0.9] text-slate-900">
            ENGAGING <br /><span className="text-secondary">GAME DEVELOPMENT</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">
            Internet Doctors provides comprehensive game development services, creating immersive and interactive experiences for mobile, PC, and web platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 font-label text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-secondary/20 transition-all active:scale-95 cursor-pointer">
              Start Consultation
            </Link>
            <Link href="/case-studies" className="bg-slate-100 text-slate-900 px-8 py-4 font-label text-xs uppercase tracking-widest font-bold hover:bg-slate-200 transition-all active:scale-95 cursor-pointer">
              View Capability Areas
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative flex justify-center items-center">
          <div className="aspect-square w-full max-w-md bg-slate-100 rounded-xl overflow-hidden ghost-border shadow-2xl relative group flex justify-center items-center">
            <Gamepad2 className="text-slate-300 w-1/2 h-1/2" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-6 ghost-border shadow-xl max-w-[220px]">
            <div className="font-label text-[10px] uppercase tracking-tighter text-secondary mb-2 font-bold">Delivery model</div>
            <div className="font-headline font-bold text-sm leading-tight">Concept, design and staged development</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const GameDevelopment = () => {
  return (
    <div className="bg-white">
      <GameDevelopmentHero />

      <section className="px-6 md:px-12 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold font-headline mb-4 uppercase tracking-tight">Accelerated development lifecycle</h2>
              <p className="text-on-surface-variant font-body">Our game development highlights collaborative requirement gathering, prototyping, and reduced latency in the delivery cycle to bring your vision to life.</p>
            </div>
            <div className="font-label text-4xl font-bold text-slate-200 select-none">GAME_FLOW</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-8 relative overflow-hidden ghost-border group">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Rocket className="text-secondary mb-8" size={40} />
                <div>
                  <h3 className="font-headline font-bold text-xl mb-2">Prototyping before scale</h3>
                  <p className="text-on-surface-variant text-sm max-w-md font-body">Before development begins, our design experts collaborate with clients to understand requirements in detail and shape the gameplay through a prototyping model.</p>
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity size={200} />
              </div>
            </div>
            <div className="bg-slate-900 text-white p-8 ghost-border">
              <ShieldCheck className="text-on-tertiary-container mb-8" size={40} />
              <h3 className="font-headline font-bold text-xl mb-2">Secure & Scalable</h3>
              <p className="text-slate-400 text-sm font-body">Games are designed to be robust, secure, and compatible across modern gaming environments.</p>
            </div>
            <div className="bg-white p-8 ghost-border border-l-4 border-on-tertiary-container">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-secondary" size={24} />
                <span className="font-label text-xs font-bold uppercase tracking-widest">Cross-platform development</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4">Consulting-led game projects</h3>
              <p className="text-on-surface-variant text-sm mb-6 font-body">Our web & mobile game work is driven by project managers, designers, consultants, and developers who align the game idea with the business requirement.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-xs font-label uppercase font-medium"><div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></div> Requirement analysis</li>
                <li className="flex items-center gap-2 text-xs font-label uppercase font-medium"><div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></div> Business-fit delivery</li>
              </ul>
            </div>
            <div className="md:col-span-2 bg-white p-8 ghost-border flex flex-col md:flex-row gap-8 items-center border-l-4 border-secondary">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Gamepad2 className="text-secondary" size={24} />
                  <span className="font-label text-xs font-bold uppercase tracking-widest">Interactive Experiences</span>
                </div>
                <h3 className="font-headline font-bold text-xl mb-4">Engaging game design</h3>
                <p className="text-on-surface-variant text-sm mb-6 font-body">We position game delivery around the right people for the right job, satisfying outcomes and premium game development services at an economical price point.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50">
                    <div className="font-label text-lg font-bold text-secondary">Premium</div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">performance and graphics</div>
                  </div>
                  <div className="p-4 bg-slate-50">
                    <div className="font-label text-lg font-bold text-secondary">Right fit</div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">for expanding gaming markets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label text-xs font-bold text-secondary tracking-[0.3em] uppercase block mb-4">Methodology</span>
          <h2 className="text-4xl font-extrabold font-headline uppercase tracking-tighter mb-6">How game projects move</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-100 ghost-border overflow-hidden">
          {[
            { num: '01', title: 'Discuss', desc: 'Understand the concept, target audience and business goal.' },
            { num: '02', title: 'Prototype', desc: 'Map the key mechanics and create initial playable versions.' },
            { num: '03', title: 'Develop', desc: 'Build across platforms with iterative testing and polish.' },
            { num: '04', title: 'Enhance', desc: 'Launch, review player feedback and continue improvements.' },
          ].map((step, i) => (
            <div key={i} className="bg-white p-10 group hover:bg-slate-50 transition-colors">
              <div className="font-label text-4xl text-slate-100 mb-6 group-hover:text-secondary/20 transition-colors font-bold">{step.num}</div>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest mb-4">{step.title}</h4>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameDevelopment;
