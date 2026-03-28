import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  BarChart3,
  Database,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Gamepad2,
} from 'lucide-react';
import { HeroWorkspaceVisual } from '../components/BusinessVisuals';

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
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Website, app and growth experts</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold font-headline tracking-tight text-slate-900 leading-[0.9] mb-8">
          Design.<br />Develop.<br /><span className="text-secondary">Grow.</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-body">
          Internet Doctors is a professional website designing company offering website design, web development, mobile application development, digital marketing and ERP solutions in Delhi NCR and across the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="bg-primary text-white px-8 py-4 font-headline font-bold text-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer text-center">
            Request a Consultation
          </Link>
          <Link to="/services" className="bg-slate-200 text-primary px-8 py-4 font-headline font-bold text-lg hover:bg-slate-300 transition-all active:scale-95 cursor-pointer text-center">
            Explore Services
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
          <HeroWorkspaceVisual />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl ghost-border max-w-[220px]">
            <div className="text-[10px] font-bold text-secondary font-label uppercase tracking-widest mb-2">Project focus</div>
            <div className="text-sm font-bold font-headline leading-snug">Creative design, the right technology and user-friendly delivery</div>
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
        <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-4">Built Around Business Growth</h2>
        <div className="h-1 w-20 bg-secondary"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Client reach', value: '100+', desc: 'Businesses supported through digital marketing and online growth services.', status: 'ACTIVE DELIVERY', color: 'bg-secondary' },
          { label: 'Platform coverage', value: 'Android + iOS', desc: 'Mobile solutions designed for both major app ecosystems.', status: 'MULTI PLATFORM', color: 'bg-on-tertiary-container' },
          { label: 'Delivery model', value: 'End-to-end', desc: 'Planning, design, development, deployment and ongoing improvement.', status: 'FULL SERVICE', color: 'bg-primary' },
        ].map((stat, i) => (
          <motion.div key={i} whileHover={{ y: -4 }} className="bg-white p-8 relative overflow-hidden ghost-border group transition-transform duration-300">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${stat.color} shadow-[0_0_15px_rgba(0,0,0,0.1)]`}></div>
            <div className="font-label text-sm text-on-surface-variant mb-4 tracking-tighter uppercase font-bold">{stat.label}</div>
            <div className="text-5xl font-bold font-label text-primary mb-2">{stat.value}</div>
            <p className="text-on-surface-variant font-body leading-snug">{stat.desc}</p>
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
          <h2 className="text-5xl font-extrabold font-headline tracking-tight mb-8 leading-[1.1]">Core Service Areas</h2>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-8">
            We combine creative design, content planning, strong development and marketing execution so businesses can launch better digital products and generate more opportunities online.
          </p>
          <div className="flex items-center gap-4 py-4 border-t border-slate-200/20">
            <ShieldCheck className="text-secondary" size={24} />
            <span className="text-sm font-bold font-label uppercase tracking-widest">Reliable, scalable and search-friendly delivery</span>
          </div>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200/20 ghost-border overflow-hidden">
          {[
            { icon: Globe, title: 'Website Design & Development', desc: 'Professional websites built with strong layouts, clean presentation and technology that supports long-term business use.', href: '/services' },
            { icon: Smartphone, title: 'Mobile App Development', desc: 'Consulting-led Android and iOS application development for startups, entrepreneurs and established businesses.', href: '/mobile-apps' },
            { icon: BarChart3, title: 'Digital Marketing', desc: 'SEO, PPC, email marketing, social media marketing and local business promotion designed to generate leads.', href: '/digital-marketing' },
            { icon: Database, title: 'ERP Solutions', desc: 'Custom ERP systems that simplify manual work, improve customer service and support business operations.', href: '/erp-solutions' },
            { icon: Gamepad2, title: 'Game Development', desc: 'Engaging interactive experiences built for multiple platforms including mobile, PC, and web.', href: '/game-development' },
          ].map((service, i) => (
            <Link key={i} to={service.href} className="bg-white p-10 hover:bg-slate-50 transition-colors group block">
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

const WhyChoose = () => (
  <section className="py-24 border-t border-slate-200/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
        <div className="max-w-xl">
          <div className="text-secondary font-label font-bold text-xs tracking-widest uppercase mb-4">Why Choose Internet Doctors</div>
          <h2 className="text-3xl font-bold font-headline leading-tight mb-6">
            A skilled team, open technology choices and a practical approach to business results.
          </h2>
          <p className="text-on-surface-variant font-body leading-relaxed">
            The uploaded content emphasizes reliable open-source software, experienced designers and developers, search-engine friendly practices and constant adoption of the latest tools and trends. That is the foundation of our delivery model.
          </p>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Creative design backed by planning and content management.',
            'Balanced customer service and technical programming skills.',
            'Collaborative work model with real-time updates and feedback.',
            'Competitive pricing for clients in India and worldwide.',
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 ghost-border">
              <CheckCircle2 className="text-secondary mb-4" size={22} />
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-12 opacity-70">
        {['Website Design', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'ERP Solutions', 'Game Development'].map((item, i) => (
          <div key={i} className="flex items-center gap-2 font-headline font-extrabold text-2xl tracking-tighter">
            {item.split(' ')[0]} <span className="text-secondary">{item.split(' ').slice(1).join(' ')}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter mb-8">Ready to build your next digital project?</h2>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
        Share your requirements for website design, development, app development, marketing or ERP software and our team will respond with the right approach.
      </p>
      <div className="flex justify-center">
        <Link to="/contact" className="bg-secondary text-white px-12 py-5 font-headline font-bold text-xl hover:bg-secondary/90 transition-all active:scale-95 flex items-center gap-3 cursor-pointer">
          Talk to the Team <ArrowRight size={24} />
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
      <WhyChoose />
      <CTA />
    </>
  );
}
