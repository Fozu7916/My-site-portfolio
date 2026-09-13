export type ProjectCategory = '.NET' | 'Frontend' | 'C++' | 'Python';

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
    summary: 'An archived social MVP: profiles, feed, friends and live chat on React and ASP.NET Core.',
    headline: 'Profiles, a feed and live chat on one authenticated surface.',
    description: 'A completed social MVP: friend requests, a media feed, notifications and SignalR chat with typing, read status and reconnect.',
    narrative: 'The live demo is offline. JWT, XSS and CSRF stay on the API; the React client uses TypeScript and CSS Modules, with lazy images and infinite scroll on the feed.',
    category: '.NET',
    technologies: ['ASP.NET Core', 'Entity Framework Core', 'MySQL', 'SignalR', 'JWT', 'React', 'TypeScript', 'CSS Modules'],
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
    images: ['/images/ReactFirst.png', '/images/ReactSecond.png', '/images/ReactThird.png', '/images/ReactFourth.png', '/images/ReactFifth.png', '/images/ReactSixth.png', '/images/ReactSeventh.png', '/images/ReactEighth.png'],
    featured: true,
    status: 'Archived MVP',
  },
  {
    slug: 'qf-player',
    title: 'QF Player',
    summary: 'A Qt music player with libmpv playback, persistent playlists and global media keys.',
    headline: 'Playback that stays in reach, even when the window does not.',
    description: 'A native player for Windows and Linux. MP3, WAV, FLAC and other formats go through a libmpv wrapper, with shuffle, volume and a playlist that returns on launch.',
    narrative: 'Media keys and OSD work while the window is unfocused. MVC, signals and a separate duration thread keep the interface away from the engine. The main paths are covered by unit tests.',
    category: 'C++',
    technologies: ['C++17', 'Qt 6', 'CMake', 'Ninja', 'libmpv', 'MVC'],
    features: ['MP3, WAV, FLAC and other formats via libmpv', 'Playlists with shuffle and session restore', 'Volume, seek and track navigation', 'Global media keys and OSD on Windows'],
    layers: [
      { title: 'Engine', text: 'A libmpv wrapper for formats, play, pause, seek and volume.' },
      { title: 'Session', text: 'Playlists, shuffle and restored settings on startup.' },
      { title: 'Integration', text: 'Global media keys and OSD when the window is out of focus.' },
    ],
    metrics: [
      { value: 'Win + Linux', label: 'Desktop targets' },
      { value: 'libmpv', label: 'Playback engine' },
      { value: 'Global', label: 'Media keys' },
    ],
    github: 'https://github.com/Fozu7916/QF_Player',
    images: ['/images/Fifth.png'],
    featured: true,
  },
  {
    slug: 'mediahub',
    title: 'HacatonProTechno',
    summary: 'Collects, ranks and republishes content from VKontakte and Telegram.',
    headline: 'From noisy feeds to a scheduled signal.',
    description: 'A hackathon pipeline that watches selected groups, scores incoming posts and ships the useful remainder to target audiences.',
    narrative: 'Parser, analytics and publisher stay in separate modules. Short-window statistics and PDF reports sit beside a worker that publishes on a schedule.',
    category: 'Python',
    technologies: ['Python', 'VK API', 'Telegram API', 'MySQL', 'Scheduler'],
    features: ['VK and Telegram parsers', 'Priority scoring and post processing', 'Group statistics and PDF reports', 'Scheduled publishing to target groups'],
    layers: [
      { title: 'Parser', text: 'Specialized VK and Telegram modules pull posts, comments and files.' },
      { title: 'Analytics', text: 'Priority scoring, incoming-post processing and PDF reports.' },
      { title: 'Publisher', text: 'A scheduled worker delivers prepared content to target groups.' },
    ],
    metrics: [
      { value: 'VK + TG', label: 'Source networks' },
      { value: '3 modules', label: 'Parser to publish' },
      { value: '7 days', label: 'History window' },
    ],
    github: 'https://github.com/Fozu7916/HacatonProTechno',
    images: [],
    featured: true,
    status: 'Hackathon product',
  },
  {
    slug: 'bank-system',
    title: 'BalanceManager',
    summary: 'A Qt application for registration, hashed passwords and MySQL-backed balances.',
    headline: 'Balances kept behind an explicit auth step.',
    description: 'Users register, sign in and move money through deposits and withdrawals. The current balance and the transaction list stay on MySQL.',
    narrative: 'Passwords are hashed before they are stored. Model, view and AuthController stay apart. Auth paths are covered by Qt Test.',
    category: 'C++',
    technologies: ['C++17', 'Qt 6', 'MySQL', 'QMYSQL', 'MVC', 'Qt Test'],
    features: ['Registration and hashed password storage', 'Deposits, withdrawals and balance view', 'Transaction history', 'MVC split with AuthController tests'],
    layers: [
      { title: 'Access', text: 'Registration, authorization and hashed credentials.' },
      { title: 'Ledger', text: 'View the balance, deposit and withdraw through MySQL.' },
      { title: 'Record', text: 'A transaction history next to dedicated Qt windows.' },
    ],
    metrics: [
      { value: 'Qt 6', label: 'Native surface' },
      { value: 'MySQL', label: 'Persistence' },
      { value: 'Hashed', label: 'Credentials' },
    ],
    github: 'https://github.com/Fozu7916/Login-balance-qt',
    images: ['/images/fourth.png'],
  },
  {
    slug: 'password-generator',
    title: 'Password Generator',
    summary: 'A small native utility for creating configurable passwords and copying them instantly.',
    headline: 'A small tool with one clear job.',
    description: 'A compact Qt utility for configurable passwords and instant copy.',
    narrative: 'Length and character classes stay visible. The result goes to the clipboard in one click. Nothing else competes for attention.',
    category: 'C++',
    technologies: ['C++', 'Qt'],
    features: ['Configurable length and complexity', 'Letters, numbers and symbol options', 'One-click clipboard copy', 'Native Qt interface'],
    layers: [
      { title: 'Controls', text: 'Length and complexity in a native window.' },
      { title: 'Output', text: 'Letters, numbers and symbols as needed.' },
      { title: 'Action', text: 'One-click copy to the clipboard.' },
    ],
    metrics: [
      { value: 'Native', label: 'Qt utility' },
      { value: 'Instant', label: 'Clipboard' },
      { value: 'Focused', label: 'One job' },
    ],
    github: 'https://github.com/Fozu7916/Password-Generator-QT',
    images: ['/images/second.png'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug);

export const getProjectIndex = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return index >= 0 ? String(index + 1).padStart(2, '0') : '00';
};
