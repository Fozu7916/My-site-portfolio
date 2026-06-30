export interface ProjectItem {
  name: string;
  description: string;
  link?: string;
  github: string;
  status?: string;
}

export interface ProjectData {
  title: string;
  emoji: string;
  frameworks: string[];
  projects: ProjectItem[];
}

export const projectsData: ProjectData[] = [
  {
    title: 'Fullstack (.NET + React)',
    emoji: '💙',
    frameworks: [
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'React',
      'TypeScript',
    ],
    projects: [
      {
        name: 'AlekseyBook',
        description: 'Social Network',
        link: '/react/alekseybook',
        github: 'https://github.com/Fozu7916/AlekseyBook',
      },
    ],
  },
  {
    title: 'C++ (Desktop & Algorithms)',
    emoji: '⚙️',
    frameworks: ['Qt', 'MVC Architecture', 'libmpv', 'SQL'],
    projects: [
      {
        name: 'QF Player',
        description: 'Music Player',
        link: '/cpp/fifth',
        github: 'https://github.com/Fozu7916/QF_Player',
      },
      {
        name: 'Bank System',
        description: 'Banking Application',
        link: '/cpp/fourth',
        github: 'https://github.com/Fozu7916/Login-balance-qt',
      },
      {
        name: 'Password Generator',
        description: 'Desktop Utility',
        link: '/cpp/second',
        github: 'https://github.com/Fozu7916/Password-Generator-QT',
      },
    ],
  },
  {
    title: 'Frontend (React/TS)',
    emoji: '⚛️',
    frameworks: ['React', 'TypeScript', 'Framer Motion'],
    projects: [
      {
        name: 'Portfolio',
        description: 'Personal Portfolio',
        link: '/portfolio',
        github: 'https://github.com/Fozu7916/My-site-portfolio',
      },
    ],
  },
  {
    title: 'Python',
    emoji: '🐍',
    frameworks: ['Python', 'Streamlit', 'MySQL', 'VK API'],
    projects: [
      {
        name: 'Hackathon Project',
        description: 'Медиахаб · Streamlit + VK API + MySQL',
        link: '/python/hacaton',
        github: 'https://github.com/Fozu7916/HacatonProTechno',
      },
    ],
  },
];
