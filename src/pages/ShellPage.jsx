import React from 'react';

/**
 * ShellPage — exact replica of http://localhost:10018/shell/
 *
 * Layout:
 *  1. Full-width hero image (profile-bg.jpg)
 *  2. Description of Shell Group
 *  3. Shell Aviation section (Blue heading)
 *  4. Shell in India section (Blue heading)
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

export default function ShellPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2023/10/profile-bg.jpg`}
          alt="Shell MRPL Aviation"
          style={{
            width: '100%',
            height: '270px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Content ── */}
      <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Paragraphs */}
        <div style={{
          fontSize: '15px',
          lineHeight: '1.6',
          color: '#333',
          fontFamily: FONT,
          textAlign: 'justify',
        }}>
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
          <p>
            To know more about Shell, please <a href="http://www.shell.com/" style={{ color: '#204579', textDecoration: 'none', fontWeight: 600 }}>click here</a>
          </p>

          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: '#204579',
            fontFamily: FONT,
            marginTop: '40px',
            marginBottom: '20px',
          }}>
            Shell Aviation
          </h2>
          <p>
            Every year at around 900 airports in about 36 countries, Shell Aviation provides fuel for almost 2 million aircraft, refueling an aircraft every 14 seconds.
          </p>
          <p>
            From the private pilot to the largest global airlines, Shell Aviation earns the loyalty of its customers by creating value through the safe and timely supply of high quality aviation fuels and a comprehensive range of high performance aviation lubricants and fluids.
          </p>
          <p>
            To know more about Shell Aviation, please <a href="http://www.shell.com/business-customers/aviation.html" target="_blank" rel="noopener noreferrer" style={{ color: '#204579', textDecoration: 'none', fontWeight: 600 }}>click here</a>
          </p>

          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: '#204579',
            fontFamily: FONT,
            marginTop: '40px',
            marginBottom: '20px',
          }}>
            Shell in India
          </h2>
          <p>
            Royal Dutch Shell is one of the largest and most diversified international investor in India’s energy sector among all global integrated oil companies.
          </p>
          <p>
            To know more about Shell India, please <a href="http://www.shell.in/" style={{ color: '#204579', textDecoration: 'none', fontWeight: 600 }}>click here</a>
          </p>
        </div>

      </div>
    </div>
  );
}
