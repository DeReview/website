import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './components/Home.tsx';
import TermsOfService from './components/TermsOfService.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-text bg-background">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
