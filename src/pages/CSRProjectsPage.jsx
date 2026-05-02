import React from 'react';
import PageHero from '../components/PageHero';

const DOWNLOADS = [
  { label: 'CSR Projects 2024-25', url: '2024/09/CSR-Approved-Projects-for-FY-2024-25.pdf' },
  { label: 'CSR Projects 2023-24', url: '2024/03/csr-projects-for-fy-2023-24.pdf' },
  { label: 'CSR Projects 2022-23', url: '2022/10/CSR-project-details-2022-23.pdf' },
  { label: 'CSR Projects 2021-22', url: '2022/01/CSR-Approved-Projects-for-FY-2021-22.pdf' },
  { label: 'CSR Projects 2020-21', url: '2021/04/Projects-Approved.pdf' },
  { label: 'CSR Projects 2019-20', url: '2021/04/Projects-Approved-by-the-Board.pdf' },
];

const IMAGES = [
  { img: '/wp-content/uploads/2021/04/project1.jpeg', cat: 'Education', title: 'Mini Science Lab' },
  { img: '/wp-content/uploads/2021/04/project2.jpeg', cat: 'Sanitation', title: 'Community Infrastructure' },
  { img: '/wp-content/uploads/2021/04/2.jpg', cat: 'Health', title: 'Medical Support Facilities' },
  { img: '/wp-content/uploads/2021/04/3.jpg', cat: 'Community', title: 'Local Engagement Programs' },
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
                href={`/wp-content/uploads/${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="csr-dl-item"
              >
                <div className="dl-icon-c"><PdfIcon /></div>
                <div className="dl-info">
                  <span className="dl-label">{item.label}</span>
                  <span className="dl-type">PDF Document • Approved</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
