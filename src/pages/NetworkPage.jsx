import { useState } from 'react';
import indiaMap from '../assets/images/indian_map.jpg';
import PageHero from '../components/PageHero';

const AIRPORTS = [
  { name: 'Kempegowda International Airport, Bengaluru', code: 'IATA: BLR | ICAO: VOBL', x: 39.5, y: 78.5 },
  { name: 'Mangaluru International Airport', code: 'IATA: IXE | ICAO: VOML', x: 36.1, y: 79.5 },
  { name: 'Rashtrakavi Kuvempu Airport, Shivamogga', code: 'IATA: RQY | ICAO: VOSH', x: 36.8, y: 75.5 },
  { name: 'Rajiv Gandhi Intl Airport, Hyderabad', code: 'IATA: HYD | ICAO: VOHS', x: 43.6, y: 64.1 },
  { name: 'Goa Dabolim International Airport', code: 'IATA: GOI | ICAO: VOGO',x: 34.4, y: 72},
  { name: 'Manohar International Airport - Goa', code: 'IATA: GOX | ICAO: VOGA', x: 33.9, y: 70.1 },
  { name: 'Calicut International Airport', code: 'IATA: CCJ | ICAO: VOCL', x: 38.6, y: 87.5 },
  { name: 'Kannur International Airport', code: 'IATA: CNN | ICAO: VOKN', x: 37.5, y: 85.5 },
  { name: 'Thiruvananthapuram International Airport', code: 'IATA: TRV | ICAO: VOTV', x: 39.0, y: 90.8 },
  { name: 'Indira Gandhi International Airport - Delhi', code: 'IATA: DEL | ICAO: VIDP', x: 40.1, y: 30.5 },
  { name: 'Chhatrapati Shivaji Maharaj International Airport Mumbai', code: 'IATA: BOM | ICAO: VABB', x: 33.4, y: 59.0 },
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
  const [selectedApt, setSelectedApt] = useState(null);

  return (
    <div className="site-page" onClick={() => setSelectedApt(null)}>
      <PageHero
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
          <div className="map-container" onClick={() => setSelectedApt(null)}>
            <img loading="lazy" src={indiaMap} alt="India Network Map" className="map-image" />
            <div className="map-points-layer">
              {AIRPORTS.map((apt, i) => (
                <div 
                  key={i} 
                  className={`map-point-wrapper ${selectedApt === i ? 'active' : ''}`} 
                  style={{ left: `${apt.x}%`, top: `${apt.y}%` }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedApt(selectedApt === i ? null : i);
                  }}
                >
                  <div className="map-pin-container">
                    <svg viewBox="0 0 24 24" width="32" height="32" style={{ display: 'block' }}>
                      <path 
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="#DD1D21"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <div className="map-pin-pulse"></div>
                  </div>
                  <div className="map-tooltip desktop-only-tooltip">
                    <div className="airport-name-tip">{apt.name.split(',')[0]}</div>
                    <div style={{ opacity: 0.85, fontSize: '11px', color: 'white', fontWeight: 500 }}>{apt.code}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile-only Premium Bottom Floating Card */}
            {selectedApt !== null && (
              <div 
                className="map-mobile-card"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="map-mobile-card-accent"></div>
                <div className="map-mobile-card-content">
                  <div className="map-mobile-card-name">{AIRPORTS[selectedApt].name}</div>
                  <div className="map-mobile-card-code">{AIRPORTS[selectedApt].code}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="airport-grid" style={{ marginTop: '80px' }}>
          {AIRPORTS.map((apt, i) => (
            <div 
              key={i} 
              className={`airport-card reveal ${selectedApt === i ? 'active' : ''}`}
              style={{ cursor: 'pointer', borderLeft: selectedApt === i ? '4px solid var(--shell-red)' : 'none' }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedApt(selectedApt === i ? null : i);
              }}
            >
              <div className="airport-icon-c" style={{ color: selectedApt === i ? 'var(--shell-red)' : 'inherit' }}><PinIcon /></div>
              <div className="airport-info">
                <div className="airport-name-text" style={{ color: selectedApt === i ? 'var(--shell-red)' : 'inherit', fontWeight: selectedApt === i ? '900' : 'inherit' }}>{apt.name}</div>
                <div className="airport-code-text">{apt.code}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
