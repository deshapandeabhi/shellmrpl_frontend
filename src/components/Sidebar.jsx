import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV = [
  {
    label: 'About Shell MRPL Aviation',
    path: '/about',
    children: [
      { label: 'Profile', path: '/' },
      { label: 'Vision and Values', path: '/vision-and-values' },
      { label: 'Board of Directors', path: '/board-of-directors' },
      { label: 'Management Team', path: '/management-team' },
    ],
  },
  {
    label: 'Product, Services & Networks',
    path: '/products-services',
    children: [
      { label: 'Products and Services', path: '/products-services' },
      { label: 'Shell MRPL Aviation Network', path: '/shell-mrpl-aviation-network' },
      { label: 'Posted Airfield Prices', path: '/posted-airfield-prices' },
      { label: "Shell Aviation's Global Network", path: '/shell-aviations-global-network' },
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
    label: 'HSSE & Quality Control',
    path: '/hsse',
    children: [
      { label: 'HSSE', path: '/hsse' },
      { label: 'Quality Control', path: '/quality-control' },
    ],
  },
  {
    label: 'Investors Information',
    path: '/investors-information',
    children: [
      { label: 'Vigilance Mechanism', path: '/vigilance-mechanism' },
      { label: 'Annual Return', path: '/annual-return' },
      { label: 'CSR Policy', path: '/csr' },
      { label: 'Committee Members', path: '/csr/committee-members' },
      { label: 'CSR Projects', path: '/csr/projects' },
    ],
  },
  { label: 'Working with Shell MRPL Aviation', path: '/working-with-shell-mrpl-aviation-2' },
  { label: 'Employee Login', path: '/login' },
];

export default function Sidebar({ isOpen, isScrolled, onClose }) {
  const topOffset = isScrolled ? 'var(--header-h-sm)' : 'var(--header-h)';

  return (
    <aside
      className={`shell-sidebar${isOpen ? ' open' : ''}${isScrolled ? ' scrolled' : ''}`}
      style={{ top: topOffset }}
      aria-label="Site navigation"
      id="site-sidebar"
    >
      <nav className="sidebar-nav" aria-label="Main menu">
        <ul>
          {NAV.map((item, i) => (
            <NavItem key={i} item={item} onClose={onClose} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function NavItem({ item, onClose }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const hasChildren = Boolean(item.children?.length);
  const isActive = hasChildren
    ? item.children.some((c) => c.path === location.pathname) || location.pathname === item.path
    : location.pathname === item.path;

  const sectionId = `sidebar-section-${item.label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <li className="sidebar-item">
      <div className="sidebar-item-header">
        <Link
          to={item.path}
          className={`sidebar-link${isActive ? ' active' : ''}`}
          onClick={() => !hasChildren && onClose()}
          aria-current={isActive && !hasChildren ? 'page' : undefined}
        >
          {item.label}
        </Link>

        {hasChildren && (
          <button
            className={`sidebar-toggle${expanded ? ' open' : ''}`}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={sectionId}
            aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.label}`}
          >
            <svg
              width="12" height="8"
              viewBox="0 0 12 8"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile accordion */}
      {hasChildren && (
        <ul
          id={sectionId}
          className={`sidebar-children${expanded ? ' expanded' : ''}`}
          aria-hidden={!expanded}
        >
          {item.children.map((child, j) => (
            <ChildLink key={j} child={child} onClose={onClose} />
          ))}
        </ul>
      )}

      {/* Desktop fly-out (CSS :hover controlled) */}
      {hasChildren && (
        <ul className="sidebar-flyout" role="menu" aria-label={item.label}>
          {item.children.map((child, j) => (
            <li key={j} role="none">
              <FlyoutLink child={child} onClose={onClose} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function ChildLink({ child, onClose }) {
  const location = useLocation();
  const isActive = location.pathname === child.path;
  return (
    <li>
      <Link
        to={child.path}
        className={`sidebar-child-link${isActive ? ' active' : ''}`}
        onClick={onClose}
        aria-current={isActive ? 'page' : undefined}
      >
        {child.label}
      </Link>
    </li>
  );
}

function FlyoutLink({ child, onClose }) {
  const location = useLocation();
  const isActive = location.pathname === child.path;
  return (
    <Link
      to={child.path}
      className={`sidebar-flyout-link${isActive ? ' active' : ''}`}
      onClick={onClose}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
    >
      {child.label}
    </Link>
  );
}
