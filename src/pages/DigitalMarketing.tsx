import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Search,
  Share2,
  Mail,
  BarChart3,
  MousePointerClick,
} from 'lucide-react';

const MarketingHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Digital Marketing</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Marketing that brings <span className="text-secondary">traffic, leads and visibility</span>.
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          Internet Doctors provides SEO, PPC, email marketing, social media marketing, digital consultancy and related services for businesses that want measurable online growth.
        </p>
      </motion.div>
    </div>
  </section>
);

const MarketingService = ({ icon: Icon, title, subtitle, description, stats, color }: any) => (
  <motion.div whileHover={{ y: -5 }} className="bg-white p-10 ghost-border relative overflow-hidden group h-full flex flex-col">
    <div className={`absolute left-0 top-0 bottom-0 w-1 ${color}`}></div>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-secondary">
        <Icon size={24} />
      </div>
      <span className="font-label text-[10px] font-bold uppercase tracking-widest text-slate-400">{subtitle}</span>
    </div>
    <h3 className="text-2xl font-bold font-headline mb-4 group-hover:text-secondary transition-colors">{title}</h3>
    <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8 flex-grow">{description}</p>
    <div className="pt-6 border-t border-slate-100">
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold font-label text-secondary uppercase tracking-widest">{stats.label}</div>
        <div className="text-xl font-bold font-headline text-slate-900">{stats.value}</div>
      </div>
    </div>
  </motion.div>
);

const StrategySection = () => (
  <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-8 uppercase">Why digital marketing matters</h2>
          <p className="text-slate-400 text-lg font-body leading-relaxed mb-10">
            The uploaded content makes the case clearly: every large and small business needs digital marketing support. The goal is to reach the right market, drive qualified traffic and convert that traffic into sales.
          </p>
          <div className="space-y-8">
            {[
              { label: 'Marketing Coverage', value: 100, color: 'bg-secondary' },
              { label: 'Focus on ROI', value: 100, color: 'bg-on-tertiary-container' },
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
            <div className="text-2xl font-bold font-headline mb-4">PLANNING</div>
            <p className="text-xs text-slate-400 uppercase leading-relaxed">Brand strategy, market positioning and campaign planning.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 ghost-border mt-8">
            <div className="font-label text-[10px] text-secondary uppercase tracking-[0.2em] mb-3">Execution</div>
            <div className="text-2xl font-bold font-headline mb-4">DELIVERY</div>
            <p className="text-xs text-slate-400 uppercase leading-relaxed">Traffic generation, lead nurturing and conversion-focused optimization.</p>
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
      subtitle: 'Search Visibility',
      title: 'SEO Services',
      description: 'Search-engine optimization designed to help businesses get found, improve organic visibility and attract relevant prospects.',
      stats: { label: 'Goal', value: 'Better ranking' },
      color: 'bg-secondary',
    },
    {
      icon: MousePointerClick,
      subtitle: 'Paid Growth',
      title: 'PPC and Paid Search Ads',
      description: 'Pay-per-click services, paid search ads and campaign management focused on targeted traffic and measurable lead generation.',
      stats: { label: 'Goal', value: 'Qualified leads' },
      color: 'bg-slate-900',
    },
    {
      icon: Share2,
      subtitle: 'Social Reach',
      title: 'Social Media Marketing',
      description: 'Campaigns that increase brand visibility on social platforms and help businesses engage audiences more consistently.',
      stats: { label: 'Goal', value: 'Brand visibility' },
      color: 'bg-on-tertiary-container',
    },
    {
      icon: Mail,
      subtitle: 'Retention',
      title: 'Email Marketing',
      description: 'Email campaigns and communication flows that support promotions, nurture leads and keep customers engaged.',
      stats: { label: 'Goal', value: 'Repeat engagement' },
      color: 'bg-secondary',
    },
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
      <StrategySection />
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-8">360 digital marketing support</h2>
          <p className="text-on-surface-variant mb-12 font-body leading-relaxed">
            We help businesses with SEO, PPC, email, social media, local listings, strategy planning and ROI-focused campaign execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-slate-900 text-white px-10 py-4 font-headline font-bold text-lg hover:bg-secondary transition-all cursor-pointer">
              Start Marketing Consultation
            </Link>
            <Link to="/case-studies" className="bg-slate-100 text-slate-900 px-10 py-4 font-headline font-bold text-lg hover:bg-slate-200 transition-all cursor-pointer">
              View Work Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
