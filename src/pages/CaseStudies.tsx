import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, BarChart3, Database } from 'lucide-react';
import { BusinessAreaVisual } from '../components/BusinessVisuals';

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
          The worksheet you uploaded lists a wide range of categories, references and industries. This page summarizes those capability areas instead of showing invented case studies.
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
      <Link to="/contact" className="flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
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
      description: 'The worksheet references projects and inspiration across real estate, eLearning, travel, health, security, eCommerce and B2B business websites.',
      color: 'text-secondary',
      visual: 'website',
      sectors: ['Real estate', 'Education'],
    },
    {
      icon: Smartphone,
      title: 'Mobile applications',
      description: 'The uploaded files include Android, iOS and React Native references covering content apps, utility apps, marketplace products and other custom builds.',
      color: 'text-slate-900',
      visual: 'mobile',
      sectors: ['Android', 'iOS'],
    },
    {
      icon: BarChart3,
      title: 'Marketing and lead generation',
      description: 'The core content focuses on SEO, PPC, social media, email marketing and targeted lead generation for website design, development, SaaS and digital businesses.',
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

      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold font-headline mb-8 tracking-tight">Need a solution in one of these areas?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-12 font-body">
            Share your project category and business goal, and we will recommend the most relevant service mix.
          </p>
          <Link to="/contact" className="bg-slate-900 text-white px-10 py-4 font-headline font-bold text-lg hover:bg-secondary transition-all cursor-pointer">
            Talk to Internet Doctors
          </Link>
        </div>
      </section>
    </div>
  );
}
