export const profile = {
  name: 'Aleksey Shikin',
  role: 'Backend Developer · C# / .NET',
  email: '',
  telegram: '@FozuZXC',
  telegramUrl: 'https://t.me/FozuZXC',
  telegramChannelUrl: 'https://t.me/+MAwXHuFGbMU4ZjAy',
  github: 'https://github.com/Fozu7916',
  leetcode: 'https://leetcode.com/u/Fozuzzzxxxccc/',
  avatar: '/images/avatar.jpg',
} as const;

export const skills = [
  {
    category: 'Backend',
    items: ['C#', '.NET 10', 'ASP.NET Core', 'Entity Framework Core', 'Go (learning)'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Message Brokers',
    items: ['RabbitMQ (learning)', 'Apache Kafka (learning)'],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      'Git', 'GitHub', 'GitHub Actions',
      'Linux', 'Docker', 'Kubernetes (learning)', 'Nginx',
      'AWS (learning)', 'Microsoft Azure (learning)',
    ],
  },
  {
    category: 'Frontend',
    items: ['TypeScript', 'React'],
  },
] as const;

export const education = {
  schools: [
    'Software Engineering — Tomsk Polytechnic University',
    'Physics and Mathematics School — Siberian Federal University',
  ],
  exams: [
    { subject: 'Mathematics (USE)', score: 95 },
    { subject: 'Computer Science (USE)', score: 80 },
    { subject: 'Russian (USE)', score: 75 },
  ],
  english: [
  ],
} as const;

export const achievements = {
  science: [
    'Finalist in 5 mathematics olympiads',
    'Finalist in 10+ computer science olympiads',
    'Delivered 30+ presentations at scientific conferences',
  ],
  engineering: [
    'Finalist of 5+ hackathons',
  ],
} as const;

export const powerlifting = {
  bodyweight: 82,
  total: 400,
  lifts: [
    { name: 'Bench Press', weight: 115 },
    { name: 'Squat', weight: 135 },
    { name: 'Deadlift', weight: 150 },
  ],
} as const;