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
            Mangalore Refinery and Petrochemicals Limited (MRPL) is an oil refining company operating
            in India. It was established in 1988. At present, MRPL is a subsidiary of Oil and Natural
            Gas Corporation Limited (ONGC), which holds 71.63% of the equity shares. ONGC is India&apos;s
            largest exploration and production company.
          </p>
          <p>
            MRPL is strategically located in a beautiful hilly terrain, north of Mangaluru city, in
            Dakshina Kannada District of Karnataka State (India). The 15.0 MMTPA (Million Metric Tonne
            Per Annum) Refinery has got a versatile design with high flexibility to process Crudes
            of various API, delivering a variety of quality products.
          </p>
          <p>
            MRPL&apos;s refinery is designed to process light to heavy and sour to sweet Crudes. Its
            process configuration guarantees high conversion of heavier crudes and maximum distillate
            yield, enabling it to produce high value products like Aviation Turbine Fuel (ATF) of
            the finest quality.
          </p>
          <p>
            With its rich heritage and operational excellence, MRPL brings immense local knowledge
            and refining capability to the Shell MRPL Aviation joint venture.
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
