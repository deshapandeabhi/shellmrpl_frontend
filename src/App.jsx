import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// ── Scraped pages (pixel-perfect Elementor content) ──────────────────────────
import ProfilePage       from './pages/ProfilePage';
import VisionPage        from './pages/VisionPage';
import BoardPage         from './pages/BoardPage';
import ManagementPage    from './pages/ManagementPage';
import ProductsPage      from './pages/ProductsPage';
import NetworkPage       from './pages/NetworkPage';
import PricesPage        from './pages/PricesPage';
import ShellPage         from './pages/ShellPage';
import MRPLPage          from './pages/MRPLPage';
import HSSEPage          from './pages/HSSEPage';
import QualityControlPage from './pages/QualityControlPage';
import VigilancePage     from './pages/VigilancePage';
import AnnualReturnPage  from './pages/AnnualReturnPage';
import CSRPolicyPage     from './pages/CSRPolicyPage';
import CSRCommitteePage  from './pages/CSRCommitteePage';
import CSRProjectsPage   from './pages/CSRProjectsPage';
import GalleryPage       from './pages/GalleryPage';
import CareersPage       from './pages/CareersPage';
import ContactPage       from './pages/ContactPage';

/**
 * App – Root layout
 *
 * WordPress layout explained:
 *   ┌─────────────────────────────────────────────┐
 *   │  HEADER (fixed, 90px tall, full width)      │
 *   │  [white 248px logo] | [navy nav + search]   │
 *   └─────────────────────────────────────────────┘
 *   ┌────────────┐  ┌──────────────────────────────┐
 *   │  SIDEBAR   │  │  CONTENT (scrollable only)   │
 *   │  (fixed)   │  │                              │
 *   │  248px     │  │  Hero image full width        │
 *   │  navy      │  │  Page content + Footer        │
 *   └────────────┘  └──────────────────────────────┘
 *
 * CSS implementation:
 *   - Header: position fixed, z-50, top 0, left 0, right 0, height 90px
 *   - Sidebar: position fixed, z-40, top 90px, left 0, width 248px, bottom 0
 *   - Content: margin-left 248px, margin-top 90px, height calc(100vh - 90px), overflow-y auto
 */
function App() {
  return (
    <Router>
      {/* Fixed header spans the entire top */}
      <Header />

      {/* Fixed left sidebar (below header) */}
      <Sidebar />

      {/*
       * Scrollable content area
       * margin-left: 248px (sidebar width)
       * margin-top:  90px  (header height)
       * height: calc(100vh - 90px) + overflow-y: auto → ONLY this scrolls
       */}
      <main
        style={{
          marginLeft: '248px',
          marginTop: '90px',
          height: 'calc(100vh - 90px)',   /* EXACT height so scroll works */
          overflowY: 'auto',              /* ONLY this scrolls */
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Routes>
          <Route path="/"                          element={<ProfilePage />} />
          <Route path="/about"                     element={<ProfilePage />} />
          <Route path="/vision-and-values"         element={<VisionPage />} />
          <Route path="/board-of-directors"        element={<BoardPage />} />
          <Route path="/management-team"           element={<ManagementPage />} />

          <Route path="/products-services"                element={<ProductsPage />} />
          <Route path="/shell-mrpl-aviation-network"      element={<NetworkPage />} />
          <Route path="/posted-airfield-prices"           element={<PricesPage />} />
          <Route path="/shell-aviations-global-network"   element={<NetworkPage />} />

          <Route path="/company-parentage"         element={<ShellPage />} />
          <Route path="/shell"                     element={<ShellPage />} />
          <Route path="/mrpl"                      element={<MRPLPage />} />

          <Route path="/hsse"                      element={<HSSEPage />} />
          <Route path="/quality-control"           element={<QualityControlPage />} />

          <Route path="/investors-information"     element={<VigilancePage />} />
          <Route path="/vigilance-mechanism"       element={<VigilancePage />} />
          <Route path="/annual-return"             element={<AnnualReturnPage />} />
          <Route path="/csr"                       element={<CSRPolicyPage />} />
          <Route path="/csr/committee-members"     element={<CSRCommitteePage />} />
          <Route path="/csr/projects"              element={<CSRProjectsPage />} />

          <Route path="/gallery"                   element={<GalleryPage />} />
          <Route path="/working-with-shell-mrpl-aviation-2" element={<CareersPage />} />
          <Route path="/careers"                   element={<CareersPage />} />
          <Route path="/contact"                   element={<ContactPage />} />
          <Route path="/login"                     element={<ContactPage />} />

          <Route path="*" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
