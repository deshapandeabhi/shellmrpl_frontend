import React from 'react';

/**
 * PricesPage — exact replica of http://localhost:10018/posted-airfield-prices/
 *
 * Layout:
 *  1. Full-width hero image
 *  2. "Our Posted Airfield Prices for May 2020" Heading
 *  3. Table showing Airport and Duty-paid Fuel (INR/KL)
 *     - Header row is dark blue with white text
 *     - Data rows are alternating white and light-grey
 *     - Text is centered
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

const PRICES = [
  { airport: 'Chennai', price: '18151' },
  { airport: 'Bangalore', price: '18618' },
  { airport: 'Hyderabad', price: '20316' },
  { airport: 'Goa', price: '20769' },
  { airport: 'Calicut', price: '18806' },
  { airport: 'Mangalore', price: '15958' },
  { airport: 'Madurai', price: '21665' },
];

export default function PricesPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2023/09/posted_airfield_prices-bg.jpg`}
          alt="Posted Airfield Prices Hero"
          onError={(e) => {
            e.target.src = `${BASE_IMG_URL}/2023/09/posted_airfield_prices-bg-1024x302.jpg`;
          }}
          style={{
            width: '100%',
            height: '270px', // Matches the consistent hero banner height
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Content ── */}
      <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Main Heading */}
        <h2 style={{
          fontSize: '22px',
          fontWeight: 400,
          color: '#1f3d6e', // WP primary blue
          fontFamily: FONT,
          marginBottom: '30px',
          marginTop: 0,
        }}>
          Our Posted Airfield Prices for May 2020
        </h2>

        {/* ── 3. Table ── */}
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: FONT,
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
          }}>
            <thead>
              <tr>
                <th style={{
                  backgroundColor: '#1f3d6e',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '15px',
                  padding: '16px',
                  textAlign: 'center',
                  width: '50%',
                }}>
                  Airport
                </th>
                <th style={{
                  backgroundColor: '#1f3d6e',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '15px',
                  padding: '16px',
                  textAlign: 'center',
                  width: '50%',
                }}>
                  Duty-paid Fuel (INR/KL)
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICES.map((row, idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8f9fa' }}>
                  <td style={{
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '14.5px',
                    color: '#333',
                    borderBottom: '1px solid #eee',
                  }}>
                    {row.airport}
                  </td>
                  <td style={{
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '14.5px',
                    color: '#333',
                    borderBottom: '1px solid #eee',
                  }}>
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
