import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Activity, Zap, BarChart3 } from 'lucide-react';

const CaseStudiesHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6 mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Clinical Outcomes</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Proven <span className="text-secondary">Results.</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          Explore our portfolio of successful digital interventions. We deliver measurable growth for high-performance tech companies.
        </p>
      </motion.div>
    </div>
  </section>
);

const CaseStudyCard = ({ title, category, description, stats, image, color }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white border border-slate-200 overflow-hidden group flex flex-col h-full"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 ${color} text-white text-[10px] font-bold uppercase tracking-widest font-label`}>
          {category}
        </span>
      </div>
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <h3 className="text-2xl font-bold font-headline mb-4 group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-y border-slate-100">
        {stats.map((stat: any, i: number) => (
          <div key={i}>
            <div className="text-xs font-bold font-label text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-xl font-bold font-headline text-secondary">{stat.value}</div>
          </div>
        ))}
      </div>
      <Link to="/contact" className="flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
        View Full Report <ArrowRight size={16} />
      </Link>
    </div>
  </motion.div>
);

export default function CaseStudies() {
  const cases = [
    {
      title: "NexaCore Infrastructure Overhaul",
      category: "Performance",
      description: "A complete diagnostic and surgical intervention for a global SaaS platform facing critical latency issues during peak traffic.",
      color: "bg-secondary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBACCPa_6YkSaW3ZUJ0kTUg11UWEjPY9dCcili41jGIyClAqEUYEgfX4Zvrx3PQLGyp2mryUV_flelV90n5X1xynUupQ0ImxrEfYqsWPp3zU1dFsgDsAL61_VspilWDg3ez3XtEpDvARkIsEN3-JK9ax3_M2ixKNPwenIzy5b2hy9Tm0zuYUmN5Q5BTjj1qqisnFmhpAsRfWEVvEOhPqQD50Z8ol7FzwJaYe_lYyP4IAjELenJPWkIJ_d1xNVTkhEtymUaF699Luug",
      stats: [
        { label: "Site Speed", value: "+300%" },
        { label: "Server Cost", value: "-45%" }
      ]
    },
    {
      title: "BioMetric App Ecosystem",
      category: "Development",
      description: "Engineering a native-feel mobile experience for a health-tech startup requiring real-time biometric data synchronization.",
      color: "bg-slate-900",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxeMIJln30VSRim6fa5O4zUGVI3kPUs7dwK11P38qsvGITdyLLFZqHZsNY8O1UvksoOGo6ofLlB3e_-BCNcoK-wwDGnw87tgwDLpkwYgNPI5m6Y9btah2-8u1T5VE93h1yoxy2DjJIATZRJA52snMklsDvw96zSktuE566BOBLvO7valPfHh_fLh1hr_Vu4S8MFWcg-TCH06Vo5nV4YnLbO4g95SSipNeNCX0L0w53L5_f3TcdipIZsRVD3LxDpB9njxxxFVmchLI",
      stats: [
        { label: "User Retention", value: "+60%" },
        { label: "App Rating", value: "4.9/5" }
      ]
    },
    {
      title: "Quantum Health Growth Triage",
      category: "Marketing",
      description: "Algorithmic marketing strategy that identified and eliminated budget leaks while scaling customer acquisition across 12 markets.",
      color: "bg-on-tertiary-container",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpYuzheg0OyC1-dVAFFXsL3z36Jd5AZfN-AXb6908NlI9k8R3eKK6IFd5y7qahS51lAWtxz2wnpr2kuGMwJUrAwsSaywhJ9oPbGkke8YFARM8JjOwaVKK-Cqcs22HlrNmAyA-1mu87cHxMF8TPrNW_FQsFZa4scfNfPqaDg1_uWbu3p-8e4ucNFKkfB1TfmSGXtzCkzJy-zsrCfWtYt7GJ4UWC9IAK7m0cerodiMEQO7ShSAxgszMh6IxwrvoGD4xR0WUS1d5SjH0",
      stats: [
        { label: "CPA Reduction", value: "-40%" },
        { label: "Revenue Lift", value: "2.4x" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <CaseStudiesHero />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <CaseStudyCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold font-headline mb-8 tracking-tight">Ready for your own diagnosis?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-12 font-body">
            Every success story starts with a clinical intake. Let's analyze your current performance and build a recovery plan.
          </p>
          <Link to="/contact" className="bg-slate-900 text-white px-10 py-4 font-headline font-bold text-lg hover:bg-secondary transition-all cursor-pointer">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
