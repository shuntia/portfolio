'use client';
import {useTranslations} from 'next-intl';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const t = useTranslations('About');
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    tl.to('.about-content', {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: 'expo.out'
    });
  }, { scope: containerRef });
  
  return (
    <section ref={containerRef} className="py-24 px-6 min-h-screen flex items-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="about-content opacity-0 translate-y-8 text-4xl md:text-6xl font-bold mb-16 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-theme-text-main to-theme-text-muted">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8 theme-text-muted leading-relaxed text-lg md:text-xl font-light">
            <p className="about-content opacity-0 translate-y-8">{t('short')}</p>
            <p className="about-content opacity-0 translate-y-8">{t('extended')}</p>
          </div>
          
          <div className="lg:col-span-5 about-content opacity-0 translate-y-8">
            <div className="theme-card p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-8 theme-text-main border-b theme-border pb-4">{t('skillsTitle')}</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Technical</h4>
                  <ul className="space-y-3 theme-text-muted text-sm md:text-base">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>Rust (Tokio, Async, ECS)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>Next.js / TypeScript</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>Arch Linux / Hyprland</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>Systems Architecture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">Creative</h4>
                  <ul className="space-y-3 theme-text-muted text-sm md:text-base">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>UTAU / Audio Synthesis</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>Motion Design (GSAP)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>Anime-style Art</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>Multimedia Tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
