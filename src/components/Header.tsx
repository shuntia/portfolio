'use client';
import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  
  const currentLocale = pathname.split('/')[1] || 'en';
  const otherLocale = currentLocale === 'en' ? 'ja' : 'en';
  const otherLocaleLabel = currentLocale === 'en' ? '日本語' : 'English';

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">Shuntia</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">{t('about')}</a>
          <a href="#projects" className="hover:text-white transition-colors">{t('projects')}</a>
          <a href="#services" className="hover:text-white transition-colors">{t('services')}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t('contact')}</a>
        </nav>
        <Link href={`/${otherLocale}`} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
          {otherLocaleLabel}
        </Link>
      </div>
    </header>
  );
}
