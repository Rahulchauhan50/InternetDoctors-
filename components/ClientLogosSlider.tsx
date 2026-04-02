"use client";

import React, { useEffect, useRef } from 'react';

const logos: string[] = [
  "/assets/clientlogos/akshartours 1.png",
  "/assets/clientlogos/astm 1.png",
  "/assets/clientlogos/bayt 1.png",
  "/assets/clientlogos/bodycraft 1.png",
  "/assets/clientlogos/childrensmn 1.png",
  "/assets/clientlogos/confluencehealth 1.png",
  "/assets/clientlogos/dciinc 1.png",
  "/assets/clientlogos/destaco 1.png",
  "/assets/clientlogos/fairview 1.png",
  "/assets/clientlogos/gpstrategies 1.png",
  "/assets/clientlogos/hanger 1.png",
  "/assets/clientlogos/healthpartners 1.png",
  "/assets/clientlogos/hollisterco 1.png",
  "/assets/clientlogos/honeywell 1.png",
  "/assets/clientlogos/ioactive 1.png",
  "/assets/clientlogos/jiva 1.png",
  "/assets/clientlogos/joyalukkas 1.png",
  "/assets/clientlogos/logo 1.png",
  "/assets/clientlogos/medschool 1.png",
  "/assets/clientlogos/padi 1.png",
  "/assets/clientlogos/prosegur 1.png",
  "/assets/clientlogos/rsa 1.png",
  "/assets/clientlogos/sequretek 1.png",
  "/assets/clientlogos/shroffeyecentre 1.png",
  "/assets/clientlogos/tourdeals 1.png",
  "/assets/clientlogos/traveliaholidays 1.png",
  "/assets/clientlogos/unmade-black 1.png",
  "/assets/clientlogos/wayground 1.png",
  "/assets/clientlogos/zipgrow 1.png"
];

export function ClientLogosSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<number>(0);
  
  // Track dragging state
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    let animationId: number;
    
    const scroll = () => {
      if (!scrollRef.current) return;

      // Auto-scroll continuously unless actively being dragged
      if (!isDown.current) {
        positionRef.current += 0.5; // Speed of the auto-scroll
        
        // Loop back seamlessly
        if (positionRef.current >= scrollRef.current.scrollWidth / 2) {
          positionRef.current -= scrollRef.current.scrollWidth / 2;
        }
        
        scrollRef.current.scrollLeft = positionRef.current;
      } else {
        // Keep the position tracker synced when the user manually drags
        positionRef.current = scrollRef.current.scrollLeft;
      }
      
      animationId = window.requestAnimationFrame(scroll);
    };
    
    animationId = window.requestAnimationFrame(scroll);
    
    return () => window.cancelAnimationFrame(animationId);
  }, []);

  if (logos.length === 0) return null;

  // Duplicate the array so there is no dead space during the loop
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current!.offsetLeft;
    scrollLeft.current = scrollRef.current!.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag sensitivity multiplier
    scrollRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="w-full py-16 bg-slate-900 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="font-label text-sm text-slate-400 font-bold uppercase tracking-[0.2em] mb-2">
          Trusted by growing businesses and established brands
        </h3>
        <p className="text-xs text-slate-500 font-body">Drag to explore</p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Edge Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        <div
          ref={scrollRef}
          // Do NOT put scroll-smooth back in here
          className="flex whitespace-nowrap overflow-x-hidden cursor-grab active:cursor-grabbing pb-8"
          style={{ width: "100%", WebkitOverflowScrolling: "touch" }}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {repeatedLogos.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center pl-12 md:pl-24 group select-none">
              <img 
                src={src} 
                alt={`Client Logo ${idx}`} 
                // brightness-0 invert = white. hover:brightness-100 = original color.
                className="h-10 md:h-16 w-auto object-contain brightness-0 invert hover:brightness-100 opacity-40 group-hover:opacity-100 transition-all duration-300 pointer-events-none" 
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}