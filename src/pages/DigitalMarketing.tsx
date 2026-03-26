import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Rocket, 
  Share2, 
  Mail, 
  BarChart3, 
  Target, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  MousePointerClick
} from 'lucide-react';

const MarketingHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Clinical Analysis Phase</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Precision <span className="text-secondary">Marketing</span> Communications.
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          We don't just "advertise." We diagnose market inefficiencies and apply targeted digital interventions to maximize your fiscal health.
        </p>
      </motion.div>
    </div>
  </section>
);

const MarketingService = ({ icon: Icon, title, subtitle, description, stats, color }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-10 ghost-border relative overflow-hidden group h-full flex flex-col"
  >
    <div className={`absolute left-0 top-0 bottom-0 w-1 ${color}`}></div>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-secondary">
        <Icon size={24} />
      </div>
      <span className="font-label text-[10px] font-bold uppercase tracking-widest text-slate-400">{subtitle}</span>
    </div>
    <h3 className="text-2xl font-bold font-headline mb-4 group-hover:text-secondary transition-colors">{title}</h3>
    <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <div className="pt-6 border-t border-slate-100">
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold font-label text-secondary uppercase tracking-widest">{stats.label}</div>
        <div className="text-xl font-bold font-headline text-slate-900">{stats.value}</div>
      </div>
    </div>
  </motion.div>
);

const ROISection = () => (
  <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-8 uppercase">ROI-Based Diagnostics</h2>
          <p className="text-slate-400 text-lg font-body leading-relaxed mb-10">
            Our strategic planning is focused entirely on the bottom line. Every marketing dollar spent is tracked through our 'Precision Lens' framework to ensure maximum sales conversion.
          </p>
          <div className="space-y-8">
            {[
              { label: 'Sales Conversion Increase', value: 88, color: 'bg-secondary' },
              { label: 'Cost Per Acquisition Drop', value: 34, color: 'bg-on-tertiary-container' }
            ].map((bar, i) => (
              <div key={i}>
                <div className="flex justify-between font-label text-[10px] uppercase tracking-widest mb-3 text-slate-400">
                  <span>{bar.label}</span>
                  <span>{bar.value}%</span>
                </div>
                <div className="h-1 w-full bg-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className={`h-full ${bar.color} relative`}
                  >
                    <div className="absolute right-0 top-0 h-4 w-1 bg-white shadow-[0_0_10px_#06B6D4]"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-md p-8 ghost-border">
            <div className="font-label text-[10px] text-secondary uppercase tracking-[0.2em] mb-3">Strategy</div>
            <div className="text-2xl font-bold font-headline mb-4">ANALYSIS</div>
            <p className="text-xs text-slate-400 uppercase leading-relaxed">Pre-campaign market auditing and competitor benchmarking.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 ghost-border mt-8">
            <div className="font-label text-[10px] text-secondary uppercase tracking-[0.2em] mb-3">Execution</div>
            <div className="text-2xl font-bold font-headline mb-4">PRECISION</div>
            <p className="text-xs text-slate-400 uppercase leading-relaxed">High-fidelity content deployment and bid optimization.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function DigitalMarketing() {
  const services = [
    {
      icon: Search,
      subtitle: "Optimization Protocol",
      title: "Search Engine Optimization",
      description: " technical audit, semantic keyword mapping, and authority-building interventions to enhance systemic visibility.",
      stats: { label: "Avg. Visibility Lift", value: "+142%" },
      color: "bg-secondary"
    },
    {
      icon: MousePointerClick,
      subtitle: "Acquisition Protocol",
      title: "PPC & Bid Management",
      description: "High-velocity lead acquisition via surgical bidding strategies and real-time conversion monitoring across all high-impact networks.",
      stats: { label: "CPA Reduction", value: "-34%" },
      color: "bg-slate-900"
    },
    {
      icon: Share2,
      subtitle: "Resonance Protocol",
      title: "Social Media Marketing",
      description: "Brand communication strategies that synchronize with audience behavioral patterns across high-impact platforms.",
      stats: { label: "Engagement Yield", value: "+42%" },
      color: "bg-on-tertiary-container"
    },
    {
      icon: Mail,
      subtitle: "Retention Protocol",
      title: "Email Lifecycle Automation",
      description: "Trigger-based communication architectures that nurture leads from initial diagnosis to long-term loyalty.",
      stats: { label: "Open Rate Efficacy", value: "32.4%" },
      color: "bg-secondary"
    }
  ];

  return (
    <div className="bg-white">
      <MarketingHero />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <MarketingService key={i} {...service} />
            ))}
          </div>
        </div>
      </section>
      <ROISection />
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-8">Ready for a Digital Audit?</h2>
          <p className="text-on-surface-variant mb-12 font-body leading-relaxed">
            Get a full diagnostic report of your current online presence and a prescribed marketing plan for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-slate-900 text-white px-10 py-4 font-headline font-bold text-lg hover:bg-secondary transition-all cursor-pointer">
              Schedule Consultation
            </Link>
            <Link to="/case-studies" className="bg-slate-100 text-slate-900 px-10 py-4 font-headline font-bold text-lg hover:bg-slate-200 transition-all cursor-pointer">
              Download Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
