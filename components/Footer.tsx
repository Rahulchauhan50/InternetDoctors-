"use client";

import React from 'react';
import Link from 'next/link';
import { Globe, Zap, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => (
  <footer className="bg-slate-950 pt-20 pb-12 px-6 w-full border-t border-slate-800">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4 space-y-6">
          <Link href="/">
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
              <li><Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Home</Link></li>
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors font-body">About</Link></li>
              <li><Link href="/careers" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/website-design-and-development" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Website Design</Link></li>
              <li><Link href="/services/mobile-apps" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Mobile Apps</Link></li>
              <li><Link href="/services/digital-marketing" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Digital Marketing</Link></li>
              <li><Link href="/services/erp-solutions" className="text-sm text-slate-400 hover:text-white transition-colors font-body">ERP Solutions</Link></li>
              <li><Link href="/services/saas-lead-gen" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Lead Generation</Link></li>
              <li><Link href="/services/game-development" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Game Development</Link></li>
            </ul>
          </div>

          <div className="space-y-6 col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors font-body">Work & Capabilities</Link></li>
              <li><Link href="/faq" className="text-sm text-slate-400 hover:text-white transition-colors font-body">FAQ</Link></li>
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
