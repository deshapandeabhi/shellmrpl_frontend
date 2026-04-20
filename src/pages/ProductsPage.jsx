import React from 'react';

/**
 * ProductsPage — exact replica of http://localhost:10018/product-services/
 *
 * Layout:
 *  1. Full-width hero image (slider2.jpg - airplane fueling)
 *  2. Dark blue heading "Products and Services"
 *  3. Description paragraph
 *  4. Numbered list of offerings
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

export default function ProductsPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2016/08/slider2.jpg`}
          alt="Products and Services hero"
          onError={(e) => {
            // Fallbacks in case the specific name varies
            e.target.src = `${BASE_IMG_URL}/2016/08/slider2-1024x360.jpg`;
            e.target.onerror = () => {
              e.target.style.display = 'none';
            };
          }}
          style={{
            width: '100%',
            height: '270px',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Content ── */}
      <div style={{ padding: '40px 40px 48px', maxWidth: '800px' }}>
        
        {/* Main Heading */}
        <h2 style={{
          fontSize: '22px',
          fontWeight: 700,
          color: '#1f3d6e', // Matches WP primary blue headings
          fontFamily: FONT,
          marginBottom: '20px',
          marginTop: 0,
        }}>
          Products and Services
        </h2>

        {/* Paragraph text */}
        <p style={{
          fontSize: '15px',
          lineHeight: '1.8',
          color: '#555',
          fontFamily: FONT,
          marginBottom: '20px',
        }}>
          Shell MRPL Aviation provides solutions for Aviation Turbine Fuel requirements to its customers and offers an integrated end to end partnership with Shell Aviation, the only multi-national oil company with a government license to market aviation fuels in India. Shell MRPL Aviation adds value to our partners through:
        </p>

        {/* Numbered List */}
        <ol style={{
          margin: 0,
          paddingLeft: '24px',
          listStyleType: 'decimal',
          color: '#555',
          fontFamily: FONT,
          fontSize: '15px',
          lineHeight: '1.8',
        }}>
          <li style={{ paddingLeft: '8px', marginBottom: '8px' }}>
            International best practices and global standards of safety, quality &amp; operations in supplying Jet fuel
          </li>
          <li style={{ paddingLeft: '8px', marginBottom: '8px' }}>
            Pricing transparency
          </li>
          <li style={{ paddingLeft: '8px', marginBottom: '8px' }}>
            Shell Aviation’s global network of around 900 airports in about 36 countries
          </li>
          <li style={{ paddingLeft: '8px', marginBottom: '8px' }}>
            Acceptance of Shell Carnet and Shell Fuel &amp; Fly Cards
          </li>
          <li style={{ paddingLeft: '8px', marginBottom: '8px' }}>
            Shell’s comprehensive portfolio which offers a range of innovative products and services, including aviation lubricants &amp; risk marketing.
          </li>
        </ol>

      </div>
    </div>
  );
}
