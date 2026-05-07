import React from 'react';
import PageHero from '../components/PageHero';

const CONTACTS = [
  {
    dept: 'Chief Finance Officer and Company Secretary',
    name: 'Chockalingam Subbiah',
    role: 'CFO and CS',
    email: 'chockalingam.subbiah@shellmrpl.com',
  },
  {
    dept: 'Fuel Sales',
    name: 'G. Srinivas Rao',
    role: 'HoD Sales',
    email: 'srinivas.rao@shellmrpl.com',
  },
  {
    dept: 'HSSE and Operations Head',
    name: 'Tirumal Rao',
    role: 'I/c HoD (S&D), Head- (Projects and ERP)',
    email: 'tirumal.rao@shellmrpl.com',
  },
];

export default function ContactPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/business_enquiries-bg.jpg"
        fallbackSrc="/wp-content/uploads/2023/09/slider2.jpg"
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Get in Touch</h2>
        <div className="body-text" style={{ marginBottom: 36 }}>
          <p>
            For all business enquiries, sales queries, or media inquiries, please contact the
            relevant department below. We aim to respond to all enquiries within two business days.
          </p>
        </div>

        <div className="contact-list">
          {CONTACTS.map((c, i) => (
            <div key={i} className="contact-card">
              <div className="contact-card-head">
                <span className="contact-card-dept">{c.dept}</span>
              </div>
              <div className="contact-card-body">
                <div className="contact-name">{c.name}</div>
                <div className="contact-role">{c.role}</div>
                <a href={`mailto:${c.email}`} className="contact-email">{c.email}</a>
              </div>
            </div>
          ))}
        </div>

        <h3 className="page-h3" style={{ marginTop: 52 }}>Registered Corporate Office</h3>
        <div className="office-card">
          <p>
            Shell MRPL Aviation Fuels and Services Limited<br />
            #102 Prestige Sigma, Vittal Mallya Road,<br />
            Bangalore, Karnataka – 560001 India.
          </p>
          <p style={{ marginTop: 20 }}>
            <strong>Landline:</strong> 080-42526900<br />
            <strong>Fax:</strong> 080-42526999<br />
            <strong>Email:</strong>{' '}
            <a href="mailto:smrpl-admin@shellmrpl.com" className="contact-email">
              smrpl-admin@shellmrpl.com
            </a><br />
            <strong>Contact Person:</strong> –<br />
            <strong>CIN:</strong> U51909KA2008PLC045558
          </p>
        </div>
      </div>
    </div>
  );
}
