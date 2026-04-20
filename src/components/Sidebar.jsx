import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Sidebar — exact WordPress replica
 *
 * Hover approach: Pure CSS via the `group` pattern.
 * - Each <li> is a CSS group. On :hover (group-hover), the flyout becomes visible.
 * - No JavaScript timers, no getBoundingClientRect race conditions.
 * - The flyout is `position: absolute` relative to each <li>,
 *   but the <li>s are inside an `overflow: visible` container, so not clipped.
 *
 * The sidebar itself uses `overflow: visible` to not clip flyouts.
 */

const BG       = '#1f3d6e';
const BG_HOV   = '#163157';
const DIV_CLR  = '#2d5080';
const TXT      = '#ccd8eb';
const TXT_HOV  = '#ffffff';

const NAV = [
  {
    label: 'About Shell MRPL Aviation',
    path: '/about',
    children: [
      { label: 'Profile',             path: '/' },
      { label: 'Vision and Values',   path: '/vision-and-values' },
      { label: 'Board of Directors',  path: '/board-of-directors' },
      { label: 'Management Team',     path: '/management-team' },
    ],
  },
  {
    label: 'Product, Services & Networks',
    path: '/products-services',
    children: [
      { label: 'Products & Services',           path: '/products-services' },
      { label: 'Shell MRPL Aviation Network',    path: '/shell-mrpl-aviation-network' },
      { label: 'Posted Airfield Prices',         path: '/posted-airfield-prices' },
      { label: 'Shell Aviations Global Network', path: '/shell-aviations-global-network' },
    ],
  },
  {
    label: 'Company Parantage',
    path: '/company-parentage',
    children: [
      { label: 'Shell', path: '/shell' },
      { label: 'MRPL',  path: '/mrpl' },
    ],
  },
  {
    label: 'HSSE & Quality Control',
    path: '/hsse',
    children: [
      { label: 'HSSE',            path: '/hsse' },
      { label: 'Quality Control', path: '/quality-control' },
    ],
  },
  {
    label: 'Investors Information',
    path: '/investors-information',
    children: [
      { label: 'Vigilance Mechanism', path: '/vigilance-mechanism' },
      { label: 'Annual Return',       path: '/annual-return' },
      { label: 'CSR Policy',          path: '/csr' },
      { label: 'Committee Members',   path: '/csr/committee-members' },
      { label: 'CSR Projects',        path: '/csr/projects' },
    ],
  },
  { label: 'Working with Shell MRPL Aviation', path: '/working-with-shell-mrpl-aviation-2' },
  { label: 'Employee Login',                   path: '/login' },
];

function NavItem({ item }) {
  const location = useLocation();
  const [hov, setHov] = useState(false);
  const isActive = location.pathname === item.path;
  const hasChildren = !!(item.children?.length);

  return (
    <li
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        borderBottom: `1px solid ${DIV_CLR}`,
        listStyle: 'none',
      }}
    >
      {/* Parent row */}
      <Link
        to={item.path}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          fontSize: '14px',
          color: (isActive || hov) ? TXT_HOV : TXT,
          backgroundColor: (isActive || hov) ? BG_HOV : 'transparent',
          textDecoration: 'none',
          fontFamily: '"Roboto","Open Sans",sans-serif',
          fontWeight: 400,
          transition: 'background-color 0.12s, color 0.12s',
        }}
      >
        <span style={{ flex: 1 }}>{item.label}</span>
        {hasChildren && (
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
            style={{ flexShrink: 0, marginLeft: 8, opacity: 0.65 }}>
            <path d="M1 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </Link>

      {/* Flyout — shown when this <li> is hovered */}
      {hasChildren && hov && (
        <ul
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            /* Absolute to the <li> row */
            position: 'absolute',
            top: 0,
            left: '100%',          /* right edge of the 248px sidebar */
            minWidth: '220px',
            backgroundColor: '#ffffff',
            boxShadow: '2px 4px 16px rgba(0,0,0,0.2)',
            listStyle: 'none',
            margin: 0,
            padding: '4px 0',
            zIndex: 9999,
          }}
        >
          {item.children.map((child, j) => (
            <FlyChild key={j} child={child} onSelect={() => setHov(false)} />
          ))}
        </ul>
      )}
    </li>
  );
}

function FlyChild({ child, onSelect }) {
  const [h, setH] = useState(false);
  return (
    <li style={{ listStyle: 'none' }}>
      <Link
        to={child.path}
        onClick={onSelect}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          display: 'block',
          padding: '10px 20px',
          fontSize: '13px',
          color: h ? BG : '#333',
          backgroundColor: h ? '#f0f4f9' : '#fff',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          fontFamily: '"Roboto","Open Sans",sans-serif',
          transition: 'background-color 0.1s, color 0.1s',
        }}
      >
        {child.label}
      </Link>
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside
      style={{
        position: 'fixed',
        top: '90px',
        left: 0,
        width: '248px',
        bottom: 0,
        backgroundColor: BG,
        zIndex: 40,
        /*
         * overflow: visible is REQUIRED for the absolute-positioned flyouts
         * to be visible outside the sidebar's 248px bounds.
         * We DON'T set overflowY here because this aside doesn't need to scroll
         * (the nav fits within the window height).
         */
        overflow: 'visible',
      }}
    >
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV.map((item, i) => (
            <NavItem key={i} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
