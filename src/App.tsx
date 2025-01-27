import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WindowsTaskbar from './components/Layout/WindowsTaskbar';
import LanguageSwitcher from './components/LanguageSwitcher';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TechWatch from './pages/TechWatch';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import HAProxyPage from './pages/temp/HAProxy/HAProxyPage';
import './i18n/i18n';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#018281] pb-12">
        <LanguageSwitcher />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tech-watch" element={<TechWatch />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/temp/haproxy" element={<HAProxyPage />} />
          </Routes>
        </div>
        <WindowsTaskbar />
      </div>
    </Router>
  );
}

export default App;