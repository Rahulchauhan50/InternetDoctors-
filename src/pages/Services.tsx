import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  BarChart3, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Search, 
  Code2, 
  Layers, 
  LineChart,
  ArrowRight
} from 'lucide-react';

const ServicesHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Treatment Protocols</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Clinical <span className="text-secondary">Digital Solutions.</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          We apply medical-grade precision to every digital challenge. From architectural surgery to performance optimization, our protocols are designed for maximum impact.
        </p>
      </motion.div>
    </div>
  </section>
);

const ServiceDetail = ({ icon: Icon, title, subtitle, description, features, image, href, reverse = false }: any) => (
  <section className={`py-24 ${reverse ? 'bg-surface-container-low' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className={reverse ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary">
              <Icon size={24} />
            </div>
            <span className="font-label text-xs font-bold uppercase tracking-widest text-secondary">{subtitle}</span>
          </div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-6">{title}</h2>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-8">
            {description}
          </p>
          <ul className="space-y-4 mb-10">
            {features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <ShieldCheck className="text-secondary mt-1 shrink-0" size={18} />
                <span className="font-body text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="flex items-center gap-2 font-headline font-bold text-secondary hover:gap-4 transition-all group cursor-pointer">
            Request Protocol Details <ArrowRight size={20} />
          </Link>
          {href && (
            <Link to={href} className="inline-block mt-4 text-xs font-bold font-label uppercase tracking-widest text-slate-400 hover:text-secondary transition-colors">
              View Detailed Case Studies & Specs →
            </Link>
          )}
        </div>
        <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
          <div className="absolute -inset-4 bg-secondary/5 blur-2xl rounded-full"></div>
          <img 
            src={image} 
            alt={title} 
            className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ghost-border"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-32 bg-slate-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-6">The Diagnostic Workflow</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-body">Our four-stage surgical approach ensures every project is delivered with clinical accuracy.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 hidden md:block"></div>
        {[
          { step: '01', title: 'Triage', desc: 'Initial assessment and identification of critical system failures.' },
          { step: '02', title: 'Diagnosis', desc: 'Deep-tissue data analysis and architectural mapping.' },
          { step: '03', title: 'Surgery', desc: 'Precision engineering and performance optimization.' },
          { step: '04', title: 'Recovery', desc: 'Post-op monitoring and continuous growth scaling.' }
        ].map((item, i) => (
          <div key={i} className="relative z-10 bg-slate-900 p-8 border border-slate-800 hover:border-secondary transition-colors group">
            <div className="text-5xl font-black font-headline text-slate-800 group-hover:text-secondary/20 transition-colors mb-6">{item.step}</div>
            <h3 className="text-xl font-bold font-headline mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400 font-body leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Services() {
  const services = [
    {
      icon: Globe,
      subtitle: "Web Protocol",
      title: "High-Performance Web Surgery",
      description: "We don't just build websites; we engineer high-stakes digital interventions. Our methodology is rooted in clinical precision, ensuring every pixel contributes to your growth.",
      features: [
        "Headless CMS Architectures",
        "Conversion Rate Optimization (CRO)",
        "Core Web Vitals Specialization",
        "E-commerce Performance Scaling"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpYuzheg0OyC1-dVAFFXsL3z36Jd5AZfN-AXb6908NlI9k8R3eKK6IFd5y7qahS51lAWtxz2wnpr2kuGMwJUrAwsSaywhJ9oPbGkke8YFARM8JjOwaVKK-Cqcs22HlrNmAyA-1mu87cHxMF8TPrNW_FQsFZa4scfNfPqaDg1_uWbu3p-8e4ucNFKkfB1TfmSGXtzCkzJy-zsrCfWtYt7GJ4UWC9IAK7m0cerodiMEQO7ShSAxgszMh6IxwrvoGD4xR0WUS1d5SjH0",
      href: "/services"
    },
    {
      icon: Smartphone,
      subtitle: "App Protocol",
      title: "Native-Feel Fluidity Engineering",
      description: "Mobile applications that function with the reliability of medical equipment. We focus on low-latency, high-availability architectures for iOS and Android.",
      features: [
        "Cross-Platform React Native / Flutter",
        "Real-time Data Synchronization",
        "Offline-First Architecture",
        "Biometric Security Integration"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxeMIJln30VSRim6fa5O4zUGVI3kPUs7dwK11P38qsvGITdyLLFZqHZsNY8O1UvksoOGo6ofLlB3e_-BCNcoK-wwDGnw87tgwDLpkwYgNPI5m6Y9btah2-8u1T5VE93h1yoxy2DjJIATZRJA52snMklsDvw96zSktuE566BOBLvO7valPfHh_fLh1hr_Vu4S8MFWcg-TCH06Vo5nV4YnLbO4g95SSipNeNCX0L0w53L5_f3TcdipIZsRVD3LxDpB9njxxxFVmchLI",
      href: "/mobile-apps",
      reverse: true
    },
    {
      icon: BarChart3,
      subtitle: "Marketing Protocol",
      title: "Algorithmic Growth Triage",
      description: "Data-driven customer acquisition through algorithmic precision. We diagnose your marketing funnel and eliminate inefficiencies that drain your budget.",
      features: [
        "Predictive Analytics & Modeling",
        "Multi-Channel Attribution",
        "Programmatic Ad Management",
        "SEO Structural Audits"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBACCPa_6YkSaW3ZUJ0kTUg11UWEjPY9dCcili41jGIyClAqEUYEgfX4Zvrx3PQLGyp2mryUV_flelV90n5X1xynUupQ0ImxrEfYqsWPp3zU1dFsgDsAL61_VspilWDg3ez3XtEpDvARkIsEN3-JK9ax3_M2ixKNPwenIzy5b2hy9Tm0zuYUmN5Q5BTjj1qqisnFmhpAsRfWEVvEOhPqQD50Z8ol7FzwJaYe_lYyP4IAjELenJPWkIJ_d1xNVTkhEtymUaF699Luug",
      href: "/digital-marketing"
    }
  ];

  return (
    <div className="bg-white">
      <ServicesHero />
      {services.map((service, i) => (
        <ServiceDetail key={i} {...service} />
      ))}
      <ProcessSection />
    </div>
  );
}
