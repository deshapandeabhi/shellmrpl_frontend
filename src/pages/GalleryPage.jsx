import React, { useState } from 'react';

/**
 * GalleryPage — 3-column image grid
 *
 * Exact replica of http://localhost:10018/gallery/
 * - 3-column CSS Grid layout matching WordPress gallery-columns-3
 * - Uniform card height with object-fit cover
 * - Click → lightbox modal overlay (like Elementor lightbox)
 * - Only shows images with valid dimensions (filters out 1×1 placeholders)
 */

const BASE = '/wp-content/uploads';

// All gallery images extracted from WordPress (filtered — removed 1×1 placeholders)
const IMAGES = [
  { thumb: `${BASE}/2023/09/Pic5-e1623674472624-300x138.jpg`,      full: `${BASE}/2023/09/Pic5-e1623674472624.jpg`,          caption: '' },
  { thumb: `${BASE}/2023/09/Pic4-e1623674458152-300x139.jpg`,      full: `${BASE}/2023/09/Pic4-e1623674458152.jpg`,          caption: '' },
  { thumb: `${BASE}/2023/09/Pic3-e1623674444251-300x139.png`,      full: `${BASE}/2023/09/Pic3-e1623674444251.png`,          caption: '' },
  { thumb: `${BASE}/2023/09/Pic3-e1623674444251-1-300x139.png`,    full: `${BASE}/2023/09/Pic3-e1623674444251-1.png`,        caption: '' },
  { thumb: `${BASE}/2022/08/OTUU3242-e1700211980252-300x127.jpg`,   full: `${BASE}/2022/08/OTUU3242-e1700211980252.jpg`,       caption: '' },
  { thumb: `${BASE}/2022/08/LNTT4287-300x169.jpg`,                 full: `${BASE}/2022/08/LNTT4287.jpg`,                    caption: '' },
  { thumb: `${BASE}/2022/08/FHML0461-300x169.jpg`,                 full: `${BASE}/2022/08/FHML0461.jpg`,                    caption: '' },
  { thumb: `${BASE}/2021/06/Week-300x140.png`,                     full: `${BASE}/2021/06/Week.png`,                        caption: '' },
  { thumb: `${BASE}/2020/11/202011021224_0001-300x212.jpg`,         full: `${BASE}/2020/11/202011021224_0001.jpg`,            caption: '' },
  { thumb: `${BASE}/2016/08/20170204_164904-300x169.jpg`,           full: `${BASE}/2016/08/20170204_164904.jpg`,              caption: 'Inauguration of Computer lab at Govt Primary School, Palace Guttahalli - Bangalore' },
  { thumb: `${BASE}/2016/08/20170204_161540-300x169.jpg`,           full: `${BASE}/2016/08/20170204_161540.jpg`,              caption: 'Inauguration of Computer lab at Govt Primary School, Palace Guttahalli - Bangalore' },
  { thumb: `${BASE}/2016/08/20170204_154643-300x169.jpg`,           full: `${BASE}/2016/08/20170204_154643.jpg`,              caption: 'Inauguration of Computer lab at Govt Primary School, Palace Guttahalli - Bangalore' },
  { thumb: `${BASE}/2016/08/20170204_154308-300x169.jpg`,           full: `${BASE}/2016/08/20170204_154308.jpg`,              caption: 'Inauguration of Computer lab at Govt Primary School, Palace Guttahalli - Bangalore' },
  { thumb: `${BASE}/2016/08/14-300x125.jpg`,                        full: `${BASE}/2016/08/14.jpg`,                          caption: '' },
  { thumb: `${BASE}/2016/08/9-300x180.jpg`,                         full: `${BASE}/2016/08/9.jpg`,                           caption: '' },
  { thumb: `${BASE}/2016/08/8-300x180.jpg`,                         full: `${BASE}/2016/08/8.jpg`,                           caption: '' },
  { thumb: `${BASE}/2016/08/7-2-300x180.jpg`,                       full: `${BASE}/2016/08/7-2.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/5-4-300x180.jpg`,                       full: `${BASE}/2016/08/5-4.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/4-4-300x180.jpg`,                       full: `${BASE}/2016/08/4-4.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/3-4-300x180.jpg`,                       full: `${BASE}/2016/08/3-4.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/2-5-300x180.jpg`,                       full: `${BASE}/2016/08/2-5.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/1-5-300x180.jpg`,                       full: `${BASE}/2016/08/1-5.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/5-3-300x225.jpg`,                       full: `${BASE}/2016/08/5-3.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/4-3-300x166.jpg`,                       full: `${BASE}/2016/08/4-3.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/3-3-300x169.jpg`,                       full: `${BASE}/2016/08/3-3.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/2-4-300x169.jpg`,                       full: `${BASE}/2016/08/2-4.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/1-4-300x169.jpg`,                       full: `${BASE}/2016/08/1-4.jpg`,                         caption: '' },
  { thumb: `${BASE}/2016/08/7-1-300x167.jpg`,                       full: `${BASE}/2016/08/7-1.jpg`,                         caption: 'Safety Day Celebrations at Mangalore-2015' },
  { thumb: `${BASE}/2016/08/6-1-300x167.jpg`,                       full: `${BASE}/2016/08/6-1.jpg`,                         caption: 'Safety Day Celebrations at Mangalore-2015' },
  { thumb: `${BASE}/2016/08/5-2-300x167.jpg`,                       full: `${BASE}/2016/08/5-2.jpg`,                         caption: 'Safety Day Celebrations at Mangalore-2015' },
  { thumb: `${BASE}/2016/08/3-2-300x167.jpg`,                       full: `${BASE}/2016/08/3-2.jpg`,                         caption: '' },
  { thumb: `${BASE}/2018/06/Slider-6-3-300x143.jpg`,                full: `${BASE}/2018/06/Slider-6-3.jpg`,                  caption: '' },
  { thumb: `${BASE}/2016/08/DSC_1641-300x200.jpg`,                   full: `${BASE}/2016/08/DSC_1641.jpg`,                    caption: 'Shell MRPL Aviation is taking up the construction of the toilet block in partnership with MRPL at Govt PU College for Women, Balmatta, Mangalore.' },
  { thumb: `${BASE}/2016/08/DSC_1636-300x200.jpg`,                   full: `${BASE}/2016/08/DSC_1636.jpg`,                    caption: 'Handing over of the LOI by CEO' },
  { thumb: `${BASE}/2016/08/20170204_164137-300x169.jpg`,            full: `${BASE}/2016/08/20170204_164137.jpg`,             caption: 'Shell MRPL Aviation team with Dr. C N Ashwathnarayan, Hon\'ble MLA of Malleshwaram, Bangalore' },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null); // { idx }

  const openLightbox = (idx) => setLightbox({ idx });
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox({ idx: (lightbox.idx - 1 + IMAGES.length) % IMAGES.length });
  const next = () => setLightbox({ idx: (lightbox.idx + 1) % IMAGES.length });

  return (
    <div style={{ width: '100%', background: '#ffffff', flex: 1 }}>

      {/* ── Gallery heading (matches WordPress — no hero image on gallery page) ── */}
      <div style={{ padding: '24px 24px 12px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: 700,
          color: '#333',
          fontFamily: '"Roboto","Open Sans",sans-serif',
          margin: 0,
        }}>
          Gallery
        </h2>
      </div>

      {/* ── 3-column CSS Grid (matches gallery-columns-3) ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          padding: '8px 24px 32px',
        }}
      >
        {IMAGES.map((img, idx) => (
          <GalleryItem
            key={idx}
            img={img}
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      {/* ── Lightbox modal ── */}
      {lightbox !== null && (
        <Lightbox
          img={IMAGES[lightbox.idx]}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
          current={lightbox.idx + 1}
          total={IMAGES.length}
        />
      )}
    </div>
  );
}

