import React, { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
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
        description="Научные олимпиады, IT-достижения и профессиональное обучение."
      />

      <div className="hof-sections">
        <motion.section
          className="hof-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="hof-section__title">Научные достижения</h2>
          <ul className="hof-list">
            <li>Призер/участник заключительных этапов: Высшая Проба, Изумруд, Бельчонок, Газпром, Шаг в будущее, ОММО.</li>
            <li>2 место на конференции «Леонардо» (Москва), член ГИР (фонд одарённых детей).</li>
            <li>Публикация в рамках «Енисейской теплофизики».</li>
          </ul>
        </motion.section>

        <motion.section
          className="hof-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="hof-section__title">IT Достижения</h2>
          <ul className="hof-list">
            <li>Оффер в «Апогей 1С» (по итогам хакатона).</li>
          </ul>
        </motion.section>

        <motion.section
          className="hof-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className="hof-section__title">Профессиональные курсы</h2>

          <div className="hof-course">
            <p className="hof-course__text">1) Прошел курс от Яндекса по С++</p>
            <button
              type="button"
              className="hof-course__img-btn"
              onClick={() => handleOpen('images/Yandex.png')}
            >
              <img src="images/Yandex.png" alt="Yandex Certificate" className="hof-course__img" />
            </button>
          </div>

          <div className="hof-course">
            <p className="hof-course__text">2) Пройдены курсы по «промышленному» программированию на С++ от VK</p>
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
