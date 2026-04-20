import React from 'react';

/**
 * VisionPage — exact replica of http://localhost:10018/our-vision/
 *
 * Layout:
 *  1. Full-width hero image
 *  2. "Our Vision" main heading & paragraph
 *  3. Sub-sections: headings in greyish color with simple bullet points
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';

const SECTIONS = [
  {
    title: 'Honesty, Integrity and Respect',
    bullets: [
      'We are transparent, open and candid',
      'We trust each other',
      'We respect our people, the environment and the community',
      'We stand up for what we believe in',
    ],
  },
  {
    title: 'Value Our People',
    bullets: [
      'We take pride in our people',
      'To us, our people matter',
      'We invest in our people',
      'We ensure everybody’s contribution counts',
      'We recognise our people’s contribution',
    ],
  },
  {
    title: 'Focus on Our Customers',
    bullets: [
      'Customers are central to our business',
      'We are proactive in understanding customer needs',
      'We are prompt in our response to customer needs',
      'We seek to continuously align our systems processes to meet customer needs',
    ],
  },
  {
    title: 'Excellence in All We Do',
    bullets: [
      'We are passionate in everything we do',
      'We will get it right the first time, everytime',
      'We strive to exceed expectations all the time',
      'We seek innovative solutions',
    ],
  },
  {
    title: 'Demonstrate Accountability',
    bullets: [
      'We act and deliver on our commitments every-time',
      'We own up to our actions; the buck stops with me',
      'We pursue profitable growth',
    ],
  },
  {
    title: 'Be Agile and Nimble',
    bullets: [
      'We are quick to respond, execute and deliver',
      'We feel empowered to take decisions',
      'We do what it takes',
    ],
  },
  {
    title: 'HSSE First',
    bullets: [
      'HSSE is non-negotiable',
      'We align all partners to HSSE',
      'We have zero tolerance to non-compliance',
    ],
  },
  {
    title: 'Work as One Team',
    bullets: [
      'We place the organization before ourselves',
      'We respect diversity in everything (view points, people, gender etc)',
      'We collaborate across functions',
      'We continuously raise the bar for each other',
    ],
  },
];

export default function VisionPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1 }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src="/wp-content/uploads/2016/08/profile-bg.jpg"
          alt="Shell MRPL Aviation — Vision"
          style={{
            width: '100%',
            height: '270px',
            objectFit: 'cover',
            objectPosition: 'center 60%',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Content ── */}
      <div style={{ padding: '32px 40px 48px', maxWidth: '800px' }}>
        
        {/* Main Vision */}
        <h2 style={{
          fontSize: '22px',
          fontWeight: 700,
          color: '#1f3d6e', // Matches WP primary blue headings
          fontFamily: FONT,
          marginBottom: '16px',
          marginTop: 0,
        }}>
          Our Vision
        </h2>
        <p style={{
          fontSize: '15px',
          lineHeight: '1.8',
          color: '#555',
          fontFamily: FONT,
          marginBottom: '32px',
        }}>
          To be the safest, most innovative and preferred partner for aviation fuels and services
          across India, where people make a difference.
        </p>

        {/* Sub-sections */}
        {SECTIONS.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '24px' }}>
            <h5 style={{
              fontSize: '17px',
              fontWeight: 600,
              color: '#666', // Greyish color in WP for these subheadings
              fontFamily: FONT,
              marginBottom: '12px',
              marginTop: 0,
            }}>
              {section.title}
            </h5>
            <ul style={{
              margin: 0,
              paddingLeft: '20px',
              listStyleType: 'disc',
            }}>
              {section.bullets.map((bullet, bIdx) => (
                <li key={bIdx} style={{
                  fontSize: '14.5px',
                  color: '#666',
                  fontFamily: FONT,
                  lineHeight: '1.7',
                  marginBottom: '6px',
                }}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
