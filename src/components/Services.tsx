'use client';
import {useTranslations} from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');

  return (
    <section id="services" className="py-24 px-6 bg-neutral-900/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            t('web'),
            t('automation'),
            t('animation'),
            t('prototypes'),
            t('tutoring')
          ].map((service, i) => (
            <div key={i} className="p-6 border border-neutral-800 bg-neutral-950 rounded-xl">
              <p className="text-neutral-300 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
