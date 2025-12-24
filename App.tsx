import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import Home from './pages/Home';
import About from './pages/About';

// Placeholder components for other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center bg-slate-50">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 mb-4">{title}</h1>
    <p className="text-gray-500 max-w-lg">
      This page is currently under construction. We are working hard to bring you a premium experience.
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Placeholder title="Academic Excellence" />} />
            <Route path="/admissions" element={<Placeholder title="Admissions" />} />
            <Route path="/gallery" element={<Placeholder title="Photo Gallery" />} />
            <Route path="/contact" element={<Placeholder title="Contact Us" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Assistant />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;