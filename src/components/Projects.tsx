'use client';
import {useTranslations} from 'next-intl';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const t = useTranslations('Projects');
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    tl.to('.project-card', {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'expo.out'
    });

    // Add hover effect for cards
    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card: any) => {
      const hover = gsap.to(card, {
        scale: 1.02,
        duration: 0.4,
        paused: true,
        ease: 'power2.out'
      });
      
      card.addEventListener('mouseenter', () => hover.play());
      card.addEventListener('mouseleave', () => hover.reverse());
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-theme-text-main to-theme-text-muted">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Lunaris */}
          <div className="project-card opacity-0 translate-y-12 group relative theme-card theme-card-hover p-8 md:p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold theme-text-main">{t('lunaris.name')}</h3>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    {t('lunaris.type')}
                  </span>
                </div>
                <p className="theme-text-muted text-lg leading-relaxed mb-8 max-w-2xl">
                  {t('lunaris.description')}
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm font-medium theme-text-main hover:text-blue-400 transition-colors">
                    <Github size={18} /> Source
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium theme-text-main hover:text-blue-400 transition-colors">
                    <ExternalLink size={18} /> Demo
                  </button>
                </div>
              </div>
              
              {/* Visual Placeholder for "Actual Website" feel */}
              <div className="w-full md:w-1/3 aspect-video bg-theme-bg rounded-xl theme-border border flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                <div className="theme-text-muted font-mono text-sm">Preview Unavailable</div>
              </div>
            </div>
          </div>

          {/* qdp */}
          <div className="project-card opacity-0 translate-y-12 group relative theme-card theme-card-hover p-8 md:p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-3xl md:text-4xl font-bold theme-text-main">{t('qdp.name')}</h3>
                <span className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                  {t('qdp.type')}
                </span>
              </div>
              <p className="theme-text-muted text-lg leading-relaxed mb-8 max-w-2xl">
                {t('qdp.description')}
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-sm font-medium theme-text-main hover:text-purple-400 transition-colors">
                  <ArrowUpRight size={18} /> Read Spec
                </button>
              </div>
            </div>
          </div>

          {/* Other Work Grid */}
          <div className="project-card opacity-0 translate-y-12 mt-8">
            <h3 className="text-2xl font-semibold mb-8 theme-text-main">{t('other.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: t('other.webTools'), icon: '🌐' },
                { title: t('other.automation'), icon: '🤖' },
                { title: t('other.audio'), icon: '🎵' },
                { title: t('other.animation'), icon: '✨' }
              ].map((item, i) => (
                <div key={i} className="group p-6 theme-card hover:bg-theme-card-hover cursor-default">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                    <span className="theme-text-muted font-medium">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
