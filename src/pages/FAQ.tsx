import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Plus, Minus, HelpCircle, Database, ArrowRight } from 'lucide-react';

const FAQHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Frequently Asked Questions</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-slate-900 mb-6">
          Common <span className="text-secondary">service questions</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          These answers are based on the website and service content you uploaded, covering design, development, mobile apps, digital marketing and ERP work.
        </p>
      </motion.div>
    </div>
  </section>
);

const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white ghost-border group mb-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors text-left">
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
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="px-16 pb-8 text-on-surface-variant leading-relaxed font-body text-sm">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('Website Design');

  const categories = ['Website Design', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'ERP Solutions'];

  const faqs: Record<string, { q: string; a: string }[]> = {
    'Website Design': [
      { q: 'What does your website design service include?', a: 'It combines creative design, graphic art, content planning and management, technology selection and a robust hosting and deployment approach.' },
      { q: 'Why is design so important for a business website?', a: 'Because a strong design attracts users, improves presentation, makes the website more readable and supports better business outcomes.' },
      { q: 'Do you build user-friendly and search-ready websites?', a: 'Yes. The uploaded company content specifically highlights user-friendly websites and search-engine optimized delivery.' },
    ],
    'Web Development': [
      { q: 'Do you work with CMS platforms?', a: 'Yes. CMS delivery is described as a major part of the service, helping non-technical users create, publish, store and maintain content.' },
      { q: 'What kinds of web projects do you handle?', a: 'Work ranges from static sites to complex web applications, web portals, eCommerce platforms and broader client-side and server-side development.' },
      { q: 'Why is development important after design?', a: 'Because development holds the website together, supports speed and stability, and enables design ideas to function correctly in production.' },
    ],
    'Mobile Apps': [
      { q: 'Do you build both Android and iOS apps?', a: 'Yes. The uploaded material covers both Android application development and iOS application development.' },
      { q: 'How do you start a mobile app project?', a: 'The process begins with collaboration on requirements, followed by a prototyping model to reduce latency and improve development speed.' },
      { q: 'What kind of app development approach do you follow?', a: 'A consulting-based approach with project managers, designers, technology consultants and software developers working together.' },
    ],
    'Digital Marketing': [
      { q: 'What marketing services do you provide?', a: 'SEO, digital marketing, email marketing, digital consultancy, PPC, paid search ads, branding, social media marketing and related online promotion support.' },
      { q: 'Why do businesses need digital marketing?', a: 'Because businesses of all sizes need visibility, traffic, leads and revenue growth from digital channels.' },
      { q: 'How do you approach strategy?', a: 'The uploaded content emphasizes ROI-based planning, strategy that adapts to changing algorithms and markets, and reaching the target market effectively.' },
    ],
    'ERP Solutions': [
      { q: 'What is the purpose of your ERP service?', a: 'To replace manual work, improve customer service and combine core business functions into a single system.' },
      { q: 'Can the ERP be customized?', a: 'Yes. The service description specifically highlights made-to-order ERP suites based on client requirements, timelines and budget.' },
      { q: 'Which modules can be included?', a: 'Examples listed in the uploaded content include sales, purchase, inventory, warehouse, supply chain, finance, HR, authentication, fixed assets and software administration.' },
    ],
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-3">
            <div className="sticky top-32 space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-3 transition-all font-bold font-label text-xs uppercase tracking-widest cursor-pointer ${
                    activeCategory === cat ? 'bg-white shadow-sm border-l-4 border-secondary text-secondary' : 'text-slate-400 hover:text-slate-600'
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
                  <h4 className="text-white font-headline text-xl font-bold mb-3">Need ERP clarification?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-body">If your questions are about modules, customization or business process mapping, the ERP page covers the main framework.</p>
                  <Link to="/erp-solutions" className="mt-6 text-secondary font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                    View ERP page <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <HelpCircle size={180} />
                </div>
              </div>
              <div className="bg-slate-50 p-8 border-l-4 border-on-tertiary-container">
                <h4 className="text-slate-900 font-headline text-xl font-bold mb-3">Need project advice?</h4>
                <div className="space-y-4">
                  <p className="text-sm text-on-surface-variant font-body">If your question is specific to your own business, the best next step is to send your project brief through the contact page.</p>
                  <Link to="/contact" className="inline-flex bg-secondary text-white px-6 py-3 font-bold tracking-tight hover:shadow-xl transition-all cursor-pointer">
                    Contact the Team
                  </Link>
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
      <h3 className="font-headline text-3xl font-black text-slate-900 mb-4">Need a direct discussion?</h3>
      <p className="text-slate-500 mb-8 max-w-lg mx-auto font-body">If your question is not covered here, send your requirement and we will respond with a more specific recommendation.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/contact" className="bg-secondary text-white px-8 py-4 font-bold tracking-tight hover:shadow-xl hover:shadow-secondary/20 transition-all cursor-pointer">
          Contact Internet Doctors
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
