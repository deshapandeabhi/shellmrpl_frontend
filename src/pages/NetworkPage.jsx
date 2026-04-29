import React from 'react';
import PageHero from '../components/PageHero';
import indiaMap from '../assets/images/yellow_india.jpeg';

const AIRPORTS = [
  { name: 'Chennai International Airport',               code: 'IATA: MAA | ICAO: VOMM', x: 38.5, y: 72.5 },
  { name: 'Kempegowda International Airport, Bengaluru', code: 'IATA: BLR | ICAO: VOBL', x: 33.5, y: 73.5 },
  { name: 'Rajiv Gandhi Intl Airport, Hyderabad',        code: 'IATA: HYD | ICAO: VOHS', x: 35.5, y: 62.5 },
  { name: 'Goa International Airport',                   code: 'IATA: GOI | ICAO: VOGO', x: 27.5, y: 67.5 },
  { name: 'Calicut International Airport',               code: 'IATA: CCJ | ICAO: VOCL', x: 30.5, y: 78.5 },
  { name: 'Mangaluru International Airport',             code: 'IATA: IXE | ICAO: VOML', x: 29.5, y: 73.5 },
  { name: 'Madurai International Airport',               code: 'IATA: IXM | ICAO: VOMD', x: 36.5, y: 80.5 },
  { name: 'Tirupati Airport',                            code: 'IATA: TIR | ICAO: VOTP', x: 37.5, y: 71.5 },
  { name: 'Hubli Airport',                               code: 'IATA: HBX | ICAO: VOHB', x: 29.5, y: 66.5 },
  { name: 'Tuticorin Airport',                           code: 'IATA: TCR | ICAO: VOTK', x: 36.5, y: 84.5 },
  { name: 'Mysore Airport',                              code: 'IATA: MYQ | ICAO: VOMY', x: 32.5, y: 75.5 },
  { name: 'Kochi International Airport',                 code: 'IATA: COK | ICAO: VOCI', x: 31.5, y: 80.5 },
  { name: 'Vijayawada Airport',                          code: 'IATA: VGA | ICAO: VOVZ', x: 39.5, y: 64.5 },
  { name: 'Coimbatore International Airport',            code: 'IATA: CJB | ICAO: VOCB', x: 33.5, y: 77.5 },
];

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

export default function NetworkPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2023/09/slider2.jpg"
        title="Shell MRPL Aviation Network"
        breadcrumbs={[{ label: 'Products & Services', to: '/products-services' }, { label: 'Aviation Network' }]}
      />
      <div className="content-wrap">
        <h2 className="page-h2">Our Airport Network</h2>
        <div className="body-text" style={{ marginBottom: 36 }}>
          <p>
            Shell MRPL Aviation currently operates aviation fuelling at{' '}
            <strong>14 airports</strong> across India, ensuring safe and reliable delivery
            of Aviation Turbine Fuel to our airline customers.
          </p>
        </div>

        {/* Interactive Map Section */}
        <div className="network-map-section">
          <div className="map-container">
            <img src={indiaMap} alt="Shell MRPL India Network" className="map-image" />
            {AIRPORTS.map((apt, i) => (
              <div key={i} className="map-point-wrapper" style={{ left: `${apt.x}%`, top: `${apt.y}%` }}>
                <div className="map-point"></div>
                <div className="map-tooltip">
                  <div className="airport-name-tip">{apt.name.split(',')[0]}</div>
                  <div style={{ opacity: 0.8, fontSize: '11px' }}>{apt.code}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="page-h3">Airport Locations</h3>
        <div className="airport-grid">
          {AIRPORTS.map((apt, i) => (
            <div key={i} className="airport-card">
              <div className="airport-icon-c"><PinIcon /></div>
              <div>
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
