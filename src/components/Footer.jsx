import { useState } from 'react';
import { Link } from 'react-router-dom';

function FL({ to, children }) {
  return <Link to={to} className="footer-link">{children}</Link>;
}

export default function Footer() {
  const [sysCount, setSysCount] = useState(0);
  const [showSysInfo, setShowSysInfo] = useState(false);

  // Obfuscated metadata for internal tracking
  const sysInfo = {
    id: 'QWJoaXNoZWsgRGVzaGFwYW5kZQ==', // Developer Name (Base64)
    role: 'TGVhZCBEZXZlbG9wZXI=', // Role (Base64)
    build: '2026.05.12.SMRPL',
    version: '1.0.4'
  };

  const handleMetadataTrigger = () => {
    setSysCount(prev => {
      const next = prev + 1;
      if (next >= 10) {
        setShowSysInfo(true);
        return 0;
      }
      return next;
    });

    // Reset count if user stops clicking for 3 seconds
    setTimeout(() => setSysCount(0), 3000);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-desc">
              A strategic partnership between Shell and MRPL, delivering world-class aviation fuel services
              across India. Excellence in energy, precision in service.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-h">Company</h4>
            <FL to="/about">About Us</FL>
            <FL to="/vision-and-values">Vision and Values</FL>
            <FL to="/board-of-directors">Leadership</FL>
            <FL to="/shell-mrpl-aviation-network">Network Map</FL>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-h">Operations</h4>
            <FL to="/products-services">Products</FL>
            {/* <FL to="/posted-airfield-prices">Airfield Prices</FL> */}
            <FL to="/hsse">Safety Protocols</FL>
            <FL to="/quality-control">Quality Control</FL>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-h">Quick Links</h4>
            <FL to="/careers">Careers</FL>
            <FL to="/contact">Contact Us</FL>
            <FL to="/csr/projects">CSR Projects</FL>
            {/* <FL to="/gallery">Gallery</FL> */}
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-h">Careers</h4>
            <p className="footer-desc" style={{ fontSize: '13px' }}>Become a part of our world-class aviation network. Explore opportunities to grow with Shell MRPL Aviation Fuels and Services Limited.</p>
            <div className="newsletter-form" style={{ marginTop: '20px' }}>
              <Link
                to="/careers"
                className="newsletter-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  width: '100%',
                  height: '52px'
                }}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom-wrapper">
        <div className="container footer-bottom">
          <p
            onClick={handleMetadataTrigger}
            style={{ cursor: 'default', userSelect: 'none' }}
          >
            © 2026 Shell MRPL Aviation Fuels and Services Limited. All Rights Reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>

      {/* Internal System Diagnostic Overlay (Hidden by default) */}
      {showSysInfo && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: '#1a1a1a',
          color: '#ffffff',
          padding: '16px 24px',
          borderRadius: '4px',
          fontSize: '11px',
          borderLeft: '4px solid #DD1D21',
          zIndex: 10000,
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          fontFamily: 'monospace',
          maxWidth: '280px',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: '#FFD500', fontWeight: 'bold', letterSpacing: '1px' }}>SYSTEM_MANIFEST</span>
            <span
              onClick={() => setShowSysInfo(false)}
              style={{ cursor: 'pointer', color: '#888' }}
            >
              [X]
            </span>
          </div>
          <div style={{ opacity: 0.9 }}>
            <div style={{ marginBottom: '4px' }}>PROJECT: SHELL_MRPL_AVIATION</div>
            <div style={{ marginBottom: '4px' }}>BUILD_HASH: {sysInfo.build}</div>
            <div style={{ marginBottom: '4px' }}>VERSION: {sysInfo.version}</div>
            <div style={{ marginBottom: '4px', color: '#FFD500' }}>ENGINEER: {atob(sysInfo.id)}</div>
            <div style={{ marginBottom: '4px' }}>ROLE: {atob(sysInfo.role)}</div>
            <div style={{ marginTop: '12px', fontSize: '9px', color: '#666', borderTop: '1px solid #333', paddingTop: '8px' }}>
              INTERNAL USE ONLY. VERIFIED PRODUCTION DEPLOYMENT.
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
}
