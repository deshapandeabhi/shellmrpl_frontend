import PageHero from '../components/PageHero';

export default function ContactPage() {
  return (
    <div className="inner-page">
      <PageHero
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />
      <div className="content-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 60px' }}>
        <h2 className="page-h2" style={{ marginTop: '48px' }}>Get in Touch</h2>
        <div className="body-text" style={{ marginBottom: 36, textAlign: 'justify' }}>
          <p>
            For all business enquiries, sales queries, or media inquiries, please contact the
            relevant department below. We aim to respond to all enquiries within two business days.
          </p>
        </div>

        {/* 3 Major Cards Responsive Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginTop: '32px'
        }}>
          {/* Card 1: Leadership & Finance */}
          <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="contact-card-head" style={{ background: 'var(--ocean-400)' }}>
              <span className="contact-card-dept">Leadership & Finance</span>
            </div>
            <div className="contact-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div className="contact-name">Mr. Devendra Nath Soral</div>
                <div className="contact-role">Chief Officer (CEO)</div>
                <a href="mailto:dev.soral@shellmrpl.com" className="contact-email">dev.soral@shellmrpl.com</a>
              </div>
              <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: '16px' }}>
                <div className="contact-name">Chockalingam Subbiah</div>
                <div className="contact-role">CFO & Company Secretary</div>
                <a href="mailto:chockalingam.subbiah@shellmrpl.com" className="contact-email">chockalingam.subbiah@shellmrpl.com</a>
              </div>
            </div>
          </div>

          {/* Card 2: Fuel Sales & HSSE Operations */}
          <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="contact-card-head" style={{ background: 'var(--ocean-400)' }}>
              <span className="contact-card-dept">Sales & HSSE Operations</span>
            </div>
            <div className="contact-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div className="contact-name">G. Srinivas Rao</div>
                <div className="contact-role">HoD Sales</div>
                <a href="mailto:srinivas.rao@shellmrpl.com" className="contact-email">srinivas.rao@shellmrpl.com</a>
              </div>
              <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: '16px' }}>
                <div className="contact-name">Tirumal Rao</div>
                <div className="contact-role">I/c HoD (S and D), Head- (Projects and ERP)</div>
                <a href="mailto:tirumal.rao@shellmrpl.com" className="contact-email">tirumal.rao@shellmrpl.com</a>
              </div>
            </div>
          </div>

          {/* Card 3: General & Corporate Office */}
          <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="contact-card-head" style={{ background: 'var(--ocean-400)' }}>
              <span className="contact-card-dept">General & Corporate Office</span>
            </div>
            <div className="contact-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <div className="contact-name" style={{ fontSize: '15px' }}>Shell MRPL Aviation Fuels and Services Limited</div>
                <div className="contact-role" style={{ marginTop: '6px', lineHeight: '1.6' }}>
                  #102 Prestige Sigma, Vittal Mallya Road,<br />
                  Bangalore, Karnataka – 560001, India.
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: '12px', fontSize: '13px', color: 'var(--grey-700)', lineHeight: '1.6' }}>
                <strong>Landline:</strong> 080-42526900<br />
                <strong>Fax:</strong> 080-42526999<br />
                <strong>Email:</strong> <a href="mailto:smrpl-admin@shellmrpl.com" className="contact-email">smrpl-admin@shellmrpl.com</a><br />
                <strong>CIN:</strong> U51909KA2008PLC045558
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}