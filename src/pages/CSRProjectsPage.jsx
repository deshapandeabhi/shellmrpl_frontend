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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export default function CSRProjectsPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/csr-bg.jpg"
        fallbackSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="CSR Projects"
        breadcrumbs={[
          { label: 'Investors Information', to: '/investors-information' },
          { label: 'CSR Policy', to: '/csr' },
          { label: 'CSR Projects' }
        ]}
      />
      <div className="content-wrap">
        <h2 className="page-h2">Approved CSR Projects</h2>
        <div className="body-text" style={{ maxWidth: 860, marginBottom: 36 }}>
          <p>
            Our Corporate Social Responsibility initiatives are focused on long-term sustainability
            and creating value in the communities where we operate. We regularly review and approve
            new projects that align with our CSR objectives.
          </p>
        </div>

        <h3 className="page-h3">Project Details Archive</h3>
        <div className="csr-dl-grid" style={{ maxWidth: 860 }}>
          {DOWNLOADS.map((item, i) => (
            <a
              key={i}
              href={`/wp-content/uploads/${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download"
            >
              <PdfIcon />
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <h3 className="page-h3" style={{ marginTop: 48, marginBottom: 24 }}>Project Highlights</h3>
        <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {IMAGES.map((item, i) => (
            <div key={i} className="feature-card">
              <div className="feature-card-img-wrap" style={{ height: 200 }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="feature-card-img"
                  onError={e => { e.target.style.background = 'var(--gray-200)'; e.target.onerror = null; }}
                />
              </div>
              <div className="feature-card-body" style={{ padding: 20 }}>
                <span className="feature-card-cat">{item.cat}</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16 }}>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
