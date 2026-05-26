import PageHero from '../components/PageHero';

const BASE_IMG_URL = '/assets/team';

const DIRECTORS = [
  {
    name: 'Mundkur Shyamprasad Kamath',
    role: 'Chairman',
    image: `${BASE_IMG_URL}/Mundkur Shyamprasad Kamath.jpeg`,
    imgStyle: { objectFit: 'cover', objectPosition: 'top center' },
    bio: 'Managing Director, Chief Executive Officer - Mangalore Refinery and Petrochemicals Limited. Distinguished professional with over 30 years in the downstream hydrocarbon industry.',
  },
  {
    name: 'Sanjay Samuel Varkey',
    role: 'Director',
    image: `${BASE_IMG_URL}/Sanjay Varkey.jpg`,
    imgStyle: { objectFit: 'cover', objectPosition: 'top center' },
    bio: null,
  },
  {
    name: 'BH Vasudev Prasad',
    role: 'Director',
    image: `${BASE_IMG_URL}/BH_Vasudev_Prasad.png`,
    // Full-body PNG — zoom in on face
    imgStyle: { objectFit: 'cover', objectPosition: '50% 10%', transform: 'scale(1.4)', transformOrigin: '50% 10%' },
    bio: 'Executive Director (Projects) – MRPL',
  },
  {
    name: 'Ziad Victor Soussou',
    role: 'Director',
    image: `${BASE_IMG_URL}/Ziad_Victor_Soussou.jpg`,
    bio: 'Shell Business Manager with leadership in Sustainability',
  },
  {
    name: 'Dr. Sangeeta Sumesh',
    role: 'Independent Director',
    image: `${BASE_IMG_URL}/Sangeeta_Sumesh.jpg`,
    bio: 'CFO turned Business & Leadership Coach; Bestselling Author; Professional Speaker; Independent Director on Corporate Boards',
  },
  {
    name: 'Dr. Ravi Kumar Rentala',
    role: 'Independent Director',
    image: `${BASE_IMG_URL}/Ravi Kumar Rentala.jpg`,
    bio: 'Aviation sector expert with 40 years of experience, Ex Director of Indian Oil Sky tanking, IOT Utkal Energy, First CEO of IOSL in India; Ex - Bharat Petroleum Corporation Ltd.',
  },
  {
    name: 'Niyant Maru',
    role: 'Independent Director',
    image: `${BASE_IMG_URL}/Niyant Maru.jpg`,
    bio: 'Ex CFO - VISTARA (JV between Tatas and Singapore Airlines) Retired Finance and General Management professional with over 35 years of experience (30 Plus years in Tata Group and 15 + years in Leadership position) across multiple Industries ranging from Cosmetics, Steel, Telecom, Hotels, Real Estate, Infra and Aviation.',
  },
];

