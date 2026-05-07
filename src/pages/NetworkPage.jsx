import React from 'react';
import PageHero from '../components/PageHero';
import indiaMap from '../assets/images/yellow_india.jpeg';

const AIRPORTS = [
  { name: 'Kempegowda International Airport, Bengaluru',          code: 'IATA: BLR | ICAO: VOBL', x: 46.5, y: 76.5 },
  { name: 'Mangaluru International Airport',                      code: 'IATA: IXE | ICAO: VOML', x: 38.5, y: 74.5 },
  { name: 'Rashtrakavi Kuvempu Airport, Shivamogga',              code: 'IATA: RQY | ICAO: ',     x: 42.5, y: 68.5 },
  { name: 'Rajiv Gandhi Intl Airport, Hyderabad',                 code: 'IATA: HYD | ICAO: VOHS', x: 48.5, y: 64.5 },
  { name: 'Goa Dabolim International Airport',                    code: 'IATA: GOI | ICAO: VOGO', x: 36.5, y: 68.5 },
  { name: 'Manohar International Airport - Goa',                  code: 'IATA: GOA | ICAO: ',     x: 35.5, y: 66.5 },
  { name: 'Calicut International Airport',                        code: 'IATA: CNN | ICAO: VOKN', x: 41.5, y: 82.5 },
  { name: 'Kannur International Airport',                         code: 'IATA: CCJ | ICAO: VOCL', x: 40.5, y: 80.5 },
  { name: 'Thiruvananthapuram International Airport',             code: 'IATA: TRV | ICAO: VOTV', x: 42.5, y: 90.5 },
  { name: 'Indira Gandhi International Airport - Delhi',          code: 'IATA: DEL | ICAO: VIDP', x: 45.5, y: 30.5 },
  { name: 'Chhatrapati Shivaji Maharaj International Airport Mumbai', code: 'IATA: BOM | ICAO: VABB', x: 35.5, y: 56.5 },
];

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function NetworkPage() {
  return (
    <div className="site-page">
      <PageHero
        imageSrc="/wp-content/uploads/2023/09/slider2.jpg"
        title="Our Strategic Network"
        breadcrumbs={[{ label: 'Aviation Network' }]}
      />

      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        <div className="section-header">
          <span className="section-eyebrow">Strategic Reach</span>
          <h2 className="section-h2">Airport Locations</h2>
          <p className="section-intro">
            We operate at the core of India&apos;s aviation infrastructure, ensuring
            uninterrupted fuel supply and operational excellence at every major touchpoint.
          </p>
        </div>

        <div className="network-map-section reveal">
          <div className="map-container">
            <img src={indiaMap} alt="India Network Map" className="map-image" />
            {AIRPORTS.map((apt, i) => (
              <div key={i} className="map-point-wrapper" style={{ left: `${apt.x - 12}%`, top: `${apt.y}%` }}>
                <div className="map-point"></div>
                <div className="map-tooltip">
                  <div className="airport-name-tip">{apt.name.split(',')[0]}</div>
                  <div style={{ opacity: 0.85, fontSize: '11px', color: 'var(--color-shell-blue)', fontWeight: 600, letterSpacing: '0.08em' }}>{apt.code}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="airport-grid" style={{ marginTop: '80px' }}>
          {AIRPORTS.map((apt, i) => (
            <div key={i} className="airport-card reveal">
              <div className="airport-icon-c"><PinIcon /></div>
              <div className="airport-info">
                <div className="airport-name-text">{apt.name}</div>
                <div className="airport-code-text">{apt.code}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
