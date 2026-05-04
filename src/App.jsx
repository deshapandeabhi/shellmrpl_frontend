import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import ProfilePage        from './pages/ProfilePage';
import VisionPage         from './pages/VisionPage';
import BoardPage          from './pages/BoardPage';
import ManagementPage     from './pages/ManagementPage';
import ProductsPage       from './pages/ProductsPage';
import NetworkPage        from './pages/NetworkPage';
import PricesPage         from './pages/PricesPage';
import ShellPage          from './pages/ShellPage';
import MRPLPage           from './pages/MRPLPage';
import HSSEPage           from './pages/HSSEPage';
import QualityControlPage from './pages/QualityControlPage';
import VigilancePage      from './pages/VigilancePage';
import AnnualReturnPage   from './pages/AnnualReturnPage';
import CSRPolicyPage      from './pages/CSRPolicyPage';
import CSRCommitteePage   from './pages/CSRCommitteePage';
import CSRProjectsPage    from './pages/CSRProjectsPage';
import GalleryPage        from './pages/GalleryPage';
import CareersPage        from './pages/CareersPage';
import ContactPage        from './pages/ContactPage';
import LegalPage          from './pages/LegalPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ScrollToTop />

      <Header
        mobileOpen={mobileOpen}
        onHamburgerClick={() => setMobileOpen(true)}
        onMobileClose={() => setMobileOpen(false)}
        isScrolled={isScrolled}
      />

      <main className="site-main" id="main-content">
        <Routes>
          <Route path="/"                                     element={<ProfilePage />} />
          <Route path="/about"                                element={<ProfilePage />} />
          <Route path="/vision-and-values"                    element={<VisionPage />} />
          <Route path="/board-of-directors"                   element={<BoardPage />} />
          <Route path="/management-team"                      element={<ManagementPage />} />

          <Route path="/products-services"                    element={<ProductsPage />} />
          <Route path="/shell-mrpl-aviation-network"          element={<NetworkPage />} />
          <Route path="/posted-airfield-prices"               element={<PricesPage />} />
          <Route path="/shell-aviations-global-network"       element={<NetworkPage />} />

          <Route path="/company-parentage"                    element={<ShellPage />} />
          <Route path="/shell"                                element={<ShellPage />} />
          <Route path="/mrpl"                                 element={<MRPLPage />} />

          <Route path="/hsse"                                 element={<HSSEPage />} />
          <Route path="/quality-control"                      element={<QualityControlPage />} />

          <Route path="/investors-information"                element={<VigilancePage />} />
          <Route path="/vigilance-mechanism"                  element={<VigilancePage />} />
          <Route path="/annual-return"                        element={<AnnualReturnPage />} />
          <Route path="/csr"                                  element={<CSRPolicyPage />} />
          <Route path="/csr/committee-members"                element={<CSRCommitteePage />} />
          <Route path="/csr/projects"                         element={<CSRProjectsPage />} />

          <Route path="/gallery"                              element={<GalleryPage />} />
          <Route path="/working-with-shell-mrpl-aviation-2"  element={<CareersPage />} />
          <Route path="/careers"                              element={<CareersPage />} />
          <Route path="/contact"                              element={<ContactPage />} />
          <Route path="/login"                                element={<ContactPage />} />
          
          <Route path="/privacy-policy"                       element={<LegalPage title="Privacy Policy" />} />
          <Route path="/terms-of-use"                         element={<LegalPage title="Terms of Use" />} />
          
          <Route path="*"                                     element={<ProfilePage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
