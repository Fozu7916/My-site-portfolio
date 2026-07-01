import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { YANDEX_METRIKA_ID } from '../analytics/yandexMetrika';

/** Отправляет hit при смене маршрута в SPA (React Router). */
const YandexMetrikaTracker = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const url = location.pathname + location.search + location.hash;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.ym?.(YANDEX_METRIKA_ID, 'hit', url);
  }, [location]);

  return null;
};

export default YandexMetrikaTracker;
