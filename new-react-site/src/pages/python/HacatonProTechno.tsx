import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FeatureCard from '../../components/FeatureCard';
import {
  hacatonMeta,
  hacatonTech,
  hacatonFeatures,
  hacatonStructure,
  hacatonLimitations,
} from '../../data/hacaton';
import '../../styles/ProjectShowcase.css';

const HacatonProTechno: React.FC = () => (
  <div className="showcase">
    <motion.header
      className="showcase-hero showcase-hero--green"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <span className="showcase-hero__badge">{hacatonMeta.badge}</span>
      <h1 className="showcase-hero__title">{hacatonMeta.title}</h1>
      <p className="showcase-hero__subtitle">{hacatonMeta.subtitle}</p>
      <p className="showcase-hero__desc">{hacatonMeta.description}</p>

      <div className="showcase-hero__tech">
        {hacatonTech.map((t) => (
          <span key={t} className="showcase-hero__tech-tag">{t}</span>
        ))}
      </div>

      <div className="showcase-hero__actions">
        <a
          href={hacatonMeta.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          GitHub
        </a>
        <Link to="/projects" className="btn btn--ghost">← Все проекты</Link>
      </div>
    </motion.header>

    <section className="showcase-section">
      <h2 className="showcase-section__title">Ключевые возможности</h2>
      <div className="feature-bento">
        {hacatonFeatures.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>

    <section className="showcase-section">
      <h2 className="showcase-section__title">Автопубликация</h2>
      <motion.div
        className="showcase-flow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="showcase-flow__step">
          <span className="showcase-flow__num">01</span>
          <p>Worker проверяет очередь каждые <strong>30 секунд</strong></p>
        </div>
        <div className="showcase-flow__arrow">→</div>
        <div className="showcase-flow__step">
          <span className="showcase-flow__num">02</span>
          <p>Публикует посты <code>ready</code> с <code>scheduled_at ≤ NOW()</code></p>
        </div>
        <div className="showcase-flow__arrow">→</div>
        <div className="showcase-flow__step">
          <span className="showcase-flow__num">03</span>
          <p>Атомарная блокировка — без дублей. Ошибка VK → возврат в <code>ready</code></p>
        </div>
      </motion.div>
      <pre className="showcase-code"><code>{`python -m streamlit run app.py      # UI
python -m publisher.worker          # автопубликация`}</code></pre>
    </section>

    <section className="showcase-section">
      <h2 className="showcase-section__title">CI/CD</h2>
      <div className="showcase-cicd">
        <motion.div
          className="showcase-cicd__card"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="showcase-cicd__label">CI</span>
          <p>Push/PR → установка deps → синтаксис → smoke-import <code>app.py</code></p>
        </motion.div>
        <motion.div
          className="showcase-cicd__card"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="showcase-cicd__label">CD</span>
          <p>Tags <code>v*</code> → zip-бандл → артефакт в GitHub Actions</p>
        </motion.div>
      </div>
    </section>

    <section className="showcase-section">
      <h2 className="showcase-section__title">Структура проекта</h2>
      <div className="showcase-tree">
        {hacatonStructure.map((item, i) => (
          <motion.div
            key={item.path}
            className="showcase-tree__item"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <code className="showcase-tree__path">{item.path}</code>
            <span className="showcase-tree__desc">{item.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="showcase-section showcase-section--muted">
      <h2 className="showcase-section__title">Ограничения</h2>
      <ul className="showcase-limitations">
        {hacatonLimitations.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  </div>
);

export default HacatonProTechno;
