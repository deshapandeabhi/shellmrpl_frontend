import React from 'react';
import PageHero from '../components/PageHero';

const MANAGERS = [
  { name: 'Mr. Devendra Nath Soral', role: 'CEO',                          image: '/wp-content/uploads/2024/09/Dev-Soral-Picture.jpg' },
  { name: 'Mr. S Chockalingam',      role: 'CFO and Company Secretary',     image: '/wp-content/uploads/2016/08/c001.jpg' },
  { name: 'Mr. G Srinivas Rao',      role: 'Head of Sales',                 image: '/wp-content/uploads/2016/08/3-1.jpg' },
  { name: 'Mr. K Tirumal Rao',       role: 'HoD Operations, QC & ERP',      image: '/wp-content/uploads/2016/08/Thirumala-sir-3.jpg' },
];

export default function ManagementPage() {
  return (
    <div className="site-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Leadership Team"
        breadcrumbs={[{ label: 'Management' }]}
      />
      
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Operational Excellence</span>
          <h2 className="section-h2">The Management Team</h2>
          <p className="section-intro">
            Driving innovation and operational precision across India's aviation fuel landscape.
          </p>
        </div>

        <div className="management-grid">
          {MANAGERS.map((p, i) => (
            <div key={i} className="management-card reveal">
              <div className="mgmt-img-wrap">
                <img
                  src={p.image}
                  alt={p.name}
                  className="mgmt-photo"
                  onError={e => { 
                    e.target.style.background = 'var(--gray-200)';
                  }}
                />
              </div>
              <div className="mgmt-info">
                <h3 className="mgmt-name">{p.name}</h3>
                <span className="mgmt-role">{p.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
