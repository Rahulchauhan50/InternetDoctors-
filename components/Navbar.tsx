"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  Zap,
  Gamepad2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Navbar = () => {
  const pathname = usePathname();
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
  }, [pathname]);

  const services = [
    { title: 'Website Design', href: '/services/website-design-and-development', icon: Globe, desc: 'Creative, user-friendly, search-ready websites.' },
    { title: 'Mobile Apps', href: '/services/mobile-apps', icon: Smartphone, desc: 'Android and iOS app development services.' },
    { title: 'Digital Marketing', href: '/services/digital-marketing', icon: BarChart3, desc: 'SEO, PPC, email and social growth.' },
    { title: 'ERP Solutions', href: '/services/erp-solutions', icon: Database, desc: 'Custom business management systems.' },
    { title: 'Lead Generation', href: '/services/saas-lead-gen', icon: Zap, desc: 'Qualified leads for software and service brands.' },
    { title: 'Game Development', href: '/services/game-development', icon: Gamepad2, desc: 'Engaging mobile and web games.' },
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
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`font-bold font-headline transition-colors ${pathname === '/' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              Home
            </Link>
            <Link href="/about" className={`font-bold font-headline transition-colors ${pathname === '/about' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              About
            </Link>

            <div className="relative group" onMouseEnter={() => setIsMegaMenuOpen(true)} onMouseLeave={() => setIsMegaMenuOpen(false)}>
              <button className={`flex items-center gap-1 font-bold font-headline transition-colors cursor-pointer ${(pathname || '').match(/services|apps|marketing|erp|saas|game/) ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
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
                        <Link key={i} href={service.href} className="flex items-start gap-4 p-3 hover:bg-slate-50 transition-colors rounded-lg group">
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
                        <Link href="/services" className="text-xs font-bold text-secondary hover:underline">View All Services →</Link>
                        <span className="text-[10px] text-slate-300 font-label uppercase tracking-widest">Delhi NCR to worldwide</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/case-studies" className={`font-bold font-headline transition-colors ${pathname === '/case-studies' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              Work
            </Link>
            <Link href="/careers" className={`font-bold font-headline transition-colors ${pathname === '/careers' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              Careers
            </Link>
            <Link href="/contact" className={`font-bold font-headline transition-colors ${pathname === '/contact' ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}>
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <Link href="/contact" className="hidden sm:flex bg-primary text-white px-5 py-2 text-sm font-bold font-headline hover:bg-secondary transition-all">
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
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
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
                        <Link key={i} href={link.href} className={`block text-2xl font-black font-headline tracking-tight ${pathname === link.href ? 'text-secondary' : 'text-slate-900'}`}>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-label mb-4">Service Areas</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((service, i) => (
                        <Link key={i} href={service.href} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
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
                <Link href="/contact" className="w-full flex justify-center bg-primary text-white py-4 font-bold font-headline hover:bg-secondary transition-all rounded-xl">
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
