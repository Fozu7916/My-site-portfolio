import React, { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { education, scienceAchievements, itAchievements } from '../data/profile';
import '../styles/HallOfFame.css';

const HallOfFame: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const handleOpen = (src: string) => {
    setSelectedImg(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <div className="hof-page">
      <PageHeader
        label="Achievements"
        title="Hall of Fame"
        description="Образование, научные олимпиады, IT-достижения и профессиональное обучение."
      />

      <div className="hof-sections">
        <motion.section
          className="hof-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="hof-section__title">🎓 Образование</h2>
          <ul className="hof-list">
            {education.schools.map((school) => (
              <li key={school}>{school}</li>
            ))}
            <li>{education.certificate}</li>
          </ul>
          <div className="hof-ege">
            {education.ege.map((item) => (
              <div key={item.subject} className="hof-ege__item">
                <span className="hof-ege__score">{item.score}</span>
                <span className="hof-ege__subject">{item.subject}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="hof-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <h2 className="hof-section__title">🔬 Наука</h2>
          <ul className="hof-list">
            {scienceAchievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="hof-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="hof-section__title">💻 IT</h2>
          <ul className="hof-list">
            {itAchievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="hof-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className="hof-section__title">📚 Профессиональные курсы</h2>

          <div className="hof-course">
            <p className="hof-course__text">Курс от Яндекса по C++</p>
            <button
              type="button"
              className="hof-course__img-btn"
              onClick={() => handleOpen('images/Yandex.png')}
            >
              <img src="images/Yandex.png" alt="Yandex Certificate" className="hof-course__img" />
            </button>
          </div>

          <div className="hof-course">
            <p className="hof-course__text">Курсы по промышленному программированию на C++ от VK (Stepik)</p>
            <button
              type="button"
              className="hof-course__img-btn"
              onClick={() => handleOpen('images/Stepik.png')}
            >
              <img src="images/Stepik.png" alt="Stepik Certificate" className="hof-course__img" />
            </button>
          </div>
        </motion.section>
      </div>

      <Modal open={open} onClose={handleClose} className="hof-lightbox">
        <Box sx={{ outline: 'none' }}>
          {selectedImg && (
            <img
              src={selectedImg}
              alt="Увеличенное изображение"
              className="hof-lightbox__img"
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default HallOfFame;
