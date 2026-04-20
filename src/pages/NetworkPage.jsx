import React from 'react';

/**
 * NetworkPage — exact replica of http://localhost:10018/shell-mrpl-aviation-network/
 *
 * Layout:
 *  1. Full-width GIF map element (network-video.gif)
 *  2. Dark blue heading "Our Network"
 *  3. Subtitle paragraph
 *  4. 3-Column CSS Grid of airports with Map Marker icons
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

const AIRPORTS = [
  { name: 'Bangalore International Airport', code: 'IATA – BLR; ICAO – VOBL' },
  { name: 'Coimbatore International Airport', code: 'IATA – CJB; ICAO – VOCB' },
  { name: 'Calicut International Airport', code: 'IATA – CCJ; ICAO – VOCL' },
  { name: 'Chennai International Airport', code: 'IATA – MAA; ICAO – VOMM' },
  { name: 'Dabolim International Airport – Goa', code: 'IATA – GOI; ICAO – VOGO' },
  { name: 'Delhi International Airport', code: 'IATA – DEL; ICAO – VIDP' },
  { name: 'Hyderabad International Airport', code: 'IATA – HYD; ICAO – VOHS' },
  { name: 'Kolkata International Airport', code: 'IATA – CCU; ICAO – VECC' },
  { name: 'Kannur International Airport', code: 'IATA – CNN; ICAO – VOKN' },
  { name: 'Manohar International Airport', code: 'IATA – GOX; ICAO – VOGA' },
  { name: 'Madurai International Airport', code: 'IATA – IXM; ICAO – VOMD' },
  { name: 'Mangalore International Airport', code: 'IATA – IXE; ICAO – VOML' },
  { name: 'Mumbai International Airport', code: 'IATA – BOM; ICAO – VABB' },
  { name: 'Tiruchirappalli International Airport', code: 'IATA – TRZ; ICAO – VOTR' },
];

export default function NetworkPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Map Video (GIF) ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2023/10/network-video.gif`}
          alt="Our Network Map"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Content ── */}
      <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Main Heading */}
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#1f3d6e', // Matches WP primary blue headings
          fontFamily: FONT,
          marginBottom: '16px',
          marginTop: 0,
        }}>
          Our Network
        </h2>

        {/* Paragraph text */}
        <p style={{
          fontSize: '15px',
          color: '#888',
          fontFamily: FONT,
          marginBottom: '40px',
        }}>
          Shell MRPL Aviation currently supplies Jet Fuel at its below mentioned network airports in India
        </p>

        {/* Airports Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
        }}>
          {AIRPORTS.map((airport, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start' }}>
              {/* Blue Map Marker SVG mimicking FontAwesome fa-map-marker-alt */}
              <div style={{ flexShrink: 0, marginRight: '16px', marginTop: '2px' }}>
                <svg
                  viewBox="0 0 384 512"
                  width="20"
                  height="20"
                  style={{ fill: '#1f3d6e' }}
                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
              </div>
              <div>
                <h6 style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1f3d6e', // Matches dark blue text in screenshot
                  fontFamily: FONT,
                  margin: '0 0 6px 0',
                }}>
                  {airport.name}
                </h6>
                <p style={{
                  fontSize: '14px',
                  color: '#888',
                  fontFamily: FONT,
                  margin: 0,
                }}>
                  {airport.code}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
