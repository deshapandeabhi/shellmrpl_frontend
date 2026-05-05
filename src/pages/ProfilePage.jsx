import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import flightPng from '../assets/flight.png';

const STATS = [
  { value: '14+', label: 'Strategic Airports' },
  { value: '2008', label: 'Legacy of Trust' },
  { value: '50:50', label: 'Joint Venture' },
  { value: 'Jet A-1', label: 'Global Standard' },
];

const CARDS = [
  {
    img: '/wp-content/uploads/2023/09/quality_control_new-bg.jpg',
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

function Counter({ value, duration = 2000 }) {
  const [count, setCount] = React.useState(0);
  const target = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');

  React.useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

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

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
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
          />
        </div>

        {/* ── ENERGY PARTICLES ── */}
        <div className="energy-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`} />
          ))}
        </div>

        {/* ── CINEMATIC FLIGHT ANIMATION ── */}
        <div className="hero-flight-path">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
            <path 
              id="airplanePath"
              d="M-200 650 C 300 500, 700 800, 1100 200 S 1400 -100, 1800 100" 
              stroke="rgba(255, 255, 255, 0.4)" 
              strokeWidth="2.5" 
              strokeDasharray="15 20"
              style={{ animation: 'vaporTrail 20s linear infinite' }}
            />
          </svg>
          
          {/* Main Airplane */}
          <img 
            src={flightPng} 
            alt="Airplane" 
            className="animated-airplane"
            style={{ 
              offsetPath: "path('M-150 650 C 300 500, 700 800, 1100 200 S 1400 -100, 1600 100')",
              animation: 'airplaneFly 12s cubic-bezier(0.4, 0, 0.2, 1) infinite'
            }}
          />

          {/* Distant Airplane */}
          <img 
            src={flightPng} 
            alt="Airplane Distant" 
            className="animated-airplane distant"
            style={{ 
              offsetPath: "path('M1500 400 C 1200 300, 800 500, 400 100 S -100 300, -200 200')",
              animation: 'airplaneFlyDistant 16s linear infinite 4s'
            }}
          />
        </div>

        {/* ── CINEMATIC CLOUDS ── */}
        <div className="hero-clouds">
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
        </div>

        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow reveal">Shell MRPL Aviation Fuels and Services Limited</span>
            <h1 className="hero-title reveal">
              Fuelling India&apos;s Global Ambitions
            </h1>
            <p className="hero-subtitle reveal">
              Shell MRPL Aviation Fuels and Services Limited is a 50:50 Joint Venture Company formed in 2008 between Shell, a global leader in marketing aviation fuel and operating airport fueling facilities and Mangalore Refinery and Petrochemicals Limited (MRPL), a subsidiary of Oil and Natural Gas Corporation Limited, India’s largest national oil company.
            </p>
            <div className="hero-actions reveal">
              <Link to="/shell-mrpl-aviation-network" className="btn-cta-yellow">
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

      {/* ── BRAND CAPABILITIES STRIP ── */}
      <div className="stats-strip glass-dark">
        <div className="container stats-inner">
          <div className="capability-item reveal">
            <div className="cap-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="cap-text">
              <div className="cap-val">14+ Strategic Airports</div>
              <div className="cap-lab">Pan-India Presence</div>
            </div>
          </div>
          <div className="capability-item reveal reveal-delay-1">
            <div className="cap-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="cap-text">
              <div className="cap-val">Since 2008</div>
              <div className="cap-lab">Legacy of Trust</div>
            </div>
          </div>
          <div className="capability-item reveal reveal-delay-2">
            <div className="cap-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="cap-text">
              <div className="cap-val">50:50 Joint Venture</div>
              <div className="cap-lab">Shell & MRPL Partnership</div>
            </div>
          </div>
          <div className="capability-item reveal reveal-delay-3">
            <div className="cap-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
              </svg>
            </div>
            <div className="cap-text">
              <div className="cap-val">Jet A-1 Global Standard</div>
              <div className="cap-lab">High-Performance Fuel</div>
            </div>
          </div>
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
      <section className="section section-gray" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Floating Brand Background Elements */}
        {/* Floating Brand Background Elements Removed */}

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="split-section reveal">
            <div className="split-text">
              <span className="section-eyebrow">The Partnership</span>
              <h2 className="section-h2">World Class Standards. Local Expertise.</h2>
              <div className="split-body-content">
                <p className="split-lead">
                  We supply Aviation Turbine Fuel (Jet A-1) to our airline customers and ensure services as per Shell Aviation’s world class operational standards.
                </p>
                <p className="split-body">
                  Our customers also get benefits of Shell’s extensive experience in working with airport authorities & stakeholders to improve overall airport safety standards including into-plane fueling, fuel hydrant designs, airport network planning and fuel farm systems.
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
