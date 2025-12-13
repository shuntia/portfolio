'use client';
import {useTranslations} from 'next-intl';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Bot, Zap, Layers, GraduationCap } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services() {
  const t = useTranslations('Services');
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    tl.to('.service-card', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'expo.out'
    });
  }, { scope: containerRef });

  const icons = [Code, Bot, Zap, Layers, GraduationCap];
  const keys = ['web', 'automation', 'animation', 'prototypes', 'tutoring'];

  return (
    <section ref={containerRef} className="py-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-theme-text-main to-theme-text-muted">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="service-card opacity-0 translate-y-8 group p-8 theme-card theme-card-hover">
                <div className="mb-6 w-12 h-12 rounded-full bg-theme-bg flex items-center justify-center group-hover:bg-theme-text-main group-hover:text-theme-bg transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <p className="text-xl theme-text-main font-medium mb-2">{t(key)}</p>
                <div className="w-8 h-1 bg-theme-border group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
