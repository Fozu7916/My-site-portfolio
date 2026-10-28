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
    slug: 'messenger-backend',
    title: 'Messenger Backend',
    summary:
      'Real-time web messenger backend: REST API and SignalR hub with idempotent delivery, ULID-ordered history, and offline delta sync.',
    headline: 'Messages that arrive once, in order, even on a flaky network.',
    description:
      'A team-built .NET 10 backend for a private web messenger: JWT auth, personal dialogs, WSS message delivery through SignalR, time-sortable ULID keys in PostgreSQL, and a Redis backplane for horizontal scaling. Deployed with a CI/CD pipeline on Render and Neon.',
    narrative:
      'Built as the backend part of a four-person MVP with a React + RxDB offline-first client. Every message carries a client-side key, so retries after a dropped connection never create duplicates. History and delta sync are served by ULID cursors (after / before), and access to a dialog is checked on every read and write. Foreign dialogs return 404 rather than 403 so their existence is not revealed.',
    category: '.NET',
    technologies: [
      '.NET 10',
      'C#',
      'ASP.NET Core',
      'SignalR',
      'Entity Framework Core',
      'Dapper',
      'PostgreSQL',
      'Redis',
      'JWT',
      'Docker',
      'GitHub Actions',
      'xUnit',
    ],
    features: [
      'REST API for auth, profile, user search, dialogs, paginated history and message deletion',
      'SignalR hub at /hubs/chat: send, ack, typing, delete events and presence',
      'Idempotent delivery via clientMessageId with a unique (sender_id, client_message_id) index',
      'ULID keys (varchar(26), "C" collation) for chronological ordering and cursor-based sync',
      'JWT auth, bcrypt password hashing, rate limiting on auth, strict CORS',
      'EF Core for rare operations, Dapper for high-frequency message inserts and history reads',
      'Redis backplane for multi-instance event broadcast',
      'RFC 7807 problem+json errors and Swagger documentation',
    ],
    layers: [
      {
        title: 'Transport',
        text: 'Nginx as a single entry point, REST over HTTPS and a SignalR hub over WSS, with the JWT passed via header or access_token query for WebSocket.',
      },
      {
        title: 'Delivery',
        text: 'Membership check, idempotency lookup, Dapper insert, backplane publish, then an ack only to the sending connection, so repeats return the same server ULID.',
      },
      {
        title: 'Storage',
        text: 'PostgreSQL with ULID primary keys, a (dialog_id, id) index for history and delta sync, DB-side timestamps, soft deletes and cascade dialog removal.',
      },
      {
        title: 'Quality',
        text: 'xUnit unit tests, WebApplicationFactory and Testcontainers integration tests, SignalR client tests, and a GitHub Actions gate that blocks the Render deploy on failure.',
      },
    ],
    metrics: [
      { value: 'SignalR', label: 'Real-time delivery' },
      { value: 'ULID', label: 'Time-sortable keys' },
      { value: 'Idempotent', label: 'Message sending' },
      { value: 'CI/CD', label: 'Tests gate deploy' },
    ],
    github: 'https://github.com/Fozu7916/Messenger1',
    images: [
      '/images/Messenger1.png',
      '/images/Messenger2.png',
      '/images/Messenger3.png',
      '/images/Messenger4.png',
    ],
    featured: true,
    status: 'Team MVP, deployed',
  },

  {
    slug: 'drone-lidar',
    title: 'DroneLiDAR',
    summary:
      'Local LiDAR processing tool for reproducible comparison of LAS/LAZ point-cloud epochs, terrain changes, and cut/fill volumes.',
    headline: 'From raw point clouds to a reproducible volume report.',
    description:
      'A .NET desktop pipeline that validates LAS/LAZ data, filters equipment and vegetation, aligns repeated surveys, builds robust DEMs, calculates cut/fill volumes, and produces an auditable result package.',
    narrative:
      'Designed for repeated drone surveys and local processing. The pipeline supports LAS/LAZ 1.2–1.4, deterministic spatial sampling, independent RAW/CLEAN/DEM representations, protective ICP registration, AOI-based volume integration, stable-zone RMS checks, HTML/CSV reporting, and SHA-256 provenance manifests.',
    category: '.NET',
    technologies: [
      '.NET 10',
      'C#',
      'LAS/LAZ',
      'LiDAR',
      'ICP / Kabsch',
      '3D Point Clouds',
      'WebGL',
    ],
    features: [
      'Processes 4M+ points in approximately 3 seconds on a practical workstation profile',
      'LAS/LAZ validation, streaming reads, CRS/WKT compatibility checks and deterministic sampling',
      'Independent RAW, CLEAN and DEM point-cloud representations',
      'Protective ICP registration using stable ground outside the AOI',
      'Robust DEM construction with cut/fill, volume, area, depth and mass calculations',
      'Reproducible Run IDs with HTML report, CSV, metadata and SHA-256 manifest',
    ],
    layers: [
      {
        title: 'Ingestion',
        text: 'Streaming LAS/LAZ processing with format validation, local-coordinate normalization, CRS checks and deterministic spatial sampling for large datasets.',
      },
      {
        title: 'Processing',
        text: 'Classification, voxelization, stable-zone ICP registration, robust DEM generation and AOI-based cut/fill integration.',
      },
      {
        title: 'Verification',
        text: 'Coverage and stable-zone RMS quality gates, independent RAW/CLEAN views, regression tests and synthetic control scenes.',
      },
      {
        title: 'Provenance',
        text: 'Every successful calculation receives an immutable Run ID with parameters, input/output hashes, processing metadata and reproducible result artifacts.',
      },
    ],
    metrics: [
      { value: '4M+', label: 'Points processed' },
      { value: 'LAS/LAZ', label: 'Supported formats' },
      { value: '25M', label: 'Max DEM cells' },
      { value: 'SHA-256', label: 'Result provenance' },
    ],
    github: 'https://github.com/Fozu7916/LidarMVP',
    images: [
      '/images/DroneLiDARFirst.png',
      '/images/DroneLiDARSecond.png',
      '/images/DroneLiDARThird.png',
      '/images/DroneLiDARFourth.png',
    ],
    featured: true,
    status: 'Working prototype',
  },

  {
    slug: 'alekseybook',
    title: 'AlekseyBook',
    summary:
      'Social network backend API & web platform featuring user relations, secure auth, real-time messaging, and interactive feeds.',
    headline: 'Profiles, a feed and live chat on one authenticated surface.',
    description:
      'A completed social MVP: friend requests, a media feed, notifications and SignalR chat with typing, read status and reconnect.',
    narrative:
      'The live demo is offline. JWT, XSS and CSRF stay on the API; the React client uses TypeScript and CSS Modules, with lazy images and infinite scroll on the feed.',
    category: '.NET',
    technologies: [
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'SignalR',
      'React',
      'TypeScript',
    ],
    features: [
      'Profiles, friend requests and user search',
      'Real-time chat with typing and read status',
      'Feed with comments, likes and media',
      'Online presence, notifications and reconnect',
    ],
    layers: [
      {
        title: 'Graph',
        text: 'Profiles, friend requests, a friends list and user search.',
      },
      {
        title: 'Feed',
        text: 'Posts with comments, likes, media and infinite scroll.',
      },
      {
        title: 'Presence',
        text: 'SignalR chat, online state, notifications and connection recovery.',
      },
    ],
    metrics: [
      { value: 'Archived MVP', label: 'Completed cycle' },
      { value: 'SignalR', label: 'Chat and presence' },
      { value: 'JWT', label: 'Authenticated API' },
    ],
    github: 'https://github.com/Fozu7916/AlekseyBook',
    images: [
      '/images/ReactFirst.png',
      '/images/ReactSecond.png',
      '/images/ReactThird.png',
      '/images/ReactFourth.png',
      '/images/ReactFifth.png',
      '/images/ReactSixth.png',
      '/images/ReactSeventh.png',
      '/images/ReactEighth.png',
    ],
    featured: true,
    status: 'Archived MVP',
  },

  {
    slug: 'hacaton-pro-techno',
    title: 'HacatonProTechno',
    summary:
      'Automated media processing pipeline: targeted routine data collection, metric extraction, and scheduled distribution.',
    headline: 'From noisy feeds to a scheduled signal.',
    description:
      'A hackathon pipeline that watches selected groups, scores incoming posts, and ships the useful remainder to target audiences.',
    narrative:
      'Parser, analytics and publisher stay in separate modules. Short-window statistics and PDF reports sit beside a worker that publishes on a schedule.',
    category: 'Python',
    technologies: [
      'Python',
      'Async Parsers',
      'Telegram API',
      'VK API',
    ],
    features: [
      'VK and Telegram async parsers',
      'Priority scoring and post processing',
      'Group statistics and metric extraction',
      'Scheduled publishing to target groups',
    ],
    layers: [
      {
        title: 'Parser',
        text: 'Specialized VK and Telegram modules pull posts, comments and files.',
      },
      {
        title: 'Analytics',
        text: 'Priority scoring, incoming-post processing and PDF reports.',
      },
      {
        title: 'Publisher',
        text: 'A scheduled worker delivers prepared content to target groups.',
      },
    ],
    metrics: [
      { value: 'VK + TG', label: 'Source networks' },
      { value: 'Pipeline', label: 'Parser to publish' },
      { value: 'Automated', label: 'Data Collection' },
    ],
    github: 'https://github.com/Fozu7916/HacatonProTechno',
    images: [
      '/images/HacatonFirst.jpg',
      '/images/HacatonSecond.jpg',
      '/images/HacatonThird.jpg',
      '/images/HacatonFourth.jpg',
      '/images/HacatonFifth.jpg',
    ],
    featured: true,
    status: 'Hackathon product',
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export const getProject = (slug?: string) =>
  projects.find((project) => project.slug === slug);

export const getProjectIndex = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);

  return index >= 0 ? String(index + 1).padStart(2, '0') : '00';
};
