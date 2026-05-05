import React from 'react';
import PageHero from '../components/PageHero';

export default function MRPLPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="MRPL"
        breadcrumbs={[{ label: 'Company Parentage' }, { label: 'MRPL' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Mangalore Refinery and Petrochemicals Limited</h2>
        <div className="body-text">
          <p>
            Mangalore Refinery and Petrochemicals Limited (MRPL) is a 15 MMTPA state of art refinery and is a subsidiary of ONGC (Oil and Natural Gas Corporation), India’s largest national oil company.
          </p>
          <p>
            MRPL is the first refinery in India to be awarded with the prestigious ‘Platinum’ award by FICCI for its environmental initiatives. MRPL produces high quality Jet A-1 fuel at its refinery in Mangalore.
          </p>
          <p>
            The Refinery has got a versatile design with high flexibility to process Crudes of various API, delivering a variety of quality products. Its process configuration guarantees high conversion of heavier crudes and maximum distillate yield, enabling it to produce high value products like Aviation Turbine Fuel (ATF) of the finest quality.
          </p>
          <p>
            With its rich heritage and operational excellence, MRPL brings immense local knowledge and refining capability to the Shell MRPL Aviation joint venture.
          </p>

          <div style={{ marginTop: 32 }}>
            <a href="https://www.mrpl.co.in" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Visit MRPL Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
