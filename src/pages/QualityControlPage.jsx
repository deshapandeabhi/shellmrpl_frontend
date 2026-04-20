import React from 'react';

/**
 * QualityControlPage — exact replica of http://localhost:10018/quality-control/
 *
 * Layout:
 *  1. Full-width hero image (quality_control_new-bg.jpg)
 *  2. "Quality Control" Heading
 *  3. Intro paragraph
 *  4. Bullet points with blue markers
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

const PRACTICES = [
  'Adherence to DGCA approved Quality control manual. All approved locations are audited by DGCA annually and by SMA Quality Control Manager semi-annually.',
  'Adherence to more stringent safety and operational standards of Shell Aviation. This is guided by Technical Service Agreement with Shell Aviation through annual audit by them. Shell Aviation provides access to their operation and safety bulletin which are circulated and changes implemented to improve standard in line with international standard.',
  'Third party /external audits including Airlines audits, supplier audits, Operator audits carried out at required intervals and compliance ensured.',
  'Guided by international QC operations standard JIG (Joint Inspection Group). Any changes in standards are implemented.',
  'Internal Safety audits and operational audits carried out periodically by internal auditors and compliance is ensured.',
];

export default function QualityControlPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2023/09/quality_control_new-bg.jpg`}
          alt="Quality Control Hero"
          onError={(e) => {
            e.target.src = `${BASE_IMG_URL}/2023/09/quality_control_new-bg-1024x302.jpg`;
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
          Quality Control
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
          Robust processes ensure that quality of Jet fuel is maintained as per specifications throughout its value chain. Some of the practices followed by Shell MRPL Aviation are:
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
