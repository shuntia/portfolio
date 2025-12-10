'use client';
import {useTranslations} from 'next-intl';

export default function About() {
  const t = useTranslations('About');
  
  return (
    <section id="about" className="py-24 px-6 bg-neutral-900/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">{t('title')}</h2>
        <div className="space-y-8 text-neutral-300 leading-relaxed text-lg">
          <p>{t('short')}</p>
          <p>{t('extended')}</p>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-white">{t('skillsTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">Technical</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>Systems Programming (Rust)</li>
                <li>Web Development (Next.js, TypeScript)</li>
                <li>Multimedia Tooling</li>
                <li>Concurrency & Performance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">Creative</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>Audio Production / UTAU</li>
                <li>Motion Design (GSAP)</li>
                <li>UI/UX Concepts</li>
                <li>Tech-Art Hybrids</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
