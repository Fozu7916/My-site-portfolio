import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ContactProvider } from '../features/contact/ContactProvider';
import { AboutPage } from '../pages/AboutPage';
import { DevlogPage } from '../pages/DevlogPage';
import { HallOfFamePage } from '../pages/HallOfFamePage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProjectDetailPage } from '../pages/ProjectDetailPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { AppLayout } from '../widgets/layout/AppLayout';
import '../pages/pages.css';

const legacyRoutes: Record<string, string> = {
  '/cpp/second': '/projects/password-generator',
  '/cpp/fourth': '/projects/bank-system',
  '/cpp/fifth': '/projects/qf-player',
  '/react/alekseybook': '/projects/alekseybook',
  '/python/hacaton': '/projects/mediahub',
};

export function App() {
  return (
    <BrowserRouter>
      <ContactProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:slug" element={<ProjectDetailPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="devlog" element={<DevlogPage />} />
            <Route path="hall-of-fame" element={<HallOfFamePage />} />
            {Object.entries(legacyRoutes).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ContactProvider>
    </BrowserRouter>
  );
}
