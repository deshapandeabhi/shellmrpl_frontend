import React from 'react';

/**
 * BoardPage — exact replica of http://localhost:10018/board-of-directors/
 *
 * Layout:
 *  1. Full-width hero image (boardroom leather chairs)
 *  2. Dark blue centered heading "Board of Directors"
 *  3. List of board members, each centered:
 *     - Circular portrait image
 *     - Name in bold
 *     - Title/Role in grey
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

const DIRECTORS = [
  {
    name: 'Mr. Mundkur Shyamprasad Kamath',
    role: 'Chairman, Shell MRPL Aviation & Director, MRPL',
    image: `${BASE_IMG_URL}/2024/08/ShyamPrasad-Kamath-MRPL.jpg`,
  },
  {
    name: 'Mr. Sanjay Samuel Varkey',
    role: 'Director, Shell MRPL Aviation & Shell India Markets Private Limited',
    image: `${BASE_IMG_URL}/2024/05/sanjay-verkey.png`,
  },
  {
    name: 'Mr. BH Vasudev Prasad',
    role: 'Director, Shell MRPL Aviation & ED-Projects in MRPL',
    image: `${BASE_IMG_URL}/2024/05/8.png`,
  },
  {
    name: 'Mr. Ziad Victor Soussou',
    role: 'Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/2025/06/Photo_Zia-Victor.jpg`,
  },
  {
    name: 'Mr. B N Bankapur',
    role: 'Independent Director, Shell MRPL Aviation & Chairman, BEC Pvt Ltd',
    image: `${BASE_IMG_URL}/2024/05/9.png`,
  },
  {
    name: 'Mr. Saikumar Rajagopal',
    role: 'Independent Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/2024/05/2.png`,
  },
  {
    name: 'Ms. Sangeeta Sumesh',
    role: 'Independent Director, Shell MRPL Aviation',
    image: `${BASE_IMG_URL}/2025/04/IMG-20250407-WA0033.jpg`,
  },
];

export default function BoardPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2016/08/board_of_director-bg.jpg`}
          alt="Board of Directors"
          onError={(e) => {
            // Fallback just in case
            e.target.src = `${BASE_IMG_URL}/2016/08/board_of_director-bg-1024x301.jpg`;
          }}
          style={{
            width: '100%',
            height: '270px',
            objectFit: 'cover',
            display: 'block',
            objectPosition: 'center 40%',
          }}
        />
      </div>

      {/* ── 2. Content ── */}
      <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Main Heading */}
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#1f3d6e', // WP primary blue
          fontFamily: FONT,
          marginBottom: '50px',
          marginTop: 0,
        }}>
          Board of Directors
        </h2>

        {/* Board Members */}
        {DIRECTORS.map((director, idx) => (
          <div key={idx} style={{ marginBottom: '50px' }}>
            <img
              src={director.image}
              alt={director.name}
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'top center',
                border: '4px solid #fff',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                marginBottom: '20px',
              }}
            />
            <h5 style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#333',
              fontFamily: FONT,
              margin: '0 0 8px 0',
            }}>
              {director.name}
            </h5>
            <p style={{
              fontSize: '14.5px',
              color: '#777',
              fontFamily: FONT,
              margin: 0,
              lineHeight: '1.4',
            }}>
              {director.role.split('&').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <>&amp;<br /></>}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
