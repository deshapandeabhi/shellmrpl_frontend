import React from 'react';

/**
 * MRPLPage — exact replica of http://localhost:10018/mrpl/
 *
 * Layout:
 *  1. Full-width hero image (profile-bg.jpg)
 *  2. Description of MRPL
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

export default function MRPLPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2023/10/profile-bg.jpg`}
          alt="MRPL Parentage"
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
            MRPL is a schedule ‘A’ CPSE and a subsidiary of ONGC is a State of Art Grassroot Refinery located in a beautiful hilly terrain, north of Mangalore city, in Dakshin Kannada region. The Refinery has got a versatile design with high flexibility to process Crudes of various API and with high degree of Automation. MRPL has a design capacity to process 15 million metric tons per annum and have 2 Hydrocrackers producing Premium Diesel (High Cetane). It also has 2 CCRs producing Unleaded Petrol of High Octane.
          </p>
          <p>
            MRPL has high standards in refining and environment protection matched by its commitments to society. MRPL has also developed a Green Belt around the entire Refinery with plant species specially selected to blend with the local flora.
          </p>
          <p>
            To know more about MRPL, please visit <a href="http://www.mrpl.co.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#204579', textDecoration: 'none', fontWeight: 600 }}>click here</a>
          </p>
        </div>

      </div>
    </div>
  );
}
