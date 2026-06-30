export const profile = {
  name: 'Shikin Aleksey',
  role: '.NET Backend Developer',
  tagline: 'Building backend applications with ASP.NET Core',
  email: 'alekseylis2111@gmail.com',
  telegram: '@FozuZXC',
  portfolio: 'https://fozu-portfolio.netlify.app',
  github: 'https://github.com/Fozu7916',
  leetcode: 'https://leetcode.com/u/Fozuzzzxxxccc/',
  /** Положи фото в public/images/avatar.jpg — путь захардкожен здесь */
  avatar: '/images/avatar.jpg',
};

export const socialLinks = [
  { label: 'Portfolio', href: profile.portfolio },
  { label: 'Gmail', href: `mailto:${profile.email}` },
  { label: 'Telegram', href: 'https://t.me/FozuZXC' },
  { label: 'GitHub', href: profile.github },
  { label: 'LeetCode', href: profile.leetcode },
];

export const education = {
  schools: [
    '9 класс — МБОУ СШ (базовая)',
    '11 класс — физико-математическая школа при СФУ',
  ],
  certificate: 'Красный аттестат за 9 класс, без троек за 11',
  ege: [
    { subject: 'Русский', score: 75 },
    { subject: 'Проф. математика', score: 95 },
    { subject: 'Информатика', score: 80 },
  ],
};

export const scienceAchievements = [
  'Заключительные этапы по математике: ОММО, Изумруд',
  'Заключительные этапы по информатике: Изумруд, Бельчонок, Газпром, Шаг в будущее, Высшая Проба',
  '2 место на конференции «Леонардо» (Москва, за счёт СФУ) — член ГИР (фонд одарённых детей)',
  'Первая публикация в связи с участием в «Енисейской теплофизике»',
];

export const itAchievements = [
  'Оффер в «Апогей 1С» после хакатона (отсеялось 60% команд)',
  'Fullstack-проект AlekseyBook — соцсеть на React + ASP.NET Core',
  'Desktop-приложения на C++/Qt с MVC-архитектурой и libmpv',
  'HacatonProTechno — медиахаб для молодёжного центра (Streamlit + VK API)',
];
