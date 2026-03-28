/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  Zap,
  ShieldCheck,
  Gamepad2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import DigitalMarketing from './pages/DigitalMarketing';
import ERPSolutions from './pages/ERPSolutions';
import FAQ from './pages/FAQ';
import MobileApps from './pages/MobileApps';
import SaaSLeadGen from './pages/SaaSLeadGen';
import GameDevelopment from './pages/GameDevelopment';
import logo from './assets/logo.png';

const SITE_NAME = 'Internet Doctors';

const defaultMetadata = {
  title: 'Website Design, Web Development, Mobile Apps, Digital Marketing and ERP Solutions',
  description:
    'Internet Doctors provides website design, web development, mobile app development, digital marketing, ERP solutions and lead generation services for growing businesses.',
};

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Website Design, Web Development, Mobile Apps and Digital Marketing',
    description:
      'Internet Doctors helps businesses with website design, web development, mobile apps, digital marketing, ERP solutions and lead generation services.',
  },
  '/about': {
    title: 'About Internet Doctors',
    description:
      'Learn about Internet Doctors, a digital services company delivering website design, development, app solutions, marketing support and ERP software.',
  },
  '/services': {
    title: 'Website Design and Web Development Services',
    description:
      'Explore Internet Doctors services for website design, web development, eCommerce, CMS projects, digital marketing support and ERP implementation.',
  },
  '/digital-marketing': {
    title: 'Digital Marketing Services',
    description:
      'Internet Doctors offers SEO, PPC, email marketing, social media marketing and digital growth services designed to improve visibility, traffic and leads.',
  },
  '/erp-solutions': {
    title: 'Custom ERP Solutions',
    description:
      'Discover custom ERP solutions from Internet Doctors for sales, inventory, warehouse, finance, HR and business process management.',
  },
  '/mobile-apps': {
    title: 'Android and iOS App Development Services',
    description:
      'Internet Doctors builds Android and iOS mobile applications with consulting-led planning, prototyping, secure development and business-focused delivery.',
  },
  '/saas-lead-gen': {
    title: 'Lead Generation Services for Software and Digital Businesses',
    description:
      'Generate qualified leads for website design, web development, mobile app, SaaS and digital service businesses with Internet Doctors.',
  },
  '/game-development': {
    title: 'Game Development Services',
    description:
      'Internet Doctors provides engaging game development services for mobile, PC, and web platforms.',
  },
  '/case-studies': {
    title: 'Work and Capability Areas',
    description:
      'Review Internet Doctors capability areas across website development, mobile apps, digital marketing, lead generation and ERP business systems.',
  },
  '/faq': {
    title: 'FAQ',
    description:
      'Read common questions about Internet Doctors services including website design, web development, mobile apps, digital marketing and ERP solutions.',
  },
  '/contact': {
    title: 'Contact Internet Doctors',
    description:
      'Contact Internet Doctors to discuss your website, mobile app, digital marketing, ERP or lead generation requirements.',
  },
  '/careers': {
    title: 'Careers',
    description:
      'Explore career opportunities and skill areas at Internet Doctors across design, development, mobile apps, digital marketing and ERP delivery.',
  },
};

