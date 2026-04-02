"use client";

import React from 'react';
import Image from 'next/image';

export const Logo = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-14 h-14 flex items-center justify-center">
      <Image src="/assets/logo.png" alt="ID" fill sizes="(max-width: 56px) 100vw, 56px" className="object-cover rounded-full" />   
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-lg font-black tracking-tighter text-secondary font-headline">INTERNET</span>
      <span className="text-[10px] font-bold tracking-[0.3em] text-slate-600 font-label uppercase -mt-1">Doctors</span>
    </div>
  </div>
);
