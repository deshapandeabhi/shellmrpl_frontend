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
          <p>
            Shell is an integrated energy company that aims to meet the world’s growing demand for energy in ways that are economically, environmentally and socially responsible. Shell is a global group of energy and petrochemical companies. Its operations are divided into four businesses: Upstream, Integrated Gas and New Energies, Downstream, and Projects & Technology.
          </p>
          <p>
            In Upstream Shell focus on exploration for new liquids and natural gas reserves and on developing major new projects where our technology and know-how add value for resource holders.
          </p>
          <p>
            In Integrated Gas and New Energies, Shell focus on liquefying natural gas (LNG) and converting gas to liquids (GTL) so that it can be safely stored and shipped to markets around the world. The New Energies business has been established to explore and invest in new low-carbon opportunities.
          </p>
          <p>
            In Downstream, Shell focus on turning crude oil into a range of refined products, which are moved and marketed around the world for domestic, industrial and transport use. In addition, Shell produce and sell petrochemicals for industrial use worldwide. Shell’s oil sands mining activities in North America are also part of the Downstream organization.
          </p>
          <p>
            Shell’s Projects & Technology business is responsible for delivering new development projects and the research and development that leads to innovative and low-cost investments for the future.
          </p>
          <h3 className="page-h3">Shell Aviation</h3>
          <p>
            Every year at around 900 airports in about 36 countries, Shell Aviation provides fuel for almost 2 million aircraft, refueling an aircraft every 14 seconds.
          </p>
          <p>
            From the private pilot to the largest global airlines, Shell Aviation earns the loyalty of its customers by creating value through the safe and timely supply of high quality aviation fuels and a comprehensive range of high performance aviation lubricants and fluids
          </p>
          <h3 className="page-h3">Shell in India</h3>
          <p>
            Royal Dutch Shell is one of the largest and most diversified international investor in India’s energy sector among all global integrated oil companies.
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
