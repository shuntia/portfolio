'use client';
import {useTranslations} from 'next-intl';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Send } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
  const t = useTranslations('Contact');
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    tl.to('.contact-anim', {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'expo.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="contact-anim opacity-0 translate-y-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-theme-card theme-border border mb-8 theme-text-muted">
          <Mail size={32} />
        </div>
        <h2 className="contact-anim opacity-0 translate-y-8 text-4xl md:text-6xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-theme-text-main to-theme-text-muted">
          {t('title')}
        </h2>
        <p className="contact-anim opacity-0 translate-y-8 text-xl md:text-2xl theme-text-muted mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t('text')}
        </p>
        <a 
          href="mailto:shuntia@shuntia.net" 
          className="contact-anim opacity-0 translate-y-8 group inline-flex items-center gap-3 px-10 py-5 bg-theme-text-main text-theme-bg font-bold rounded-full hover:bg-theme-text-muted transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
        >
          <span>{t('emailButton')}</span>
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
