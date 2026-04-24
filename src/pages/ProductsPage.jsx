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
        breadcrumbs={[{ label: 'Products & Services' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Products &amp; Services</h2>
        <div className="body-text" style={{ marginBottom: 32 }}>
          <p>
            Shell MRPL Aviation Fuels &amp; Services Limited provides safe, reliable, and superior
            quality Aviation Turbine Fuel (ATF) to airline customers at airports across India,
            backed by Shell Aviation&apos;s world-class operational standards.
          </p>
        </div>
        <h3 className="page-h3">Our Core Services</h3>
        <div className="service-list">
          {SERVICES.map((item, i) => (
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