function GalleryItem({ img, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        position: 'relative',
      }}
    >
      <img
        src={img.thumb}
        alt={img.caption || 'Gallery image'}
        loading="lazy"
        style={{
          width: '100%',
          height: '170px',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.25s ease',
          transform: hov ? 'scale(1.04)' : 'scale(1)',
        }}
      />
      {img.caption && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.55)',
          color: '#fff',
          fontSize: '11px',
          padding: '4px 8px',
          fontFamily: '"Roboto",sans-serif',
          lineHeight: 1.4,
        }}>
          {img.caption}
        </div>
      )}
    </div>
  );
}

function Lightbox({ img, onClose, onPrev, onNext, current, total }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        backgroundColor: 'rgba(0,0,0,0.88)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={arrowBtn('left')}
      >&#8249;</button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '80vw', maxHeight: '80vh', position: 'relative' }}
      >
        <img
          src={img.full}
          alt={img.caption || 'Gallery'}
          style={{
            maxWidth: '80vw',
            maxHeight: '75vh',
            objectFit: 'contain',
            display: 'block',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          }}
        />
        {img.caption && (
          <p style={{
            color: '#ddd', textAlign: 'center', marginTop: '8px',
            fontSize: '13px', fontFamily: '"Roboto",sans-serif',
          }}>
            {img.caption}
          </p>
        )}
        <p style={{ color: '#888', textAlign: 'center', fontSize: '12px', margin: '4px 0 0' }}>
          {current} / {total}
        </p>
      </div>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={arrowBtn('right')}
      >&#8250;</button>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: '20px', right: '24px',
          background: 'none', border: 'none',
          color: '#fff', fontSize: '36px', cursor: 'pointer',
          lineHeight: 1,
        }}
      >×</button>
    </div>
  );
}

function arrowBtn(side) {
  return {
    position: 'fixed',
    [side]: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.15)',
    border: 'none',
    color: '#fff',
    fontSize: '48px',
    lineHeight: 1,
    cursor: 'pointer',
    padding: '4px 16px',
    borderRadius: '4px',
  };
}
