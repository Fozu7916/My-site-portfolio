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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.ym?.(110297865, 'hit', window.location.href);
  }, [pathname]);

  return (
    <>
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
    </>
  );
}
