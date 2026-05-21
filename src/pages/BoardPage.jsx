import PageHero from '../components/PageHero';

const BASE_IMG_URL = '/assets/team';

const DIRECTORS = [
  {
    name: 'Mr. Mundkur Shyamprasad Kamath',
    role: 'Chairman',
    image: `${BASE_IMG_URL}/Mundkur_Shyamprasad_Kamath.png`,
    // Full-body PNG — zoom in on face via scale + top positioning
    imgStyle: { objectFit: 'cover', objectPosition: '50% 10%', transform: 'scale(1.4)', transformOrigin: '50% 10%' },
  },
  {
    name: 'Mr. Sanjay Samuel Varkey',
    role: 'Director',
    image: `${BASE_IMG_URL}/Sanjay Varkey.jpg`,
    imgStyle: { objectFit: 'cover', objectPosition: 'top center' },
  },
  {
    name: 'Mr. BH Vasudev Prasad',
    role: 'ED-Projects, MRPL',
    image: `${BASE_IMG_URL}/BH_Vasudev_Prasad.png`,
    // Full-body PNG — zoom in on face
    imgStyle: { objectFit: 'cover', objectPosition: '50% 10%', transform: 'scale(1.4)', transformOrigin: '50% 10%' },
  },
  {
    name: 'Mr. Ziad Victor Soussou',
    role: 'Director',
    image: `${BASE_IMG_URL}/Ziad_Victor_Soussou.jpg`,
  },
  {
    name: 'Dr. Sangeeta Sumesh',
    role: 'Independent Director',
    image: `${BASE_IMG_URL}/Sangeeta_Sumesh.jpg`,
  },
  {
    name: 'Dr. Ravi Kumar Rentala',
    role: 'Independent Director and Chairman, BEC Pvt Ltd',
    image: `${BASE_IMG_URL}/Ravi Kumar Rentala.jpg`,
  },
  {
    name: 'Mr. Niyant Maru',
    role: 'Independent Director',
    image: `${BASE_IMG_URL}/Niyant Maru.jpg`,
  },
];

export default function BoardPage() {
  return (
    <div className="site-page">
      <PageHero
        title="Our Leadership"
        breadcrumbs={[{ label: 'Board of Directors' }]}
      />

      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        <div className="section-header">
          <span className="section-eyebrow">The Board</span>
          <h2 className="section-h2">Guiding Visionary Excellence</h2>
          <p className="section-intro">
            Our leadership team brings together decades of global aviation experience
            and local industrial expertise to drive sustainable growth.
          </p>
        </div>

        <div className="brand-grid">
          {DIRECTORS.map((p, i) => (
            <div key={i} className="management-card col-span-3 reveal">
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
                <span className="mgmt-role">{p.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
