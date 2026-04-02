"use client";

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Database,
  Activity,
  ArrowRight,
  ShoppingCart,
  Warehouse,
  Truck,
  Wallet,
  Users,
  Settings,
  FlaskConical,
  ShieldCheck,
  LayoutGrid,
} from 'lucide-react';
import { ERPDashboardVisual } from '../BusinessVisuals';

const ERPHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">ERP Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 leading-[0.95]">
            Custom ERP software for <br /> <span className="text-secondary">business operations</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed font-body">
            We design and implement ERP systems that replace manual work, simplify customer service and organize core business processes into one manageable framework.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 font-headline font-bold text-sm tracking-tight hover:shadow-xl transition-all active:scale-95 cursor-pointer">
              Discuss ERP Requirements
            </Link>
            <Link href="/case-studies" className="bg-slate-100 text-slate-900 px-8 py-4 font-headline font-bold text-sm tracking-tight hover:bg-slate-200 transition-all active:scale-95 cursor-pointer">
              Explore Use Cases
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
          <div className="aspect-square bg-slate-50 ghost-border overflow-hidden relative group">
            <ERPDashboardVisual />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 glass-card p-6 border-l-4 border-secondary">
              <div className="font-label text-xs font-bold text-secondary mb-1">ERP Outcome</div>
              <div className="font-label text-2xl font-bold text-slate-900 tracking-tight">Less manual work, better control</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ERPFeature = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white p-10 ghost-border relative overflow-hidden flex flex-col justify-between min-h-[400px] group">
        <div className="relative z-10">
          <Database className="text-secondary mb-6" size={40} />
          <h3 className="text-3xl font-headline font-bold tracking-tight mb-4">Made-to-order ERP suites</h3>
          <p className="text-on-surface-variant max-w-md leading-relaxed font-body">
            The uploaded ERP content emphasizes custom-made software systems rather than one-size-fits-all products. We design solutions around the actual workflow, reporting and operational needs of each client.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between relative z-10">
          <div className="flex gap-8">
            <div className="text-center">
              <div className="font-label text-xl font-bold text-slate-900 tracking-tighter">1</div>
              <div className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest font-bold">Integrated framework</div>
            </div>
            <div className="text-center">
              <div className="font-label text-xl font-bold text-slate-900 tracking-tighter">Many</div>
              <div className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest font-bold">Business modules</div>
            </div>
          </div>
          <ArrowRight className="text-secondary group-hover:translate-x-2 transition-transform" size={24} />
        </div>
      </div>
      <div className="bg-white p-8 border-l-4 border-on-tertiary-container ghost-border flex flex-col">
        <Activity className="text-slate-900 mb-6" size={32} />
        <h3 className="text-xl font-headline font-bold mb-3 tracking-tight">Operational benefits</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-body">
          Better decision-making, improved service quality, reduced manual tracking and stronger visibility across sales, inventory, finance and support teams.
        </p>
        <div className="mt-auto bg-slate-50 p-4 rounded-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></div>
            <span className="font-label text-[10px] font-bold text-slate-900 tracking-widest uppercase">Built for scale</span>
          </div>
          <div className="h-1 bg-slate-200 w-full overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: '88%' }} transition={{ duration: 1.5 }} className="h-full bg-on-tertiary-container"></motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ERPModules = () => {
  const modules = [
    { icon: LayoutGrid, title: 'Sales Management', desc: 'Orders, pricing and sales process control.' },
    { icon: ShoppingCart, title: 'Purchase Management', desc: 'Vendor buying and procurement workflow.' },
    { icon: Database, title: 'Inventory Management', desc: 'Stock tracking and item visibility.' },
    { icon: Warehouse, title: 'Warehouse Management', desc: 'Storage process and dispatch support.' },
    { icon: Truck, title: 'Supply Chain', desc: 'Movement and delivery coordination.' },
    { icon: Wallet, title: 'Finance and Accounting', desc: 'Financial records, tracking and reporting.' },
    { icon: Users, title: 'HR Management', desc: 'People operations and internal records.' },
    { icon: Settings, title: 'Software Administration', desc: 'User access and system control.' },
    { icon: FlaskConical, title: 'Fixed Assets', desc: 'Asset records and business visibility.' },
    { icon: ShieldCheck, title: 'Authentication', desc: 'Access control and platform security.' },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold font-headline tracking-tighter uppercase mb-4">Core ERP Modules</h2>
        <p className="text-on-surface-variant font-label text-sm uppercase tracking-[0.2em] font-bold">The functional areas highlighted in the uploaded ERP content</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-slate-100 border border-slate-100">
        {modules.map((module, i) => (
          <div key={i} className="bg-white p-8 hover:bg-slate-50 transition-all group cursor-default">
            <module.icon className="text-on-surface-variant group-hover:text-secondary transition-colors mb-4 block" size={24} />
            <h4 className="font-label text-xs font-bold tracking-widest uppercase text-slate-900">{module.title}</h4>
            <p className="text-[10px] text-on-surface-variant mt-2 leading-tight font-body">{module.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ERPCTA = () => (
  <section className="px-6 py-24">
    <div className="max-w-4xl mx-auto bg-slate-900 text-white p-12 md:p-20 text-center relative overflow-hidden group">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter mb-8">Need an ERP tailored to your workflow?</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-body">
          Share your process, reporting and operational requirements and we will recommend the right ERP structure for your business.
        </p>
        <Link href="/contact" className="bg-secondary text-white px-10 py-5 font-headline font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all cursor-pointer">
          Book a Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default function ERPSolutions() {
  return (
    <div className="bg-white">
      <ERPHero />
      <ERPFeature />
      <ERPModules />
      <ERPCTA />
    </div>
  );
}
