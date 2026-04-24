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

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    if (!form.mobile.trim())  e.mobile  = 'Mobile number is required';
    if (!form.position)       e.position = 'Please select a position';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSuccess(true);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Working with Shell MRPL Aviation"
        breadcrumbs={[{ label: 'Careers' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Join Our Team</h2>
        <div className="body-text" style={{ marginBottom: 36 }}>
          <p>
            Shell MRPL Aviation Fuels &amp; Services Limited offers rewarding career opportunities in
            aviation fuelling, safety, quality control, and customer service. Submit your application
            below and our HR team will be in touch.
          </p>
        </div>

        {success && (
          <div className="alert-success">
            <strong>Application Submitted!</strong> Thank you for your application. We will review
            your details and get back to you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="careers-form">
          <h3 className="form-section-title">Personal Details</h3>
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label" htmlFor="c-name">Full Name *</label>
              <input id="c-name" className="form-input" type="text" value={form.name} onChange={update('name')} required />
              {errors.name && <p style={{ color: 'var(--shell-red)', fontSize: 12, marginTop: 4 }}>{errors.name}</p>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-gender">Gender</label>
              <select id="c-gender" className="form-select" value={form.gender} onChange={update('gender')}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-dob">Date of Birth</label>
              <input id="c-dob" className="form-input" type="date" value={form.dob} onChange={update('dob')} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-father">Father's Name</label>
              <input id="c-father" className="form-input" type="text" value={form.fatherName} onChange={update('fatherName')} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="c-address">Address</label>
            <textarea id="c-address" className="form-textarea" value={form.address} onChange={update('address')} />
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label" htmlFor="c-city">City</label>
              <input id="c-city" className="form-input" type="text" value={form.city} onChange={update('city')} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-state">State</label>
              <input id="c-state" className="form-input" type="text" value={form.state} onChange={update('state')} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-email">Email Address *</label>
              <input id="c-email" className="form-input" type="email" value={form.email} onChange={update('email')} required />
              {errors.email && <p style={{ color: 'var(--shell-red)', fontSize: 12, marginTop: 4 }}>{errors.email}</p>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-mobile">Mobile Number *</label>
              <input id="c-mobile" className="form-input" type="tel" value={form.mobile} onChange={update('mobile')} required />
              {errors.mobile && <p style={{ color: 'var(--shell-red)', fontSize: 12, marginTop: 4 }}>{errors.mobile}</p>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="c-position">Position Applied For *</label>
            <select id="c-position" className="form-select" value={form.position} onChange={update('position')} required>
              <option value="">Select a position</option>
              {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            {errors.position && <p style={{ color: 'var(--shell-red)', fontSize: 12, marginTop: 4 }}>{errors.position}</p>}
          </div>

          <h3 className="form-section-title">Qualification Details</h3>
          {[
            { id: 'q10', label: 'Class X — Board & Percentage / Grade' },
            { id: 'q11', label: 'Class XII — Board & Percentage / Grade' },
            { id: 'q12', label: 'Graduation — Degree, University & Percentage' },
            { id: 'q13', label: 'Post-Graduation (if applicable)' },
            { id: 'q14', label: 'Professional Certifications / Licenses' },
          ].map(({ id, label }) => (
            <div key={id} className="form-group">
              <label className="form-label" htmlFor={`c-${id}`}>{label}</label>
              <input id={`c-${id}`} className="form-input" type="text" value={form[id]} onChange={update(id)} />
            </div>
          ))}

          <h3 className="form-section-title">Work Experience</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="c-exp">Work Experience (Company, Role, Duration)</label>
            <textarea id="c-exp" className="form-textarea" value={form.workExperience} onChange={update('workExperience')} />
          </div>

          <div style={{ marginTop: 32 }}>
            <button type="submit" className="btn-yellow">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
}
