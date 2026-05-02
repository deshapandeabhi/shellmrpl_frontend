import React, { useState } from 'react';
import PageHero from '../components/PageHero';

const POSITIONS = [
  'Fire and Safety Officer',
  'Fuel Farm Operator',
  'Quality Control Officer',
  'Driver – Bowser Operations',
  'Customer Service Executive',
];

const EMPTY_FORM = {
  name: '', gender: '', dob: '', fatherName: '', address: '', city: '', state: '',
  email: '', mobile: '', position: '',
  q10: '', q11: '', q12: '', q13: '', q14: '',
  workExperience: '',
};

export default function CareersPage() {
  const [form,    setForm]    = useState(EMPTY_FORM);
  const [success, setSuccess] = useState(false);
  const [errors,  setErrors]  = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((errs) => ({ ...errs, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Full name is required';
    if (!form.email.trim())   e.email   = 'Valid email is required';
    if (!form.mobile.trim())  e.mobile  = 'Mobile number is required';
    if (!form.position)       e.position = 'Please select a position';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/v1/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 400 && data) {
          setErrors(data);
        } else {
          setErrors({ form: data.error || 'Submission failed. Please try again later.' });
        }
      } else {
        setSuccess(true);
        setForm(EMPTY_FORM);
        setErrors({});
      }
    } catch (err) {
      setErrors({ form: 'Network error. Please check your connection.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="site-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Fuel Your Career"
        breadcrumbs={[{ label: 'Careers' }]}
      />
      
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        <div className="section-header">
          <span className="section-eyebrow">Join the Leadership</span>
          <h2 className="section-h2">Opportunities at Shell MRPL</h2>
          <p className="section-intro">
            Be part of a world-class team that powers the future of Indian aviation. 
            We look for excellence, integrity, and a passion for safety.
          </p>
        </div>

        <div className="content-narrow reveal" style={{ 
          padding: 'clamp(24px, 8vw, 64px)', 
          borderRadius: 'var(--radius-xl)', 
          margin: '0 auto', 
          background: '#fff', 
          border: '1px solid var(--gray-100)', 
          boxShadow: 'var(--shadow-premium)' 
        }}>
          {success ? (
            <div className="success-message" style={{ textAlign: 'center', padding: '40px 0' }}>
              <div className="success-icon" style={{ fontSize: '64px', marginBottom: '24px' }}>✨</div>
              <h3 className="section-h2" style={{ fontSize: '32px' }}>Application Received</h3>
              <p className="section-intro">
                Thank you for applying. Our talent acquisition team will review your 
                profile and contact you if there is a match.
              </p>
              <button className="btn-impact" style={{ marginTop: '32px' }} onClick={() => setSuccess(false)}>
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errors.form && (
                 <div className="form-error-banner" style={{ color: 'var(--shell-red)', padding: '16px', background: 'rgba(217,34,25,0.05)', borderRadius: '8px', marginBottom: '32px', borderLeft: '4px solid var(--shell-red)' }}>
                   {errors.form}
                 </div>
              )}
              
              <div className="form-section">
                <h3 className="footer-h" style={{ color: 'var(--shell-blue)', marginBottom: '32px' }}>Personal Profile</h3>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" type="text" value={form.name} onChange={update('name')} placeholder="John Doe" />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Gender</label>
                    <select className="form-select" value={form.gender} onChange={update('gender')}>
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" type="email" value={form.email} onChange={update('email')} placeholder="john@example.com" />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
                    <input className="form-input" type="tel" value={form.mobile} onChange={update('mobile')} placeholder="+91 98765 43210" />
                    {errors.mobile && <p className="error-text">{errors.mobile}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Target Position *</label>
                  <select className="form-select" value={form.position} onChange={update('position')}>
                    <option value="">Select a position</option>
                    {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.position && <p className="error-text">{errors.position}</p>}
                </div>
              </div>

              <div className="form-section" style={{ marginTop: '48px' }}>
                <h3 className="footer-h" style={{ color: 'var(--shell-blue)', marginBottom: '32px' }}>Academic & Professional</h3>
                <div className="form-group">
                  <label className="form-label">Brief Experience Summary</label>
                  <textarea className="form-textarea" value={form.workExperience} onChange={update('workExperience')} placeholder="Tell us about your previous roles and key achievements..." rows={4} />
                </div>
              </div>

              <div style={{ marginTop: '60px', textAlign: 'center' }}>
                <button 
                  type="submit" 
                  className="btn-impact" 
                  style={{ width: '100%', maxWidth: '360px', height: '64px', fontSize: '18px', justifyContent: 'center' }} 
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
