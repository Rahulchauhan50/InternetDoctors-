import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Zap, Heart, ArrowRight, Star } from 'lucide-react';

const CareersHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Careers</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Join the <span className="text-secondary">Internet Doctors team.</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          We work across website design, development, mobile apps, digital marketing, ERP software and lead generation. If that mix matches your strengths, we would like to hear from you.
        </p>
      </motion.div>
    </div>
  </section>
);

const CultureSection = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: Zap, title: 'Fast-moving work', desc: 'Projects cover multiple industries and service lines, so the team stays close to both business needs and technical execution.' },
          { icon: Users, title: 'Collaborative delivery', desc: 'Designers, developers, marketers and consultants work together instead of handing work off in isolation.' },
          { icon: Heart, title: 'Learning mindset', desc: 'The uploaded company content emphasizes staying current with new techniques, tools and trends across the digital space.' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-10 ghost-border">
            <item.icon className="text-secondary mb-6" size={32} />
            <h3 className="text-xl font-bold font-headline mb-4">{item.title}</h3>
            <p className="text-on-surface-variant font-body leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const JobOpenings = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-4">Skill Areas We Hire For</h2>
          <p className="text-on-surface-variant font-body leading-relaxed">
            Instead of fixed placeholder openings, this page now reflects the real work categories present in your uploaded content. If your background fits one of these areas, send us your profile.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-xs font-bold font-label uppercase tracking-widest text-slate-500">
          <Star size={14} className="text-secondary fill-secondary" />
          <span>Multi-discipline delivery team</span>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { title: 'Website Designer', dept: 'Design', type: 'Creative + UI', location: 'Delhi NCR / Remote' },
          { title: 'Web Developer', dept: 'Development', type: 'Frontend / Backend', location: 'Remote Friendly' },
          { title: 'Mobile App Developer', dept: 'Engineering', type: 'Android / iOS', location: 'Remote Friendly' },
          { title: 'Digital Marketing Specialist', dept: 'Marketing', type: 'SEO / PPC / Social', location: 'Delhi NCR / Remote' },
          { title: 'ERP Software Engineer', dept: 'Business Systems', type: 'Custom Solutions', location: 'Project Based' },
        ].map((job, i) => (
          <motion.div key={i} whileHover={{ x: 10 }} className="group transition-all cursor-pointer bg-white">
            <Link to="/contact" className="flex flex-col md:flex-row items-center justify-between p-8 border border-slate-200 hover:border-secondary transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
                <div className="w-full md:w-1/3">
                  <h3 className="text-xl font-bold font-headline group-hover:text-secondary transition-colors">{job.title}</h3>
                  <span className="text-xs font-bold font-label uppercase tracking-widest text-slate-400">{job.dept}</span>
                </div>
                <div className="flex gap-8 text-sm font-body text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-slate-300" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-slate-300" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-secondary group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function Careers() {
  return (
    <div className="bg-white">
      <CareersHero />
      <CultureSection />
      <JobOpenings />
    </div>
  );
}
