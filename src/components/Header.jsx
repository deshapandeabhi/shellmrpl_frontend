import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV = [
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Company Profile',    path: '/' },
      { label: 'Vision & Values',    path: '/vision-and-values' },
      { label: 'Board of Directors', path: '/board-of-directors' },
      { label: 'Management Team',    path: '/management-team' },
    ],
  },
  {
    label: 'Products & Services',
    path: '/products-services',
    children: [
      { label: 'Products & Services',              path: '/products-services' },
      { label: 'Our Airport Network',              path: '/shell-mrpl-aviation-network' },
      { label: 'Posted Airfield Prices',           path: '/posted-airfield-prices' },
      { label: "Shell Aviation's Global Network",  path: '/shell-aviations-global-network' },
    ],
  },
  {
    label: 'Company Parentage',
    path: '/company-parentage',
    children: [
      { label: 'Shell', path: '/shell' },
      { label: 'MRPL',  path: '/mrpl' },
    ],
  },
  {
    label: 'HSSE & Quality',
    path: '/hsse',
    children: [
      { label: 'HSSE',            path: '/hsse' },
      { label: 'Quality Control', path: '/quality-control' },
    ],
  },
  {
    label: 'Investors',
    path: '/investors-information',
    children: [
      { label: 'Vigilance Mechanism', path: '/vigilance-mechanism' },
      { label: 'Annual Return',       path: '/annual-return' },
      { label: 'CSR Policy',          path: '/csr' },
      { label: 'Committee Members',   path: '/csr/committee-members' },
      { label: 'CSR Projects',        path: '/csr/projects' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
];

function ChevronDown() {
  return <span className="nav-chevron" aria-hidden="true" />;
}
function ChevronDownMobile({ open }) {
  return (
    <span className={`mobile-acc-icon${open ? ' open' : ''}`} aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function MobileItem({ item, onClose }) {
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
          className={`mobile-nav-btn${isActive ? ' active' : ''}`}
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
        className={`mobile-nav-btn${isActive ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDownMobile open={open} />
      </button>
      <ul className={`mobile-children${open ? ' open' : ''}`} aria-hidden={!open}>
        {item.children.map(child => (
          <li key={child.path}>
            <Link
              to={child.path}
              className={`mobile-child-link${location.pathname === child.path ? ' active' : ''}`}
              onClick={onClose}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header({ mobileOpen, onHamburgerClick, onMobileClose, isScrolled }) {
  const location = useLocation();

  const isActive = (item) => {
    if (item.children) return item.children.some(c => c.path === location.pathname);
    return location.pathname === item.path;
  };

  return (
    <>
      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`} role="banner">
        <div className="header-inner container">
          {/* Logo */}
          <Link to="/" className="site-logo-link" aria-label="Shell MRPL Aviation — Home">
            <img
              src="/wp-content/uploads/2023/09/logo.jpg"
              alt="Shell MRPL Aviation"
              className="site-logo"
              onError={e => {
                e.target.src = '/wp-content/themes/Shell/images/logo.jpg';
                e.target.onerror = null;
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="site-nav" aria-label="Primary navigation">
            <ul className="nav-list" role="menubar">
              {NAV.map((item) => (
                <li key={item.label} className="nav-item" role="none">
                  <Link
                    to={item.path}
                    className={`nav-link${isActive(item) ? ' active' : ''}`}
                    role="menuitem"
                    aria-haspopup={!!item.children}
                  >
                    {item.label}
                    {item.children && <ChevronDown />}
                  </Link>

                  {item.children && (
                    <ul className="nav-dropdown" role="menu" aria-label={item.label}>
                      {item.children.map(child => (
                        <li key={child.path} role="none">
                          <Link
                            to={child.path}
                            className={`nav-dropdown-link${location.pathname === child.path ? ' active' : ''}`}
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="header-actions">
            <Link to="/working-with-shell-mrpl-aviation-2" className="btn-header-outline">
              Careers
            </Link>
            <Link to="/contact" className="btn-header-primary">
              Contact Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={onHamburgerClick}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${mobileOpen ? ' open' : ''}`}
        onClick={onMobileClose}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-drawer-header">
          <img
            src="/wp-content/uploads/2023/09/logo.jpg"
            alt="Shell MRPL Aviation"
            className="mobile-drawer-logo"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <button className="mobile-close-btn" onClick={onMobileClose} aria-label="Close menu">
            ×
          </button>
        </div>

        <ul className="mobile-nav-list" role="menu">
          {NAV.map(item => (
            <MobileItem key={item.label} item={item} onClose={onMobileClose} />
          ))}
        </ul>

        <div className="mobile-nav-actions">
          <Link to="/working-with-shell-mrpl-aviation-2" className="btn-outline" style={{ justifyContent: 'center' }} onClick={onMobileClose}>
            Careers
          </Link>
          <Link to="/contact" className="btn-cta-yellow" style={{ justifyContent: 'center' }} onClick={onMobileClose}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
