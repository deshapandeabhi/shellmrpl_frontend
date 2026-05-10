import indiaMap from '../assets/images/indian_map.jpg';
import PageHero from '../components/PageHero';

const AIRPORTS = [
  { name: 'Kempegowda International Airport, Bengaluru',          code: 'IATA: BLR | ICAO: VOBL', x: 39.5, y: 78.5 },
  { name: 'Mangaluru International Airport',                      code: 'IATA: IXE | ICAO: VOML', x: 36.1, y: 79.5 },
  { name: 'Rashtrakavi Kuvempu Airport, Shivamogga',              code: 'IATA: RQY | ICAO: ',     x: 36.8, y: 75.5 },
  { name: 'Rajiv Gandhi Intl Airport, Hyderabad',                 code: 'IATA: HYD | ICAO: VOHS', x: 43.6, y: 64.1 },
  { name: 'Goa Dabolim International Airport',                    code: 'IATA: GOI | ICAO: VOGO', x: 33.9, y: 70.1 },
  { name: 'Manohar International Airport - Goa',                  code: 'IATA: GOA | ICAO: ',     x: 34.4, y: 71.5 },
  { name: 'Calicut International Airport',                        code: 'IATA: CNN | ICAO: VOKN', x: 34.4, y: 70.5 },
  { name: 'Kannur International Airport',                         code: 'IATA: CCJ | ICAO: VOCL', x: 37.5, y: 85.5 },
  { name: 'Thiruvananthapuram International Airport',             code: 'IATA: TRV | ICAO: VOTV', x: 39.0, y: 90.8 },
  { name: 'Indira Gandhi International Airport - Delhi',          code: 'IATA: DEL | ICAO: VIDP', x: 40.1, y: 30.5 },
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
  return (
    <div className="site-page">
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
          <div className="map-container">
            <img src={indiaMap} alt="India Network Map" className="map-image" />
            <div className="map-points-layer">
              {AIRPORTS.map((apt, i) => (
                <div key={i} className="map-point-wrapper" style={{ left: `${apt.x}%`, top: `${apt.y}%` }}>
                  <div className="map-point"></div>
                  <div className="map-tooltip">
                    <div className="airport-name-tip">{apt.name.split(',')[0]}</div>
                    <div style={{ opacity: 0.85, fontSize: '11px', color: 'white', fontWeight: 600, letterSpacing: '0.08em' }}>{apt.code}</div>
                  </div>
                </div>
              ))}
            </div>
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
