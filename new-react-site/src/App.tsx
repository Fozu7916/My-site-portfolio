import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBackground from './components/HeroBackground';
import ContactModal from './components/ContactModal';
import { ContactModalProvider } from './context/ContactModalContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Devlog from './pages/Devlog';
import PortfolioPage from './pages/PortfolioPage';
import First from './pages/cpp/First';
import Second from './pages/cpp/Second';
import Third from './pages/cpp/Third';
import Fourth from './pages/cpp/Fourth';
import Fifth from './pages/cpp/Fifth';
import HallOfFame from './pages/HallOfFame';
import ReactFirst from './pages/react/ReactFirst';
import HacatonProTechno from './pages/python/HacatonProTechno';

function App() {
  return (
    <ContactModalProvider>
      <Router>
        <div className="app">
          <HeroBackground />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/devlog" element={<Devlog />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/cpp/first" element={<First />} />
              <Route path="/cpp/second" element={<Second />} />
              <Route path="/cpp/third" element={<Third />} />
              <Route path="/cpp/fourth" element={<Fourth />} />
              <Route path="/cpp/fifth" element={<Fifth />} />
              <Route path="/react/alekseybook" element={<ReactFirst />} />
              <Route path="/python/hacaton" element={<HacatonProTechno />} />
            </Routes>
          </main>
          <Footer />
          <ContactModal />
        </div>
      </Router>
    </ContactModalProvider>
  );
}

export default App;
