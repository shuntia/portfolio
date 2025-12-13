'use client';
import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t theme-border text-center theme-text-muted text-sm">
      <p>{t('copyright', {year})}</p>
    </footer>
  );
}
