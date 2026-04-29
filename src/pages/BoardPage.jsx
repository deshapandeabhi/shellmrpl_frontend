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
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/board_of_director-bg.jpg"
        title="Board of Directors"
        breadcrumbs={[{ label: 'About', to: '/about' }, { label: 'Board of Directors' }]}
      />
      <div className="content-wrap">
        <h2 className="page-h2">Board of Directors</h2>
        <div className="people-grid">
          {DIRECTORS.map((p, i) => (
            <article key={i} className="person-card">
              <img
                src={p.image}
                alt={p.name}
                className="person-photo"
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
