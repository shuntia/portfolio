'use client';
import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-neutral-800 text-center text-neutral-500 text-sm">
      <p>{t('copyright', {year})}</p>
    </footer>
  );
}
