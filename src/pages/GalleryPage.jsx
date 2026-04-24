import React, { useState, useEffect, useCallback } from 'react';
import PageHero from '../components/PageHero';

const IMAGES = [
  { src: '/wp-content/uploads/2022/08/FHML0461.jpg',                caption: 'Aviation fuelling operations at a major Indian airport' },
  { src: '/wp-content/uploads/2022/08/OTUU3242-e1700211980252.jpg', caption: 'Shell MRPL Aviation team conducting safety briefing' },
  { src: '/wp-content/uploads/2022/08/LNTT4287.jpg',                caption: 'Into-plane fuelling service in progress' },
  { src: '/wp-content/uploads/2023/09/Pic5-e1623674472624.jpg',     caption: 'Airport fuelling facility overview' },
  { src: '/wp-content/uploads/2023/09/Pic4-e1623674458152.jpg',     caption: 'Fuel quality testing and safety audit' },
  { src: '/wp-content/uploads/2023/09/Pic3-e1623674444251.png',     caption: 'Ground support equipment inspection' },
];

export default function GalleryPage() {
  const [lightbox, setLightbox]   = useState(null);
  const [loadErrors, setLoadErrors] = useState({});

  const openLightbox  = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImg = useCallback(() => setLightbox((i) => (i > 0 ? i - 1 : IMAGES.length - 1)), []);
  const nextImg = useCallback(() => setLightbox((i) => (i < IMAGES.length - 1 ? i + 1 : 0)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft')  prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [lightbox, prevImg, nextImg]);

  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2023/09/slider2.jpg"
        title="Gallery"
        breadcrumbs={[{ label: 'Gallery' }]}
      />
      <div className="content-wrap">
        <h2 className="page-h2">Photo Gallery</h2>
        <div className="body-text" style={{ marginBottom: 36 }}>
          <p>A glimpse into our operations, safety initiatives, and team activities.</p>
        </div>

        <div className="gallery-grid">
          {IMAGES.map((img, i) => (
            !loadErrors[i] && (
              <button
                key={i}
                className="gallery-item"
                onClick={() => openLightbox(i)}
                aria-label={`View image: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  onError={() => setLoadErrors((prev) => ({ ...prev, [i]: true }))}
                />
                <div className="gallery-overlay">
                  <div className="gallery-caption">{img.caption}</div>
                </div>
              </button>
            )
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <div className="lightbox-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={IMAGES[lightbox].src}
              alt={IMAGES[lightbox].caption}
              className="lightbox-img"
            />
            <div style={{ color: '#fff', textAlign: 'center', marginTop: 16, fontFamily: 'var(--font-body)', fontSize: 14 }}>
              <p>{IMAGES[lightbox].caption}</p>
              <p style={{ opacity: 0.6, fontSize: 12, marginTop: 4 }}>
                {lightbox + 1} / {IMAGES.length}
              </p>
            </div>
          </div>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">×</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImg(); }} aria-label="Previous image">‹</button>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImg(); }} aria-label="Next image">›</button>
        </div>
      )}
    </div>
  );
}
