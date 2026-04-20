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
    <div className="w-full bg-white flex-1 pb-16 transition-all duration-300">
      
      {/* ── 1. Hero Image ── */}
      <div className="w-full overflow-hidden leading-[0]">
        <img
          src={`${BASE_IMG_URL}/2021/08/Annual-return-1280x720.jpg`}
          alt="Annual Return"
          onError={(e) => {
            e.target.src = `${BASE_IMG_URL}/2021/08/Annual-return-1280x720-768x325.jpg`;
          }}
          className="w-full h-[180px] sm:h-[220px] md:h-[270px] object-cover block"
        />
      </div>

      {/* ── 2. Content ── */}
      <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1000px] mx-auto">
        
        <h2 className="text-xl md:text-2xl font-bold text-[#1f3d6e] font-roboto mb-8">
          Annual Return
        </h2>

        <ul className="list-none p-0 m-0 font-roboto">
          {RETURNS.map((item, idx) => (
            <li key={idx} className="flex items-center py-3 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
              {/* PDF Icon */}
              <div className="mr-4 text-[#d9534f]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <a 
                href={`/wp-content/uploads/${item.url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#204579] no-underline text-base font-medium hover:text-[#5bc0de]"
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
