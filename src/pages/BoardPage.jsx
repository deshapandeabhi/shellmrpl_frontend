import React from 'react';
import PageHero from '../components/PageHero';

const DIRECTORS = [
  { name: 'Mr. M. Iyer',             role: 'Chairman',               image: '/wp-content/uploads/2016/08/board1.jpg' },
  { name: 'Mr. Devendra Nath Soral', role: 'CEO & Director',         image: '/wp-content/uploads/2024/09/Dev-Soral-Picture.jpg' },
  { name: 'Mr. Sanjay Kumar',        role: 'Director (Shell Nominee)',image: '/wp-content/uploads/2016/08/board4.jpg' },
  { name: 'Mr. Seshasayee',          role: 'Director (MRPL Nominee)', image: '/wp-content/uploads/2016/08/board6-e1472713879820.jpg' },
  { name: 'Mr. B. R. Gupta',         role: 'Director (MRPL Nominee)', image: '/wp-content/uploads/2016/08/board5.jpg' },
  { name: 'Mr. Vincent Stuer',       role: 'Director (Shell Nominee)',image: '/wp-content/uploads/2016/08/board3.jpg' },
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
