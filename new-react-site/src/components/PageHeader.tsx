import React from 'react';
import { motion } from 'framer-motion';
import './PageHeader.css';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ label, title, description }) => (
  <motion.header
    className="page-header"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="page-header__label">{label}</span>
    <h1 className="page-header__title">{title}</h1>
    {description && <p className="page-header__desc">{description}</p>}
  </motion.header>
);

export default PageHeader;
