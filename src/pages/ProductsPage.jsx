import React from 'react';
import PageHero from '../components/PageHero';

const SERVICES = [
  'Sale of Aviation Turbine Fuel (ATF) to airlines — into-plane fuelling services at 14 Indian airports',
  'Airport fuelling facility operations and management to international standards',
  'Airport master-planning and design of fuel infrastructure systems',
  'Fuel farm management — tank farms, hydrant systems, and into-plane equipment maintenance',
  'Shell Aviation globally provides aviation fuelling services supporting airlines across more than 35 countries',
];

export default function ProductsPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2023/09/slider2.jpg"
        title="Products &amp; Services"
        breadcrumbs={[{ label: 'Products and Services' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Products and Services</h2>
        <div className="body-text" style={{ marginBottom: 32 }}>
          <p>
            Shell MRPL Aviation provides solutions for Aviation Turbine Fuel requirements to its customers and offers an integrated end to end partnership with Shell Aviation, the only multi-national oil company with a government license to market aviation fuels in India. Shell MRPL Aviation adds value to our partners through:
          </p>
          <p style={{ marginTop: '16px' }}>
            Shell MRPL Aviation adds value to our partners through:
          </p>
        </div>

        <div className="service-list">
          {[
            'International best practices and global standards of safety, quality & operations in supplying Jet fuel',
            'Pricing transparency',
            'Shell Aviation’s global network of around 900 airports in about 36 countries',
            'Acceptance of Shell Carnet and Shell Fuel & Fly Cards',
            'Shell’s comprehensive portfolio which offers a range of innovative products and services, including aviation lubricants & risk marketing',
          ].map((item, i) => (
            <div key={i} className="service-item">
              <span className="service-num">0{i + 1}</span>
              <p className="service-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
