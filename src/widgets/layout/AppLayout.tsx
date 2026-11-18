import { motion, useReducedMotion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import './layout.css';

declare global {
  interface Window {
    ym?: (id: number, action: string, url: string) => void;
  }
}

export function AppLayout() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.ym?.(110297865, 'hit', window.location.href);
  }, [pathname]);

  return (
    <>
      <SiteHeader />
      <motion.main
        key={pathname}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <Outlet />
      </motion.main>
      <SiteFooter />
    </>
  );
}
