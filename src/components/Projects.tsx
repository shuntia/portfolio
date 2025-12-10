'use client';
import {useTranslations} from 'next-intl';

export default function Projects() {
  const t = useTranslations('Projects');

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">{t('title')}</h2>
        
        <div className="space-y-16">
          {/* Lunaris */}
          <div className="group border border-neutral-800 bg-neutral-900/50 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">{t('lunaris.name')}</h3>
              <span className="text-sm text-blue-400 font-medium mt-2 md:mt-0">{t('lunaris.type')}</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              {t('lunaris.description')}
            </p>
          </div>

          {/* qdp */}
          <div className="group border border-neutral-800 bg-neutral-900/50 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">{t('qdp.name')}</h3>
              <span className="text-sm text-purple-400 font-medium mt-2 md:mt-0">{t('qdp.type')}</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              {t('qdp.description')}
            </p>
          </div>

          {/* Other */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">{t('other.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                t('other.webTools'),
                t('other.automation'),
                t('other.audio'),
                t('other.animation')
              ].map((item, i) => (
                <div key={i} className="p-4 border border-neutral-800 rounded-lg text-neutral-400 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
