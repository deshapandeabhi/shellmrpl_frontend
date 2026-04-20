import React from 'react';

/**
 * ManagementPage — exact replica of http://localhost:10018/management-team/
 *
 * Layout:
 *  1. Centered dark blue heading "Management Team"
 *  2. List of management members, each centered:
 *     - Portrait image
 *     - Name in bold
 *     - Title/Role in grey
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

const MANAGERS = [
  {
    name: 'Mr. Devendra Nath Soral',
    role: 'CEO',
    image: `${BASE_IMG_URL}/2024/09/Dev-Soral-Picture.jpg`,
    width: 158,
    height: 202,
  },
  {
    name: 'Mr. S Chockalingam',
    role: 'CFO and CS',
    image: `${BASE_IMG_URL}/2016/08/c001.jpg`,
    width: 210,
    height: 210,
  },
  {
    name: 'Mr. G Srinivas Rao',
    role: 'HoD Sales',
    image: `${BASE_IMG_URL}/2016/08/3-1.jpg`,
    width: 210,
    height: 210,
  },
  {
    name: 'Mr. K Tirumal Rao',
    role: 'HoD (Opns), QC & ERP, Advisor– S/D',
    image: `${BASE_IMG_URL}/2016/08/Thirumala-sir-3.jpg`,
    width: 174,
    height: 196,
  },
];

export default function ManagementPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── Content ── */}
      <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Main Heading */}
        <h2 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f3d6e', // WP primary blue
          fontFamily: FONT,
          marginBottom: '60px',
          marginTop: 0,
        }}>
          Management Team
        </h2>

        {/* Management Team Members */}
        {MANAGERS.map((manager, idx) => (
          <div key={idx} style={{ marginBottom: '50px' }}>
            <img
              src={manager.image}
              alt={manager.name}
              style={{
                width: `${manager.width}px`,
                height: `${manager.height}px`,
                objectFit: 'cover',
                objectPosition: 'top center',
                marginBottom: '12px',
                display: 'inline-block',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                border: '4px solid #fff',
              }}
            />
            <h5 style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#333',
              fontFamily: FONT,
              margin: '0 0 6px 0',
            }}>
              {manager.name}
            </h5>
            <p style={{
              fontSize: '14.5px',
              color: '#777',
              fontFamily: FONT,
              margin: 0,
              lineHeight: '1.4',
            }}>
              {manager.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
