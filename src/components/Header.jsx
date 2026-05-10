import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV = [
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Company Profile', path: '/' },
      { label: 'Vision and Values', path: '/vision-and-values' },
      { label: 'Board of Directors', path: '/board-of-directors' },
      { label: 'Management Team', path: '/management-team' },
    ],
  },
  {
    label: 'Products and Services',
    path: '/products-services',
    children: [
      { label: 'Products and Services', path: '/products-services' },
      { label: 'Our Airport Network', path: '/shell-mrpl-aviation-network' },
      // { label: 'Posted Airfield Prices',           path: '/posted-airfield-prices' },
      // { label: "Shell Aviation's Global Network",  path: '/shell-aviations-global-network' },
    ],
  },
  {
    label: 'Company Parentage',
    path: '/company-parentage',
    children: [
      { label: 'Shell', path: '/shell' },
      { label: 'MRPL', path: '/mrpl' },
    ],
  },
  {
    label: 'HSSE and Quality',
    path: '/hsse',
    children: [
      { label: 'HSSE', path: '/hsse' },
      { label: 'Quality Control', path: '/quality-control' },
    ],
  },
  {
    label: 'Investors',
    path: '/investors-information',
    children: [
      { label: 'Vigilance Mechanism', path: '/vigilance-mechanism' },
      { label: 'Annual Return', path: '/annual-return' },
      { label: 'CSR Policy', path: '/csr' },
      { label: 'Committee Members', path: '/csr/committee-members' },
      { label: 'CSR Projects', path: '/csr/projects' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
];

const ChevronDown = ({ className }) => (
  <svg
    className={className}
    width="10" height="10" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const MobileItem = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = item.children
    ? item.children.some(c => c.path === location.pathname)
    : location.pathname === item.path;

  if (!item.children) {
    return (
      <li className="mobile-nav-item">
        <Link
          to={item.path}
          className={`mobile-nav-link ${isActive ? 'active' : ''}`}
          onClick={onClose}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="mobile-nav-item">
      <button
        className={`mobile-nav-link ${isActive ? 'active' : ''} trigger`}
        onClick={() => setOpen(!open)}
      >
        <span>{item.label}</span>
        <ChevronDown className={`mobile-chevron ${open ? 'rotated' : ''}`} />
      </button>
      <div className={`mobile-submenu-wrapper ${open ? 'open' : ''}`}>
        <ul className="mobile-submenu">
          {item.children.map((child, idx) => (
            <li key={child.path} style={{ animationDelay: `${idx * 0.05}s` }}>
              <Link
                to={child.path}
                className={`mobile-sublink ${location.pathname === child.path ? 'active' : ''}`}
                onClick={onClose}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default function Header({ mobileOpen, onHamburgerClick, onMobileClose, isScrolled }) {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/about';

  const isActive = (item) => {
    if (item.children) return item.children.some(c => c.path === location.pathname);
    return location.pathname === item.path;
  };

  const headerClass = `site-header ${isScrolled ? 'is-scrolled' : ''}`;

  return (
    <>
      <style>{`
        :root {
          --header-padding: clamp(20px, 5vw, 60px);
          --header-height: 90px;
          --header-height-compact: 76px;
          --t-nav: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .site-header {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: auto;
          min-height: var(--header-height);
          z-index: 2000;
          transition: var(--t-nav);
          display: flex;
          align-items: center;
          padding: 15px var(--header-padding);
          background: var(--shell-white);
          /* Shell Yellow top accent — satisfies ≥5% Yellow focal-point rule */
          border-top: 4px solid var(--shell-yellow);
        }


        .site-header.is-scrolled {
          height: var(--header-height-compact);
          margin: 12px var(--header-padding);
          padding: 0 24px;
          background: rgba(var(--shell-white-rgb), 0.95);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border-radius: 48px;
          border: 1px solid rgba(var(--shell-white-rgb), 0.4);
          box-shadow: 0 20px 40px rgba(var(--grey-700-rgb), 0.1);
          width: calc(100vw - (var(--header-padding) * 2));
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .site-logo-link {
          flex-shrink: 0;
        }

        .site-logo {
          width: 300px; /* Firm width for desktop */
          max-width: 100%;
          height: auto;
          transition: var(--t-nav);
          flex-shrink: 0;
        }

        /* Logo remains full size on scroll */

        /* Desktop Nav */
        .desktop-nav {
          display: flex;
          gap: clamp(10px, 1.5vw, 24px); /* Optimized spacing to prevent overflow */
          align-items: center;
          margin: 0 10px;
        }

        .nav-link {
          font-family: var(--font-secondary);
          font-size: 16px;
          font-weight: 500; /* Shell Medium */
          color: var(--grey-700); /* Shell Grey 700 */
          transition: var(--t-nav);
          opacity: 1;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link:hover, .nav-link.active {
          opacity: 1;
          color: var(--grey-900) !important;
        }

        /* Removed special hover for on-hero */

        /* Dropdown Alignment - Aligned to parent start */
        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .nav-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--shell-white);
          min-width: 240px;
          border-radius: 8px;
          padding: 10px 0;
          box-shadow: 0 15px 35px rgba(var(--grey-700-rgb), 0.1);
          border: 1px solid var(--grey-300); /* Shell Grey 300 */
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          transform: translateY(10px);
          z-index: 3000;
        }

        .nav-item:hover .nav-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .nav-dropdown-link {
          display: block;
          padding: 12px 20px;
          font-family: var(--font-primary);
          font-size: 14px;
          font-weight: 500; /* Shell Medium */
          color: var(--grey-700); /* Shell Grey 700 */
          transition: 0.3s ease;
        }

        .nav-dropdown-link:hover {
          background: var(--grey-50); /* Shell Grey 50 */
          color: var(--grey-900) !important;
        }

        .nav-dropdown-link.active {
          background: var(--night-600); /* Night 600 */
          color: var(--shell-white) !important;
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
        }

        .header-actions-link {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          transition: var(--t-nav);
          color: var(--grey-700); /* Shell Grey 700 */
          white-space: nowrap;
        }

        .on-hero:not(.is-scrolled) .header-actions-link {
          color: var(--shell-white);
        }

        .header-actions-link:hover {
          color: var(--grey-900) !important;
        }

        /* Hamburger */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 10px;
          z-index: 2100;
          background: rgba(var(--shell-white-rgb), 0.15);
          border-radius: 10%;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          transition: var(--t-nav);
          flex-shrink: 0;
        }

        .hamburger-btn:hover {
          background: rgba(var(--shell-white-rgb), 0.25);
        }

        .ham-line {
          width: 22px;
          height: 2.5px;
          background: var(--grey-900);
          border-radius: 4px;
          transition: var(--t-nav);
        }

        .on-hero:not(.is-scrolled) .ham-line {
          background: var(--shell-yellow);
        }

        .on-hero:not(.is-scrolled) .hamburger-btn {
          background: rgba(var(--shell-white-rgb), 0.15);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1360px) {
          .desktop-nav { gap: 12px; }
          .nav-link { font-size: 14px; }
          .site-logo { width: 240px; }
        }

        @media (max-width: 1180px) {
          .desktop-nav { gap: 6px; }
          .nav-link { font-size: 13px; }
          .site-logo { width: 200px; }
          .header-actions .btn-impact { padding: 8px 16px; font-size: 13px; }
        }

        @media (max-width: 991px) {
          /* Trigger hamburger menu for tablet and mobile only */
          .desktop-nav, .header-actions-link, .header-actions .btn-impact { display: none; }
          .hamburger-btn { display: flex; }
          .site-logo { width: 180px; }
        }

        @media (max-width: 768px) {
          .site-header {
            padding: 10px 20px;
            min-height: 70px;
          }
          .site-logo { width: 180px; }
        }

        /* Mobile Drawer Overhaul */
        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(var(--night-600-rgb), 0.4);
          backdrop-filter: blur(8px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.6s ease;
          z-index: 2500;
        }

        .mobile-drawer-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-drawer {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: 100%;
          max-width: 440px;
          background: var(--night-600); /* Night 600 — Shell palette compliant */
          z-index: 2600;
          transform: translateX(100%);
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          color: var(--shell-white);
          box-shadow: -20px 0 60px rgba(var(--grey-700-rgb), 0.3);
        }

        .mobile-drawer.open {
          transform: translateX(0);
        }

        .mobile-drawer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: var(--shell-yellow);
          pointer-events: none;
        }

        .mobile-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          position: relative;
        }

        .mobile-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .mobile-close-btn {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: rgba(var(--shell-white-rgb), 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--shell-white);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(var(--shell-white-rgb), 0.1);
        }

        .mobile-close-btn:hover {
          background: var(--shell-red);
          transform: rotate(90deg) scale(1.1);
          border-color: transparent;
        }

        .mobile-nav-list {
          flex: 1;
          overflow-y: auto;
          margin-right: -10px;
          padding-right: 10px;
        }

        /* Mobile Scrollbar */
        .mobile-nav-list::-webkit-scrollbar { width: 4px; }
        .mobile-nav-list::-webkit-scrollbar-track { background: transparent; }
        .mobile-nav-list::-webkit-scrollbar-thumb { background: rgba(var(--shell-white-rgb), 0.1); border-radius: 10px; }

        @keyframes mobileFadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .mobile-nav-item {
          border-bottom: 1px solid rgba(var(--shell-white-rgb), 0.06);
          animation: mobileFadeIn 0.6s ease both;
        }

        .mobile-nav-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 24px 0;
          font-size: 22px;
          font-weight: 800;
          color: var(--shell-white);
          transition: var(--t-nav);
          letter-spacing: -0.02em;
        }

        .mobile-nav-link.active {
          color: var(--shell-white) !important;
        }

        .mobile-chevron {
          transition: transform 0.4s ease;
          opacity: 0.4;
        }

        .mobile-chevron.rotated { transform: rotate(180deg); opacity: 1; }

        .mobile-submenu-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-submenu-wrapper.open { max-height: 800px; }

        .mobile-submenu {
          padding: 8px 0 32px 24px;
          border-left: 2px solid rgba(var(--shell-yellow-rgb), 0.2);
          margin-left: 4px;
        }

        .mobile-sublink {
          display: block;
          padding: 12px 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--shell-white) !important;
          opacity: 0.8;
          transition: var(--t-nav);
        }

        .mobile-sublink:hover, .mobile-sublink.active {
          color: var(--shell-white);
          transform: translateX(8px);
        }

        .mobile-footer {
          margin-top: 40px;
          padding-top: 40px;
          border-top: 1px solid rgba(var(--shell-white-rgb), 0.06);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-connect-btn {
          width: 100%;
          justify-content: center;
          height: 64px;
          font-size: 16px;
        }
      `}</style>

      <header className={headerClass}>
        <div className="header-inner">
          <Link to="/" className="site-logo-link">
            <img
              src="/wp-content/uploads/2023/09/logo.jpg"
              alt="Shell MRPL Aviation"
              className="site-logo"
            />
          </Link>

          <nav className="desktop-nav">
            {NAV.map((item) => (
              <div key={item.label} className="nav-item">
                <Link to={item.path} className={`nav-link ${isActive(item) ? 'active' : ''}`}>
                  {item.label}
                  {item.children && <ChevronDown className="nav-chevron" />}
                </Link>

                {item.children && (
                  <div className="nav-dropdown">
                    {item.children.map(child => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`nav-dropdown-link ${location.pathname === child.path ? 'active' : ''}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <Link to="/careers" className="header-actions-link">Careers</Link>
            <Link to="/contact" className="btn-impact">
              <span>Connect</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <button
              className="hamburger-btn"
              onClick={onHamburgerClick}
              aria-label="Toggle menu"
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={onMobileClose}
      />

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div style={{ background: 'var(--shell-white)', borderRadius: '8px', padding: '6px 10px', display: 'inline-flex' }}>
            <img src="/wp-content/uploads/2023/09/logo.jpg" alt="Logo" className="mobile-logo" />
          </div>
          <button className="mobile-close-btn" onClick={onMobileClose} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <ul className="mobile-nav-list">
          {NAV.map((item, idx) => (
            <MobileItem key={item.label} item={item} onClose={onMobileClose} />
          ))}
          <li className="mobile-nav-item">
            <Link to="/careers" className="mobile-nav-link" onClick={onMobileClose}>Careers</Link>
          </li>
        </ul>

        <div className="mobile-footer">
          <Link to="/contact" className="btn-impact mobile-connect-btn" onClick={onMobileClose}>
            <span>Get in Touch</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
