import PageHero from '../components/PageHero';

const MANAGERS = [
  { name: 'Mr. Devendra Nath Soral', role: 'CEO',                          image: '/assets/team/Devendra_Nath_Soral.jpg' },
  { name: 'Mr. S Chockalingam',      role: 'CFO and Company Secretary',     image: '/assets/team/S_Chockalingam.jpg' },
  { name: 'Mr. G Srinivas Rao',      role: 'Head of Sales',                 image: '/assets/team/G_Srinivas_Rao.jpg' },
  { name: 'Mr. K Tirumal Rao',       role: 'HoD Operations, QC and ERP',      image: '/assets/team/K_Tirumal_Rao.jpg' },
];

export default function ManagementPage() {
  return (
    <div className="site-page">
      <PageHero
        imageSrc="/assets/Management_Team.jpg"
        title="Leadership Team"
        breadcrumbs={[{ label: 'Management' }]}
      />
      
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Operational Excellence</span>
          <h2 className="section-h2">The Management Team</h2>
          <p className="section-intro">
            Driving innovation and operational precision across India's aviation fuel landscape.
          </p>
        </div>

        <div className="brand-grid">
          {MANAGERS.map((p, i) => (
            <div key={i} className="management-card col-span-3 reveal">
              <div className="mgmt-img-wrap">
                <img
                  src={p.image}
                  alt={p.name}
                  className="mgmt-photo"
                  onError={e => { 
                    e.target.style.background = 'var(--shell-white)';
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
