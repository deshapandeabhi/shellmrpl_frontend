import React from 'react';
import PageHero from '../components/PageHero';

const BASE_IMG_URL = '/wp-content/uploads';

const DIRECTORS = [
  {
    name: 'Mr. Mundkur Shyamprasad Kamath',
    role: 'Chairman, Shell MRPL Aviation & Director, MRPL',
    image: `${BASE_IMG_URL}/2024/08/ShyamPrasad-Kamath-MRPL.jpg`,
  },
  {
    name: 'Mr. Sanjay Samuel Varkey',
    role: 'Director, Shell MRPL Aviation & Shell India Markets Private Limited',
    image: `${BASE_IMG_URL}/2024/05/sanjay-verkey.png`,
  },
  {
    name: 'Mr. BH Vasudev Prasad',
    role: 'Director, Shell MRPL Aviation & ED-Projects in MRPL',
    image: `${BASE_IMG_URL}/2024/05/8.png`,
  },
  {
    name: 'Mr. Ziad Victor Soussou',
    role: 'Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/2025/06/Photo_Zia-Victor.jpg`,
  },
  {
    name: 'Mr. B N Bankapur',
    role: 'Independent Director, Shell MRPL Aviation & Chairman, BEC Pvt Ltd',
    image: `${BASE_IMG_URL}/2024/05/9.png`,
  },
  {
    name: 'Mr. Saikumar Rajagopal',
    role: 'Independent Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/2024/05/2.png`,
  },
  {
    name: 'Ms. Sangeeta Sumesh',
    role: 'Independent Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/2025/04/IMG-20250407-WA0033.jpg`,
  },
];

export default function BoardPage() {
  return (
    <div className="site-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/board_of_director-bg.jpg"
        title="Our Leadership"
        breadcrumbs={[{ label: 'Board of Directors' }]}
      />
      
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        <div className="section-header">
          <span className="section-eyebrow">The Board</span>
          <h2 className="section-h2">Guiding Visionary Excellence</h2>
          <p className="section-intro">
            Our leadership team brings together decades of global aviation experience 
            and local industrial expertise to drive sustainable growth.
          </p>
        </div>

        <div className="people-grid">
          {DIRECTORS.map((p, i) => (
            <div key={i} className="person-card reveal">
              <div className="person-img-wrap">
                <img
                  src={p.image}
                  alt={p.name}
                  className="person-photo"
                  onError={e => {
                    e.target.style.background = 'var(--gray-200)';
                    e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                  }}
                />
              </div>
              <div className="person-body">
                <h3 className="person-name">{p.name}</h3>
                <p className="person-role">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
