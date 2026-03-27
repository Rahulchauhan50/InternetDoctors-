import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Globe,
  BarChart3,
  Database,
  ShieldCheck,
  Code2,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { BusinessAreaVisual } from '../components/BusinessVisuals';

type ServiceVariant = 'website' | 'development' | 'commerce' | 'marketing' | 'erp';

const ServicesHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Our Services</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Practical <span className="text-secondary">digital services</span> for growing businesses.
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          We offer website design, web development, eCommerce support, mobile app development, digital marketing and ERP software implementation with a focus on usability, quality and business results.
        </p>
      </motion.div>
    </div>
  </section>
);

const ServiceDetail = ({ icon: Icon, title, subtitle, description, features, visual, href, reverse = false }: any) => (
  <section className={`py-24 ${reverse ? 'bg-surface-container-low' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={reverse ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary">
              <Icon size={24} />
            </div>
            <span className="font-label text-xs font-bold uppercase tracking-widest text-secondary">{subtitle}</span>
          </div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-6">{title}</h2>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-8">{description}</p>
          <ul className="space-y-4 mb-10">
            {features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <ShieldCheck className="text-secondary mt-1 shrink-0" size={18} />
                <span className="font-body text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="flex items-center gap-2 font-headline font-bold text-secondary hover:gap-4 transition-all group cursor-pointer">
            Discuss Your Requirement <ArrowRight size={20} />
          </Link>
          {href && (
            <Link to={href} className="inline-block mt-4 text-xs font-bold font-label uppercase tracking-widest text-slate-400 hover:text-secondary transition-colors">
              Learn more →
            </Link>
          )}
        </div>
        <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
          <div className="absolute -inset-4 bg-secondary/5 blur-2xl rounded-full"></div>
          <BusinessAreaVisual variant={visual} />
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-32 bg-slate-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-6">How We Deliver</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-body">Every service engagement starts with understanding the requirement and ends with a solution that is easier to use, manage and grow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 hidden md:block"></div>
        {[
          { step: '01', title: 'Assess', desc: 'Understand the requirement, audience, workflow and project objective.' },
          { step: '02', title: 'Plan', desc: 'Prepare the structure, content, design direction and technical approach.' },
          { step: '03', title: 'Build', desc: 'Design, develop, test and refine the product with client feedback.' },
          { step: '04', title: 'Improve', desc: 'Launch, support, optimize and expand as the business grows.' },
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
  const services: Array<{
    icon: typeof Globe;
    subtitle: string;
    title: string;
    description: string;
    features: string[];
    visual: ServiceVariant;
    href?: string;
    reverse?: boolean;
  }> = [
    {
      icon: Globe,
      subtitle: 'Website Designing',
      title: 'Professional website design services',
      description: 'We create websites through a blend of creative design, graphic support, content planning, technology selection and the right hosting and deployment setup.',
      features: [
        'Readable, user-friendly layouts',
        'Search-engine friendly structure',
        'Graphic design and presentation support',
        'Business websites and eCommerce builds',
      ],
      visual: 'website',
    },
    {
      icon: Code2,
      subtitle: 'Web Development',
      title: 'CMS, custom builds and web applications',
      description: 'Our web development work covers CMS-driven sites, static websites, web portals, eCommerce projects and broader web applications with frontend and backend support.',
      features: [
        'CMS for non-technical content management',
        'Frontend and backend development',
        'Fast loading and stable page delivery',
        'Support for portals, apps and commerce platforms',
      ],
      visual: 'development',
      reverse: true,
    },
    {
      icon: Layers,
      subtitle: 'eCommerce and Managed Content',
      title: 'Commerce-ready experiences that are easier to update',
      description: 'The uploaded documents highlight eCommerce delivery and CMS-based management as key strengths. We build systems that let teams publish, store and maintain content with less operational friction.',
      features: [
        'Collaborative publishing workflows',
        'Real-time updates for business teams',
        'Structured product and content management',
        'Balance of design, usability and technical support',
      ],
      visual: 'commerce',
    },
    {
      icon: BarChart3,
      subtitle: 'Online Marketing',
      title: 'Traffic, leads and brand visibility support',
      description: 'Alongside development services, we provide digital marketing campaigns that include SEO, PPC, social media, email marketing and other brand promotion activities.',
      features: [
        'SEO and paid search campaigns',
        'Email marketing and social media promotion',
        'Local business listing and digital consultancy',
        'Strategies built around ROI and sales growth',
      ],
      visual: 'marketing',
      reverse: true,
    },
    {
      icon: Database,
      subtitle: 'Business Software',
      title: 'Custom ERP systems for day-to-day operations',
      description: 'We design and implement ERP software that replaces manual work, organizes key modules and gives teams better visibility into business operations.',
      features: [
        'Made-to-order ERP suites',
        'Inventory, finance and HR workflows',
        'Warehouse, supply chain and sales modules',
        'Competitive custom implementation within budget',
      ],
      visual: 'erp',
      href: '/erp-solutions',
    },
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
