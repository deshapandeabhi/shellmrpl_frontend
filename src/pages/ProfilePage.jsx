import React from 'react';
import Footer from '../components/Footer';

/**
 * ProfilePage — Home Page
 *
 * Exact replica of http://localhost:10018/
 *
 * Layout:
 *  1. Full-width hero image (airplane taking off) — no side padding, full content-column width
 *  2. "Profile" heading
 *  3. Two paragraphs of company profile text
 *
 * Note: Footer is rendered by App.jsx globally — not duplicated here.
 */
export default function ProfilePage() {
  return (
    <div style={{ width: '100%', background: '#ffffff', flex: 1 }}>

      {/* ── 1. Full-width Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src="/wp-content/uploads/2016/08/profile-bg.jpg"
          alt="Shell MRPL Aviation — Aircraft taking off"
          style={{
            width: '100%',
            height: '260px',         /* Matches WordPress hero height */
            objectFit: 'cover',
            objectPosition: 'center 60%',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Profile text content ── */}
      <div style={{ padding: '28px 32px', maxWidth: '100%' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: 700,
          color: '#333333',
          fontFamily: '"Roboto", "Open Sans", sans-serif',
          marginBottom: '16px',
          marginTop: 0,
        }}>
          Profile
        </h2>

        <p style={{
          fontSize: '15px',
          lineHeight: '1.8',
          color: '#555555',
          fontFamily: '"Roboto", "Open Sans", sans-serif',
          marginBottom: '16px',
        }}>
          Shell MRPL Aviation Fuels &amp; Services Limited is a 50:50 Joint Venture Company formed in 2008
          between Shell, a global leader in marketing aviation fuel and operating airport fueling facilities
          and Mangalore Refinery and Petrochemicals Limited (MRPL), a subsidiary of Oil and Natural Gas
          Corporation Limited, India's largest national oil company.
        </p>

        <p style={{
          fontSize: '15px',
          lineHeight: '1.8',
          color: '#555555',
          fontFamily: '"Roboto", "Open Sans", sans-serif',
          marginBottom: 0,
        }}>
          We supply Aviation Turbine Fuel (Jet A-1) to our airline customers and ensure services as per
          Shell Aviation's world class operational standards. Our customers also get benefits of Shell's
          extensive experience in working with airport authorities &amp; stakeholders to improve overall
          airport safety standards including into-plane fueling, fuel hydrant designs, airport network
          planning and fuel farm systems.
        </p>
      </div>

    </div>
  );
}
