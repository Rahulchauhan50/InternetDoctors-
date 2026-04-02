"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Globe, Smartphone, BarChart3, Database, ExternalLink } from 'lucide-react';
import { BusinessAreaVisual } from '../BusinessVisuals';
import { portfolioData, portfolioCategories, PortfolioCategory } from '../../content/portfolioData';

type CapabilityVariant = 'website' | 'mobile' | 'marketing' | 'erp';

const CaseStudiesHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6 mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Work & Capabilities</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Sectors, services and <span className="text-secondary">delivery areas.</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          Explore our comprehensive range of capabilities, live references, and industry projects from around the world.
        </p>
      </motion.div>
    </div>
  </section>
);

const CapabilityCard = ({ icon: Icon, title, description, sectors, color, visual }: any) => (
  <motion.div whileHover={{ y: -10 }} className="bg-white border border-slate-200 overflow-hidden group flex flex-col h-full">
    <div className="relative h-64 overflow-hidden">
      <BusinessAreaVisual variant={visual} />
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 px-3 py-2">
        <Icon size={16} className="text-secondary" />
        <span className={`text-[10px] font-bold uppercase tracking-widest font-label ${color}`}>{title}</span>
      </div>
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8 flex-grow">{description}</p>
      <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-y border-slate-100">
        {sectors.map((sector: string, i: number) => (
          <div key={i}>
            <div className="text-xs font-bold font-label text-slate-400 uppercase tracking-widest mb-1">Sector</div>
            <div className="text-sm font-bold font-headline text-secondary">{sector}</div>
          </div>
        ))}
      </div>
      <Link href="/contact" className="flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
        Discuss a similar project <ArrowRight size={16} />
      </Link>
    </div>
  </motion.div>
);

export default function CaseStudies() {
  const cards: Array<{
    icon: typeof Globe;
    title: string;
    description: string;
    color: string;
    visual: CapabilityVariant;
    sectors: string[];
  }> = [
    {
      icon: Globe,
      title: 'Website and web development',
      description: 'Our team builds modern, capable web projects ranging from high-traffic eCommerce storefronts to dynamic business portals and real estate platforms.',
      color: 'text-secondary',
      visual: 'website',
      sectors: ['Real estate', 'Education'],
    },
    {
      icon: Smartphone,
      title: 'Mobile applications',
      description: 'We develop robust Android, iOS and cross-platform React Native mobile applications equipped for content delivery, retail management, utilities and gaming.',
      color: 'text-slate-900',
      visual: 'mobile',
      sectors: ['Android', 'iOS'],
    },
    {
      icon: BarChart3,
      title: 'Marketing and lead generation',
      description: 'A full-spectrum digital marketing approach focusing on SEO, PPC, social media and qualified lead growth for software, medical, wellness and B2B sectors.',
      color: 'text-on-tertiary-container',
      visual: 'marketing',
      sectors: ['SEO', 'PPC'],
    },
    {
      icon: Database,
      title: 'ERP and business systems',
      description: 'ERP delivery centers on custom modules for sales, purchase, inventory, warehouse, finance, HR, authentication and software administration.',
      color: 'text-secondary',
      visual: 'erp',
      sectors: ['Sales', 'Finance'],
    },
  ];

  const PortfolioGallery = () => {
    const [activeTab, setActiveTab] = useState<PortfolioCategory | 'All'>('All');

    const filteredData = activeTab === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeTab);

    return (
      <section className="py-24 bg-surface-container-low border-t border-slate-200/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Work Directory</h2>
            <p className="text-on-surface-variant font-body mb-8">A comprehensive collection of our live projects, references and digital builds.</p>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('All')}
                className={`px-4 py-2 rounded-full font-label text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === 'All' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-500 hover:bg-slate-100 ghost-border'
                }`}
              >
                All Projects
              </button>
              {portfolioCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-label text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTab === cat.name ? 'bg-secondary text-white shadow-md' : 'bg-white text-slate-500 hover:bg-slate-100 ghost-border'
                  }`}
                >
                  <cat.icon size={14} />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredData.map((item, idx) => {
                const categoryConfig = portfolioCategories.find((c) => c.name === item.category);
                const Icon = categoryConfig?.icon || Globe;

                return (
                  <motion.a
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.url + idx}
                    className="bg-white p-6 rounded-2xl ghost-border hover:shadow-xl hover:-translate-y-1 hover:border-secondary transition-all group flex flex-col justify-between min-h-[160px]"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          <Icon size={18} />
                        </div>
                        <ExternalLink size={16} className="text-slate-300 group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </div>
                      <h3 className="font-headline font-bold text-slate-900 text-lg line-clamp-2 pr-4">{item.name}</h3>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="font-label text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.category}</span>
                    </div>
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-white">
      <CaseStudiesHero />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((item, i) => (
              <CapabilityCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      <PortfolioGallery />

      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold font-headline mb-8 tracking-tight">Need a solution in one of these areas?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-body">
            Share your project category and business goal, and we will recommend the most relevant service mix.
          </p>
          <Link href="/contact" className="bg-secondary text-white px-10 py-4 font-headline font-bold text-lg hover:shadow-lg hover:bg-secondary/90 transition-all cursor-pointer inline-flex">
            Talk to Internet Doctors
          </Link>
        </div>
      </section>
    </div>
  );
}
