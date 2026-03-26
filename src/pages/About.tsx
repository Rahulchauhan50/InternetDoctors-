import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

// Since I don't have custom icons, I'll map them to Lucide equivalents
import { 
  FlaskConical, 
  Cpu, 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  Terminal as TerminalIcon, 
  Brain, 
  Stethoscope, 
  Trophy,
  ArrowRight
} from 'lucide-react';

const Hero = () => (
  <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-surface">
    <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10"
      >
        <span className="font-label text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Operation: Digital Excellence</span>
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary tracking-tighter mb-6 leading-none">
          The Digital <br/><span className="text-secondary">Surgeons</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-md mb-8 leading-relaxed font-body">
          We don't just build websites; we perform high-stakes digital interventions. Our methodology is rooted in clinical precision, ensuring every pixel contributes to your growth.
        </p>
        <div className="flex gap-4">
          <Link to="/contact" className="bg-primary text-white px-8 py-4 text-sm font-label font-bold uppercase tracking-widest active:scale-95 transition-all cursor-pointer">Start Consultation</Link>
          <Link to="/services" className="bg-surface-container-high text-on-surface px-8 py-4 text-sm font-label font-bold uppercase tracking-widest active:scale-95 transition-all cursor-pointer">Review Protocols</Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full"></div>
        <img 
          alt="Medical UI Overlay" 
          className="relative rounded-lg shadow-2xl surgical-glow grayscale hover:grayscale-0 transition-all duration-700" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxeMIJln30VSRim6fa5O4zUGVI3kPUs7dwK11P38qsvGITdyLLFZqHZsNY8O1UvksoOGo6ofLlB3e_-BCNcoK-wwDGnw87tgwDLpkwYgNPI5m6Y9btah2-8u1T5VE93h1yoxy2DjJIATZRJA52snMklsDvw96zSktuE566BOBLvO7valPfHh_fLh1hr_Vu4S8MFWcg-TCH06Vo5nV4YnLbO4g95SSipNeNCX0L0w53L5_f3TcdipIZsRVD3LxDpB9njxxxFVmchLI"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-8 -left-8 glass-card p-6 shadow-xl border border-white/20 hidden md:block bg-white/70 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 bg-secondary"></div>
            <div>
              <div className="font-label text-xs font-bold text-secondary uppercase">Uptime Vitals</div>
              <div className="font-label text-2xl font-bold">99.998%</div>
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
          <h2 className="font-headline font-bold text-3xl tracking-tight mb-6">Our Mission</h2>
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="text-on-surface-variant font-body leading-relaxed">
            To treat digital stagnation with aggressive surgical growth strategies. We eliminate the fat, optimize the core, and ensure every client functions at peak physiological performance.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200/20">
          {[
            { icon: FlaskConical, title: 'Diagnostic Audits', desc: 'Deep-tissue analysis of your digital infrastructure to identify bottlenecks and systemic failures.' },
            { icon: Cpu, title: 'Precision Code', desc: 'Engineering that follows the Hippocratic Oath: First, do no harm to the user experience or page speed.' },
            { icon: Activity, title: 'Vitals Monitoring', desc: 'Real-time data streams that monitor your conversion health and technical pulse 24/7/365.' },
            { icon: AlertCircle, title: 'Rapid Recovery', desc: 'Immediate intervention protocols for traffic drops, security breaches, or system failures.' }
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
          <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">The Medical Board</span>
          <h2 className="font-headline font-extrabold text-4xl tracking-tight">The Specialists</h2>
        </div>
        <p className="max-w-md text-on-surface-variant text-sm font-body">Our practitioners are cross-trained in medical science and software engineering, bringing a unique dual-perspective to digital health.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-container-low group overflow-hidden relative min-h-[400px]">
          <img 
            alt="Dr. Precision" 
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYuzheg0OyC1-dVAFFXsL3z36Jd5AZfN-AXb6908NlI9k8R3eKK6IFd5y7qahS51lAWtxz2wnpr2kuGMwJUrAwsSaywhJ9oPbGkke8YFARM8JjOwaVKK-Cqcs22HlrNmAyA-1mu87cHxMF8TPrNW_FQsFZa4scfNfPqaDg1_uWbu3p-8e4ucNFKkfB1TfmSGXtzCkzJy-zsrCfWtYt7GJ4UWC9IAK7m0cerodiMEQO7ShSAxgszMh6IxwrvoGD4xR0WUS1d5SjH0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-10 text-white">
            <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1 mb-4">
              <CheckCircle2 size={14} className="fill-white text-secondary" />
              <span className="font-label text-[10px] font-bold uppercase tracking-widest">Lead Consultant</span>
            </div>
            <h3 className="font-headline font-bold text-3xl mb-2">Dr. Elena Precision</h3>
            <p className="text-slate-300 max-w-sm text-sm font-body">Specializing in high-frequency data surgery and architectural neuro-optimization.</p>
          </div>
        </div>
        <div className="md:col-span-4 bg-white p-8 flex flex-col justify-between border-l-4 border-secondary ghost-border">
          <div>
            <img 
              alt="Marcus Logic" 
              className="w-20 h-20 rounded-full mb-6 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd5k_NLIstvTNCB4yPy_yfVYr6bvkQ6JQXQDUy-uoxfwxjba4iDo0SpryURZ5-uNu6yUywCIeLpMGXwTiuulpaDBJIGMTUlQtarcU18cJq2VEyoGHErPwFwTFPbNtdx0UvbVOyMtuUctHEg8dBXmiImyfETMMC927n8ozvcBvXIemO91358jgpD6gPJtC_dDJLq58mdLk6ESf6ZNFpduRnpzcpEs2e2xWlnpJ9HRobJGjyaSOR_59v7uKFffGslmA-z5WR_VhrszE"
              referrerPolicy="no-referrer"
            />
            <h3 className="font-headline font-bold text-xl mb-1">Marcus Logic</h3>
            <div className="text-secondary font-label text-xs font-bold uppercase mb-4">Systems Pathologist</div>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-body">Expert in identifying and eradicating systemic code inefficiencies before they become terminal.</p>
          </div>
          <div className="flex gap-4">
            <TerminalIcon className="text-slate-400 hover:text-secondary cursor-pointer" size={24} />
            <Brain className="text-slate-400 hover:text-secondary cursor-pointer" size={24} />
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container-high p-8 group">
          <h3 className="font-headline font-bold text-xl mb-1">Sarah Synthesis</h3>
          <div className="text-secondary font-label text-xs font-bold uppercase mb-4">UX Anesthesiologist</div>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-8 font-body">Specializing in frictionless user journeys that eliminate conversion pain-points.</p>
          <div className="h-px w-full bg-slate-200/30 mb-6"></div>
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] text-slate-500 uppercase tracking-widest">Case Load: 24 active</span>
            <ArrowRight className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
          </div>
        </div>
        <div className="md:col-span-8 bg-slate-900 text-white p-12 flex items-center justify-between">
          <div className="max-w-md">
            <h3 className="font-headline font-bold text-2xl mb-4">Join the Clinical Faculty</h3>
            <p className="text-slate-400 text-sm mb-6 font-body">We are looking for senior digital surgeons to join our growing agency. High precision required.</p>
            <Link to="/careers" className="bg-white text-slate-900 px-6 py-3 text-xs font-label font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors cursor-pointer">Apply for Residency</Link>
          </div>
          <Stethoscope className="text-white/5 hidden md:block" size={120} />
        </div>
      </div>
    </div>
  </section>
);

const Timeline = () => (
  <section className="py-24 px-6 bg-white overflow-hidden">
    <div className="max-w-screen-xl mx-auto">
      <h2 className="font-headline font-extrabold text-4xl mb-16 text-center">Development Log</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200 hidden md:block"></div>
        <div className="space-y-24">
          <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0">
            <div className="md:w-1/2 md:pr-16 md:text-right">
              <span className="font-label text-4xl font-bold text-slate-200 mb-2 block">2021</span>
              <h4 className="font-headline font-bold text-xl mb-3">The First Incision</h4>
              <p className="text-sm text-on-surface-variant font-body">Founded as a boutique laboratory for performance engineering in San Francisco.</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-secondary z-10 hidden md:block"></div>
            <div className="md:w-1/2 md:pl-16">
              <div className="bg-surface-container-low p-6 rounded-lg ghost-border">
                <span className="font-label text-[10px] text-secondary font-bold uppercase">Success Metric</span>
                <div className="text-2xl font-bold font-label mt-1">14.2ms Average FCP</div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row-reverse items-center gap-12 md:gap-0">
            <div className="md:w-1/2 md:pl-16">
              <span className="font-label text-4xl font-bold text-slate-200 mb-2 block">2022</span>
              <h4 className="font-headline font-bold text-xl mb-3">Scale Optimization</h4>
              <p className="text-sm text-on-surface-variant font-body">Expansion of the Digital ICU to handle enterprise-grade conversion crises.</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-secondary z-10 hidden md:block"></div>
            <div className="md:w-1/2 md:pr-16 text-right">
              <img 
                alt="Growth Chart" 
                className="rounded grayscale ml-auto max-w-xs" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZqHtwV7cEhgLBfNhedOfmfwhmowWDzgu0UBz_Z7b8KftsQuuQLXzNTqDBBKMvqbnUjrhuH8sOfdS7qbCpVZ6EN1QeEj0oSKqnQrEqwct3GobwJV-yrDTpX-JoK6E8uLF7k5Oirb-h3F_bPEuhlLDUI9-NBkCA_r4iM7slhzVzysn1uooqgv0jbRNq43P3nkmTFJN5qkrMR07bpARYXL_iWVotZO1dvo6N_Gs3wi7Hp-YSxRmNBrJ_A_91GgX4Z1qJgI933u6ADao"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0">
            <div className="md:w-1/2 md:pr-16 md:text-right">
              <span className="font-label text-4xl font-bold text-slate-200 mb-2 block">2024</span>
              <h4 className="font-headline font-bold text-xl mb-3">Internet Doctors Agency</h4>
              <p className="text-sm text-on-surface-variant font-body">The full evolution into the world's first medical-grade digital consultancy.</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-secondary z-10 hidden md:block"></div>
            <div className="md:w-1/2 md:pl-16">
              <div className="flex items-center gap-4 text-secondary">
                <Trophy size={48} />
                <div className="font-label text-xs font-bold uppercase tracking-tighter">Verified Agency of the Year<br/>Technical Excellence</div>
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
