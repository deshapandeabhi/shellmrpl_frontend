import { Mail, MapPin, Phone } from 'lucide-react';
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

        {/* 3-Column Light Layout inspired by client request */}
        <div className="contact-white-grid">
          
          {/* Column 1: Corporate Office */}
          <div className="contact-white-col">
            <div className="contact-white-icon">
               <MapPin size={26} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="contact-light-title">Corporate Office</h3>
              <div className="contact-light-text">
                <strong>Shell MRPL Aviation Fuels and Services Limited</strong><br />
                #102 Prestige Sigma, Vittal Mallya Road,
                Bangalore, Karnataka – 560001, India.<br />
                <br />
                <strong>CIN:</strong> U51909KA2008PLC045558<br />
                <strong>Email:</strong> <a href="mailto:smrpl-admin@shellmrpl.com" className="contact-light-email">smrpl-admin@shellmrpl.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Email */}
          <div className="contact-white-col">
            <div className="contact-white-icon">
               <Mail size={26} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="contact-light-title">Email</h3>
              <div className="contact-light-text">
                For all business-related enquiries, please send us an email at:<br /><br />
                <a href="mailto:contactus@shellmrpl.com" className="contact-light-email">contactus@shellmrpl.com</a>
              </div>
            </div>
          </div>

          {/* Column 3: Phone */}
          <div className="contact-white-col">
            <div className="contact-white-icon">
               <Phone size={26} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="contact-light-title">Phone</h3>
              <div className="contact-light-text">
                You can also contact our business team directly on:<br /><br />
                Tel: +9180-4252 6900
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}