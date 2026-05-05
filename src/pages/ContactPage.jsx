import React from 'react';
import PageHero from '../components/PageHero';

const CONTACTS = [
  {
    dept: 'Finance',
    name: 'Chockalingam Subbiah',
    role: 'CFO and Company Secretary',
    email: 'chockalingam.subbiah@shellmrpl.com',
  },
  {
    dept: 'Fuel Sales',
    name: 'G.Srinivas Rao',
    role: 'HoD Sales',
    email: 'srinivas.rao@shellmrpl.com',
  },
  {
    dept: 'Operations',
    name: 'Tirumal Rao',
    role: 'I/c HoD (S&D), Head- (Projects & ERP)',
    email: 'tirumal.rao@shellmrpl.com',
  },
  // {
  //   dept: 'Registered Corporate Office',
  //   name: 'General Administration',
  //   role: 'Corporate Enquiries',
  //   email: 'smrpl-admin@shellmrpl.com',
  // },
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

        <h3 className="page-h3" style={{ marginTop: 52 }}>Registered &amp; Corporate Office</h3>
        <div className="office-card">
          <p>
            <strong>Shell MRPL Aviation Fuels and Services Limited</strong><br />
            #102 Prestige Sigma, Vittal Mallya Road,<br />
            Bangalore, Karnataka – 560001 India.
          </p>
          <p style={{ marginTop: 20 }}>
            <strong>Landline:</strong> 080-42526900<br />
            <strong>Email:</strong> smrpl-admin@shellmrpl.com<br />
            <strong>Fax:</strong> 080-42526999<br />
            <strong>CIN:</strong> U51909KA2008PLC045558<br />
            {/* <strong>Website:</strong>{' '}
            <a
              href="https://www.shellmrplaviation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text-link"
              style={{ paddingBottom: 0 }}
            >
              www.shellmrplaviation.com
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
}
