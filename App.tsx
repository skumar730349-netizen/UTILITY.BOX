import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import TermsPage from './pages/TermsPage';
import { TOOLS } from './constants/tools';
import ScrollToTop from './components/ScrollToTop';
import FeedbackPage from './pages/FeedbackPage';
import NativeAdBanner from './components/NativeAdBanner';
import AdBanner from './components/AdBanner';
import ReportsPage from './pages/ReportsPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-light text-dark dark:bg-dark dark:text-light min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <NativeAdBanner />
          <div className="lg:flex lg:gap-8">
            <div className="lg:flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
                <Route path="/terms-and-conditions" element={<TermsPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                {TOOLS.map((tool) => (
                  <Route key={tool.path} path={tool.path} element={<tool.component />} />
                ))}
                {TOOLS.map((tool) => (
                  <Route key={tool.detailsPath} path={tool.detailsPath} element={<tool.detailsComponent />} />
                ))}
              </Routes>
              <div className="mt-8">
                <AdBanner
                  adKey="12b5c70be37524ca621454f728dc6df7"
                  format="iframe"
                  height={60}
                  width={468}
                />
              </div>
            </div>
            <aside className="hidden lg:block lg:w-64 mt-8 lg:mt-0">
              <div className="sticky top-20 text-center">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Advertisement</h3>
                <AdBanner
                  adKey="4c491b0fb4aa67f29e1e08c167c52659"
                  format="iframe"
                  height={300}
                  width={160}
                />
              </div>
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;