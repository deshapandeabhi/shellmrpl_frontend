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

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* ── Mobile Backdrop ── */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[45] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* ── Sidebar Container ── */}
      <aside
        className={`fixed top-[90px] left-0 bottom-0 w-[248px] bg-[#1f3d6e] z-[48] transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto lg:overflow-visible`}
      >
        <nav className="h-full">
          <ul className="list-none m-0 p-0">
            {NAV.map((item, i) => (
              <NavItem key={i} item={item} onSelect={onClose} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

function NavItem({ item, onSelect }) {
  const location = useLocation();
  const [hov, setHov] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const isActive = location.pathname === item.path;
  const hasChildren = !!(item.children?.length);

  return (
    <li
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative border-b border-[#2d5080]"
    >
      {/* Parent row */}
      <div className="flex items-center">
        <Link
          to={item.path}
          onClick={() => !hasChildren && onSelect()}
          className={`flex-1 flex items-center justify-between px-5 py-3.5 text-sm transition-all duration-120 ${
            isActive || hov || mobileExpanded ? 'text-white bg-[#163157]' : 'text-[#ccd8eb] bg-transparent'
          }`}
          style={{ fontFamily: '"Roboto","Open Sans",sans-serif' }}
        >
          <span>{item.label}</span>
        </Link>
        
        {hasChildren && (
          <button
            onClick={() => setMobileExpanded(!mobileExpanded)}
            className="px-4 py-3.5 text-[#ccd8eb] hover:text-white lg:hidden border-l border-[#2d5080]"
          >
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform duration-200 ${mobileExpanded ? 'rotate-180' : ''}`}>
              <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {hasChildren && (
          <span className="hidden lg:flex px-2 text-[#ccd8eb]/60">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M1 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </div>

      {/* Mobile/Tablet Accordion Children */}
      {hasChildren && mobileExpanded && (
        <ul className="lg:hidden bg-[#163157] list-none p-0 border-t border-[#2d5080]/30">
          {item.children.map((child, j) => (
            <li key={j}>
              <Link
                to={child.path}
                onClick={onSelect}
                className="block pl-10 pr-5 py-2.5 text-[13px] text-[#ccd8eb] hover:text-white hover:bg-[#1f3d6e] transition-colors"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop Flyout — shown when this <li> is hovered */}
      {hasChildren && hov && (
        <ul
          className="hidden lg:block absolute top-0 left-full min-w-[220px] bg-white shadow-xl py-1 z-[9999] list-none"
        >
          {item.children.map((child, j) => (
            <FlyChild key={j} child={child} onSelect={onSelect} />
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
