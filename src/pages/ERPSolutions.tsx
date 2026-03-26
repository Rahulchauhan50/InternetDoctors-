import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
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
  LayoutGrid
} from 'lucide-react';

const ERPHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Operational Health</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 leading-[0.95]">
            Hardened <br /> Infrastructure <br /> <span className="text-secondary">for Modern ERP</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed font-body">
            We engineer custom-made ERP suites that match your specific organizational DNA. Experience high-precision software systems designed for operational longevity.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 font-headline font-bold text-sm tracking-tight hover:shadow-xl transition-all active:scale-95 cursor-pointer">
              Initiate Diagnostic
            </Link>
            <Link to="/case-studies" className="bg-slate-100 text-slate-900 px-8 py-4 font-headline font-bold text-sm tracking-tight hover:bg-slate-200 transition-all active:scale-95 cursor-pointer">
              View Case Studies
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-square bg-slate-50 ghost-border overflow-hidden relative group">
            <img 
              className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:grayscale-0 transition-all duration-700" 
              alt="ERP Infrastructure Visualization" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb_NOgt1upBNDi-hRPsg2eNfV6yCUsxbl6ce0XE2vPcz6z5v83zN0lvRS6ySpfSUkKv7jGVw9TtaSbnDvuSvNOJUnBMzCk1wAhIIifzqIKCvRVdX1IHLfDOo8XN2djyuuqepj3b_uoqPzXNvmhsm5Vtr11S0NIBHr8fYpnWKbg3ZkBor4Xy0OCYPyZHCeO_53zh3tcXQSmJm7DaQu9hAT09VOgheM9fWKPX-Q0zR3RwEE3anSvwSEdqqR5EMOd3eyVZ990aot0fZ4"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 glass-card p-6 border-l-4 border-secondary">
              <div className="font-label text-xs font-bold text-secondary mb-1">SYSTEM UPTIME</div>
              <div className="font-label text-2xl font-bold text-slate-900 tracking-tight">99.9997%</div>
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
          <h3 className="text-3xl font-headline font-bold tracking-tight mb-4">Precision-Engineered <br /> Custom Suites</h3>
          <p className="text-on-surface-variant max-w-md leading-relaxed font-body">
            Replacing manual workflows with high-quality automated customer service engines. Our ERPs are not off-the-shelf; they are surgical interventions for your specific requirements.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between relative z-10">
          <div className="flex gap-8">
            <div className="text-center">
              <div className="font-label text-xl font-bold text-slate-900 tracking-tighter">0%</div>
              <div className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest font-bold">Manual Error</div>
            </div>
            <div className="text-center">
              <div className="font-label text-xl font-bold text-slate-900 tracking-tighter">4X</div>
              <div className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest font-bold">Efficiency</div>
            </div>
          </div>
          <ArrowRight className="text-secondary group-hover:translate-x-2 transition-transform" size={24} />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700">
          <img 
            className="w-full h-full object-cover" 
            alt="Technical Drawing" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtktJBGzCjpkbP63SXY9xIBiizXX2kKBLTM4fU9nalcDwB-K10kNnkRnUCz4DjlfbKisZiJpqDXdRLH2aHmLaWXk59XbVoQxW1MbN8rHvZUkxgvScd34FkiOKd6-xZRul_yRcYvlFh2962JysKPc_GjwcbfDoS7YVOE-aIQcjkkVhAOo7l3L4WDtZkrqo7a1_ZulVp2EWeHmwZhFmMlOWmLbmI0-SfuN9sDXd9x4FX7uKoQzyzWc16k4mxtCL_9RwwPb2MqWX362o"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="bg-white p-8 border-l-4 border-on-tertiary-container ghost-border flex flex-col">
        <Activity className="text-slate-900 mb-6" size={32} />
        <h3 className="text-xl font-headline font-bold mb-3 tracking-tight">Organizational Health</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-body">
          Real-time monitoring of every business organ. From cash flow to shelf life, we provide the ultimate diagnostic dashboard.
        </p>
        <div className="mt-auto bg-slate-50 p-4 rounded-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></div>
            <span className="font-label text-[10px] font-bold text-slate-900 tracking-widest uppercase">Live Status: Stable</span>
          </div>
          <div className="h-1 bg-slate-200 w-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '85%' }}
              transition={{ duration: 1.5 }}
              className="h-full bg-on-tertiary-container"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ERPModules = () => {
  const modules = [
    { icon: LayoutGrid, title: 'Sales', desc: 'Revenue tracking & funnel optimization.' },
    { icon: ShoppingCart, title: 'Purchase', desc: 'Vendor management & procurement.' },
    { icon: Database, title: 'Inventory', desc: 'Stock level precision & alerts.' },
    { icon: Warehouse, title: 'Warehouse', desc: 'Spatial logistics & storage health.' },
    { icon: Truck, title: 'Supply Chain', desc: 'End-to-end movement analytics.' },
    { icon: Wallet, title: 'Finance', desc: 'Tax, payroll & ledger integrity.' },
    { icon: Users, title: 'HR', desc: 'Human capital & talent retention.' },
    { icon: Settings, title: 'CRM', desc: 'Customer relationship surgery.' },
    { icon: FlaskConical, title: 'R&D', desc: 'Innovation pipeline tracking.' },
    { icon: ShieldCheck, title: 'Support', desc: 'Automated ticketing & response.' }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold font-headline tracking-tighter uppercase mb-4">Core Diagnostic Modules</h2>
        <p className="text-on-surface-variant font-label text-sm uppercase tracking-[0.2em] font-bold">The interconnected ecosystem of your enterprise</p>
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
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter mb-8">Ready to Cure <br /> Inoperational Waste?</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-body">
          Our implementation team is ready to perform a full system diagnostic of your current infrastructure.
        </p>
        <Link to="/contact" className="bg-secondary text-white px-10 py-5 font-headline font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all cursor-pointer">
          Book a Consultation
        </Link>
      </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-1000">
        <img 
          className="w-full h-full object-cover" 
          alt="Circuit Board" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVmj50dfB99khRRdTANzfZCTwFfdRC9eOQscpxzIdtCcBOW5WkfWcPFfGANmUrthxk4xgXTOw3z0S599rbVDH3dvdNVH8Jx6lixKmq0IH8wIkezR7Q2bzDop1TuQKE6fOCQ1S7x_FN-iuYxl_McfqyDHBTi0NV2AbBLVEXEC0iVzIn6btpLE6eMvQu9OeVxtIUnuBN2Nep7G7aLKsAhPWUpZOqWmjHpZkqk0BNuOoOVylrkLLDJVw8xJmzHqGucEIoZwxxompe9uA"
          referrerPolicy="no-referrer"
        />
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
