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

        {/* Single centred card */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '32px'
        }}>
          {/* Corporate Office Card */}
          <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '480px' }}>
            <div className="contact-card-head" style={{ background: 'var(--ocean-400)' }}>
              <span className="contact-card-dept">For all Business related enquiries</span>
            </div>
            <div className="contact-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <div className="contact-name" style={{ fontSize: '15px' }}>Shell MRPL Aviation</div>
                <div className="contact-role" style={{ marginTop: '4px', lineHeight: '1.6' }}>
                  #102 Prestige Sigma, Vittal Mallya Road,<br />
                  Bangalore, Karnataka – 560001, India.<br />
                  CIN: 51909KA2008PLC045558
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: '12px', fontSize: '13px', color: 'var(--grey-700)', lineHeight: '1.6' }}>
                <strong>Tel:</strong> +9180-4252 6900<br />
                <strong>Email:</strong> <a href="mailto:contactus@shellmrpl.com" className="contact-email">contactus@shellmrpl.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}