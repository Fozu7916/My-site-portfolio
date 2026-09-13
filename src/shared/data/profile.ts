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
  { category: 'Backend (.NET) — core stack', items: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'MySQL', 'Docker', 'REST API', 'Clean Architecture'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'Framer Motion'] },
  { category: 'Tools and other technologies', items: ['C++ (Qt, MVC, libmpv)','C++ (competitions)','C','Java','Python (Automation)', 'Linux', 'Git', 'Kafka', 'Docker', 'Jira'] },
] as const;

export const education = {
  schools: [
    'Software Engineering — Tomsk Polytechnic University',
    'Physics and Mathematics School at Siberian Federal University',
    'Honors certificate after Grade 9',
  ],
  exams: [
    { subject: 'Mathematics', score: 95 },
    { subject: 'Computer Science', score: 80 },
    { subject: 'Russian', score: 75 },
  ],
} as const;

export const achievements = {
  science: [
    'Mathematics olympiad finalist: OMMO and Izumrud',
    'Computer science olympiad finalist: Izumrud, Belchonok, Gazprom, Step into the Future, Vysshaya Proba and Rosatom',
    'Second place at the Leonardo conference in Moscow and inclusion in Russia’s State Information Resource for gifted children',
    'First scientific publication through Yenisei Thermal Physics and participation in multiple research conferences',
  ],
  engineering: ['Received an offer from Apogey 1C following a hackathon in which 60% of teams were eliminated'],
} as const;

export const powerlifting = {
  bodyweight: 82,
  total: 400,
  lifts: [
    { name: 'Bench press', weight: 115 },
    { name: 'Squat', weight: 135 },
    { name: 'Deadlift', weight: 150 },
  ],
} as const;
