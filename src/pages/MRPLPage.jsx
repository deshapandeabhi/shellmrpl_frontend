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
            MRPL is a schedule ‘A’ CPSE and a subsidiary of ONGC is a State of Art Grassroot Refinery located in a beautiful hilly terrain, north of Mangalore city, in Dakshin Kannada region. The Refinery has got a versatile design with high flexibility to process Crudes of various API and with high degree of Automation. MRPL has a design capacity to process 15 million metric tons per annum and have 2 Hydrocrackers producing Premium Diesel (High Cetane). It also has 2 CCRs producing Unleaded Petrol of High Octane.
          </p>
          <p>
            MRPL has high standards in refining and environment protection matched by its commitments to society. MRPL has also developed a Green Belt around the entire Refinery with plant species specially selected to blend with the local flora.
          </p>

          <div style={{ marginTop: 32 }}>
            <a href="https://www.mrpl.co.in" target="_blank" rel="noopener noreferrer" className="btn-blue">
              Visit MRPL Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
