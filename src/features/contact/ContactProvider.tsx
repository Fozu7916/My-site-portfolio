import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { profile } from '../../shared/data/profile';
import './contact.css';

interface ContactContextValue {
  openContact: () => void;
}

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && close();
    document.addEventListener('keydown', closeOnEscape);
    document.body.classList.add('modal-open');
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('modal-open');
      previouslyFocused?.focus();
    };
  }, [close, open]);

  const value = useMemo(() => ({ openContact: () => setOpen(true) }), []);

  return (
    <ContactContext.Provider value={value}>
      {children}
      {open && (
        <div className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-title">
          <button className="modal-backdrop" type="button" onClick={close} aria-label="Close contact dialog" />
          <div className="contact-dialog__panel">
            <button ref={closeButtonRef} type="button" className="icon-button" onClick={close} aria-label="Close contact dialog">×</button>
            <span className="eyebrow">Start a conversation</span>
            <h2 id="contact-title">Let’s build something reliable.</h2>
            <p>I am open to .NET opportunities and engineering conversations.</p>
            <p className="contact-dialog__email">{profile.email}</p>
            <div className="contact-dialog__actions">
              <a className="button button--ghost" href={profile.telegramUrl} target="_blank" rel="noreferrer">Telegram</a>
            </div>
          </div>
        </div>
      )}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) throw new Error('useContact must be used inside ContactProvider');
  return context;
}
