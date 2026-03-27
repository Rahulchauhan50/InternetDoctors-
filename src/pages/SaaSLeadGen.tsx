import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Target,
  Search,
  Mail,
  BarChart3,
} from 'lucide-react';
import { LeadPipelineVisual } from '../components/BusinessVisuals';

const SaaSLeadGenHero = () => (
  <section className="relative pt-40 pb-24 px-6 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Lead Generation Services</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold font-headline tracking-tight text-slate-900 leading-[1.1]">
          More relevant leads. <br />
          <span className="text-secondary">Better sales conversations.</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">
          The uploaded material focuses heavily on lead generation for software, web, mobile and digital service businesses. This page brings that message into one clear offer.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 font-label font-bold tracking-tight shadow-xl active:scale-95 transition-all cursor-pointer">
            Start Lead Generation Planning
          </Link>
          <Link to="/case-studies" className="bg-slate-100 text-slate-900 px-8 py-4 font-label font-bold tracking-tight active:scale-95 transition-all cursor-pointer">
            View Capability Areas
          </Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
        <div className="aspect-square bg-white rounded-sm shadow-2xl ghost-border p-6 relative z-10">
          <LeadPipelineVisual />
          <div className="absolute -bottom-6 -left-6 bg-secondary p-8 glass-card shadow-2xl">
            <span className="font-label text-2xl font-bold text-white block">Lead quality</span>
            <span className="font-label text-xs text-white/80 uppercase tracking-widest">Focused on relevant, potential buyers</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description }: any) => (
  <div className="bg-white p-8 ghost-border relative overflow-hidden group">
    <Icon className="text-secondary mb-5" size={28} />
    <h3 className="text-xl font-headline font-bold mb-3">{title}</h3>
    <p className="text-on-surface-variant text-sm font-body leading-relaxed">{description}</p>
  </div>
);

const SaaSLeadGen = () => {
  const services = [
    {
      icon: Target,
      title: 'Website designing lead generation',
      description: 'Campaigns that help businesses offering website design services get found when customers are actively looking for similar solutions.',
    },
    {
      icon: Search,
      title: 'Website development lead generation',
      description: 'SEO-led and community-supported strategies aimed at capturing relevant website development prospects and reducing wasted outreach.',
    },
    {
      icon: Mail,
      title: 'Mobile app and software leads',
      description: 'Inbound and outbound efforts that promote app development capabilities and keep businesses visible to potential clients across channels.',
    },
    {
      icon: BarChart3,
      title: 'SaaS and digital service growth',
      description: 'Lead generation tailored to software, SaaS and digital service businesses that want stronger pipelines and more qualified conversations.',
    },
  ];

  return (
    <div className="bg-white">
      <SaaSLeadGenHero />

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 lg:sticky lg:top-32">
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight">What makes these leads different?</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                The document content stresses a consistent theme: not all leads are useful. The real value comes from authentic, relevant and well-targeted opportunities that match the service being offered.
              </p>
              <div className="pt-4 border-l-4 border-secondary pl-6">
                <h4 className="font-headline font-bold text-xl mb-2">Lead generation principles</h4>
                <p className="text-on-surface-variant font-body">We focus on visibility, qualified traffic, better brand positioning, nurturing and long-term buyer relationships instead of broad, untargeted outreach.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <ServiceCard key={i} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight">Channels We Use</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body">The uploaded content mentions a wide mix of methods instead of depending on a single source.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 p-10 flex flex-col justify-between min-h-[400px] relative group overflow-hidden">
              <div className="relative z-10 space-y-4">
                <Target className="text-secondary" size={40} />
                <h3 className="text-3xl font-headline font-bold">SEO, content and website conversion</h3>
                <p className="max-w-md text-on-surface-variant font-body">Keyword targeting, content support, search visibility and better website funnels help convert visitors into prospects who are actually interested in your offer.</p>
              </div>
              <div className="mt-8 flex gap-4 relative z-10">
                <span className="px-3 py-1 bg-white ghost-border font-label text-[10px] font-bold tracking-widest uppercase">SEO</span>
                <span className="px-3 py-1 bg-white ghost-border font-label text-[10px] font-bold tracking-widest uppercase">Content marketing</span>
              </div>
            </div>
            <div className="bg-slate-900 p-10 flex flex-col justify-between text-white group">
              <div className="space-y-4">
                <Search className="text-secondary" size={40} />
                <h3 className="text-2xl font-headline font-bold">Outreach and visibility</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-body">Social media, email marketing, paid ads, online PR, networking and partnerships all appear in the uploaded lead generation material.</p>
              </div>
              <ul className="space-y-3 font-label text-xs tracking-wide text-secondary/80 pt-8">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary"></div> Social media</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary"></div> Email marketing</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary"></div> Paid ads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-headline font-extrabold text-slate-900 tracking-tight">Need a stronger lead pipeline?</h2>
            <p className="text-xl text-on-surface-variant font-light font-body">Share your service area, target audience and monthly goals so we can suggest the right lead generation mix.</p>
          </div>
          <div className="bg-white p-12 shadow-2xl ghost-border text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <BarChart3 size={180} />
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-2">
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary">Your Name</label>
                <input className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-secondary focus:ring-0 px-0 py-3 font-body" placeholder="Your name" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary">Company Website</label>
                <input className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-secondary focus:ring-0 px-0 py-3 font-body" placeholder="your-company.com" type="url" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary">What do you want more leads for?</label>
                <input className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-secondary focus:ring-0 px-0 py-3 font-body" placeholder="Website design, app development, SaaS, ERP, marketing, or another service" type="text" />
              </div>
              <div className="md:col-span-2 pt-8">
                <button className="w-full bg-slate-900 text-white py-5 font-headline font-extrabold text-lg tracking-tight hover:shadow-2xl transition-all cursor-pointer" type="submit">
                  REQUEST A LEAD GENERATION CONSULTATION
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSLeadGen;
