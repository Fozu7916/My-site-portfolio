import type { PropsWithChildren } from 'react';

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

/* Kept as a thin wrapper so pages don't change: the only motion on the site
   is the route fade in AppLayout, not an entrance animation on every block. */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
