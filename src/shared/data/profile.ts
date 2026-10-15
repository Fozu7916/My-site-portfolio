export const profile = {
  name: 'Aleksey Shikin',
  role: 'Backend Developer · C# / .NET',
  email: 'alekseylis2111@gmail.com',
  telegram: '@FozuZXC',
  telegramUrl: 'https://t.me/FozuZXC',
  github: 'https://github.com/Fozu7916',
  leetcode: 'https://leetcode.com/u/Fozuzzzxxxccc/',
  avatar: '/images/avatar.jpg',
} as const;

export const skills = [
  {
    category: 'Backend',
    items: ['C#', '.NET 10', 'ASP.NET Core', 'Go', 'Entity Framework Core'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Message Brokers',
    items: ['RabbitMQ', 'Apache Kafka'],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      'Git', 'GitHub', 'GitHub Actions',
      'Linux', 'Docker', 'Kubernetes', 'Nginx',
      'AWS', 'Microsoft Azure',
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
} as const;

export const achievements = {
  science: [
    'Finalist in 5 national mathematics olympiads',
    'Finalist in 10+ national computer science olympiads',
    'Delivered 30+ presentations at scientific conferences',
    'Won 2nd place at the Leonardo All-Russian Scientific Conference',
  ],
  engineering: [
    'Received a job offer from Apogey 1C after a competitive hackathon',
    'Participated in 7 hackathons',
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