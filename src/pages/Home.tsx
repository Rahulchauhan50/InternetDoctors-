import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  BarChart3, 
  ShieldCheck, 
  Cpu, 
  ArrowRight
} from 'lucide-react';

const Hero = () => (
  <section className="relative min-h-[800px] flex items-center overflow-hidden diagnostic-grid pt-16">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">System Online: v4.2.0</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold font-headline tracking-tight text-slate-900 leading-[0.9] mb-8">
          Diagnose.<br />Optimize.<br /><span className="text-secondary">Scale.</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-body">
          The full-service digital agency for high-growth tech companies. ROI-driven results for Web, App, and Lead Gen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="bg-primary text-white px-8 py-4 font-headline font-bold text-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer text-center">
            Get a Free Diagnosis
          </Link>
          <Link to="/case-studies" className="bg-slate-200 text-primary px-8 py-4 font-headline font-bold text-lg hover:bg-slate-300 transition-all active:scale-95 cursor-pointer text-center">
            Our Results
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative lg:h-[600px] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="relative w-full aspect-square max-w-lg">
          <img 
            alt="Digital Visualization" 
            className="w-full h-full object-cover ghost-border p-4 bg-white" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn4-bTbGmur69OPASbW924AiJveMVjBeYaL_VsCYR1nwwPKVLQso9KRfBoN80235sBXr_jb4S4zPROI14JXNHblZXga0J7PftT6xd7t9TJTWh8LWi-WZc_RFokAJ_vOO1JwnPDMmmZKubHUv-Jq5EXL7GQju_aP71O2n9rtbKMLuxIYHUfD9LqZfKjPIqJeMoqR-UEDUHoFpS1ba2yisZ3KwQT8bMJ9HQGBBrSksxCgzejgVPLV_fp5IwWerKe4KtzSMpRtYDvW4I"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl ghost-border max-w-[200px]">
            <div className="text-[10px] font-bold text-secondary font-label uppercase tracking-widest mb-2">Live Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></div>
              <span className="text-sm font-bold font-headline">Operations Optimal</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-4">Real-time Patient Updates</h2>
        <div className="h-1 w-20 bg-secondary"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Inbound Volume', value: '10.4k', desc: 'Leads Generated for SaaS Clients', status: 'VITAL_STABLE', color: 'bg-secondary' },
          { label: 'Conversion Efficacy', value: '24.2%', desc: 'Avg. Conversion Lift Post-Diagnosis', status: 'IMPROVED', color: 'bg-on-tertiary-container' },
          { label: 'Fiscal Impact', value: '$14.2M', desc: 'ROI Driven for Partners', status: 'SCALED', color: 'bg-primary' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -4 }}
            className="bg-white p-8 relative overflow-hidden ghost-border group transition-transform duration-300"
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${stat.color} shadow-[0_0_15px_rgba(0,0,0,0.1)]`}></div>
            <div className="font-label text-sm text-on-surface-variant mb-4 tracking-tighter uppercase font-bold">{stat.label}</div>
            <div className="text-5xl font-bold font-label text-primary mb-2">{stat.value}</div>
            <p className="text-on-surface-variant font-body leading-snug">{stat.desc} <span className="text-secondary font-semibold">(This Quarter)</span></p>
            <div className="mt-6 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-on-tertiary-container/10 text-on-tertiary-container text-[10px] font-bold rounded-sm">{stat.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-5xl font-extrabold font-headline tracking-tight mb-8 leading-[1.1]">Core Medical Protocols</h2>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-8">
            Our methodology is rooted in diagnostic precision. We don't just "build" — we solve architectural failures and optimize for maximum digital longevity.
          </p>
          <div className="flex items-center gap-4 py-4 border-t border-slate-200/20">
            <ShieldCheck className="text-secondary" size={24} />
            <span className="text-sm font-bold font-label uppercase tracking-widest">ISO 9001 Certified Strategy</span>
          </div>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200/20 ghost-border overflow-hidden">
          {[
            { id: 'web', icon: Globe, title: 'Web Design & Development', desc: 'Strategic Creative Design and E-commerce. Built for performance and conversion-first user pathways.', href: '/services' },
            { id: 'apps', icon: Smartphone, title: 'Mobile App Development', desc: 'High-performance iOS/Android with Low Latency architecture. Engineered for native-feel fluidity.', href: '/mobile-apps' },
            { id: 'marketing', icon: BarChart3, title: 'Digital Marketing', desc: '360-degree SEO & PPC. Data-driven customer acquisition through algorithmic precision.', href: '/digital-marketing' },
            { id: 'tech', icon: Cpu, title: 'Advanced Tech', desc: 'ERP, AI, AR, and VR Solutions. Integrating next-gen intelligence into legacy workflows.', href: '/erp-solutions' }
          ].map((service, i) => (
            <Link key={i} to={service.href} className="bg-white p-10 hover:bg-slate-50 transition-colors group block" id={service.id}>
              <service.icon className="text-secondary mb-6 block" size={40} />
              <h3 className="text-xl font-bold font-headline mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-24 border-t border-slate-200/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
        <div className="max-w-xl">
          <div className="text-secondary font-label font-bold text-xs tracking-widest uppercase mb-4">Patient Testimony</div>
          <blockquote className="text-3xl font-bold font-headline leading-tight italic">
            "Internet Doctors performed a complete overhaul of our digital infrastructure. Within three months, our site speed tripled and our customer acquisition cost dropped by 40%."
          </blockquote>
          <div className="mt-8">
            <div className="font-bold font-headline">Marcus Thorne</div>
            <div className="text-sm text-on-surface-variant font-label">CTO, NexaCore Systems</div>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-video ghost-border overflow-hidden">
          <img 
            alt="Modern Office" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBACCPa_6YkSaW3ZUJ0kTUg11UWEjPY9dCcili41jGIyClAqEUYEgfX4Zvrx3PQLGyp2mryUV_flelV90n5X1xynUupQ0ImxrEfYqsWPp3zU1dFsgDsAL61_VspilWDg3ez3XtEpDvARkIsEN3-JK9ax3_M2ixKNPwenIzy5b2hy9Tm0zuYUmN5Q5BTjj1qqisnFmhpAsRfWEVvEOhPqQD50Z8ol7FzwJaYe_lYyP4IAjELenJPWkIJ_d1xNVTkhEtymUaF699Luug"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-12 opacity-50 grayscale hover:opacity-100 transition-opacity">
        {['PHARMA DIGIT', 'CLOUD SURGEON', 'BIO METRIC', 'QUANTUM HEALTH', 'GENE SYS'].map((logo, i) => (
          <div key={i} className="flex items-center gap-2 font-headline font-extrabold text-2xl tracking-tighter">
            {logo.split(' ')[0]}<span className="text-secondary">{logo.split(' ')[1]}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter mb-8">Ready for Surgery?</h2>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
        Schedule a diagnostic consultation with our lead strategists to identify bottlenecks and scale your digital performance.
      </p>
      <div className="flex justify-center">
        <Link to="/contact" className="bg-secondary text-white px-12 py-5 font-headline font-bold text-xl hover:bg-secondary/90 transition-all active:scale-95 flex items-center gap-3 cursor-pointer">
          Schedule My Diagnosis <ArrowRight size={24} />
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Testimonial />
      <CTA />
    </>
  );
}
