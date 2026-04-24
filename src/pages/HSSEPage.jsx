import React from 'react';
import PageHero from '../components/PageHero';

const PRACTICES = [
  'Comply with Shell Aviation Policies and Standards, those of our joint venture partner MRPL, all applicable laws, regulations, and fiscal requirements.',
  'Operate with an HSSE culture built upon our Core Values of Honesty, Integrity, and Respect for People.',
  'Strive for Goal Zero incidents in our operations — recognizing that no business objective is so important that it should be pursued at the sacrifice of safety.',
  'Establish and review HSSE objectives continually to minimize the environmental impact of our operations.',
  'Encourage and embrace HSSE interventions and learn from regular performance reviews.',
  'Ensure every individual across the organization is competent and fully trained in executing their tasks safely.',
  'Provide a secure and healthy working environment for all staff, contractors, and customers.',
  'Communicate appropriately and consult with employees and stakeholders on HSSE matters.',
];

export default function HSSEPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/HSSE-bg.jpg"
        fallbackSrc="/wp-content/uploads/2016/08/131G5664.jpg"
        title="HSSE"
        breadcrumbs={[{ label: 'HSSE & Quality' }, { label: 'HSSE' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Health, Safety, Security &amp; Environment</h2>
        <div className="body-text" style={{ marginBottom: 36 }}>
          <p>
            No matter the location or the challenge, Aviation Operations are inherently high risk.
            Therefore, <strong>Health, Safety, Security &amp; Environment (HSSE)</strong> remains our
            utmost priority. Shell MRPL Aviation has a steadfast commitment to conducting its business
            safely, maintaining zero harm to people, and protecting the environment.
          </p>
        </div>

        <h3 className="page-h3">Our Commitments</h3>
        <div className="practice-list">
          {PRACTICES.map((item, i) => (
            <div key={i} className="practice-item">
              <div className="practice-num">{i + 1}</div>
              <p className="practice-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
