import React from 'react';
import PageHero from '../components/PageHero';

const CONTACTS = [
  {
    dept: 'CEO & Director',
    name: 'Mr. Devendra Nath Soral',
    role: 'Chief Executive Officer',
    email: 'devendranath.soral@shell-mrpl-aviation.com',
  },
  {
    dept: 'Finance',
    name: 'Mr. S Chockalingam',
    role: 'CFO and Company Secretary',
    email: 'chockalingam.s@shell-mrpl-aviation.com',
  },
  {
    dept: 'Sales',
    name: 'Mr. G Srinivas Rao',
    role: 'Head of Department — Sales',
    email: 'srinivas.rao@shell-mrpl-aviation.com',
  },
  {
    dept: 'Operations',
    name: 'Mr. K Tirumal Rao',
    role: 'Head of Department — Operations, QC & ERP',
    email: 'tirumal.rao@shell-mrpl-aviation.com',
  },
  {
    dept: 'Business Enquiries',
    name: 'General Enquiries',
    role: 'For all business-related enquiries',
    email: 'info@shell-mrpl-aviation.com',
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

        <h3 className="page-h3" style={{ marginTop: 52 }}>Registered &amp; Corporate Office</h3>
        <div className="office-card">
          <p>
            <strong>Shell MRPL Aviation Fuels and Services Limited</strong><br />
            Plot No. 5, Yesvantpur Industrial Area,<br />
            Tumkur Road, Bangalore — 560 022,<br />
            Karnataka, India
          </p>
          <p style={{ marginTop: 20 }}>
            <strong>CIN:</strong> U11200KA2007PLC044481<br />
            <strong>Website:</strong>{' '}
            <a
              href="https://www.shellmrplaviation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text-link"
              style={{ paddingBottom: 0 }}
            >
              www.shellmrplaviation.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
