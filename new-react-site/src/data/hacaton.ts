import { FeatureCardData } from '../components/FeatureCard';

export const hacatonMeta = {
  title: 'HacatonProTechno',
  subtitle: 'Медиахаб для молодёжного центра',
  description:
    'Сервис для медиакоманды: создание контента, шаблоны, очереди, модерация, автопубликация в VK, аналитика и экспорт отчётов.',
  github: 'https://github.com/Fozu7916/HacatonProTechno',
  badge: 'Hackathon · Python',
  accent: '#10b981',
};

export const hacatonTech = [
  'Python 3.11+',
  'Streamlit',
  'MySQL',
  'VK API',
  'pandas',
  'matplotlib',
  'fpdf2',
  'xlsxwriter',
];

export const hacatonFeatures: FeatureCardData[] = [
  {
    icon: '👥',
    title: 'Ролевая модель',
    description:
      'Волонтёр, Редактор, СММ-специалист и Руководитель — каждая роль видит свой набор инструментов.',
    tags: ['RBAC', '4 роли'],
    variant: 'wide',
  },
  {
    icon: '✍️',
    title: 'Генерация контента',
    description:
      'Посты по шаблонам с ручным редактированием. ИИ-генерация через OpenRouter / OpenAI-compatible API.',
    tags: ['LLM', 'Шаблоны'],
  },
  {
    icon: '😊',
    title: 'Emoji-picker',
    description:
      'Ручной выбор эмодзи через выпадающее окно с категориями — как в соцсетях.',
    tags: ['UX'],
  },
  {
    icon: '📎',
    title: 'Вложения',
    description:
      'Фото, видео и документы — несколько файлов в одном посте. Загрузка в VK как photo/doc.',
    tags: ['photo', 'video', 'doc'],
  },
  {
    icon: '📅',
    title: 'Очередь и календарь',
    description:
      'Статусы: черновик → запланировано → опубликовано. Кастомный календарь с pop-up по клику на плашку.',
    tags: ['Scheduler', 'Calendar'],
    variant: 'wide',
  },
  {
    icon: '🔵',
    title: 'Публикация в VK',
    description:
      'Отправка на стену группы, защита от дублей, синхронизация постов из VK в БД.',
    tags: ['VK API', 'Anti-duplicate'],
  },
  {
    icon: '⚙️',
    title: 'Background Worker',
    description:
      'Автопубликация каждые 30 сек. Атомарная блокировка — один пост не уйдёт дважды. При ошибке — возврат в ready.',
    tags: ['worker', 'production'],
    variant: 'highlight',
  },
  {
    icon: '📊',
    title: 'Дашборд руководителя',
    description:
      'KPI, графики динамики, таблица по дням, топ-3 поста. Экспорт в PDF и Excel с графиками.',
    tags: ['PDF', 'Excel', 'Analytics'],
    variant: 'wide',
  },
];

export const hacatonStructure = [
  { path: 'analytics/', desc: 'Аналитика и генерация PDF' },
  { path: 'database/', desc: 'Подключение к БД, SQL-операции' },
  { path: 'parser/', desc: 'Парсинг VK, загрузка вложений' },
  { path: 'publisher/', desc: 'Публикация и фоновой worker' },
  { path: 'custom_calendar_component/', desc: 'Кастомный календарь с popup' },
  { path: 'app.py', desc: 'Основной Streamlit UI' },
];

export const hacatonLimitations = [
  'Ролевая модель не 1-в-1 с ТЗ (администратор/наблюдатель пока не выделены)',
  'Нет кросс-постинга на несколько платформ',
  'Нет конструктора опросов и викторин',
];
