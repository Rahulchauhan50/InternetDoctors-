import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingDown, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Search, 
  MousePointerClick,
  BarChart3,
  ArrowRight,
  Stethoscope
} from 'lucide-react';

const SaaSLeadGenHero = () => (
  <section className="relative pt-40 pb-24 px-6 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">SaaS Lead Protocol v2.4</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold font-headline tracking-tight text-slate-900 leading-[1.1]">
          Low Churn. <br />
          <span className="text-secondary">High Lead Volume.</span> <br />
          Precise SaaS ROI.
        </h1>
        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">
          Our lead gen protocol is engineered for SaaS. Lower your CAC and scale your user base with data-driven PPC and SEO.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 font-label font-bold tracking-tight shadow-xl active:scale-95 transition-all cursor-pointer">
            Start Your SaaS Diagnosis
          </Link>
          <Link to="/case-studies" className="bg-slate-100 text-slate-900 px-8 py-4 font-label font-bold tracking-tight active:scale-95 transition-all cursor-pointer">
            View Methodology
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 relative"
      >
        <div className="aspect-square bg-white rounded-sm shadow-2xl ghost-border p-6 relative z-10">
          <img 
            alt="Diagnostic Dashboard" 
            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3iMemVrC4S92R0YqkrpnHXasjZulttr2rLEv6TXheVPvo4ELoeTIGPSXlJTDXfe66M9KW8ziWhNWLKpqN41LPbBdzLCygQayufomAAP2aY9gtoIW97vT15eNrHo3D4Ih7pEdudHjF0hg3A3rfWuzQ8AGmvHPGqsDV_98JS9yA4vaqTwvNukvVuK6YYcuJ45wcSqodQiwRrAuyo0QgXkGfgAcW7Ek1Feas6nATTerowgd461GHOEOYqxljOO4lQyLTMALaSMKnD1U"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-secondary p-8 glass-card shadow-2xl">
            <span className="font-label text-4xl font-bold text-white block">42%</span>
            <span className="font-label text-xs text-white/80 uppercase tracking-widest">Avg. CAC Reduction</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SymptomCard = ({ icon: Icon, title, description, symptomNum, color }: any) => (
  <div className="bg-white p-8 ghost-border relative overflow-hidden group">
    <div className={`absolute left-0 top-0 h-full w-1 ${color}`}></div>
    <span className={`font-label text-xs font-bold ${color.replace('bg-', 'text-')} tracking-widest uppercase mb-4 block`}>Symptom {symptomNum}</span>
    <h3 className="text-xl font-headline font-bold mb-3">{title}</h3>
    <p className="text-on-surface-variant text-sm font-body leading-relaxed">{description}</p>
  </div>
);

const SaaSLeadGen = () => {
  const symptoms = [
    {
      symptomNum: "01",
      title: "Stagnant Trial Velocity",
      description: "Traffic is arriving, but your sign-up rate hasn't budged in quarters. Your messaging isn't resonating with the technical buyer.",
      color: "bg-secondary"
    },
    {
      symptomNum: "02",
      title: "Unsustainable CAC",
      description: "Customer Acquisition Costs are eating your LTV. Paid search is a bidding war that you're currently losing.",
      color: "bg-error"
    },
    {
      symptomNum: "03",
      title: "Poor User Quality",
      description: "You're getting leads, but they're churn-prone or outside your Ideal Customer Profile (ICP).",
      color: "bg-on-tertiary-container"
    }
  ];

  return (
    <div className="bg-white">
      <SaaSLeadGenHero />
      
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 lg:sticky lg:top-32">
              <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight">Is your SaaS growth plateauing?</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                Most SaaS founders struggle with the "Growth Trap"—spending more on marketing while seeing diminishing returns on trial-to-paid conversions.
              </p>
              <div className="pt-4 border-l-4 border-secondary pl-6">
                <h4 className="font-headline font-bold text-xl mb-2">The SaaS Health Check</h4>
                <p className="text-on-surface-variant font-body">Our diagnostic methodology identifies leaks in your funnel before we spend a single dollar on traffic. We don't just find leads; we find high-intent users ready to convert.</p>
              </div>
            </div>
            <div className="space-y-4">
              {symptoms.map((s, i) => (
                <SymptomCard key={i} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-headline font-bold text-slate-900 tracking-tight">The SaaS Growth Instrument</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body">Precision-targeted services designed to integrate directly with your SaaS revenue model.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 p-10 flex flex-col justify-between min-h-[400px] relative group overflow-hidden">
              <div className="relative z-10 space-y-4">
                <Target className="text-secondary" size={40} />
                <h3 className="text-3xl font-headline font-bold">Targeted LinkedIn & Google Ads</h3>
                <p className="max-w-md text-on-surface-variant font-body">We bypass the generic noise to reach decision-makers in DevOps, FinTech, and Enterprise HR. Precision bidding meets technical copywriting.</p>
              </div>
              <div className="mt-8 flex gap-4 relative z-10">
                <span className="px-3 py-1 bg-white ghost-border font-label text-[10px] font-bold tracking-widest uppercase">PPC Protocol</span>
                <span className="px-3 py-1 bg-white ghost-border font-label text-[10px] font-bold tracking-widest uppercase">ICP Matching</span>
              </div>
              <img 
                className="absolute top-0 right-0 w-1/2 h-full object-cover mix-blend-multiply opacity-10 grayscale group-hover:scale-110 transition-transform duration-1000" 
                alt="Digital Connections" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEMA_RqU6-afkYFMy5K-AuibwT9efSxTFQowPJEULEm4iJf2kkvJYkXtfh3JdxMRMEvTSDfzhPvcxnf3W5lnktyXCEhj3-HyK0rPJmOqeL6q3M34_XbC7LxX15Bi6x3uu1gAiTilw55pU9q2cskkGSUGF_fed2ngncytBGmlS78r236-4I1bXnhUY4NdkqP1GZJqZYEbKC_IXzky8AoR2aEHyK3vl86knCssN5XLYXu4fBgNosz2S2JdkF5yTu7AOuCRE6wj9w5BY"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-slate-900 p-10 flex flex-col justify-between text-white group">
              <div className="space-y-4">
                <Search className="text-secondary" size={40} />
                <h3 className="text-2xl font-headline font-bold">Technical SEO for SaaS</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-body">Dominating the 'High Intent' long-tail keywords your competitors are ignoring.</p>
              </div>
              <ul className="space-y-3 font-label text-xs tracking-wide text-secondary/80 pt-8">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary"></div> ARCHITECTURAL AUDITS</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary"></div> COMPETITOR GAP ANALYSIS</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary"></div> PROGRAMMATIC SEO</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <h2 className="text-4xl font-headline font-extrabold tracking-tight">Clinical Evidence of <span className="text-secondary">Growth</span>.</h2>
            <p className="text-slate-400 font-label uppercase tracking-widest text-sm md:text-right">Laboratory Verified Results 2024</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="p-16 border border-white/10 space-y-8 group hover:bg-white/5 transition-colors">
              <div className="space-y-2">
                <span className="font-label text-7xl font-extrabold text-secondary">84%</span>
                <h3 className="text-2xl font-headline font-bold">Increase in MQLs</h3>
                <p className="text-slate-400 font-body">For Cloud Services Partner</p>
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm font-body">
                By restructuring their Google Ads account around "Intent Clusters," we scaled their SQL pipeline by 3.4x in 90 days.
              </p>
            </div>
            <div className="p-16 border border-white/10 space-y-8 group hover:bg-white/5 transition-colors">
              <div className="space-y-2">
                <span className="font-label text-7xl font-extrabold text-on-tertiary-container">42%</span>
                <h3 className="text-2xl font-headline font-bold">Reduction in CAC</h3>
                <p className="text-slate-400 font-body">For FinTech SaaS</p>
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm font-body">
                Implementing a hyper-segmented LinkedIn strategy reduced wasted spend by $12k/month while increasing trial quality scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-headline font-extrabold text-slate-900 tracking-tight">Ready to scale?</h2>
            <p className="text-xl text-on-surface-variant font-light font-body">Let's prescribe a growth plan tailored to your specific SaaS architecture.</p>
          </div>
          <div className="bg-white p-12 shadow-2xl ghost-border text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Stethoscope size={180} />
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-2">
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary">Founder Name</label>
                <input className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-secondary focus:ring-0 px-0 py-3 font-body" placeholder="Dr. John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary">Company URL</label>
                <input className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-secondary focus:ring-0 px-0 py-3 font-body" placeholder="your-saas.io" type="url" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary">Current Monthly Spend</label>
                <input className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-secondary focus:ring-0 px-0 py-3 font-body" placeholder="e.g. $5,000 - $10,000" type="text" />
              </div>
              <div className="md:col-span-2 pt-8">
                <button className="w-full bg-slate-900 text-white py-5 font-headline font-extrabold text-lg tracking-tight hover:shadow-2xl transition-all cursor-pointer" type="submit">
                  REQUEST PROTOCOL DIAGNOSIS
                </button>
                <p className="text-center text-[10px] font-label text-on-surface-variant mt-6 uppercase tracking-widest">Initial Consultation is complimentary for Series A+ or $1M+ ARR founders</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSLeadGen;
