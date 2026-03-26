import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  Database, 
  Globe, 
  Smartphone, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

const FAQHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Information Protocol</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Clinical <span className="text-secondary">FAQs</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          A comprehensive repository of operational inquiries. Every response is verified for technical precision and clinical alignment.
        </p>
      </motion.div>
    </div>
  </section>
);

const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white ghost-border group mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <span className="font-label text-secondary font-bold text-xs opacity-50">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="font-bold text-slate-900 font-headline">{question}</h3>
        </div>
        <div className={`text-slate-400 group-hover:text-secondary transition-colors ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-16 pb-8 text-on-surface-variant leading-relaxed font-body text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('Web Systems');
  
  const categories = ['Web Systems', 'Mobile Apps', 'Marketing DNA', 'ERP Integration'];
  
  const faqs: Record<string, { q: string, a: string }[]> = {
    'Web Systems': [
      { q: 'What is the "Clinical Precision" development framework?', a: 'Our proprietary framework prioritizes millisecond-latency performance and semantic HTML structures. We treat every line of code as a surgical incision, ensuring zero technical debt and maximum diagnostic clarity.' },
      { q: 'How do you manage cross-browser patient portal stability?', a: 'We utilize automated regression testing across 40+ browser environments and legacy system emulators to ensure 99.9% interface stability regardless of the user endpoint.' },
      { q: 'Integration of HIPAA-compliant data layers?', a: 'All web systems are engineered with end-to-end encryption and audit-ready logging protocols, meeting or exceeding global healthcare data security standards.' }
    ],
    'Mobile Apps': [
      { q: 'Do you offer native or cross-platform development?', a: 'We specialize in high-performance React Native and Flutter solutions that provide native-feel fluidity with the efficiency of a unified codebase.' }
    ],
    'Marketing DNA': [
      { q: 'How do you measure ROI on digital marketing?', a: 'Every campaign is tracked through our Precision Lens attribution model, mapping every dollar spent directly to verified conversion events.' }
    ],
    'ERP Integration': [
      { q: 'Can you integrate with legacy medical record systems?', a: 'Yes, our ERP solutions are designed with robust middleware capabilities to bridge the gap between modern cloud infrastructure and legacy on-premise databases.' }
    ]
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-3">
            <div className="sticky top-32 space-y-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-3 transition-all font-bold font-label text-xs uppercase tracking-widest cursor-pointer ${
                    activeCategory === cat 
                    ? 'bg-white shadow-sm border-l-4 border-secondary text-secondary' 
                    : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="xl:col-span-9">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-headline text-2xl font-bold text-slate-900">{activeCategory}</h2>
              <div className="h-[1px] flex-1 bg-slate-100"></div>
            </div>
            <div className="space-y-4">
              {faqs[activeCategory]?.map((faq, i) => (
                <FAQItem key={i} index={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
              <div className="bg-slate-900 p-8 relative overflow-hidden group">
                <div className="relative z-10">
                  <Database className="text-secondary text-4xl mb-6" size={32} />
                  <h4 className="text-white font-headline text-xl font-bold mb-3">ERP Synchronicity</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-body">Questions regarding our backend medical records integration? Our technical specialists are available for consultation.</p>
                  <Link to="/erp-solutions" className="mt-6 text-secondary font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                    View Protocol <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <HelpCircle size={180} />
                </div>
              </div>
              <div className="bg-slate-50 p-8 border-l-4 border-on-tertiary-container">
                <h4 className="text-slate-900 font-headline text-xl font-bold mb-3">System Health</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-label uppercase text-slate-500 font-bold">API Response</span>
                    <span className="font-label text-xs font-bold text-on-tertiary-container">STABLE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-label uppercase text-slate-500 font-bold">Cloud Sync</span>
                    <span className="font-label text-xs font-bold text-on-tertiary-container">99.9%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                    <div className="bg-secondary w-full h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQCTA = () => (
  <section className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center ghost-border p-12">
      <h3 className="font-headline text-3xl font-black text-slate-900 mb-4">Patient Consultation Required?</h3>
      <p className="text-slate-500 mb-8 max-w-lg mx-auto font-body">If your specific technical query is not addressed in our repository, please initiate a direct specialist channel.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/contact" className="bg-secondary text-white px-8 py-4 font-bold tracking-tight hover:shadow-xl hover:shadow-secondary/20 transition-all cursor-pointer">
          Submit Support Ticket
        </Link>
        <Link to="/contact" className="border border-slate-200 px-8 py-4 font-bold tracking-tight hover:bg-slate-50 transition-all cursor-pointer">
          Live Technical Chat
        </Link>
      </div>
    </div>
  </section>
);

export default function FAQ() {
  return (
    <div className="bg-white">
      <FAQHero />
      <FAQSection />
      <FAQCTA />
    </div>
  );
}
