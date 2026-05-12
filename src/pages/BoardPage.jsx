import PageHero from '../components/PageHero';

const BASE_IMG_URL = '/assets/team';

const DIRECTORS = [
  {
    name: 'Mr. Mundkur Shyamprasad Kamath',
    role: 'Chairman, Shell MRPL Aviation and Director, MRPL',
    image: `${BASE_IMG_URL}/Mundkur_Shyamprasad_Kamath.png`,
  },
  {
    name: 'Mr. Sanjay Samuel Varkey',
    role: 'Director, Shell MRPL Aviation and Shell India Markets Private Limited',
    image: `${BASE_IMG_URL}/Sanjay Varkey.jpg`,
  },
  {
    name: 'Mr. BH Vasudev Prasad',
    role: 'Director, Shell MRPL Aviation and ED-Projects in MRPL',
    image: `${BASE_IMG_URL}/BH_Vasudev_Prasad.png`,
  },
  {
    name: 'Mr. Ziad Victor Soussou',
    role: 'Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/Ziad_Victor_Soussou.jpg`,
  },
  {
    name: 'Mr. Ravi Kumar Rentala',
    role: 'Independent Director, Shell MRPL Aviation and Chairman, BEC Pvt Ltd',
    image: `${BASE_IMG_URL}/Ravi Kumar Rentala.jpg`,
  },
  {
    name: 'Mr. Niyant Maru',
    role: 'Independent Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/Niyant Maru.jpg`,
  },
  {
    name: 'Ms. Sangeeta Sumesh',
    role: 'Independent Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/Sangeeta_Sumesh.jpg`,
  },
];

export default function BoardPage() {
  return (
    <div className="site-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/board_of_director-bg.jpg"
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

        <div className="people-grid">
          {DIRECTORS.map((p, i) => (
            <div key={i} className="person-card reveal">
              <div className="person-img-wrap">
                <img
                  src={p.image}
                  alt={p.name}
                  className="person-photo"
                  onError={e => {
                    e.target.style.background = 'var(--gray-200)';
                    e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                  }}
                />
              </div>
              <div className="person-body">
                <h3 className="person-name">{p.name}</h3>
                <p className="person-role">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
