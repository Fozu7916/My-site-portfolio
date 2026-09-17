export type ProjectCategory = '.NET' | 'Frontend' | 'Python';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLayer {
  title: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  headline: string;
  description: string;
  narrative: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  layers: ProjectLayer[];
  metrics: ProjectMetric[];
  github: string;
  images: string[];
  featured?: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    slug: 'alekseybook',
    title: 'AlekseyBook',
    summary: 'Social network backend API & web platform featuring user relations, secure auth, real-time messaging, and interactive feeds.',
    headline: 'Profiles, a feed and live chat on one authenticated surface.',
    description: 'A completed social MVP: friend requests, a media feed, notifications and SignalR chat with typing, read status and reconnect.',
    narrative: 'The live demo is offline. JWT, XSS and CSRF stay on the API; the React client uses TypeScript and CSS Modules, with lazy images and infinite scroll on the feed.',
    category: '.NET',
    technologies: ['ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'SignalR', 'React', 'TypeScript'],
    features: ['Profiles, friend requests and user search', 'Real-time chat with typing and read status', 'Feed with comments, likes and media', 'Online presence, notifications and reconnect'],
    layers: [
      { title: 'Graph', text: 'Profiles, friend requests, a friends list and user search.' },
      { title: 'Feed', text: 'Posts with comments, likes, media and infinite scroll.' },
      { title: 'Presence', text: 'SignalR chat, online state, notifications and connection recovery.' },
    ],
    metrics: [
      { value: 'Archived MVP', label: 'Completed cycle' },
      { value: 'SignalR', label: 'Chat and presence' },
      { value: 'JWT', label: 'Authenticated API' },
    ],
    github: 'https://github.com/Fozu7916/AlekseyBook',
    images: ['/images/ReactFirst.png', '/images/ReactSecond.png', '/images/ReactThird.png', '/images/ReactFourth.png',
      '/images/ReactFifth.png','/images/ReactSixth.png','/images/ReactSeventh.png','/images/ReactEighth.png'],
    featured: true,
    status: 'Archived MVP',
  },
  {
    slug: 'it-career-test',
    title: 'IT Career Test',
    summary: 'Interactive IT career guidance service analyzing 14 development areas using an algorithmic scoring system.',
    headline: 'Where to go in IT? Transparent scoring for 14 areas.',
    description: 'A client-side Single Page Application assessing hard and soft skills to determine the best fit among 14 IT specializations, from Backend to GameDev.',
    narrative: 'Built as a lead magnet under the Build in Public concept. It moves away from abstract labels and uses a weighted scoring math model, delivering results in a transparent data table with instant UI response.',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Vite', 'Netlify'],
    features: ['15-question Quick Test for top 3 areas', '50-question Full Test for deep analysis', 'Transparent weighted scoring math', 'Instant SPA navigation without backend delays'],
    layers: [
      { title: 'Core', text: 'Component-based architecture powered by React and TypeScript.' },
      { title: 'Logic', text: 'Clean state management and transparent calculation logic for scoring.' },
      { title: 'Delivery', text: 'Optimized build process via Vite and global distribution on Netlify.' },
    ],
    metrics: [
      { value: '14', label: 'IT Areas Analyzed' },
      { value: '50', label: 'Deep Questions' },
      { value: 'SPA', label: 'Zero Backend Delay' },
    ],
    github: 'https://github.com/Fozu7916/it-test',
    images: ['/images/TestFirst.png', '/images/TestSecond.png', '/images/TestThird.png'],
    featured: true,
  },
  {
    slug: 'sauna-lending',
    title: 'SaunaLending',
    summary: 'Commercial landing page designed for local service presentation with responsive layout and semantic markup.',
    headline: 'A focused, high-conversion commercial presentation.',
    description: 'A single-page commercial website for a two-story sauna complex, featuring a warm pool, billiards, and relaxation areas, designed specifically to generate booking leads.',
    narrative: 'Styled utilizing Tailwind CSS for rapid prototyping and responsive design. Features strategic CTA placement, direct WhatsApp integration for instant booking, and semantic HTML5 structure optimized for local SEO.',
    category: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    features: ['Semantic HTML5 layout with local SEO focus', 'Tailwind CSS utility-first styling', 'Direct WhatsApp booking integration', 'Responsive mobile-first navigation and galleries'],
    layers: [
      { title: 'Layout', text: 'Semantic sections for hero, gallery, services, and footer content.' },
      { title: 'Styling', text: 'Tailwind CSS utility classes ensuring a responsive and modern UI.' },
      { title: 'Conversion', text: 'Strategically placed interactive elements and direct messenger links.' },
    ],
    metrics: [
      { value: 'Landing', label: 'Commercial Page' },
      { value: 'Tailwind', label: 'Utility Styling' },
      { value: 'Mobile', label: 'Fully Responsive' },
    ],
    github: 'https://github.com/Fozu7916/SaunaLending',
    images: ['/images/Sauna.png'],
    featured: true,
  },
  {
    slug: 'hacaton-pro-techno',
    title: 'HacatonProTechno',
    summary: 'Automated media processing pipeline: targeted routine data collection, metric extraction, and scheduled distribution.',
    headline: 'From noisy feeds to a scheduled signal.',
    description: 'A hackathon pipeline that watches selected groups, scores incoming posts, and ships the useful remainder to target audiences.',
    narrative: 'Parser, analytics and publisher stay in separate modules. Short-window statistics and PDF reports sit beside a worker that publishes on a schedule.',
    category: 'Python',
    technologies: ['Python', 'Async Parsers', 'Telegram API', 'VK API'],
    features: ['VK and Telegram async parsers', 'Priority scoring and post processing', 'Group statistics and metric extraction', 'Scheduled publishing to target groups'],
    layers: [
      { title: 'Parser', text: 'Specialized VK and Telegram modules pull posts, comments and files.' },
      { title: 'Analytics', text: 'Priority scoring, incoming-post processing and PDF reports.' },
      { title: 'Publisher', text: 'A scheduled worker delivers prepared content to target groups.' },
    ],
    metrics: [
      { value: 'VK + TG', label: 'Source networks' },
      { value: 'Pipeline', label: 'Parser to publish' },
      { value: 'Automated', label: 'Data Collection' },
    ],
    github: 'https://github.com/Fozu7916/HacatonProTechno',
    images: ['/images/HacatonFirst.jpg', '/images/HacatonSecond.jpg', '/images/HacatonThird.jpg', '/images/HacatonFourth.jpg', '/images/HacatonFifth.jpg'],
    featured: true,
    status: 'Hackathon product',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug);

export const getProjectIndex = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return index >= 0 ? String(index + 1).padStart(2, '0') : '00';
};