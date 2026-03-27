import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Activity,
  CheckCircle2,
  Terminal as TerminalIcon,
  Brain,
  Trophy,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import {
  DeliveryFlowVisual,
  TeamCollaborationVisual,
} from '../components/BusinessVisuals';

const Hero = () => (
  <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-surface">
    <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="z-10">
        <span className="font-label text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">About Internet Doctors</span>
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary tracking-tighter mb-6 leading-none">
          Built for practical <br /><span className="text-secondary">digital growth</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-md mb-8 leading-relaxed font-body">
          Internet Doctors brings together creative designing, graphic support, content planning, development and marketing execution so clients get one team for the full digital journey.
        </p>
        <div className="flex gap-4">
          <Link to="/contact" className="bg-primary text-white px-8 py-4 text-sm font-label font-bold uppercase tracking-widest active:scale-95 transition-all cursor-pointer">Start a Project</Link>
          <Link to="/services" className="bg-surface-container-high text-on-surface px-8 py-4 text-sm font-label font-bold uppercase tracking-widest active:scale-95 transition-all cursor-pointer">View Services</Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
        <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full"></div>
        <TeamCollaborationVisual />
        <div className="absolute -bottom-8 -left-8 glass-card p-6 shadow-xl border border-white/20 hidden md:block bg-white/70 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 bg-secondary"></div>
            <div>
              <div className="font-label text-xs font-bold text-secondary uppercase">Working Style</div>
              <div className="font-label text-2xl font-bold">Creative + Technical</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Mission = () => (
  <section className="py-24 bg-surface-container-low px-6">
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-3 gap-0">
        <div className="md:col-span-1 py-12 pr-12">
          <h2 className="font-headline font-bold text-3xl tracking-tight mb-6">What We Focus On</h2>
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="text-on-surface-variant font-body leading-relaxed">
            Good digital products are not built by visuals alone. They need the right planning, the right technology, readable presentation and a delivery team that understands business goals.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200/20">
          {[
            { icon: Lightbulb, title: 'Planning First', desc: 'We analyse, plan and execute each project with a practical understanding of user needs and business goals.' },
            { icon: Cpu, title: 'Right Technology', desc: 'Open-source tools, robust hosting choices and the right technical stack form the base of our delivery.' },
            { icon: Activity, title: 'Continuous Improvement', desc: 'We keep pace with new techniques and update projects as requirements and platforms evolve.' },
            { icon: CheckCircle2, title: 'Readable Results', desc: 'A strong design improves presentation, usability and the overall trust a customer has in the business.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 hover:bg-surface-container-high transition-colors group">
              <item.icon className="text-secondary mb-6" size={40} />
              <h3 className="font-headline font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Specialists = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Our Team</span>
          <h2 className="font-headline font-extrabold text-4xl tracking-tight">How We Work Together</h2>
        </div>
        <p className="max-w-md text-on-surface-variant text-sm font-body">
          The uploaded content repeatedly points to a team model built on designers, developers, marketers and consultants working together instead of isolated delivery.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-container-low group overflow-hidden relative min-h-[400px]">
          <div className="absolute inset-0 p-6">
            <TeamCollaborationVisual />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-10 text-white">
            <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1 mb-4">
              <CheckCircle2 size={14} className="fill-white text-secondary" />
              <span className="font-label text-[10px] font-bold uppercase tracking-widest">Project Delivery</span>
            </div>
            <h3 className="font-headline font-bold text-3xl mb-2">Design, build and improve</h3>
            <p className="text-slate-300 max-w-sm text-sm font-body">Every project combines creative design, technical implementation and continuous refinement after launch.</p>
          </div>
        </div>
        <div className="md:col-span-4 bg-white p-8 flex flex-col justify-between border-l-4 border-secondary ghost-border">
          <div>
            <div className="w-20 h-20 rounded-full mb-6 bg-slate-100 flex items-center justify-center">
              <TerminalIcon className="text-secondary" size={28} />
            </div>
            <h3 className="font-headline font-bold text-xl mb-1">Development Team</h3>
            <div className="text-secondary font-label text-xs font-bold uppercase mb-4">Frontend, backend and platform support</div>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-body">From CMS websites to web apps and ERP systems, our developers focus on stable builds, maintainable code and scalable performance.</p>
          </div>
          <div className="flex gap-4">
            <TerminalIcon className="text-slate-400 hover:text-secondary cursor-pointer" size={24} />
            <Brain className="text-slate-400 hover:text-secondary cursor-pointer" size={24} />
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container-high p-8 group">
          <h3 className="font-headline font-bold text-xl mb-1">Design and Content</h3>
          <div className="text-secondary font-label text-xs font-bold uppercase mb-4">Layout, graphics and messaging</div>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-8 font-body">The design side of our team makes websites clearer, more attractive and easier for customers to understand and use.</p>
          <div className="h-px w-full bg-slate-200/30 mb-6"></div>
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] text-slate-500 uppercase tracking-widest">User-friendly focus</span>
            <ArrowRight className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
          </div>
        </div>
        <div className="md:col-span-8 bg-slate-900 text-white p-12 flex items-center justify-between">
          <div className="max-w-md">
            <h3 className="font-headline font-bold text-2xl mb-4">Marketing and Growth Support</h3>
            <p className="text-slate-400 text-sm mb-6 font-body">SEO, PPC, email, social media and lead generation help clients turn their digital presence into a practical sales channel.</p>
            <Link to="/digital-marketing" className="bg-white text-slate-900 px-6 py-3 text-xs font-label font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors cursor-pointer">See marketing services</Link>
          </div>
          <Brain className="text-white/5 hidden md:block" size={120} />
        </div>
      </div>
    </div>
  </section>
);

const Timeline = () => (
  <section className="py-24 px-6 bg-white overflow-hidden">
    <div className="max-w-screen-xl mx-auto">
      <h2 className="font-headline font-extrabold text-4xl mb-16 text-center">How Projects Move Forward</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200 hidden md:block"></div>
        <div className="space-y-24">
          <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0">
            <div className="md:w-1/2 md:pr-16 md:text-right">
              <span className="font-label text-4xl font-bold text-slate-200 mb-2 block">01</span>
              <h4 className="font-headline font-bold text-xl mb-3">Understand the Requirement</h4>
              <p className="text-sm text-on-surface-variant font-body">We begin with discussion, requirement gathering and clear planning around the client goal.</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-secondary z-10 hidden md:block"></div>
            <div className="md:w-1/2 md:pl-16">
              <div className="bg-surface-container-low p-6 rounded-lg ghost-border">
                <span className="font-label text-[10px] text-secondary font-bold uppercase">Planning Output</span>
                <div className="text-2xl font-bold font-label mt-1">Scope and feature clarity</div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row-reverse items-center gap-12 md:gap-0">
            <div className="md:w-1/2 md:pl-16">
              <span className="font-label text-4xl font-bold text-slate-200 mb-2 block">02</span>
              <h4 className="font-headline font-bold text-xl mb-3">Design and Build</h4>
              <p className="text-sm text-on-surface-variant font-body">Layouts, graphics, development and integrations are created around usability and business function.</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-secondary z-10 hidden md:block"></div>
            <div className="md:w-1/2 md:pr-16 text-right">
              <div className="ml-auto max-w-xs">
                <DeliveryFlowVisual />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0">
            <div className="md:w-1/2 md:pr-16 md:text-right">
              <span className="font-label text-4xl font-bold text-slate-200 mb-2 block">03</span>
              <h4 className="font-headline font-bold text-xl mb-3">Launch and Improve</h4>
              <p className="text-sm text-on-surface-variant font-body">After delivery we continue with feedback, enhancements, performance tuning and marketing support where required.</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-secondary z-10 hidden md:block"></div>
            <div className="md:w-1/2 md:pl-16">
              <div className="flex items-center gap-4 text-secondary">
                <Trophy size={48} />
                <div className="font-label text-xs font-bold uppercase tracking-tighter">Long-term support<br />and business-focused updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function About() {
  return (
    <div className="bg-white">
      <Hero />
      <Mission />
      <Specialists />
      <Timeline />
    </div>
  );
}
