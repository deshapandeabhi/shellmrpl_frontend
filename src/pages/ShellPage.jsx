import React from 'react';
import PageHero from '../components/PageHero';

export default function ShellPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Shell"
        breadcrumbs={[{ label: 'Company Parentage' }, { label: 'Shell' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Shell — Company Profile</h2>
        <div className="body-text">
          {/* <h3 className="page-h3">Shell Aviation</h3> */}
          <p>
            Shell MRPL Aviation Fuels and Services Limited is a 50:50 Joint Venture Company formed in 2008 between Shell, a global leader in marketing aviation fuel and operating airport fueling facilities and Mangalore Refinery and Petrochemicals Limited (MRPL), a subsidiary of Oil and Natural Gas Corporation Limited, India’s largest national oil company
          </p>
          <p>
            We supply Aviation Turbine Fuel (Jet A-1) to our airline customers and ensure services as per Shell Aviation’s world class operational standards. Our customers also get benefits of Shell’s extensive experience in working with airport authorities & stakeholders to improve overall airport safety standards including into-plane fueling, fuel hydrant designs, airport network planning and fuel farm systems.
          </p>

          {/* <h3 className="page-h3">Shell in India</h3>
          <p>
            Shell has been present in India for more than 80 years. Today, Shell has invested across
            the energy value chain — in fuels, lubricants, liquefied natural gas, chemicals, and
            information technology. Shell Lubricants has been the world&apos;s number one lubricants
            brand globally since 2007.
          </p> */}

          <div style={{ marginTop: 32 }}>
            <a href="https://www.shell.com" target="_blank" rel="noopener noreferrer" className="btn-blue">
              Visit Shell.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
