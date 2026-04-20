import React from 'react';

/**
 * ContactPage — exact replica of http://localhost:10018/business-enquiries/
 *
 * Layout:
 *  1. Full-width hero image (airplane fueling at Indian Airlines gate)
 *  2. List of department contacts:
 *     - Heading (department name in blue)
 *     - Name, role, email (clickable mailto link in orange/red)
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';

const CONTACTS = [
  {
    department: 'Chief Finance Officer & Company Secretary',
    contacts: [
      { name: 'Chockalingam Subbiah', role: 'CFO and CS', email: 'chockalingam.subbiah@shellmrpl.com' },
    ],
  },
  {
    department: 'Fuel Sales',
    contacts: [
      { name: 'G.Srinivas Rao', role: 'HoD Sales', email: 'srinivas.rao@shellmrpl.com' },
    ],
  },
  {
    department: 'HSSE & Quality Control',
    contacts: [
      { name: 'Raghu Ram Komati', role: 'HoD HSSE', email: 'raghuramkomati@shellmrpl.com' },
    ],
  },
  {
    department: 'Operations',
    contacts: [
      { name: 'Sanjay Sudhakaran', role: 'HoD Operations', email: 'sanjay.sudhakaran@shellmrpl.com' },
    ],
  },
  {
    department: 'Finance & Accounting',
    contacts: [
      { name: 'Raghu Srinivasan', role: 'Finance Manager', email: 'raghu.srinivasan@shellmrpl.com' },
    ],
  },
  {
    department: 'Human Resources',
    contacts: [
      { name: 'Rekha Kumari', role: 'HR Manager', email: 'rekha.kumari@shellmrpl.com' },
    ],
  },
  {
    department: 'IT & Systems',
    contacts: [
      { name: 'Pradeep Kumar', role: 'IT Manager', email: 'pradeep.kumar@shellmrpl.com' },
    ],
  },
];

export default function ContactPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1 }}>

      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src="/wp-content/uploads/2016/08/business-enquiries-bg.jpg"
          alt="Shell MRPL Aviation — Business Enquiries"
          onError={(e) => {
            e.target.src =
              '/wp-content/uploads/2023/09/business-enquiries-bg.jpg';
            e.target.onerror = () => {
              // Final fallback: hide if both fail
              e.target.style.display = 'none';
            };
          }}
          style={{
            width: '100%',
            height: '270px',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Contact Details ── */}
      <div style={{ padding: '28px 40px 48px', maxWidth: '800px' }}>

        <h2 style={{
          fontSize: '22px',
          fontWeight: 700,
          color: '#333',
          fontFamily: FONT,
          marginBottom: '28px',
          marginTop: 0,
        }}>
          Business Enquiries
        </h2>

        {CONTACTS.map((section, i) => (
          <div key={i} style={{ marginBottom: '28px' }}>
            {/* Department Heading — matches WP blue colour */}
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1f3d6e',
              fontFamily: FONT,
              margin: '0 0 8px 0',
            }}>
              {section.department}
            </h3>

            {section.contacts.map((c, j) => (
              <div
                key={j}
                style={{
                  paddingLeft: '16px',
                  marginBottom: j < section.contacts.length - 1 ? '10px' : 0,
                }}
              >
                <p style={{
                  margin: '0 0 2px',
                  fontSize: '14px',
                  color: '#444',
                  fontFamily: FONT,
                }}>
                  {c.name}
                </p>
                <p style={{
                  margin: '0 0 2px',
                  fontSize: '13px',
                  color: '#666',
                  fontFamily: FONT,
                }}>
                  {c.role}
                </p>
                <a
                  href={`mailto:${c.email}`}
                  style={{
                    color: '#c0392b',
                    fontSize: '13px',
                    fontFamily: FONT,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}
                  onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        ))}

        {/* ── General Enquiry info ── */}
        <div style={{
          borderTop: '1px solid #e0e0e0',
          paddingTop: '24px',
          marginTop: '8px',
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#1f3d6e',
            fontFamily: FONT,
            margin: '0 0 12px 0',
          }}>
            Registered Office
          </h3>
          <p style={{ fontSize: '14px', color: '#555', fontFamily: FONT, lineHeight: 1.7, margin: 0 }}>
            Shell MRPL Aviation Fuels &amp; Services Limited<br />
            Mangalore Refinery and Petrochemicals Limited,<br />
            Panambur, Mangalore – 575 010<br />
            Karnataka, India
          </p>
        </div>

      </div>
    </div>
  );
}