export default function BoardPage() {
  return (
    <div className="site-page">
      <style>{`
        /* Card container relative position for overlay positioning */
        .board-card-interactive {
          position: relative !important;
          overflow: hidden !important;
          cursor: pointer;
        }

        /* Glassmorphism slide-up overlay */
        .board-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      visibility 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 24px;
          z-index: 10;
          box-sizing: border-box;
        }

        /* Hover trigger */
        .board-card-interactive:hover .board-card-overlay {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .board-card-overlay-inner {
          max-height: 100%;
          overflow-y: auto;
          padding-right: 4px;
          text-align: left;
        }

        /* Smooth webkit scrollbar */
        .board-card-overlay-inner::-webkit-scrollbar {
          width: 4px;
        }
        .board-card-overlay-inner::-webkit-scrollbar-track {
          background: transparent;
        }
        .board-card-overlay-inner::-webkit-scrollbar-thumb {
          background: var(--gray-300, #D1D5DB);
          border-radius: 4px;
        }

        .board-card-bio-title {
          font-size: 13px;
          font-weight: 800;
          color: var(--shell-red, #E60012);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          display: block;
        }

        .board-card-bio-text {
          font-size: 13px;
          line-height: 1.6;
          color: var(--gray-700, #374151);
          font-weight: 500;
        }

        /* Read Bio visual hint link */
        .mgmt-bio-hint {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 12px;
          font-size: 12px;
          font-weight: 700;
          color: var(--shell-red, #E60012);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .board-card-interactive:hover .mgmt-bio-hint {
          opacity: 1;
        }
      `}</style>

      <PageHero
        title="Board of Directors"
        breadcrumbs={[{ label: 'Board of Directors' }]}
      />

      <div className="content-wrap content-narrow" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        {/* <div className="section-header">
          <span className="section-eyebrow">The Board</span>
          <h2 className="section-h2">Guiding Visionary Excellence</h2>
          <p className="section-intro">
            Our leadership team brings together decades of global aviation experience
            and local industrial expertise to drive sustainable growth.
          </p>
        </div> */}
 
        {/* Row 1: Chairman centered */}
        <div className="board-row-center">
          {(() => {
            const p = DIRECTORS[0];
            return (
              <div className={`management-card reveal ${p.bio ? 'board-card-interactive' : ''}`}>
                <div className="mgmt-img-wrap">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="mgmt-photo"
                    style={p.imgStyle || {}}
                    onError={e => {
                      e.target.style.background = 'var(--gray-200)';
                    }}
                  />
                </div>
                <div className="mgmt-info">
                  <h3 className="mgmt-name">{p.name}</h3>
                  <span className="mgmt-role" style={{ whiteSpace: 'pre-line' }}>{p.role}</span>
                  {p.bio && (
                    <span className="mgmt-bio-hint">
                      Read Bio
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                  )}
                </div>
                {p.bio && (
                  <div className="board-card-overlay">
                    <div className="board-card-overlay-inner">
                      <span className="board-card-bio-title">Biography</span>
                      <p className="board-card-bio-text">{p.bio}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        {/* Row 2: Directors (first 3) */}
        <div className="board-grid-3">
          {DIRECTORS.slice(1, 4).map((p, i) => (
            <div key={i} className={`management-card reveal ${p.bio ? 'board-card-interactive' : ''}`}>
              <div className="mgmt-img-wrap">
                <img
                  src={p.image}
                  alt={p.name}
                  className="mgmt-photo"
                  style={p.imgStyle || {}}
                  onError={e => {
                    e.target.style.background = 'var(--gray-200)';
                  }}
                />
              </div>
              <div className="mgmt-info">
                <h3 className="mgmt-name">{p.name}</h3>
                <span className="mgmt-role" style={{ whiteSpace: 'pre-line' }}>{p.role}</span>
                {p.bio && (
                  <span className="mgmt-bio-hint">
                    Read Bio
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                )}
              </div>
              {p.bio && (
                <div className="board-card-overlay">
                  <div className="board-card-overlay-inner">
                    <span className="board-card-bio-title">Biography</span>
                    <p className="board-card-bio-text">{p.bio}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 3: Directors (next 3) */}
        <div className="board-grid-3">
          {DIRECTORS.slice(4).map((p, i) => (
            <div key={i} className={`management-card reveal ${p.bio ? 'board-card-interactive' : ''}`}>
              <div className="mgmt-img-wrap">
                <img
                  src={p.image}
                  alt={p.name}
                  className="mgmt-photo"
                  style={p.imgStyle || {}}
                  onError={e => {
                    e.target.style.background = 'var(--gray-200)';
                  }}
                />
              </div>
              <div className="mgmt-info">
                <h3 className="mgmt-name">{p.name}</h3>
                <span className="mgmt-role" style={{ whiteSpace: 'pre-line' }}>{p.role}</span>
                {p.bio && (
                  <span className="mgmt-bio-hint">
                    Read Bio
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                )}
              </div>
              {p.bio && (
                <div className="board-card-overlay">
                  <div className="board-card-overlay-inner">
                    <span className="board-card-bio-title">Biography</span>
                    <p className="board-card-bio-text">{p.bio}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
