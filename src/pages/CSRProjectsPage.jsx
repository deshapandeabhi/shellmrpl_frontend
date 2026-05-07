import React from 'react';
import PageHero from '../components/PageHero';

const DOWNLOADS = [
  { label: 'CSR Projects 2024-25', url: '/assets/docs/csr/CSR-Approved-Projects-for-FY-2024-25.pdf' },
  { label: 'CSR Projects 2023-24', url: '/assets/docs/csr/CSR-Approved-Projects-23-24.docx' },
  { label: 'CSR Projects 2022-23', url: '/assets/docs/csr/CSR-Report-22-23.pdf' },
  { label: 'CSR Projects 2021-22', url: '/assets/docs/csr/CSR-PROJECTS-2021-22.pdf' },
  { label: 'CSR Projects 2020-21', url: '/assets/docs/csr/CSR-PROJECTS-2020-21.pdf' },
  { label: 'CSR Projects 2019-20', url: '/assets/docs/csr/PROJECTS-2019-20.pdf' },
  { label: 'CSR Projects 2018-19', url: '/assets/docs/csr/PROJECTS-2018-19.pdf' },
  { label: 'CSR Projects 2017-18', url: '/assets/docs/csr/PROJECTS-2017-18.pdf' },
  { label: 'CSR Projects 2016-17', url: '/assets/docs/csr/PROJECTS-2016-17.pdf' },
  { label: 'CSR Projects 2015-16', url: '/assets/docs/csr/PROJECTS-2015-16.pdf' },
];

const IMAGES = [
  { img: '/wp-content/uploads/2016/08/3-3.jpg', cat: 'Education', title: 'Mini Science Lab' },
  { img: '/wp-content/uploads/2016/08/5-3.jpg', cat: 'Sanitation', title: 'Community Infrastructure' },
  { img: '/wp-content/uploads/2016/08/7-1.jpg', cat: 'Health', title: 'Medical Support Facilities' },
  { img: '/wp-content/uploads/2016/08/8.jpg', cat: 'Community', title: 'Local Engagement Programs' },
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
  return (
    <div className="site-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/csr-bg.jpg"
        title="Social Impact"
        breadcrumbs={[{ label: 'CSR Projects' }]}
      />
      
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        <div className="section-header">
          <span className="section-eyebrow">CSR Initiatives</span>
          <h2 className="section-h2">Empowering Local Communities</h2>
          <p className="section-intro">
            Through targeted interventions in education, health, and infrastructure, 
            we aim to create a lasting positive legacy in the regions we serve.
          </p>
        </div>

        <div className="project-highlight-grid">
          {IMAGES.map((item, i) => (
            <div key={i} className="project-card glass">
              <div className="project-img-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  className="project-photo"
                  onError={e => { e.target.style.background = 'var(--gray-200)'; }}
                />
                <span className="project-badge">{item.cat}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-desc">Investing in the next generation and building resilient community assets.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="csr-archive-section glass" style={{ marginTop: '80px', padding: '60px', borderRadius: 'var(--radius-xl)' }}>
          <h3 className="footer-h" style={{ color: 'var(--shell-blue)', marginBottom: '40px' }}>Approved Project Archives</h3>
          <div className="csr-dl-grid">
            {DOWNLOADS.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="csr-dl-item"
              >
                <div className="dl-icon-c"><PdfIcon /></div>
                <div className="dl-info">
                  <span className="dl-label">{item.label}</span>
                  <span className="dl-type">{item.url.endsWith('.docx') ? 'Word Document' : 'PDF Document'} • Approved</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
