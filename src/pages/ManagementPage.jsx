import React from 'react';
import PageHero from '../components/PageHero';

const MANAGERS = [
  { name: 'Mr. Devendra Nath Soral', role: 'CEO',                          image: '/wp-content/uploads/2024/09/Dev-Soral-Picture.jpg' },
  { name: 'Mr. S Chockalingam',      role: 'CFO and Company Secretary',     image: '/wp-content/uploads/2016/08/c001.jpg' },
  { name: 'Mr. G Srinivas Rao',      role: 'Head of Department — Sales',    image: '/wp-content/uploads/2016/08/3-1.jpg' },
  { name: 'Mr. K Tirumal Rao',       role: 'HoD Operations, QC & ERP',      image: '/wp-content/uploads/2016/08/Thirumala-sir-3.jpg' },
];

export default function ManagementPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Management Team"
        breadcrumbs={[{ label: 'About', to: '/about' }, { label: 'Management Team' }]}
      />
      <div className="content-wrap">
        <h2 className="page-h2">Management Team</h2>
        <div className="people-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 700 }}>
          {MANAGERS.map((p, i) => (
            <article key={i} className="person-card">
              <img
                src={p.image}
                alt={p.name}
                className="person-photo"
                style={{ width: 150, height: 150 }}
                onError={e => { 
                  e.target.onerror = null;
                  e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                  e.target.style.background = 'var(--gray-200)';
                }}
              />
              <div className="person-name">{p.name}</div>
              <div className="person-role">{p.role}</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
