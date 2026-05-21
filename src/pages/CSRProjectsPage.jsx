import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { PdfModal } from './AnnualReturnPage';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api/v1';

// Changes #17 & #18 — removed image cards, retain only CSR Projects panel
// Change #16 — title on single full-width line
// Change #19 — same modal used for Annual Returns
const DOWNLOADS = [
  { label: 'CSR Projects 2024-25', url: '/wp-content/uploads/2024/09/CSR-Approved-Projects-for-FY-2024-25.pdf' },
  { label: 'CSR Projects 2023-24', url: '/assets/docs/annual-returns/CSR-PROJECTS-2023-24.pdf' },
  { label: 'CSR Projects 2022-23', url: '/wp-content/uploads/2023/12/CSR-Report-22-23.pdf' },
  { label: 'CSR Projects 2021-22', url: '/wp-content/uploads/2022/06/CSR-PROJECTS-2021-22.pdf' },
  { label: 'CSR Projects 2020-21', url: '/wp-content/uploads/2022/06/CSR-PROJECTS-2020-21.pdf' },
  { label: 'CSR Projects 2019-20', url: '/wp-content/uploads/2021/02/PROJECTS-2019-20.pdf' },
  { label: 'CSR Projects 2018-19', url: '/wp-content/uploads/2021/02/PROJECTS-2018-19.pdf' },
  { label: 'CSR Projects 2017-18', url: '/wp-content/uploads/2021/02/PROJECTS-2017-18.pdf' },
  { label: 'CSR Projects 2016-17', url: '/wp-content/uploads/2021/02/PROJECTS-2016-17.pdf' },
  { label: 'CSR Projects 2015-16', url: '/wp-content/uploads/2021/02/PROJECTS-2015-16.pdf' },
];

function PdfIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

export default function CSRProjectsPage() {
  const [activeDoc, setActiveDoc] = useState(null);

  return (
    <div className="site-page">
      <PageHero
        title="Social Impact"
        breadcrumbs={[{ label: 'CSR Projects' }]}
      />

      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        {/* Change #16 — full-width single-line heading */}
        <div className="section-header" style={{ maxWidth: '100%' }}>
          <span className="section-eyebrow">CSR Initiatives</span>
          <h2 className="section-h2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Empowering Local Communities
          </h2>
          <p className="section-intro">
            Through targeted interventions in education, health, and infrastructure,
            we aim to create a lasting positive legacy in the regions we serve.
          </p>
        </div>

        {/* Changes #17 #18 — image cards removed, only CSR Projects panel retained */}
        <div
          className="csr-archive-section glass"
          style={{ marginTop: '40px', padding: 'clamp(20px, 5vw, 60px)', borderRadius: 'var(--radius-xl)' }}
        >
          <h3 className="footer-h" style={{ color: 'var(--grey-900)', marginBottom: '40px' }}>
            Approved Project Archives
          </h3>
          <div className="csr-dl-grid">
            {DOWNLOADS.map((item, i) => (
              /* Change #19 — modal viewer same as Annual Returns */
              <button
                key={i}
                className="csr-dl-item"
                onClick={() => setActiveDoc(item)}
                aria-label={`View ${item.label} (PDF)`}
              >
                <div className="dl-icon-c"><PdfIcon /></div>
                <div className="dl-info">
                  <span className="dl-label">{item.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Change #19 — same modal as Annual Returns */}
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
