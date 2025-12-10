'use client';
import {useTranslations} from 'next-intl';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const t = useTranslations('Hero');
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          {t('name')}
        </h1>
        <h2 className="hero-text text-2xl md:text-3xl text-neutral-400 mb-8 font-light">
          {t('role')}
        </h2>
        <p className="hero-text text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed mb-10">
          {t('tagline')}
        </p>
        <div className="hero-text flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors">
            {t('viewProjects')}
          </a>
          <a href="#contact" className="px-6 py-3 border border-neutral-700 text-white font-medium rounded-full hover:bg-neutral-900 transition-colors">
            {t('contactMe')}
          </a>
        </div>
      </div>
    </section>
  );
}
