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
    path: '#',
    children: [
      { label: 'Shell', path: 'https://www.shell.in' },
      { label: 'MRPL', path: 'https://www.mrpl.co.in' },
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
  // { label: 'Gallery', path: '/gallery' },
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
              {child.path.startsWith('http') ? (
                <a
                  href={child.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-sublink"
                  onClick={onClose}
                >
                  {child.label}
                </a>
              ) : (
                <Link
                  to={child.path}
                  className={`mobile-sublink ${location.pathname === child.path ? 'active' : ''}`}
                  onClick={onClose}
                >
                  {child.label}
                </Link>
              )}
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
          padding: 15px 0;
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
          width: min(var(--container-w), 100% - 40px);
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
          border-radius: 8px;
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
          border-radius: 8px;
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
          background: rgba(13, 13, 13, 0.6);
          backdrop-filter: blur(12px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2500;
        }

        .mobile-drawer-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-drawer {
          position: fixed;
          top: 12px; right: 12px; bottom: 12px;
          width: calc(100% - 24px);
          max-width: 400px;
          background: var(--night-600);
          z-index: 2600;
          transform: translateX(calc(100% + 20px));
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          color: var(--shell-white);
          border-radius: 32px !important; /* Premium rounded look */
          border: 1px solid rgba(var(--shell-white-rgb), 0.1) !important;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4) !important;
        }

        .mobile-drawer.open {
          transform: translateX(0);
        }

        .mobile-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(var(--shell-white-rgb), 0.1);
        }

        .mobile-logo-wrap {
          background: var(--shell-white);
          border-radius: 12px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .mobile-logo {
          height: 36px;
          width: auto;
          object-fit: contain;
        }

        .mobile-close-btn {
          width: 48px; height: 48px;
          border-radius: 50% !important;
          background: rgba(var(--shell-white-rgb), 0.1) !important;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--shell-white) !important;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
          border: 1px solid rgba(var(--shell-white-rgb), 0.1) !important;
          padding: 0 !important;
        }

        .mobile-close-btn:hover {
          background: var(--shell-red) !important;
          transform: rotate(90deg) scale(1.1) !important;
          border-color: transparent !important;
        }

        .mobile-nav-list {
          flex: 1;
          overflow-y: auto;
          padding-right: 8px;
          margin-bottom: 20px;
        }

        /* Mobile Scrollbar */
        .mobile-nav-list::-webkit-scrollbar { width: 3px; }
        .mobile-nav-list::-webkit-scrollbar-track { background: transparent; }
        .mobile-nav-list::-webkit-scrollbar-thumb { background: rgba(var(--shell-white-rgb), 0.1); border-radius: 10px; }

        @keyframes mobileItemFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-item {
          margin-bottom: 8px;
          animation: mobileItemFadeIn 0.5s ease both;
          border-bottom: none !important; /* Remove individual item borders */
        }

        .mobile-nav-link {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          width: 100% !important;
          padding: 16px 20px !important;
          font-size: 19px !important;
          font-weight: 700 !important;
          color: var(--shell-white) !important;
          background: transparent !important;
          border: none !important;
          border-radius: 16px !important;
          transition: all 0.3s ease !important;
          letter-spacing: -0.01em !important;
          text-align: left !important;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: rgba(var(--shell-white-rgb), 0.05) !important;
          color: var(--shell-yellow) !important;
        }

        .mobile-nav-link.trigger {
          cursor: pointer;
        }

        .mobile-chevron {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.6;
          width: 14px;
          height: 14px;
        }

        .mobile-chevron.rotated { transform: rotate(180deg); opacity: 1; color: var(--shell-yellow); }

        .mobile-submenu-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-submenu-wrapper.open { 
          max-height: 600px;
        }

        .mobile-submenu {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 8px 0 16px 40px;
          position: relative;
        }

        .mobile-submenu::before {
          content: '';
          position: absolute;
          left: 24px; top: 0; bottom: 16px;
          width: 2px;
          background: var(--shell-yellow);
          opacity: 0.4;
        }

        .mobile-sublink {
          display: block !important;
          padding: 12px 0 !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          color: rgba(var(--shell-white-rgb), 0.7) !important;
          transition: all 0.3s ease !important;
          border: none !important;
          background: transparent !important;
          text-decoration: none !important;
        }

        .mobile-sublink:hover, .mobile-sublink.active {
          color: var(--shell-white) !important;
          transform: translateX(6px);
        }

        .mobile-footer {
          padding-top: 24px;
          border-top: 1px solid rgba(var(--shell-white-rgb), 0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-connect-btn {
          width: 100% !important;
          justify-content: center !important;
          height: 56px !important;
          font-size: 16px !important;
          background: var(--shell-yellow) !important;
          border: none !important;
          color: var(--grey-900) !important;
          font-weight: 800 !important;
        }

        .mobile-connect-btn *, 
        .mobile-connect-btn span, 
        .mobile-connect-btn svg {
          color: var(--grey-900) !important;
        }

        .mobile-connect-btn:hover {
          background: var(--shell-white) !important;
          transform: translateY(-2px) !important;
        }

        .mobile-connect-btn:hover *,
        .mobile-connect-btn:hover span,
        .mobile-connect-btn:hover svg {
          color: var(--grey-900) !important;
        }
      `}</style>

      <header className={headerClass}>
        <div className="header-inner">
          <Link to="/" className="site-logo-link">
            <img
              src="/wp-content/uploads/2023/09/logo.jpg"
              alt="Shell MRPL Aviation Fuels and Services Limited"
              className="site-logo"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}
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
                    {item.children.map((child) => (
                      child.path.startsWith('http') ? (
                        <a
                          key={child.path}
                          href={child.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-dropdown-link"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`nav-dropdown-link ${location.pathname === child.path ? 'active' : ''}`}
                        >
                          {child.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <Link to="/careers" className="header-actions-link">Careers</Link>
            <Link to="/contact" className="btn-impact">
              <span>Contact Us</span>
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
          <div className="mobile-logo-wrap">
            <img src="/wp-content/uploads/2023/09/logo.jpg" alt="Logo" className="mobile-logo" />
          </div>
          <button className="mobile-close-btn" onClick={onMobileClose} aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
            <span>Contact Us</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
