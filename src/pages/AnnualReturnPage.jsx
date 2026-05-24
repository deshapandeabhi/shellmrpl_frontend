import React, { useState } from 'react';
import PageHero from '../components/PageHero';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api/v1';

// Changes #12 & #13 — modal viewer instead of new tab, no download
const RETURNS = [
  { label: 'FY 2024-25', url: '/assets/docs/annual-returns/Annual-Return-2024-25.pdf' },
  { label: 'FY 2023-24', url: '/wp-content/uploads/2024/09/Annual-Return-2023-24.pdf' },
  { label: 'FY 2022-23', url: '/assets/docs/annual-returns/Annual-Return-2022-23.pdf' },
  { label: 'FY 2021-22', url: '/wp-content/uploads/2021/04/Annual-Return-2021-22.pdf' },
  { label: 'FY 2020-21', url: '/wp-content/uploads/2021/08/Annual-Return-FY-2020-21.pdf' },
];

function PdfIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

/* ── Reusable PDF Modal (view-only, no download) ── */
export function PdfModal({ url, title, onClose }) {
  const [isBlurred, setIsBlurred] = useState(false);

  React.useEffect(() => {
    const triggerProtection = () => {
      setIsBlurred(true);
    };

    const handleBlur = () => {
      triggerProtection();
    };

    const handleFocus = () => {
      setIsBlurred(false);
    };

    const handleKeyDown = (e) => {
      // If user holds down ANY modifier key commonly used for screenshotting, printing, copying, or devtools
      // (Shift, Ctrl, Cmd/Windows, Alt/Option) or PrintScreen/F12 keys
      if (
        e.shiftKey || 
        e.ctrlKey || 
        e.metaKey || 
        e.altKey || 
        e.key === 'PrintScreen' || 
        e.keyCode === 44 ||
        e.key === 'F12' ||
        e.keyCode === 123
      ) {
        triggerProtection();
      }
    };

    const handleKeyUp = (e) => {
      // Unblur only when all modifier keys are completely released
      if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
        setIsBlurred(false);
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  if (!url) return null;

  return (
    <div className="pdf-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="pdf-modal-box" onClick={e => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <span className="pdf-modal-title">{title}</span>
          <button className="pdf-modal-close" onClick={onClose} aria-label="Close document viewer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="pdf-modal-body-container" style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Iframe with dynamic blur when screenshot or loss of focus is detected */}
          <iframe
            src={`${url}#toolbar=0&navpanes=0&scrollbar=1`}
            title={title}
            className="pdf-modal-iframe"
            style={{ 
              border: 'none', 
              width: '100%', 
              height: '100%', 
              flex: 1,
              filter: isBlurred ? 'blur(30px) grayscale(100%)' : 'none',
              pointerEvents: isBlurred ? 'none' : 'all',
              transition: 'filter 0.25s ease'
            }}
          />

          {/* Secure overlay to prevent drag & drops/right clicks on iframe */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              userSelect: 'none'
            }}
          />

          {/* Toast Notification */}
          {isBlurred && (
            <div className="pdf-toast-notification">
              <div className="toast-content">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--shell-red)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>View-only document — downloading is restricted</span>
              </div>
            </div>
          )}
        </div>

        <div className="pdf-modal-footer">
          <span>📄 View-only document — downloading is restricted</span>
        </div>
      </div>
    </div>
  );
}

export default function AnnualReturnPage() {
  const [activeDoc, setActiveDoc] = useState(null);

  return (
    <div className="inner-page">
      <PageHero
        title="Annual Return"
        breadcrumbs={[{ label: 'Investors Information', to: '/investors-information' }, { label: 'Annual Return' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Annual Returns</h2>
        <div className="body-text" style={{ marginBottom: 32 }}>
          <p>
            In compliance with statutory requirements, we have provided our Annual Returns for the
            recent financial years. Click the links below to view the respective PDF documents within this page.
          </p>
        </div>

        <div className="csr-dl-grid">
          {RETURNS.map((item, i) => (
            <button
              key={i}
              className="btn-download"
              aria-label={`View ${item.label} (PDF)`}
              onClick={() => setActiveDoc(item)}
            >
              <PdfIcon />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeDoc && (
        <PdfModal
          url={activeDoc.url}
          title={activeDoc.label}
          onClose={() => setActiveDoc(null)}
        />
      )}
    </div>
  );
}
