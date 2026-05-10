import React, { useState, useEffect, useCallback } from 'react';
import PageHero from '../components/PageHero';

const IMAGES = [
  { src: '/assets/docs/gallery/1.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/12.png', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/13.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/14.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/18.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/2.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/21.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/23.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/24.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/26.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/27.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/28.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/29.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/3.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/31.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/32.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/35.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/36.JPG', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/38.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/39.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/40.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/41.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/44.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/45.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/47.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/50.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/6.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/7.jpg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.24.53%20AM.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.29.41%20AM%20(1).jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.29.41%20AM.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.29.42%20AM.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.37.44%20AM.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.37.45%20AM%20(1).jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.37.45%20AM.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.42.31%20AM.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.43.09%20AM.jpeg', caption: 'Gallery Image' },
  { src: '/assets/docs/gallery/WhatsApp%20Image%202026-05-07%20at%2010.44.38%20AM.jpeg', caption: 'Gallery Image' }
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
