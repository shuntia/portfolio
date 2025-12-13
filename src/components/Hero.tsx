'use client';
import {useTranslations} from 'next-intl';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const t = useTranslations('Hero');
  const containerRef = useRef(null);
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  useGSAP(() => {
    // Text reveal animation with sleek ease
    gsap.to('.hero-text', {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.1,
      ease: 'expo.out'
    });

    // Background subtle movement - slower, more organic
    gsap.to('.hero-bg-glow', {
      scale: 1.1,
      opacity: 0.3,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Eye Candy */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-bg-glow absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="hero-bg-glow absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <h1 className="hero-text opacity-0 translate-y-12 text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-theme-text-main to-theme-text-muted">
          {t('name')}
        </h1>
        <h2 className="hero-text opacity-0 translate-y-12 text-2xl md:text-4xl theme-text-muted mb-8 font-light tracking-wide">
          {t('role')}
        </h2>
        <p className="hero-text opacity-0 translate-y-12 text-lg md:text-xl theme-text-muted max-w-2xl leading-relaxed mb-12 border-l-2 theme-border pl-6">
          {t('tagline')}
        </p>
        <div className="hero-text opacity-0 translate-y-12 flex gap-6">
          <Link href={`/${currentLocale}/projects`} className="group relative px-8 py-4 bg-theme-text-main text-theme-bg font-medium rounded-full overflow-hidden transition-all hover:scale-105">
            <span className="relative z-10">{t('viewProjects')}</span>
            <div className="absolute inset-0 bg-theme-text-muted transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link href={`/${currentLocale}/contact`} className="group px-8 py-4 border theme-border theme-text-main font-medium rounded-full hover:border-theme-text-main transition-all hover:scale-105">
            {t('contactMe')}
          </Link>
        </div>
      </div>
    </section>
  );
}
