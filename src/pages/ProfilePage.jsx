import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { value: '14+', label: 'Strategic Airports' },
  { value: '2008', label: 'Legacy of Trust' },
  { value: '50:50', label: 'Joint Venture' },
  { value: 'Jet A-1', label: 'Global Standard' },
];

const CARDS = [
  {
    img: '/wp-content/uploads/2023/09/slider2.jpg',
    title: 'Superior Aviation Fuel Services',
    desc: 'Supply of high-specification Jet A-1 fuel across 14 major Indian airports, ensuring uncompromising quality at every point of delivery.',
    link: '/products-services',
  },
  {
    img: '/wp-content/uploads/2016/08/20170204_161540.jpg',
    title: 'Global HSSE Excellence',
    desc: 'Upholding Shell Aviation’s world-class safety protocols and DGCA regulations to ensure safe, reliable, and compliant operations.',
    link: '/hsse',
  },
  {
    img: '/wp-content/uploads/2016/08/csr-bg.jpg',
    title: 'Sustainable Impact',
    desc: 'Investing in education, health, and environmental sustainability to build resilient communities across India.',
    link: '/csr',
  },
];

function ArrowRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProfilePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxEl = document.querySelector('.parallax-target');
      if (parallaxEl) {
        parallaxEl.style.transform = `scale(1.1) translateY(${scrolled * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="site-page">
      {/* ── IMMERSIVE CINEMATIC HERO ── */}
      <section className="home-hero">
        <div className="hero-overlay" />
        <div className="hero-video-container">
          <img
            src="/wp-content/uploads/2023/09/slider2.jpg"
            className="hero-video-bg parallax-target"
            alt="Aviation Background"
            style={{ transform: 'scale(1.1)' }}
          />
        </div>

        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow reveal">Shell MRPL Aviation Fuels</span>
            <h1 className="hero-title reveal">
              Fuelling India&apos;s Global Ambitions
            </h1>
            <p className="hero-subtitle reveal">
              A premium partnership between Shell and MRPL, delivering world-class
              aviation energy solutions with uncompromising safety and reliability.
            </p>
            <div className="hero-actions reveal">
              <Link to="/shell-mrpl-aviation-network" className="btn-impact">
                Explore Network <ArrowRight />
              </Link>
              <Link to="/about" className="btn-impact btn-impact-ghost">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line-wrap">
            <div className="scroll-line-fill" />
          </div>
          <span className="scroll-text">Explore</span>
        </div>
      </section>

      {/* ── BOLD STATISTICS ── */}
      <div className="stats-strip glass-dark">
        <div className="container stats-inner">
          {STATS.map((s, i) => (
            <div key={i} className="stat-block reveal">
              <div className="stat-value" style={{ color: 'var(--shell-yellow)' }}>{s.value}</div>
              <div className="stat-label" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── STRATEGIC CAPABILITIES ── */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-eyebrow">Core Expertise</span>
            <h2 className="section-h2">Unmatched Aviation Excellence</h2>
            <p className="section-intro">
              From high-performance fuel supply to integrated airport fuel farm management,
              we deliver excellence at the intersection of technology and safety.
            </p>
          </div>

          <div className="editorial-grid">
            {CARDS.map((card, i) => (
              <Link to={card.link} key={i} className={`editorial-card reveal reveal-delay-${i + 1}`}>
                <div className="editorial-card-bg">
                  <img src={card.img} alt={card.title} className="editorial-card-img" />
                </div>
                <div className="editorial-card-overlay" />
                <div className="editorial-card-content">
                  <span className="editorial-card-eyebrow">Excellence</span>
                  <h3 className="editorial-card-title">{card.title}</h3>
                  <p className="editorial-card-text">{card.desc}</p>
                  <span className="feature-card-link" style={{ color: 'var(--shell-yellow)' }}>
                    Explore More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL SPLIT SECTION ── */}
      <section className="section section-gray">
        <div className="container">
          <div className="split-section reveal">
            <div className="split-text">
              <span className="section-eyebrow">The Partnership</span>
              <h2 className="section-h2">World Class Standards. Local Expertise.</h2>
              <div className="split-body-content">
                <p className="split-lead">
                  Founded in 2008, Shell MRPL Aviation is a 50:50 joint venture between 
                  Shell — the global leader in aviation — and MRPL, India’s top refinery subsidiary of ONGC.
                </p>
                <p className="split-body">
                  We combine the technical rigour of global standards with a deep understanding 
                  of the Indian aviation landscape, serving domestic and international airlines 
                  with precision and integrity.
                </p>
              </div>
              <div className="split-actions">
                <Link to="/about" className="btn-impact">
                  Learn More
                </Link>
                <Link to="/board-of-directors" className="feature-card-link" style={{ marginLeft: '24px', fontWeight: 800 }}>
                  Meet our Leadership <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="split-image-container reveal">
              <img
                src="/wp-content/uploads/2016/08/profile-bg.jpg"
                alt="Aviation Excellence"
                className="split-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION SECTION ── */}
      <section className="cta-section">
        <div className="cta-overlay" />
        <div className="container reveal">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Take Flight?</h2>
            <p className="cta-subtitle">
              Discover our extensive network of 14 major Indian airports and explore how 
              our fuelling solutions can empower your operations.
            </p>
            <div className="cta-actions">
              <Link to="/shell-mrpl-aviation-network" className="btn-impact">
                View Network Map
              </Link>
              <Link to="/contact" className="btn-impact btn-impact-ghost" style={{ marginLeft: '16px' }}>
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
