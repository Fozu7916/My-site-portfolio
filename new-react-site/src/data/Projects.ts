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
    title: 'C++',
    frameworks: [
      'QT',
      'Winforms(CLI/С++)',
      'SFML',
      'Connect SQL(MySQL and SQLite)'
    ],
    projects: [
      { name: 'Winform app User control', link: '/cpp/first' },
      { name: 'QT app Password Generator', link: '/cpp/second' },
      { name: 'SQL-database(console + SQL)', link: '/cpp/third' },
      { name: 'Qt program simulating bank', link: '/cpp/fourth' },
      { name: 'QF_player — Музыкальный плеер на Qt', link: '/cpp/fifth' }
    ]
  },
  {
    title: 'C#(.NET)',
    frameworks: [
      'Unity',
      'Winforms',
      'Web(ASP.NET)',
      'Avalonia and maUI'
    ],
    projects: [
      { name: 'Unity psyho horror', status: 'WIP' },
      { name: 'Web app Login + smth', status: 'WIP' },
      { name: 'GUI avalonia app', status: 'WIP' },
      { name: 'GUI maui app', status: 'WIP' }
    ]
  },
  {
    title: 'TypeScript',
    frameworks: [
      'React'
    ],
    projects: [
      { name: 'AlekseyBook', link: '/react/first' }
    ]
  }
]; 