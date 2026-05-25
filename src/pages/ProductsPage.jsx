import PageHero from '../components/PageHero';

const SERVICES = [
  'Sale of Aviation Turbine Fuel (ATF) to airlines — into-plane fuelling services at 14 Indian airports',
  'Airport fuelling facility operations and management to international standards',
  'Airport master-planning and design of fuel infrastructure systems',
  'Fuel farm management — tank farms, hydrant systems, and into-plane equipment maintenance',
  'Shell MRPL Aviation globally provides aviation fuelling services supporting airlines across more than 35 countries',
];

export default function ProductsPage() {
  return (
    <div className="inner-page">
      <PageHero
        title="Products and Services"
        breadcrumbs={[{ label: 'Products and Services' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Products and Services</h2>
        <div className="body-text" style={{ marginBottom: 32, textAlign: 'justify' }}>
          <p>
            Shell MRPL Aviation provides solutions for Aviation Turbine Fuel requirements to its customers and offers an integrated end to end partnership with Shell MRPL Aviation.
          </p>
          <p style={{ marginTop: '16px' }}>
            Shell MRPL Aviation adds value to our partners through:
          </p>
        </div>

        <div className="service-list">
          {[
            'International best practices and global standards of safety, quality and operations in supplying Jet fuel',
            'Pricing transparency',
            'Access to Shell Aviation global network in about 30 countries',
            'Acceptance of Shell Carnet and Shell Fuel and Fly Cards',
            'Shell’s comprehensive portfolio which offers a range of innovative products, risk marketing and services',
          ].map((item, i) => (
            <div key={i} className="service-item">
              <span className="service-num">0{i + 1}</span>
              <p className="service-text" style={{ textAlign: 'justify' }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
