import React from 'react';
import { Link } from 'react-router-dom';

function FL({ to, children }) {
  return <Link to={to} className="footer-link">{children}</Link>;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/wp-content/uploads/2023/09/logo.jpg" alt="Logo" className="footer-logo" />
            <p className="footer-desc">
              A strategic partnership between Shell and MRPL, delivering world-class aviation fuel services 
              across India. Excellence in energy, precision in service.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-h">Company</h4>
            <FL to="/about">About Us</FL>
            <FL to="/vision-and-values">Vision & Values</FL>
            <FL to="/board-of-directors">Leadership</FL>
            <FL to="/shell-mrpl-aviation-network">Network Map</FL>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-h">Operations</h4>
            <FL to="/products-services">Products</FL>
            <FL to="/posted-airfield-prices">Airfield Prices</FL>
            <FL to="/hsse">Safety Protocols</FL>
            <FL to="/quality-control">Quality Control</FL>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-h">Quick Links</h4>
            <FL to="/careers">Careers</FL>
            <FL to="/contact">Contact Us</FL>
            <FL to="/csr/projects">CSR Projects</FL>
            <FL to="/gallery">Gallery</FL>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-h">Stay Updated</h4>
            <p className="footer-desc" style={{ fontSize: '13px' }}>Subscribe to get the latest updates on airfield prices and network expansions.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email Address" className="newsletter-input" />
              <button className="newsletter-btn">Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Shell MRPL Aviation Fuels and Services Limited. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
