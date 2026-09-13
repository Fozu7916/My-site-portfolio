import type { ReactNode } from 'react';

interface PageIntroProps {
  title: string;
  description: string;
  visual?: ReactNode;
}

export function PageIntro({ title, description, visual }: PageIntroProps) {
  return (
    <header className={`page-intro${visual ? ' page-intro--visual' : ''}`}>
      <div className="page-intro__copy">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {visual && <div className="page-intro__visual">{visual}</div>}
    </header>
  );
}
