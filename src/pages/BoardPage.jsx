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
    role: 'Director, Shell MRPL Aviation Fuels and Services Limited and Shell India Markets Private Limited',
    image: `${BASE_IMG_URL}/Sanjay Varkey.jpg`,
  },
  {
    name: 'Mr. BH Vasudev Prasad',
    role: 'Director, Shell MRPL Aviation Fuels and Services Limited and ED-Projects in MRPL',
    image: `${BASE_IMG_URL}/BH_Vasudev_Prasad.png`,
  },
  {
    name: 'Mr. Ziad Victor Soussou',
    role: 'Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/Ziad_Victor_Soussou.jpg`,
  },
  {
    name: 'Dr. Sangeeta Sumesh',
    role: 'Independent Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/Sangeeta_Sumesh.jpg`,
  },
  {
    name: 'Dr. Ravi Kumar Rentala',
    role: 'Independent Director, Shell MRPL Aviation and Chairman, BEC Pvt Ltd',
    image: `${BASE_IMG_URL}/Ravi Kumar Rentala.jpg`,
  },
  {
    name: 'Mr. Niyant Maru',
    role: 'Independent Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/Niyant Maru.jpg`,
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

        <div className="brand-grid">
          {DIRECTORS.map((p, i) => (
            <div key={i} className="management-card col-span-3 reveal">
              <div className="mgmt-img-wrap">
                <img
                  src={p.image}
                  alt={p.name}
                  className="mgmt-photo"
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