const Logo = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-14 h-14 flex items-center justify-center">
      {/* <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#1E3A5F" strokeWidth="6" />
        <rect x="38" y="30" width="6" height="40" fill="#1E3A5F" />
        <rect x="48" y="20" width="6" height="50" fill="#1E3A5F" />
        <rect x="58" y="10" width="6" height="60" fill="#1E3A5F" />
        <path
          d="M30 40 C 30 60, 60 80, 70 50 C 75 30, 50 20, 40 30"
          fill="none"
          stroke="#D64545"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg> */}
      <img src={logo} alt="ID" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />   
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-lg font-black tracking-tighter text-secondary font-headline">INTERNET</span>
      <span className="text-[10px] font-bold tracking-[0.3em] text-slate-600 font-label uppercase -mt-1">Doctors</span>
    </div>
  </div>
);

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  const services = [
    { title: 'Website Design', href: '/services', icon: Globe, desc: 'Creative, user-friendly, search-ready websites.' },
    { title: 'Mobile Apps', href: '/mobile-apps', icon: Smartphone, desc: 'Android and iOS app development services.' },
    { title: 'Digital Marketing', href: '/digital-marketing', icon: BarChart3, desc: 'SEO, PPC, email and social growth.' },
    { title: 'ERP Solutions', href: '/erp-solutions', icon: Database, desc: 'Custom business management systems.' },
    { title: 'Lead Generation', href: '/saas-lead-gen', icon: Zap, desc: 'Qualified leads for software and service brands.' },
    { title: 'Game Development', href: '/game-development', icon: Gamepad2, desc: 'Engaging mobile and web games.' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-900 active:opacity-80 active:scale-95 transition-all cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`font-bold font-headline transition-colors ${location.pathname === '/' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              Home
            </Link>
            <Link to="/about" className={`font-bold font-headline transition-colors ${location.pathname === '/about' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              About
            </Link>

            <div className="relative group" onMouseEnter={() => setIsMegaMenuOpen(true)} onMouseLeave={() => setIsMegaMenuOpen(false)}>
              <button className={`flex items-center gap-1 font-bold font-headline transition-colors cursor-pointer ${location.pathname.includes('services') || location.pathname.includes('apps') || location.pathname.includes('marketing') || location.pathname.includes('erp') || location.pathname.includes('saas') || location.pathname.includes('game') ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-20 pt-4 w-[600px]"
                  >
                    <div className="bg-white shadow-2xl border border-slate-100 p-8 grid grid-cols-2 gap-6 rounded-xl overflow-hidden">
                      <div className="col-span-2 mb-2">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-label">What We Build</h4>
                      </div>
                      {services.map((service, i) => (
                        <Link key={i} to={service.href} className="flex items-start gap-4 p-3 hover:bg-slate-50 transition-colors rounded-lg group">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-secondary group-hover:text-white transition-colors">
                            <service.icon size={20} />
                          </div>
                          <div>
                            <div className="font-bold font-headline text-slate-900 text-sm">{service.title}</div>
                            <div className="text-xs text-slate-400 mt-1">{service.desc}</div>
                          </div>
                        </Link>
                      ))}
                      <div className="col-span-2 mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                        <Link to="/services" className="text-xs font-bold text-secondary hover:underline">View All Services →</Link>
                        <span className="text-[10px] text-slate-300 font-label uppercase tracking-widest">Delhi NCR to worldwide</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/case-studies" className={`font-bold font-headline transition-colors ${location.pathname === '/case-studies' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              Work
            </Link>
            <Link to="/careers" className={`font-bold font-headline transition-colors ${location.pathname === '/careers' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              Careers
            </Link>
            <Link to="/contact" className={`font-bold font-headline transition-colors ${location.pathname === '/contact' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <Link to="/contact" className="hidden sm:flex bg-primary text-white px-5 py-2 text-sm font-bold font-headline hover:bg-secondary transition-all">
              Start Project
            </Link>
            <div className="md:hidden w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 ml-4">ID</div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo />
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-label mb-4">Main Navigation</h4>
                    <div className="space-y-4">
                      {navLinks.map((link, i) => (
                        <Link key={i} to={link.href} className={`block text-2xl font-black font-headline tracking-tight ${location.pathname === link.href ? 'text-secondary' : 'text-slate-900'}`}>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-label mb-4">Service Areas</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((service, i) => (
                        <Link key={i} to={service.href} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-secondary shadow-sm">
                            <service.icon size={20} />
                          </div>
                          <span className="font-bold font-headline text-slate-900">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100">
                <Link to="/contact" className="w-full flex justify-center bg-primary text-white py-4 font-bold font-headline hover:bg-secondary transition-all rounded-xl">
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 pt-20 pb-12 px-6 w-full border-t border-slate-800">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4 space-y-6">
          <Link to="/">
            <Logo className="scale-110 origin-left" />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-body">
            Internet Doctors delivers website design, web development, mobile apps, digital marketing, ERP software and lead generation support for growing businesses.
          </p>
          <div className="flex items-center gap-3 py-3 px-4 bg-slate-900/50 border border-slate-800 rounded-sm w-fit">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            <span className="text-[10px] font-bold font-label uppercase tracking-widest text-slate-300">Accepting new projects</span>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Home</Link></li>
              <li><Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors font-body">About</Link></li>
              <li><Link to="/careers" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Website Design</Link></li>
              <li><Link to="/mobile-apps" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Mobile Apps</Link></li>
              <li><Link to="/digital-marketing" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Digital Marketing</Link></li>
              <li><Link to="/erp-solutions" className="text-sm text-slate-400 hover:text-white transition-colors font-body">ERP Solutions</Link></li>
              <li><Link to="/saas-lead-gen" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Lead Generation</Link></li>
              <li><Link to="/game-development" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Game Development</Link></li>
            </ul>
          </div>

          <div className="space-y-6 col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Work & Capabilities</Link></li>
              <li><Link to="/faq" className="text-sm text-slate-400 hover:text-white transition-colors font-body">FAQ</Link></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] font-label text-slate-500 uppercase tracking-widest">
          © 2024 INTERNET DOCTORS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-slate-500 hover:text-secondary transition-colors"><Globe size={16} /></a>
          <a href="#" className="text-slate-500 hover:text-secondary transition-colors"><Zap size={16} /></a>
          <a href="#" className="text-slate-500 hover:text-secondary transition-colors"><ShieldCheck size={16} /></a>
        </div>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[pathname] ?? defaultMetadata;
    document.title = `${metadata.title} | ${SITE_NAME}`;

    let descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.content = metadata.description;
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <RouteMetadata />
      <div className="bg-white text-slate-900 font-body selection:bg-secondary/30 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/erp-solutions" element={<ERPSolutions />} />
              <Route path="/mobile-apps" element={<MobileApps />} />
              <Route path="/saas-lead-gen" element={<SaaSLeadGen />} />
              <Route path="/game-development" element={<GameDevelopment />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
