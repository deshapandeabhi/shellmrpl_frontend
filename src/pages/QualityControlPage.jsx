import React from 'react';
import PageHero from '../components/PageHero';

const PRACTICES = [
  'Adherence to DGCA approved Quality Control manual. All approved locations are audited by DGCA annually and by SMA Quality Control Manager semi-annually.',
  'Compliance with the Joint Inspection Group (JIG) manual and Shell\'s uncompromising aviation fuel quality standards.',
  'Dedicated aviation fuel infrastructure—receiving fuel from our parent companies through dedicated tankers to ensure zero contamination.',
  'Continuous monitoring and filtering of fuel through advanced micro-filters and water separators prior to into-plane delivery.',
  'State-of-the-art laboratory testing facilities ensuring jet fuel meets all national and international specifications (DEF STAN 91-091, IS:1571).',
];

export default function QualityControlPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        fallbackSrc="/wp-content/uploads/2016/08/131G5664.jpg"
        title="Quality Control"
        breadcrumbs={[{ label: 'HSSE & Quality' }, { label: 'Quality Control' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Aviation Fuel Quality Standards</h2>
        <div className="body-text" style={{ marginBottom: 36 }}>
          <p>
            Delivering clean, dry, and on-specification Aviation Turbine Fuel is critical for airline
            safety. Shell MRPL Aviation strictly implements comprehensive quality assurance protocols,
            from product receipt all the way to the aircraft wing.
          </p>
        </div>

        <h3 className="page-h3">Our Quality Control Practices</h3>
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
