export const profile = {
  name: 'Aleksey Shikin', 
  role: 'Backend Software Engineer',
  email: 'alekseylis2111@gmail.com',
  telegram: '@FozuZXC',
  telegramUrl: 'https://t.me/FozuZXC',
  github: 'https://github.com/Fozu7916',
  leetcode: 'https://leetcode.com/u/Fozuzzzxxxccc/',
  avatar: '/images/avatar.jpg',
} as const;

export const skills = [
  {
    category: 'Languages & Frameworks',
    items: [
      'C# (.NET 8, ASP.NET Core)',
      'Java (Spring Boot)',
    ],
  },
  {
    category: 'Databases & Messaging',
    items: [
      'PostgreSQL',
      'Entity Framework Core',
      'Kafka',
      'Redis',
    ],
  },
  {
    category: 'Architecture & Infrastructure',
    items: [
      'REST API & WebSockets (SignalR)',
      'Docker & CI/CD',
      'Linux',
      'Git',
    ],
  },
  {
    category: 'Concepts & Additional',
    items: [
      'Clean Architecture / DDD',
      'Unit & Integration Testing',
      'React + TypeScript (UI)',
    ],
  },
];

export const education = {
  schools: [
    'Software Engineering — Tomsk Polytechnic University (Top 15 Technical Universities in Russia)',
    'Physics and Mathematics School at Siberian Federal University (Top 25 in Russia)'
  ],
  exams: [
    { subject: 'Mathematics (USE)', score: 95 },
    { subject: 'Computer Science (USE)', score: 80 },
    { subject: 'Russian (USE)', score: 75 },
  ],
} as const;

export const achievements = {
  science: [
    'Finalist in 5 national mathematics olympiads',
    'Finalist in 10+ national computer science olympiads',
    'Delivered 30+ presentations at scientific conferences; 2nd place at the "Leonardo" All-Russian scientific conference'
  ],
  engineering: [
    'Secured a job offer from Apogey 1C after placing in a highly competitive hackathon',
    'Participant in 7 hackathons',
  ],
} as const;

export const powerlifting = {
  bodyweight: 82,
  total: 400,
  lifts: [
    { name: 'Bench', weight: 115 },
    { name: 'Squat', weight: 135 },
    { name: 'Deadlift', weight: 150 },
  ],
} as const;