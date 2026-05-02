import React, { useState, useEffect, useCallback } from 'react';
import PageHero from '../components/PageHero';

const IMAGES = [
  { src: '/wp-content/uploads/2022/08/FHML0461.jpg',                caption: 'Precision Fuelling Operations' },
  { src: '/wp-content/uploads/2022/08/OTUU3242-e1700211980252.jpg', caption: 'Expert Safety Protocol Briefing' },
  { src: '/wp-content/uploads/2022/08/LNTT4287.jpg',                caption: 'Into-Plane Excellence' },
  { src: '/wp-content/uploads/2023/09/Pic5-e1623674472624.jpg',     caption: 'Strategic Airport Infrastructure' },
  { src: '/wp-content/uploads/2023/09/Pic4-e1623674458152.jpg',     caption: 'Rigorous Quality Standards' },
  { src: '/wp-content/uploads/2023/09/Pic3-e1623674444251.png',     caption: 'Ground Support Innovation' },
];

export default function GalleryPage() {
  const [lightbox, setLightbox]   = useState(null);
  const [loadErrors, setLoadErrors] = useState({});

  const openLightbox  = (i) => {
    setLightbox(i);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = 'auto';
  };
  
  const prevImg = useCallback(() => setLightbox((i) => (i > 0 ? i - 1 : IMAGES.length - 1)), []);
  const nextImg = useCallback(() => setLightbox((i) => (i < IMAGES.length - 1 ? i + 1 : 0)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft')  prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prevImg, nextImg]);

  return (
    <div className="site-page">
      <PageHero
        imageSrc="/wp-content/uploads/2023/09/slider2.jpg"
        title="Visual Showcase"
        breadcrumbs={[{ label: 'Gallery' }]}
      />
      
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        <div className="section-header">
          <span className="section-eyebrow">The Story</span>
          <h2 className="section-h2">Operations in Motion</h2>
          <p className="section-intro">
            A window into our world of precision, safety, and operational mastery across India&apos;s leading airports.
          </p>
        </div>

        <div className="gallery-grid">
          {IMAGES.map((img, i) => (
            !loadErrors[i] && (
              <div
                key={i}
                className="gallery-item-wrap reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="gallery-img"
                  loading="lazy"
                  onError={() => setLoadErrors((prev) => ({ ...prev, [i]: true }))}
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <span className="gallery-tag">Operations</span>
                    <h3 className="gallery-title">{img.caption}</h3>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={IMAGES[lightbox].src} alt={IMAGES[lightbox].caption} className="lightbox-main-img" />
            <div className="lightbox-footer">
              <h3 className="lightbox-caption">{IMAGES[lightbox].caption}</h3>
              <span className="lightbox-counter">{lightbox + 1} / {IMAGES.length}</span>
            </div>
          </div>
          
          <button className="lightbox-close-btn" onClick={closeLightbox}>×</button>
          <button className="lightbox-arrow prev" onClick={(e) => { e.stopPropagation(); prevImg(); }}>‹</button>
          <button className="lightbox-arrow next" onClick={(e) => { e.stopPropagation(); nextImg(); }}>›</button>
        </div>
      )}
    </div>
  );
}
