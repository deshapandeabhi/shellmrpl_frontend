import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer — exact replica of the WordPress multi-column dark navy footer
 *
 * Structure (from WordPress DOM):
 *  ┌─────────────────────────────────────────────────────────────┐
 *  │ Dark navy background (#1f3d6e)                             │
 *  │  Col 1: Contact Information   Col 2: Other Links  Col 3: Other Links │
 *  │  About Shell MRPL Aviation     Disclaimer          SHELL              │
 *  │  Global Network                Terms of Use        MRPL               │
 *  │  Business Enquiries            Privacy Policy      Shell MRPL People  │
 *  │  Careers                                           Site Map           │
 *  │  Contact us                                                           │
 *  ├─────────────────────────────────────────────────────────────┤
 *  │ (c) 2025. Shell MRPL Aviation Fuels and Services Limited.  │
 *  │  All Rights Reserved                                        │
 *  └─────────────────────────────────────────────────────────────┘
 */

const NAV_BLUE      = '#1f3d6e';
const LINK_COLOR    = '#ffffff';
const HEADING_COLOR = '#d0dae8';
const COPYRIGHT_BG  = '#163157';

function FooterLink({ href, to, children }) {
  const [hov, setHov] = React.useState(false);
  const style = {
    color: hov ? '#f0c040' : LINK_COLOR,
    textDecoration: 'none',
    fontSize: '13px',
    display: 'block',
    marginBottom: '7px',
    fontFamily: '"Roboto", "Open Sans", sans-serif',
    transition: 'color 0.15s',
  };

  if (to) {
    return (
      <Link to={to} style={style}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href || '#'} style={style}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}>
      {children}
    </a>
  );
}

function FooterHeading({ children }) {
  return (
    <h6 style={{
      color: HEADING_COLOR,
      fontSize: '13px',
      fontWeight: 700,
      fontFamily: '"Roboto", "Open Sans", sans-serif',
      marginBottom: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderBottom: '1px solid #2d5080',
      paddingBottom: '8px',
    }}>
      {children}
    </h6>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: NAV_BLUE, width: '100%' }}>
      {/* ── 3-column link grid ── */}
      <div style={{
        display: 'flex',
        gap: 0,
        padding: '36px 40px',
        borderTop: '1px solid #2d5080',
      }}>
        {/* Column 1: Contact Information */}
        <div style={{ flex: 1, paddingRight: '30px', borderRight: '1px solid #2d5080' }}>
          <FooterHeading>Contact Information</FooterHeading>
          <FooterLink to="/about">About Shell MRPL Aviation</FooterLink>
          <FooterLink href="https://www.shell.com/business-customers/aviation">Global Network</FooterLink>
          <FooterLink to="/contact">Business Enquiries</FooterLink>
          <FooterLink to="/working-with-shell-mrpl-aviation-2">Careers</FooterLink>
          <FooterLink to="/contact">Contact us</FooterLink>
        </div>

        {/* Column 2: Other Links */}
        <div style={{ flex: 1, paddingLeft: '40px', paddingRight: '30px', borderRight: '1px solid #2d5080' }}>
          <FooterHeading>Other Links</FooterHeading>
          <FooterLink href="#">Disclaimer</FooterLink>
          <FooterLink href="#">Terms of Use</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
        </div>

        {/* Column 3: Other Links */}
        <div style={{ flex: 1, paddingLeft: '40px' }}>
          <FooterHeading>Other Links</FooterHeading>
          <FooterLink to="/shell">SHELL</FooterLink>
          <FooterLink to="/mrpl">MRPL</FooterLink>
          <FooterLink href="#">Shell MRPL People's, Prices and Places</FooterLink>
          <FooterLink to="/contact">Site Map</FooterLink>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div style={{
        backgroundColor: COPYRIGHT_BG,
        padding: '14px 40px',
        borderTop: '1px solid #2d5080',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#f0c040',
          fontSize: '13px',
          fontFamily: '"Roboto", "Open Sans", sans-serif',
          margin: 0,
        }}>
          (c) 2025. Shell MRPL Aviation Fuels and Services Limited. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
