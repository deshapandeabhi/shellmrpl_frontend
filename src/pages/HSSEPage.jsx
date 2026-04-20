import React from 'react';

/**
 * HSSEPage — exact replica of http://localhost:10018/hsse/
 *
 * Layout:
 *  1. Full-width hero image (20170204_161540.jpg)
 *  2. "HSSE – Health, Safety, Security & Environment" Heading
 *  3. Description paragraph
 *  4. Bullet points with blue markers
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

const PRACTICES = [
  'Safety audit of transporters carried out as per Shell international standards – 4 pillar audits where Driver management, vehicle management, Journey management and HSSE management audits are carried out for ensuring safety during fuel transportation.',
  'Transportation is monitored and controlled by state of art GPS system, where any safety violations (Speed, Journey management, harsh braking, driver fatigue control are monitored on line).',
  'Night driving is not permitted and drivers mandatorily takes rest after 4 hrs of continuous driving. These are also monitored by GPS system.',
  'Regular safety meeting carried out involving all stakeholders i.e. SMA staff, contractors, drivers etc. to incorporate, improve and inculcate safety behavior’s.',
  'Regular emergency response drills carried out to ensure timely and correct action in case of emergency.',
  'Emergency Response Plan is revised in line with PNGRB guidelines and submitted to statutes after approval of SMA board.',
  'Regular trainings, Tool box meeting, safety briefings, LFI (learning from incidents) are carried out to maintain and enhance safety / quality performance.',
  'Near miss and Potential Incident reporting are encouraged for process improvements.',
];

export default function HSSEPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2016/08/20170204_161540.jpg`}
          alt="HSSE Hero"
          onError={(e) => {
            e.target.src = `${BASE_IMG_URL}/2016/08/20170204_161540-1024x576.jpg`;
          }}
          style={{
            width: '100%',
            height: '270px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Content ── */}
      <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Main Heading */}
        <h2 style={{
          fontSize: '22px',
          fontWeight: 600,
          color: '#204579',
          fontFamily: FONT,
          marginBottom: '20px',
          marginTop: 0,
        }}>
          HSSE – Health, Safety, Security & Environment
        </h2>

        {/* Intro Paragraph */}
        <p style={{
          fontSize: '15.5px',
          lineHeight: '1.6',
          color: '#333',
          fontFamily: FONT,
          marginBottom: '24px',
          textAlign: 'justify',
        }}>
          Shell MRPL Aviation follows best in class operating standards of HSSE across its value chain. Some of the practices which ensures safe transportation of Jet fuel are:
        </p>

        {/* Bullet Points */}
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
        }}>
          {PRACTICES.map((item, idx) => (
            <li key={idx} style={{
              position: 'relative',
              paddingLeft: '25px',
              marginBottom: '12px',
              fontSize: '15px',
              lineHeight: '1.5',
              color: '#333',
              fontFamily: FONT,
              textAlign: 'justify',
            }}>
              {/* Custom blue bullet marker */}
              <span style={{
                position: 'absolute',
                left: '0',
                top: '8px',
                width: '8px',
                height: '8px',
                backgroundColor: '#204579',
                borderRadius: '50%',
              }} />
              {item}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
