export interface ProjectData {
  title: string;
  frameworks: string[];
  projects: Array<{
    name: string;
    link?: string;
    status?: string;
  }>;
}

export const projectsData: ProjectData[] = [
  {
    title: 'C# (.NET Backend)',
    frameworks: [
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'MySQL',
      'Docker'
    ],
    projects: [
      { name: 'AlekseyBook (Social Network)', link: '/react/alekseybook' }
    ]
  },
  {
    title: 'C++ (Algorithms & Desktop)',
    frameworks: [
      'QT',
      'MVC Architecture',
      'libmpv',
      'SQL'
    ],
    projects: [
      { name: 'QF_player (Music Player)', link: '/cpp/fifth' },
      { name: 'Bank System', link: '/cpp/fourth' },
      { name: 'Password Generator', link: '/cpp/second' }
    ]
  },
  {
    title: 'Frontend (React/TS)',
    frameworks: [
      'React',
      'TypeScript',
      'MUI'
    ],
    projects: [
      { name: 'Portfolio Website', link: '/portfolio' }
    ]
  },
  {
    title: 'Python (Scripting & Automation)',
    frameworks: [
      'Flask',
      'Django'
    ],
    projects: [
      { name: 'Hackathon Project', link: '/cpp/first' }
    ]
  },
];
