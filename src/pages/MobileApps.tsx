import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  Layout, 
  Activity, 
  ArrowRight,
  MonitorSmartphone,
  CheckCircle2
} from 'lucide-react';

const MobileAppsHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 text-secondary font-label text-[10px] uppercase font-bold tracking-[0.2em] rounded-full">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Clinical Precision Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight leading-[0.9] text-slate-900">
            MOBILE APP<br /><span className="text-secondary">DEVELOPMENT</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">
            Avail world class services for iOS and Android app development. We engineer high-performance digital instruments designed for surgical accuracy in the mobile ecosystem.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 font-label text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-secondary/20 transition-all active:scale-95 cursor-pointer">
              Start Consultation
            </Link>
            <Link to="/case-studies" className="bg-slate-100 text-slate-900 px-8 py-4 font-label text-xs uppercase tracking-widest font-bold hover:bg-slate-200 transition-all active:scale-95 cursor-pointer">
              View Prototypes
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden ghost-border shadow-2xl relative group">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Mobile App Interface" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjPYYTZcl-NxRWU4CXAePqJxlbuNTF5xTIysjlM8ANIpiqGhgVaeT3AMvcgU_TgxkgQge6ofycrr3LZwso80BhsO-xsxvwUbjVwOHXcC1Ki9vXZwTtX4F3ftEaTg3hKKq5zXzzE_Ur60q_RzGU0or39Nw4cR0FMkXMucYoIDrZUKyZNDP5Pni1_wWTYnpWA7X4D4kJNFws0xWPlODC_bK1QOlC6K83cLObYwwkJqeMvtZFu2xNeWaZygSgUiUXQBfVb8t1pTROLx0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-6 ghost-border shadow-xl max-w-[200px]">
            <div className="font-label text-[10px] uppercase tracking-tighter text-secondary mb-2 font-bold">Protocol 01</div>
            <div className="font-headline font-bold text-sm leading-tight">Prototyping Model: Latency Minimization</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MobileApps = () => {
  return (
    <div className="bg-white">
      <MobileAppsHero />
      
      <section className="px-6 md:px-12 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold font-headline mb-4 uppercase tracking-tight">Accelerated Development Lifecycle</h2>
              <p className="text-on-surface-variant font-body">Our signature prototyping model is designed to minimize latency and increase speed-to-market without compromising structural integrity.</p>
            </div>
            <div className="font-label text-4xl font-bold text-slate-200 select-none">DATA_PULSE</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-8 relative overflow-hidden ghost-border group">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Rocket className="text-secondary mb-8" size={40} />
                <div>
                  <h3 className="font-headline font-bold text-xl mb-2">Rapid Prototyping</h3>
                  <p className="text-on-surface-variant text-sm max-w-md font-body">We deploy functional blueprints in record time, ensuring stakeholders can interact with core features before full-scale production begins.</p>
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity size={200} />
              </div>
            </div>
            <div className="bg-slate-900 text-white p-8 ghost-border">
              <ShieldCheck className="text-on-tertiary-container mb-8" size={40} />
              <h3 className="font-headline font-bold text-xl mb-2">Secure Core</h3>
              <p className="text-slate-400 text-sm font-body">Robust and secured applications engineered to withstand modern cyber threats across diverse platforms.</p>
            </div>
            <div className="bg-white p-8 ghost-border border-l-4 border-on-tertiary-container">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-secondary" size={24} />
                <span className="font-label text-xs font-bold uppercase tracking-widest">Android Application</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4">Fragmented Ecosystem Optimization</h3>
              <p className="text-on-surface-variant text-sm mb-6 font-body">Optimized for performance across thousands of device configurations using a consulting-based architectural approach.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-xs font-label uppercase font-medium">
                  <div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></div> 
                  Material You Integration
                </li>
                <li className="flex items-center gap-2 text-xs font-label uppercase font-medium">
                  <div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></div> 
                  Kotlin Coroutines Performance
                </li>
              </ul>
            </div>
            <div className="md:col-span-2 bg-white p-8 ghost-border flex flex-col md:flex-row gap-8 items-center border-l-4 border-secondary">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="text-secondary" size={24} />
                  <span className="font-label text-xs font-bold uppercase tracking-widest">iOS Application</span>
                </div>
                <h3 className="font-headline font-bold text-xl mb-4">Premium Performance Hierarchy</h3>
                <p className="text-on-surface-variant text-sm mb-6 font-body">Leveraging Swift to create seamless, buttery-smooth interactions that align with Apple's strict security and privacy standards.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50">
                    <div className="font-label text-lg font-bold text-secondary">99.9%</div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">Crash-Free Rate</div>
                  </div>
                  <div className="p-4 bg-slate-50">
                    <div className="font-label text-lg font-bold text-secondary">&lt;100ms</div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">Response Latency</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 h-48 bg-slate-100 rounded overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale transition-all hover:grayscale-0" 
                  alt="iOS UI Detail" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZqzIiZkiEZf0HOTy1CF2gYBx-F_x97cP2emOkYnz_LWWrvxhxbqxkFMEGUSMZzifvnq9OTZQa9eXEYedvZiIAmbsQFdXDSTgCfYDcYv64oEuvg3kPxadvlYhg17X6UN6lyvgim28rO9jP55fW4T4mn7rR-tGlKehE_TnrmAkxw7gQEI8AuxCFRrbx_bhJVfsXvLvVsVFvhzEa33Taom-sbIIhZygRx7y79ZcmreRRk-BBE2UBy4ghO8tF0IA3OB9OX-vfKqBdhiI"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label text-xs font-bold text-secondary tracking-[0.3em] uppercase block mb-4">The Methodology</span>
          <h2 className="text-4xl font-extrabold font-headline uppercase tracking-tighter mb-6">Consulting-First Engineering</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-100 ghost-border overflow-hidden">
          {[
            { num: '01', title: 'Diagnosis', desc: 'Deep dive into business requirements and technical constraints.' },
            { num: '02', title: 'Prescription', desc: 'Defining the optimal tech stack and security architecture.' },
            { num: '03', title: 'Operation', desc: 'Precision development with continuous integration and testing.' },
            { num: '04', title: 'Monitoring', desc: 'Post-launch vitals monitoring and performance optimization.' }
          ].map((step, i) => (
            <div key={i} className="bg-white p-10 group hover:bg-slate-50 transition-colors">
              <div className="font-label text-4xl text-slate-100 mb-6 group-hover:text-secondary/20 transition-colors font-bold">{step.num}</div>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest mb-4">{step.title}</h4>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobileApps;
