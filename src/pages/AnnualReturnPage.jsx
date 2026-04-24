import React from 'react';
import PageHero from '../components/PageHero';

const RETURNS = [
  { label: 'Annual Return — FY 2023-24', url: '2024/09/Annual-Return-2023-24.pdf' },
  { label: 'Annual Return — FY 2022-23', url: '2023/11/Form_MGT_7_Annual_return_2022-2023.pdf' },
  { label: 'Annual Return — FY 2021-22', url: '2022/10/Annual-Return-FY-2021-22.pdf' },
  { label: 'Annual Return — FY 2020-21', url: '2021/11/SMA-MGT-7-FY-2020-21.pdf' },
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

export default function AnnualReturnPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Annual Return"
        breadcrumbs={[{ label: 'Investors Information', to: '/investors-information' }, { label: 'Annual Return' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Annual Returns</h2>
        <div className="body-text" style={{ marginBottom: 32 }}>
          <p>
            In compliance with statutory requirements, we have provided our Annual Returns for the
            recent financial years. Click the links below to view or download the respective PDF documents.
          </p>
        </div>

        <div className="csr-dl-grid">
          {RETURNS.map((item, i) => (
            <a
              key={i}
              href={`/wp-content/uploads/${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download"
              aria-label={`Download ${item.label} (PDF)`}
            >
              <PdfIcon />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
