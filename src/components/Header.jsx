import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header Component — exact WordPress replica
 *
 * Layout:
 *   [white 248px logo zone] | [navy blue nav + search — fills rest]
 *
 * Using 100% inline styles (no Tailwind) for guaranteed rendering.
 */

const NAV_BLUE = '#1f3d6e';
const ACTIVE_COLOR = '#5bc0de';
const WHITE = '#ffffff';

const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'Gallery',    path: '/gallery' },
  { label: 'Careers',    path: '/working-with-shell-mrpl-aviation-2' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Header({ onMenuClick }) {
  const location = useLocation();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header
      className="flex fixed top-0 left-0 right-0 h-[90px] z-[50]"
    >
      {/* ── LEFT: White logo zone ── */}
      <div
        className="w-[248px] lg:w-[248px] flex-shrink-0 bg-white flex items-center px-4 border-b border-gray-200"
      >
        {/* Hamburger Menu (Mobile/Tablet only) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden mr-3 p-2 text-[#1f3d6e] hover:bg-gray-100 rounded"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <Link to="/" className="flex-1 lg:flex-none">
          <img
            src="/wp-content/uploads/2023/09/logo.jpg"
            alt="Shell MRPL Aviation"
            className="h-[40px] md:h-[58px] w-auto block object-contain"
          />
        </Link>
      </div>

      {/* ── RIGHT: Navy nav zone ── */}
      <div
        className="flex-1 bg-[#1f3d6e] flex items-center justify-between px-4 lg:px-8"
      >
        {/* Navigation links (Hidden on mobile/tablet) */}
        <nav className="hidden lg:flex gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path ||
              (link.path === '/' && location.pathname === '/');
            return (
              <NavLink key={link.path} link={link} isActive={isActive} />
            );
          })}
        </nav>

        {/* Search bar (Adjustable width) */}
        <div
          className={`flex items-center bg-white rounded-[3px] h-[36px] transition-all duration-300 overflow-hidden border ${searchFocused ? 'border-[#5bc0de]' : 'border-transparent'} w-[150px] md:w-[200px]`}
        >
          <span className="px-[10px] text-[#888] flex items-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input
            type="search"
            placeholder="Search..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="flex-1 border-none outline-none text-[13px] text-[#555] bg-white h-full font-roboto"
          />
        </div>
      </div>
    </header>
  );
}

function NavLink({ link, isActive }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      to={link.path}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        color: isActive || hov ? ACTIVE_COLOR : WHITE,
        textDecoration: 'none',
        fontSize: '15px',
        fontFamily: '"Roboto", "Open Sans", sans-serif',
        fontWeight: 400,
        transition: 'color 0.15s',
        letterSpacing: '0.3px',
      }}
    >
      {link.label}
    </Link>
  );
}
