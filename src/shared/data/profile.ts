export const profile = {
  name: 'Shikin Aleskey',
  role: '.NET Backend Developer',
  email: 'alekseylis2111@gmail.com',
  telegram: '@FozuZXC',
  telegramUrl: 'https://t.me/FozuZXC',
  github: 'https://github.com/Fozu7916',
  leetcode: 'https://leetcode.com/u/Fozuzzzxxxccc/',
  avatar: '/images/avatar.jpg',
} as const;

export const skills = [
  {
    category: 'Backend — primary',
    items: [
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'MySQL',
      'REST API',
      'Docker',
    ],
  },
  {
    category: 'Backend — secondary',
    items: [
      'Java',
      'Spring Boot',
    ],
  },
  {
    category: 'Engineering',
    items: [
      'Linux',
      'Git',
      'Kafka',
      'Clean Architecture',
      'Testing',
      'CI/CD',
    ],
  },
  {
    category: 'Additional',
    items: [
      'C++',
      'C',
      'Python',
      'React',
      'TypeScript',
    ],
  },
];

export const education = {
  schools: [
    '13`th university in Russia: Software Engineering — Tomsk Polytechnic University, ',
    '24`th school in Russia: Physics and Mathematics School at Siberian Federal University'
  ],
  exams: [
    { subject: 'Mathematics', score: 95 },
    { subject: 'Computer Science', score: 80 },
    { subject: 'Russian', score: 75 },
  ],
} as const;

export const achievements = {
  science: [
    'Partipiant in final stage of 5 mathematics olympiads',
    'Partipiant in final stage of 10+ computer science olympiads',
    'Delivered over 30 presentations at scientific conferences; won 2nd place at the "Leonardo" All-Russian scientific conference.'
  ],
  engineering: [
    'Received an offer from Apogey 1C following a hackathon in which 60% of teams were eliminated',
    'Partipiant in 7 hackathons',
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
