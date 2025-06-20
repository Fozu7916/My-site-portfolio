import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import Devlog from './pages/Devlog';
import First from './pages/cpp/First';
import Second from './pages/cpp/Second';
import Third from './pages/cpp/Third';
import Fourth from './pages/cpp/Fourth';
import HallOfFame from './pages/HallOfFame';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/devlog" element={<Devlog />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            <Route path="/cpp/first" element={<First />} />
            <Route path="/cpp/second" element={<Second />} />
            <Route path="/cpp/third" element={<Third />} />
            <Route path="/cpp/fourth" element={<Fourth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 