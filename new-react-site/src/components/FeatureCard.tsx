import React from 'react';
import { motion } from 'framer-motion';
import './FeatureCard.css';

export interface FeatureCardData {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  variant?: 'default' | 'wide' | 'highlight';
}

interface FeatureCardProps {
  feature: FeatureCardData;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => (
  <motion.article
    className={`feature-card feature-card--${feature.variant ?? 'default'}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
  >
    <div className="feature-card__shine" aria-hidden="true" />
    <span className="feature-card__icon">{feature.icon}</span>
    <h3 className="feature-card__title">{feature.title}</h3>
    <p className="feature-card__desc">{feature.description}</p>
    {feature.tags && feature.tags.length > 0 && (
      <div className="feature-card__tags">
        {feature.tags.map((tag) => (
          <span key={tag} className="feature-card__tag">{tag}</span>
        ))}
      </div>
    )}
  </motion.article>
);

export default FeatureCard;
