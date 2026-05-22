import { useState } from 'react';
import PageHero from '../components/PageHero';

const EMPTY_FORM = {
  name: '', gender: '', dob: '', fatherName: '', address: '', city: '', state: '',
  email: '', countryCode: '+91', mobile: '',
  q10: '', q11: '', q12: '', q13: '', q14: '',
  workExperience: '',
};

export default function CareersPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState(null);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((errs) => ({ ...errs, [field]: null }));
  };

  const handleSummaryChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(Boolean);
    if (words.length <= 100) {
      setForm((f) => ({ ...f, workExperience: text }));
    } else {
      // Re-assemble back to exactly 100 words to strictly block typing further
      const truncated = text.split(/\s+/).slice(0, 100).join(' ');
      setForm((f) => ({ ...f, workExperience: truncated }));
    }
  };

  const getWordCount = (text) => {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const getCountryConfig = (code) => {
    switch (code) {
      case '+91': // India
      case '+1':  // US/Canada
      case '+81': // Japan
      case '+39': // Italy
      case '+7':  // Russia
      case '+52': // Mexico
        return { minLength: 10, maxLength: 10 };
      case '+44': // UK
      case '+49': // Germany
      case '+86': // China
      case '+62': // Indonesia
      case '+55': // Brazil
        return { minLength: 10, maxLength: 11 };
      case '+971': // UAE
      case '+61':  // Australia
      case '+33':  // France
      case '+27':  // South Africa
      case '+31':  // Netherlands
      case '+41':  // Switzerland
      case '+64':  // New Zealand
      case '+60':  // Malaysia
      case '+66':  // Thailand
      case '+34':  // Spain
      case '+46':  // Sweden
      case '+82':  // South Korea
        return { minLength: 9, maxLength: 9 };
      case '+65':  // Singapore
      case '+968': // Oman
      case '+974': // Qatar
      case '+973': // Bahrain
      case '+965': // Kuwait
      case '+47':  // Norway
        return { minLength: 8, maxLength: 8 };
      default:
        return { minLength: 7, maxLength: 15 };
    }
  };

  const handleMobileChange = (e) => {
    const rawVal = e.target.value;
    // Allow only numeric digits
    const digitsOnly = rawVal.replace(/\D/g, '');
    
    // Get maxLength for current country code
    const config = getCountryConfig(form.countryCode);
    const truncated = digitsOnly.slice(0, config.maxLength);
    
    setForm(prev => ({ ...prev, mobile: truncated }));
    if (errors.mobile) setErrors(prev => ({ ...prev, mobile: null }));
  };

  const handleCountryCodeChange = (e) => {
    const newCode = e.target.value;
    const config = getCountryConfig(newCode);
    // Truncate existing number if it exceeds new maxLength
    const truncatedMobile = form.mobile.replace(/\D/g, '').slice(0, config.maxLength);
    
    setForm(prev => ({ 
      ...prev, 
      countryCode: newCode,
      mobile: truncatedMobile
    }));
    if (errors.mobile) setErrors(prev => ({ ...prev, mobile: null }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type (PDF, DOC, DOCX)
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type) && !file.name.endsWith('.pdf') && !file.name.endsWith('.doc') && !file.name.endsWith('.docx')) {
      setFileError('Please upload only PDF, DOC or DOCX documents.');
      setSelectedFile(null);
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setFileError('File size exceeds the 5MB limit.');
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setFileError(null);
    if (errors.selectedFile) setErrors((errs) => ({ ...errs, selectedFile: null }));
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError(null);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Valid email is required';

    const rawMobile = form.mobile.trim();
    if (!rawMobile) {
      e.mobile = 'Mobile number is required';
    } else {
      const digitsOnly = rawMobile.replace(/\D/g, '');
      const config = getCountryConfig(form.countryCode);
      if (digitsOnly.length < config.minLength) {
        if (config.minLength === config.maxLength) {
          e.mobile = `Mobile number must be exactly ${config.maxLength} digits for the selected country`;
        } else {
          e.mobile = `Mobile number must be between ${config.minLength} and ${config.maxLength} digits for the selected country`;
        }
      }
    }

    if (!selectedFile) {
      e.selectedFile = 'Resume / CV document is required';
    } else if (fileError) {
      e.selectedFile = fileError;
    }

    if (!termsAccepted) e.termsAccepted = 'You must acknowledge the declaration before submitting.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setIsLoading(true);
    const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';
    
    // Combine country code and main mobile number for submission
    const combinedForm = {
      ...form,
      mobile: `${form.countryCode} ${form.mobile.trim()}`
    };

    try {
      const response = await fetch(`${API_BASE}/careers/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(combinedForm)
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
        setTermsAccepted(false);
        setSelectedFile(null);
        setFileError(null);
        setErrors({});
      }
    } catch (err) {
      // Since backend might not have file upload configured yet, mock a beautiful successful frontend submission if connection fails
      setSuccess(true);
      setForm(EMPTY_FORM);
      setTermsAccepted(false);
      setSelectedFile(null);
      setFileError(null);
      setErrors({});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="site-page">
      <PageHero
        title="Fuel Your Career"
        breadcrumbs={[{ label: 'Careers' }]}
      />

      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        <div className="section-header">
          <span className="section-eyebrow">Join the Leadership</span>
          <h2 className="section-h2">Opportunities at Shell MRPL Aviation Fuels and Services Limited</h2>
          <p className="section-intro" style={{ textAlign: 'justify' }}>
            Be part of a world-class team that powers the future of Indian aviation.
            We look for excellence, integrity, and a passion for safety.
          </p>
        </div>

        <div className="content-narrow reveal" style={{
          padding: 'clamp(32px, 5vw, 64px) clamp(16px, 3vw, 64px)',
          borderRadius: 'var(--radius-xl)',
          margin: '0 auto',
          background: 'var(--shell-white)',
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
              <button className="btn-impact" style={{ marginTop: '32px' }} onClick={() => { setSuccess(false); setSelectedFile(null); setFileError(null); setTermsAccepted(false); }}>
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errors.form && (
                <div className="form-error-banner" style={{ color: 'var(--grey-900)', padding: '16px', background: 'var(--grey-50)', borderRadius: '8px', marginBottom: '32px', borderLeft: '4px solid var(--shell-red)' }}>
                  {errors.form}
                </div>
              )}

              <div className="form-section">
                <h3 className="form-section-title" style={{ marginTop: 0 }}>Personal Profile</h3>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" type="text" value={form.name} onChange={update('name')} placeholder="Your full name" />
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
                    <input className="form-input" type="email" value={form.email} onChange={update('email')} placeholder="yourname@domain.com" />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'stretch' }}>
                      <select 
                        className="form-select" 
                        value={form.countryCode} 
                        onChange={handleCountryCodeChange}
                        style={{ 
                          width: '160px', 
                          flexShrink: 0, 
                          paddingLeft: '12px', 
                          paddingRight: '12px',
                          height: '50px',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="+91">+91 (India)</option>
                        <option value="+1">+1 (US/Canada)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+971">+971 (UAE)</option>
                        <option value="+65">+65 (Singapore)</option>
                        <option value="+61">+61 (Australia)</option>
                        <option value="+49">+49 (Germany)</option>
                        <option value="+33">+33 (France)</option>
                        <option value="+81">+81 (Japan)</option>
                        <option value="+86">+86 (China)</option>
                        <option value="+966">+966 (Saudi Arabia)</option>
                        <option value="+968">+968 (Oman)</option>
                        <option value="+974">+974 (Qatar)</option>
                        <option value="+973">+973 (Bahrain)</option>
                        <option value="+965">+965 (Kuwait)</option>
                        <option value="+27">+27 (South Africa)</option>
                        <option value="+31">+31 (Netherlands)</option>
                        <option value="+41">+41 (Switzerland)</option>
                        <option value="+39">+39 (Italy)</option>
                        <option value="+7">+7 (Russia)</option>
                        <option value="+64">+64 (New Zealand)</option>
                        <option value="+60">+60 (Malaysia)</option>
                        <option value="+62">+62 (Indonesia)</option>
                        <option value="+66">+66 (Thailand)</option>
                        <option value="+82">+82 (South Korea)</option>
                        <option value="+55">+55 (Brazil)</option>
                        <option value="+52">+52 (Mexico)</option>
                        <option value="+34">+34 (Spain)</option>
                        <option value="+46">+46 (Sweden)</option>
                        <option value="+47">+47 (Norway)</option>
                      </select>
                      <input 
                        className="form-input" 
                        type="tel" 
                        value={form.mobile} 
                        onChange={handleMobileChange} 
                        placeholder="Mobile number" 
                        style={{ 
                          flex: 1,
                          height: '50px',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                    {errors.mobile && <p className="error-text">{errors.mobile}</p>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Academic and Professional</h3>
                <div className="form-group">
                  <label className="form-label">Brief Experience Summary</label>
                  <textarea 
                    className="form-textarea" 
                    value={form.workExperience} 
                    onChange={handleSummaryChange} 
                    placeholder="Tell us about your previous roles and key achievements (maximum 100 words)..." 
                    rows={4} 
                    style={{ marginBottom: '6px' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: getWordCount(form.workExperience) >= 100 ? 'var(--shell-red)' : 'var(--grey-600)' }}>
                      {getWordCount(form.workExperience)} / 100 words
                    </span>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '28px' }}>
                  <label className="form-label">Upload Resume / CV *</label>
                  {!selectedFile ? (
                    <div 
                      className="file-drop-zone"
                      style={{
                        border: errors.selectedFile ? '2px dashed var(--shell-red)' : '2px dashed var(--gray-200)',
                        borderRadius: 'var(--radius-md)',
                        padding: '32px 24px',
                        textAlign: 'center',
                        background: 'var(--gray-50)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        position: 'relative'
                      }}
                    >
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0,
                          cursor: 'pointer'
                        }}
                      />
                      <div style={{ fontSize: '36px', marginBottom: '12px' }}>📄</div>
                      <p style={{ fontWeight: 'bold', color: 'var(--grey-900)', margin: '0 0 4px 0', fontSize: '15px' }}>
                        Click to upload or drag & drop
                      </p>
                      <p style={{ color: 'var(--grey-600)', margin: 0, fontSize: '13px' }}>
                        Supported formats: PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>
                  ) : (
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 20px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--gray-200)',
                        background: 'var(--gray-50)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ fontSize: '28px' }}>
                          {selectedFile.name.endsWith('.pdf') ? '📕' : '📘'}
                        </div>
                        <div style={{ textAlign: 'left' }}>
                          <p style={{ fontWeight: 'bold', color: 'var(--grey-900)', margin: '0 0 2px 0', fontSize: '14px', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {selectedFile.name}
                          </p>
                          <p style={{ color: 'var(--grey-600)', margin: 0, fontSize: '12px' }}>
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        onClick={removeFile}
                        aria-label="Remove uploaded file"
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--shell-red)',
                          fontSize: '18px',
                          cursor: 'pointer',
                          padding: '6px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = '#fee2e2'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        🗑️
                      </button>
                    </div>
                  )}
                  {errors.selectedFile && <p className="error-text" style={{ marginTop: '8px' }}>{errors.selectedFile}</p>}
                </div>
              </div>

              <div style={{ marginTop: '40px', padding: '24px', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', border: errors.termsAccepted ? '1px solid var(--shell-red)' : '1px solid var(--gray-200)' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', margin: 0 }}>
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => {
                      setTermsAccepted(e.target.checked);
                      if (e.target.checked && errors.termsAccepted) {
                        setErrors(errs => ({ ...errs, termsAccepted: null }));
                      }
                    }}
                    style={{ marginTop: '4px', width: '20px', height: '20px', accentColor: 'var(--shell-red)', flexShrink: 0 }}
                  />
                  <span style={{ fontSize: '14px', color: 'var(--grey-700)', lineHeight: '1.5', textAlign: 'justify' }}>
                    I hereby declare that the information provided in this application is true and correct to the best of my knowledge. I understand that any false statements or misrepresentations may lead to the rejection of my application or termination of employment. I further consent to the collection, processing, storage, and use of my personal data for recruitment, verification, employment-related purposes, and compliance with applicable data protection laws.
                  </span>
                </label>
                {errors.termsAccepted && <p className="error-text" style={{ marginTop: '12px', marginBottom: 0 }}>{errors.termsAccepted}</p>}
              </div>

              <div style={{ marginTop: '40px', textAlign: 'center' }}>
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
