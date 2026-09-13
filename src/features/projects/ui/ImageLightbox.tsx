import { useEffect, useRef } from 'react';
import './lightbox.css';

interface ImageLightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!src) return undefined;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', closeOnEscape);
    document.body.classList.add('modal-open');
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('modal-open');
      previouslyFocused?.focus();
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded project image">
      <button className="modal-backdrop" type="button" onClick={onClose} aria-label="Close image" />
      <button ref={closeButtonRef} type="button" className="lightbox__close" onClick={onClose} aria-label="Close image">Close</button>
      <img src={src} alt={alt} />
    </div>
  );
}
