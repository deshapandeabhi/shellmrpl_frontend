import React from 'react';
import PageHero from '../components/PageHero';

const AIRPORTS = [
  { name: 'Chennai International Airport',              code: 'IATA: MAA | ICAO: VOMM' },
  { name: 'Kempegowda International Airport, Bengaluru',code: 'IATA: BLR | ICAO: VOBL' },
  { name: 'Rajiv Gandhi Intl Airport, Hyderabad',       code: 'IATA: HYD | ICAO: VOHS' },
  { name: 'Goa International Airport',                  code: 'IATA: GOI | ICAO: VOGO' },
  { name: 'Calicut International Airport',              code: 'IATA: CCJ | ICAO: VOCL' },
  { name: 'Mangaluru International Airport',            code: 'IATA: IXE | ICAO: VOML' },
  { name: 'Madurai International Airport',              code: 'IATA: IXM | ICAO: VOMD' },
  { name: 'Tirupati Airport',                           code: 'IATA: TIR | ICAO: VOTP' },
  { name: 'Hubli Airport',                              code: 'IATA: HBX | ICAO: VOHB' },
  { name: 'Tuticorin Airport',                          code: 'IATA: TCR | ICAO: VOTK' },
  { name: 'Mysore Airport',                             code: 'IATA: MYQ | ICAO: VOMY' },
  { name: 'Kochi International Airport',                code: 'IATA: COK | ICAO: VOCI' },
  { name: 'Vijayawada Airport',                         code: 'IATA: VGA | ICAO: VOVZ' },
  { name: 'Coimbatore International Airport',           code: 'IATA: CJB | ICAO: VOCB' },
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

        <img
          src="/wp-content/uploads/2016/08/Network.gif"
          alt="Shell MRPL Aviation India Network Map"
          style={{ width: '100%', maxWidth: 900, borderRadius: 'var(--radius)', marginBottom: 40, boxShadow: 'var(--shadow-md)' }}
          onError={e => { e.target.style.display = 'none'; }}
        />

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
