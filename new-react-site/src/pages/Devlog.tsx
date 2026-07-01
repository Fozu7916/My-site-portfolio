import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import '../styles/Devlog.css';

const devlogEntries = [
  { date: '25.07', year: '2025', content: 'Обновление позиционирования: фокус на .NET Backend, рефакторинг About и Projects' },
  { date: '20.06', year: '2025', content: 'Добавлен проект Social Network' },
  { date: '20.06', year: '2025', content: 'Редизайн + создание Hall of Fame' },
  { date: '15.05', year: '2025', content: 'Настройка CI/CD для проекта' },
  { date: '12.04', year: '2025', content: 'Реализация стека React + TypeScript' },
  { date: '12.01', year: '2025', content: 'Начало разработки новой версии сайта на React' },
  { date: '19.01', year: '2025', content: 'Полный редизайн проекта' },
  { date: '26.01', year: '2025', content: 'Адаптация сайта под мобильные устройства' },
  { date: '04.04', year: '2024', content: 'Создано первое Qt приложение' },
];

const Devlog: React.FC = () => (
  <div className="devlog-page">
    <PageHeader
      label="Journal"
      title="Devlog"
      description="Хроника разработки — от первого Qt-приложения до fullstack-проектов на .NET."
    />

    <div className="devlog-timeline">
      {devlogEntries.map((entry, index) => (
        <motion.article
          key={`${entry.date}-${index}`}
          className="devlog-entry"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
        >
          <div className="devlog-entry__marker" />
          <div className="devlog-entry__date">
            <span className="devlog-entry__day">{entry.date}</span>
            <span className="devlog-entry__year">{entry.year}</span>
          </div>
          <p className="devlog-entry__content">{entry.content}</p>
        </motion.article>
      ))}
    </div>
  </div>
);

export default Devlog;
