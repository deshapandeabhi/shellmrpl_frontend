import { useState } from 'react';
import PageHero from '../components/PageHero';
import { PdfModal } from './AnnualReturnPage';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api/v1';

// Changes #17 & #18 — removed image cards, retain only CSR Projects panel
// Change #16 — title on single full-width line
// Change #19 — same modal used for Annual Returns
const DOWNLOADS = [
  { label: 'CSR Projects 2025-26', url: '/assets/docs/annual-returns/CSR amount spent 2025-26_2.pdf' },
  { label: 'CSR Projects 2024-25', url: '/assets/docs/annual-returns/CSR amount spent 2024-25_2.pdf' },
  { label: 'CSR Projects 2023-24', url: '/assets/docs/annual-returns/CSR-PROJECTS-2023-24.pdf' },
  { label: 'CSR Projects 2022-23', url: '/assets/docs/annual-returns/CSR-PROJECTS-2022-23.pdf' },
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
    <div className="inner-page">
      <PageHero
        title="CSR Projects"
        breadcrumbs={[{ label: 'CSR Projects' }]}
      />

      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Empowering Local Communities</h2>
        <div className="body-text" style={{ marginBottom: 32 }}>
          <p>
            Through targeted interventions in education, health, and infrastructure,
            we aim to create a lasting positive legacy in the regions we serve.
            Click the links below to view our approved CSR project archives.
          </p>
        </div>

        <div className="csr-dl-grid">
          {DOWNLOADS.map((item, i) => (
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
