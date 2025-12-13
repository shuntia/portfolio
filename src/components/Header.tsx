'use client';
import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  
  const currentLocale = pathname.split('/')[1] || 'en';
  const otherLocale = currentLocale === 'en' ? 'ja' : 'en';
  const otherLocaleLabel = currentLocale === 'en' ? '日本語' : 'English';

  // Helper to get localized path
  const getPath = (path: string) => `/${currentLocale}${path}`;

  return (
    <header className="fixed top-0 w-full z-50 bg-theme-bg/80 backdrop-blur-md border-b theme-border transition-colors duration-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={getPath('/')} className="text-xl font-bold tracking-tighter hover:text-slate-500 dark:hover:text-slate-300 transition-colors">
          shuntia
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium theme-text-muted">
          <Link href={getPath('/about')} className="hover:text-theme-text-main transition-colors">{t('about')}</Link>
          <Link href={getPath('/projects')} className="hover:text-theme-text-main transition-colors">{t('projects')}</Link>
          <Link href={getPath('/services')} className="hover:text-theme-text-main transition-colors">{t('services')}</Link>
          <Link href={getPath('/contact')} className="hover:text-theme-text-main transition-colors">{t('contact')}</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href={`/${otherLocale}`} className="text-sm font-medium theme-text-muted hover:text-theme-text-main transition-colors">
            {otherLocaleLabel}
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-theme-card-hover transition-colors theme-text-muted hover:text-theme-text-main"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
