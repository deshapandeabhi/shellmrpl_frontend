import React, { useState } from 'react';
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

const EMPTY_FORM = {
  name: '',
  email: '',
  mobile: '',
  position: 'General Enquiry',
  workExperience: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((errs) => ({ ...errs, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Valid email is required';
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';
    try {
      const response = await fetch(`${API_BASE}/careers/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ form: data.message || 'Submission failed. Please try again.' });
      } else {
        setSuccess(true);
        setForm(EMPTY_FORM);
        setErrors({});
      }
    } catch (err) {
      setErrors({ form: 'Unable to connect to the server. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="inner-page">
      <PageHero
        title="Connect with Us"
        breadcrumbs={[{ label: 'Connect' }]}
      />
      <div className="content-wrap">
        <div className="brand-grid">
          {/* Left Column: Contact Information */}
          <div className="col-span-6">
            <h2 className="section-h2" style={{ marginBottom: '32px' }}>Get in Touch</h2>
            <div className="body-text" style={{ marginBottom: 48 }}>
              <p>
                For business enquiries, sales queries, or career interests, please contact the
                relevant department or use the form to send us a direct message.
              </p>
            </div>

            <div className="contact-list" style={{ display: 'grid', gap: '24px' }}>
              {CONTACTS.map((c, i) => (
                <div key={i} className="contact-card" style={{ padding: '24px', background: 'var(--grey-50)', borderRadius: '16px', border: '1px solid var(--grey-100)' }}>
                  <div className="contact-card-head" style={{ marginBottom: '12px' }}>
                    <span className="contact-card-dept" style={{ fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--shell-red)' }}>{c.dept}</span>
                  </div>
                  <div className="contact-card-body">
                    <div className="contact-name" style={{ fontSize: '18px', fontWeight: 900, color: 'var(--grey-900)' }}>{c.name}</div>
                    <div className="contact-role" style={{ fontSize: '14px', color: 'var(--grey-700)', marginBottom: '12px' }}>{c.role}</div>
                    <a href={`mailto:${c.email}`} className="contact-email" style={{ color: 'var(--grey-900)', fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid var(--shell-yellow)' }}>{c.email}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="office-card" style={{ marginTop: '48px', padding: '32px', background: 'var(--night-600)', borderRadius: '24px', color: 'var(--shell-white)' }}>
              <h3 style={{ color: 'var(--shell-white)', marginBottom: '20px' }}>Registered Office</h3>
              <p style={{ color: 'var(--shell-white)', lineHeight: 1.6 }}>
                Shell MRPL Aviation Fuels and Services Limited<br />
                #102 Prestige Sigma, Vittal Mallya Road,<br />
                Bangalore, Karnataka – 560001 India.
              </p>
              <div style={{ marginTop: '24px', display: 'grid', gap: '8px' }}>
                <p style={{ color: 'var(--shell-white)', fontSize: '14px' }}><strong>Landline:</strong> 080-42526900</p>
                <p style={{ color: 'var(--shell-white)', fontSize: '14px' }}><strong>Fax:</strong> 080-42526999</p>
                <p style={{ color: 'var(--shell-white)', fontSize: '14px' }}><strong>Email:</strong> smrpl-admin@shellmrpl.com</p>
              </div>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="col-span-6">
            <div style={{ 
              background: 'var(--shell-white)', 
              padding: '40px', 
              borderRadius: '24px', 
              border: '1px solid var(--grey-100)',
              boxShadow: 'var(--shadow-premium)'
            }}>
              <h3 className="section-h2" style={{ marginBottom: '8px' }}>Send a Message</h3>
              <p className="section-intro" style={{ marginBottom: '32px', fontSize: '15px' }}>
                Interested in working with us or have a specific query? Submit your details below.
              </p>

              {success ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
                  <h3 className="section-h2">Message Sent</h3>
                  <p style={{ marginTop: '16px' }}>Thank you for reaching out. We will get back to you shortly.</p>
                  <button className="btn-impact" style={{ marginTop: '32px' }} onClick={() => setSuccess(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
                  {errors.form && (
                    <div style={{ padding: '16px', background: '#FFF5F5', borderLeft: '4px solid var(--shell-red)', color: 'var(--shell-red)', fontSize: '14px' }}>
                      {errors.form}
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 900, fontSize: '13px', color: 'var(--grey-900)' }}>Full Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      style={{ width: '100%', height: '52px', padding: '0 16px', border: '1px solid var(--grey-200)', borderRadius: '8px' }}
                      value={form.name} 
                      onChange={update('name')} 
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p style={{ color: 'var(--shell-red)', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
                  </div>

                  <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 900, fontSize: '13px', color: 'var(--grey-900)' }}>Email *</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        style={{ width: '100%', height: '52px', padding: '0 16px', border: '1px solid var(--grey-200)', borderRadius: '8px' }}
                        value={form.email} 
                        onChange={update('email')} 
                        placeholder="email@example.com"
                      />
                      {errors.email && <p style={{ color: 'var(--shell-red)', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 900, fontSize: '13px', color: 'var(--grey-900)' }}>Mobile *</label>
                      <input 
                        type="tel" 
                        className="form-input" 
                        style={{ width: '100%', height: '52px', padding: '0 16px', border: '1px solid var(--grey-200)', borderRadius: '8px' }}
                        value={form.mobile} 
                        onChange={update('mobile')} 
                        placeholder="Your mobile number"
                      />
                      {errors.mobile && <p style={{ color: 'var(--shell-red)', fontSize: '12px', marginTop: '4px' }}>{errors.mobile}</p>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 900, fontSize: '13px', color: 'var(--grey-900)' }}>Subject / Interest *</label>
                    <select 
                      className="form-select" 
                      style={{ width: '100%', height: '52px', padding: '0 16px', border: '1px solid var(--grey-200)', borderRadius: '8px' }}
                      value={form.position} 
                      onChange={update('position')}
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Fuel Farm Operations">Fuel Farm Operations</option>
                      <option value="Quality Control">Quality Control</option>
                      <option value="Safety & HSSE">Safety & HSSE</option>
                      <option value="Business Partnership">Business Partnership</option>
                      <option value="Career Opportunity">Career Opportunity</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 900, fontSize: '13px', color: 'var(--grey-900)' }}>Message / Experience Summary</label>
                    <textarea 
                      className="form-textarea" 
                      style={{ width: '100%', padding: '16px', border: '1px solid var(--grey-200)', borderRadius: '8px', minHeight: '120px' }}
                      value={form.workExperience} 
                      onChange={update('workExperience')} 
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-impact" 
                    style={{ 
                      width: '100%', 
                      height: '56px', 
                      background: 'var(--shell-red)', 
                      color: 'var(--shell-white)', 
                      fontWeight: 900, 
                      fontSize: '16px',
                      justifyContent: 'center',
                      marginTop: '12px'
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Submit Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
