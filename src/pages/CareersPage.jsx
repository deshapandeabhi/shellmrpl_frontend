import React, { useState } from 'react';

/**
 * CareersPage — exact replica of http://localhost:10018/careers/
 *
 * Layout:
 *  1. Hero image (careers-bg.jpg)
 *  2. Intro text about careers at Shell MRPL
 *  3. Career application form with qualification table and attachment
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const INPUT_STYLE = {
  width: '100%',
  height: '36px',
  padding: '6px 10px',
  border: '1px solid #ccc',
  borderRadius: '2px',
  fontSize: '14px',
  fontFamily: FONT,
  outline: 'none',
  boxSizing: 'border-box',
  color: '#333',
};
const LABEL_STYLE = {
  display: 'block',
  fontSize: '13px',
  color: '#444',
  marginBottom: '5px',
  fontFamily: FONT,
};
const FIELD_WRAP = { marginBottom: '20px' };
const SECTION_HEADING = {
  fontSize: '18px',
  fontWeight: 700,
  color: '#1f3d6e',
  fontFamily: FONT,
  borderBottom: '2px solid #1f3d6e',
  paddingBottom: '8px',
  marginBottom: '20px',
  marginTop: '30px',
};

export default function CareersPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', dob: '',
    email: '', mobile: '',
    hsYear: '', hsPercent: '',
    gradYear: '', gradPercent: '',
    pgYear: '', pgPercent: '',
    expYears: '', expMonths: '',
    cv: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>

      {/* ── 1. Hero image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src="/wp-content/uploads/2016/08/careers-bg.jpg"
          alt="Careers at Shell MRPL Aviation"
          onError={(e) => {
            e.target.src = '/wp-content/uploads/2023/09/Careers-bg.jpg';
          }}
          style={{
            width: '100%',
            height: '270px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Page Intro Content ── */}
      <div style={{ padding: '40px 40px 0', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#1f3d6e',
          fontFamily: FONT,
          marginBottom: '20px',
        }}>
          Working with Shell MRPL Aviation
        </h2>
        <div style={{
          fontSize: '15.5px',
          lineHeight: '1.6',
          color: '#333',
          fontFamily: FONT,
          textAlign: 'justify',
          marginBottom: '30px',
        }}>
          <p>
            Shell MRPL Aviation fuels and services limited provide a platform for people to learn, grow and excel. We are looking for people who are passionate about their work and are committed to excellence. 
          </p>
          <p>
            Our values of honesty, integrity and respect for people are the core of our culture. We believe in providing a safe and inclusive working environment for all our employees. If you are looking for a challenging and rewarding career, we invite you to be a part of our team and contribute to our journey of success.
          </p>
        </div>
      </div>

      {/* ── 3. Application Form ── */}
      <div style={{ padding: '0 40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h3 style={SECTION_HEADING}>Apply for a Position</h3>

        {submitted ? (
          <div style={{
            background: '#e6f4ea',
            border: '1px solid #4caf50',
            borderRadius: '4px',
            padding: '20px 24px',
            color: '#256427',
            fontFamily: FONT,
            fontSize: '15px',
          }}>
            ✅ Thank you for applying! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            {/* ── Personal Details ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={FIELD_WRAP}>
                <label style={LABEL_STYLE}>First name</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={set('firstName')}
                  style={INPUT_STYLE}
                />
              </div>
              <div style={FIELD_WRAP}>
                <label style={LABEL_STYLE}>Last name</label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={set('lastName')}
                  style={INPUT_STYLE}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={FIELD_WRAP}>
                <label style={LABEL_STYLE}>Date of birth</label>
                <input
                  type="date"
                  required
                  value={form.dob}
                  onChange={set('dob')}
                  style={INPUT_STYLE}
                />
              </div>
              <div style={FIELD_WRAP}>
                {/* placeholder for spacing */}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={FIELD_WRAP}>
                <label style={LABEL_STYLE}>Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={set('email')}
                  style={INPUT_STYLE}
                />
              </div>
              <div style={FIELD_WRAP}>
                <label style={LABEL_STYLE}>Mobile Number</label>
                <input
                  type="tel"
                  required
                  value={form.mobile}
                  onChange={set('mobile')}
                  style={INPUT_STYLE}
                />
              </div>
            </div>

            {/* ── Educational Qualification Table ── */}
            <h4 style={{ ...SECTION_HEADING, fontSize: '16px', border: 'none', marginBottom: '10px' }}>
              Educational Qualification
            </h4>
            <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: FONT, fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: '#f5f5f5' }}>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Qualification</th>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Year of Passing</th>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>% Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'High School', year: 'hsYear', pct: 'hsPercent' },
                    { label: 'Graduation', year: 'gradYear', pct: 'gradPercent' },
                    { label: 'Post-graduation & Above', year: 'pgYear', pct: 'pgPercent' },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td style={{ border: '1px solid #ddd', padding: '10px' }}>{row.label}</td>
                      <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                        <input type="number" style={INPUT_STYLE} value={form[row.year]} onChange={set(row.year)} />
                      </td>
                      <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                        <input type="number" step="0.1" style={INPUT_STYLE} value={form[row.pct]} onChange={set(row.pct)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Experience ── */}
            <h4 style={{ ...SECTION_HEADING, fontSize: '16px', border: 'none', marginBottom: '10px' }}>
              Work Experience
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
              <div>
                <label style={LABEL_STYLE}>Years</label>
                <select value={form.expYears} onChange={set('expYears')} style={INPUT_STYLE}>
                  <option value="">Select years</option>
                  {[...Array(31)].map((_, i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div>
                <label style={LABEL_STYLE}>Months</label>
                <select value={form.expMonths} onChange={set('expMonths')} style={INPUT_STYLE}>
                  <option value="">Select months</option>
                  {[...Array(12)].map((_, i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
            </div>

            {/* ── File CV ── */}
            <div style={FIELD_WRAP}>
              <label style={LABEL_STYLE}>Upload Your CV (PDF/DOC/DOCX)</label>
              <input type="file" required accept=".pdf,.doc,.docx" style={{ fontSize: '13px' }} />
            </div>

            {/* ── Submit ── */}
            <button
              type="submit"
              style={{
                backgroundColor: '#1f3d6e',
                color: '#fff',
                border: 'none',
                padding: '12px 36px',
                fontSize: '15px',
                fontWeight: 600,
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#163157'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#1f3d6e'}
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
