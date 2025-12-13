'use client';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 20, filter: 'blur(10px)', scale: 0.98 },
      { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)', 
        scale: 1, 
        duration: 0.8, 
        ease: 'expo.out' 
      }
    );
  }, { scope: containerRef, dependencies: [pathname] });

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
}
