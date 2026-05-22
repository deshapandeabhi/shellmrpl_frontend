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

function RouteTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const routes = {
      '/': { title: 'Home', desc: 'World-class aviation turbine fuel (Jet A-1) and into-plane services.' },
      '/about': { title: 'About Us', desc: 'Learn about our strategic partnership between Shell and MRPL.' },
      '/vision-and-values': { title: 'Vision & Values', desc: 'Our core values, business principles, and commitment to integrity.' },
      '/board-of-directors': { title: 'Board of Directors', desc: 'The leadership guiding Shell MRPL Aviation Fuels and Services Limited.' },
      '/management-team': { title: 'Management Team', desc: 'The executive management team at Shell MRPL Aviation Fuels and Services Limited.' },
      '/products-services': { title: 'Products & Services', desc: 'Aviation turbine fuel, technical services, and operational excellence.' },
      '/shell-mrpl-aviation-network': { title: 'Our Network', desc: 'Discover our operational presence across major Indian airports.' },
      '/posted-airfield-prices': { title: 'Airfield Prices', desc: 'Current posted prices for aviation fuel across our network.' },
      '/hsse': { title: 'HSSE', desc: 'Health, Safety, Security and Environment standards at Shell MRPL.' },
      '/quality-control': { title: 'Quality Control', desc: 'Industry-leading quality assurance and product integrity.' },
      '/annual-return': { title: 'Annual Returns', desc: 'Financial and corporate compliance records and downloads.' },
      '/csr': { title: 'CSR', desc: 'Corporate Social Responsibility initiatives and community impact.' },
      '/careers': { title: 'Careers', desc: 'Explore career opportunities and join the Shell MRPL Aviation Fuels and Services Limited team.' },
      '/contact-us': { title: 'Contact Us', desc: 'Get in touch with our departments for sales, media, or general queries.' },
      '/legal': { title: 'Legal & Privacy', desc: 'Legal policies, terms of service, and privacy guidelines.' }
    };

    const current = routes[pathname] || { title: 'Aviation Services', desc: 'Shell MRPL Aviation Fuels and Services Limited' };
    
    document.title = `${current.title} | Shell MRPL Aviation Fuels and Services Limited`;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', current.desc);
    }
  }, [pathname]);

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
      <RouteTracker />

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
