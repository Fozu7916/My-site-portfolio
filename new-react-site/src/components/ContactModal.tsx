import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile, socialLinks } from '../data/profile';
import { useContactModal } from '../context/ContactModalContext';
import './ContactModal.css';

const ContactModal: React.FC = () => {
  const { isOpen, closeContact } = useContactModal();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeContact();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, closeContact]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <motion.button
            type="button"
            className="contact-modal__backdrop"
            onClick={closeContact}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Закрыть"
          />
          <motion.div
            className="contact-modal__card"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          >
            <button type="button" className="contact-modal__close" onClick={closeContact} aria-label="Закрыть">
              ×
            </button>

            <span className="contact-modal__label">Contact</span>
            <h2 id="contact-modal-title" className="contact-modal__title">Связаться со мной</h2>
            <p className="contact-modal__desc">
              Открыт к .NET backend-позициям, стажировкам и интересным проектам.
            </p>

            <div className="contact-modal__primary">
              <a href={`mailto:${profile.email}`} className="contact-modal__link contact-modal__link--primary">
                <span className="contact-modal__link-icon">✉</span>
                <span>
                  <span className="contact-modal__link-label">Email</span>
                  <span className="contact-modal__link-value">{profile.email}</span>
                </span>
              </a>
              <a
                href="https://t.me/FozuZXC"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-modal__link contact-modal__link--primary"
              >
                <span className="contact-modal__link-icon">💬</span>
                <span>
                  <span className="contact-modal__link-label">Telegram</span>
                  <span className="contact-modal__link-value">{profile.telegram}</span>
                </span>
              </a>
            </div>

            <div className="contact-modal__secondary">
              {socialLinks
                .filter(({ label }) => !['Gmail', 'Telegram'].includes(label))
                .map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="contact-modal__chip"
                  >
                    {label}
                  </a>
                ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
