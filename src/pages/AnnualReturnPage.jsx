import React from 'react';

/**
 * AnnualReturnPage — exact replica of http://localhost:10018/annual-return/
 *
 * Layout:
 *  1. Hero Banner (Annual-return-1280x720.jpg)
 *  2. List of Annual Returns with PDF links
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

const RETURNS = [
  { label: 'Annual-Return-FY-2023-24', url: '2024/09/Annual-Return-2023-24.pdf' },
  { label: 'Annual-Return-FY-2022-23', url: '2023/11/Form_MGT_7_Annual-Return.pdf' },
  { label: 'Annual-Return-FY-2021-22', url: '2021/04/Annual-Return-2021-22.pdf' },
  { label: 'Annual-Return-FY-2020-21', url: '2021/08/Annual-Return-FY-2020-21.pdf' },
];

export default function AnnualReturnPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2021/08/Annual-return-1280x720.jpg`}
          alt="Annual Return"
          onError={(e) => {
            e.target.src = `${BASE_IMG_URL}/2021/08/Annual-return-1280x720-768x325.jpg`;
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
        
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#1f3d6e',
          fontFamily: FONT,
          marginBottom: '30px',
        }}>
          Annual Return
        </h2>

        <ul style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          fontFamily: FONT,
        }}>
          {RETURNS.map((item, idx) => (
            <li key={idx} style={{
              padding: '12px 15px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              alignItems: 'center',
            }}>
              {/* PDF Icon (Generic) */}
              <div style={{ marginRight: '15px', color: '#d9534f' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <a 
                href={`/wp-content/uploads/${item.url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#204579',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
