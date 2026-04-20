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

export default function Header() {
  const location = useLocation();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '90px',
        display: 'flex',
        zIndex: 50,
      }}
    >
      {/* ── LEFT: White logo zone, exactly 248px ── */}
      <div
        style={{
          width: '248px',
          flexShrink: 0,
          backgroundColor: WHITE,
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Link to="/">
          <img
            src="/wp-content/uploads/2023/09/logo.jpg"
            alt="Shell MRPL Aviation"
            style={{ height: '58px', width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </Link>
      </div>

      {/* ── RIGHT: Navy nav zone ── */}
      <div
        style={{
          flex: 1,
          backgroundColor: NAV_BLUE,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
        }}
      >
        {/* Navigation links */}
        <nav style={{ display: 'flex', gap: '40px' }}>
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path ||
              (link.path === '/' && location.pathname === '/');
            return (
              <NavLink key={link.path} link={link} isActive={isActive} />
            );
          })}
        </nav>

        {/* Search bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: WHITE,
            borderRadius: '3px',
            height: '36px',
            width: '200px',
            overflow: 'hidden',
            border: searchFocused ? '1px solid #5bc0de' : '1px solid transparent',
          }}
        >
          <span style={{ padding: '0 10px', color: '#888', display: 'flex', alignItems: 'center' }}>
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
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '13px',
              color: '#555',
              backgroundColor: WHITE,
              height: '100%',
              fontFamily: '"Roboto", sans-serif',
            }}
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
