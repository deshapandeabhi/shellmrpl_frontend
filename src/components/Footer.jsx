import React from 'react';
import { Link } from 'react-router-dom';

function FL({ to, href, children }) {
  if (to)
    return <Link to={to} className="footer-link">{children}</Link>;
  return (
    <a href={href || '#'} className="footer-link"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-inner">
            {/* Brand */}
            <div className="footer-brand-col">
              <img
                src="/wp-content/uploads/2023/09/logo.jpg"
                alt="Shell MRPL Aviation"
                className="footer-logo"
                onError={e => { e.target.style.display = 'none'; }}
              />
              <p>
                Shell MRPL Aviation Fuels &amp; Services Limited — a 50:50 joint venture 
                delivering world-class aviation fuel services at 14 airports across India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="footer-heading">About</div>
              <FL to="/about">Company Profile</FL>
              <FL to="/vision-and-values">Vision &amp; Values</FL>
              <FL to="/board-of-directors">Board of Directors</FL>
              <FL to="/management-team">Management Team</FL>
              <FL to="/shell-mrpl-aviation-network">Our Network</FL>
            </div>

            {/* Services */}
            <div>
              <div className="footer-heading">Services</div>
              <FL to="/products-services">Products &amp; Services</FL>
              <FL to="/posted-airfield-prices">Airfield Prices</FL>
              <FL to="/hsse">HSSE</FL>
              <FL to="/quality-control">Quality Control</FL>
              <FL to="/gallery">Gallery</FL>
            </div>

            {/* Investors + Contact */}
            <div>
              <div className="footer-heading">Investors</div>
              <FL to="/vigilance-mechanism">Vigilance</FL>
              <FL to="/annual-return">Annual Return</FL>
              <FL to="/csr">CSR Policy</FL>
              <FL to="/csr/projects">CSR Projects</FL>
              <FL to="/working-with-shell-mrpl-aviation-2">Careers</FL>
              <FL to="/contact">Contact Us</FL>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © 2025 Shell MRPL Aviation Fuels and Services Limited. All Rights Reserved.
            </p>
            <div className="footer-legal-links">
              <a href="#" className="footer-legal-link">Disclaimer</a>
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <a href="#" className="footer-legal-link">Terms of Use</a>
              <a href="#" className="footer-legal-link">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
