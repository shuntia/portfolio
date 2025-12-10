'use client';
import {useTranslations} from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">{t('title')}</h2>
        <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
          {t('text')}
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
        >
          {t('emailButton')}
        </a>
      </div>
    </section>
  );
}
