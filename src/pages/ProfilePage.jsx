import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { value: '14+', label: 'Network Airports' },
  { value: '2008', label: 'Since Year' },
  { value: '50:50', label: 'Joint Venture' },
  { value: 'Jet A-1', label: 'ATF Grade' },
];

const CARDS = [
  {
    img: '/wp-content/uploads/2023/09/slider2.jpg',
    cat: 'Aviation Fuel',
    title: 'Superior Aviation Turbine Fuel',
    desc: 'We supply Jet A-1 fuel at 14 major Indian airports, ensuring highest quality at every delivery — compliant with international specifications.',
    link: '/products-services',
  },
  {
    img: '/wp-content/uploads/2016/08/20170204_161540.jpg',
    cat: 'Safety & HSSE',
    title: 'World-Class Safety Standards',
    desc: 'Aligned with Shell Aviation\'s global HSSE protocols and DGCA regulations — zero tolerance for safety non-compliance.',
    link: '/hsse',
  },
  {
    img: '/wp-content/uploads/2016/08/csr-bg.jpg',
    cat: 'Community & CSR',
    title: 'Building Better Communities',
    desc: 'Investing 2% of net profits in education, health, and sustainability — making a real difference in the communities we serve.',
    link: '/csr',
  },
];

function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
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
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-page">

      {/* ── CINEMATIC HERO ── */}
      <section className="home-hero" aria-label="Hero banner">
        <div className="hero-bg-wrap">
          <img
            src="/wp-content/uploads/2023/09/slider2.jpg"
            className="hero-bg-img"
            alt=""
            aria-hidden="true"
            onError={e => {
              e.target.parentElement.style.background =
                'linear-gradient(135deg, #013458 0%, #014579 100%)';
              e.target.style.display = 'none';
            }}
          />
          <div className="hero-gradient" aria-hidden="true" />
        </div>

        <div className="container hero-body">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            Shell MRPL Aviation Fuels &amp; Services
          </p>
          <h1 className="hero-h1">
            Fuelling India&apos;s<br />
            Aviation Future
          </h1>
          <p className="hero-tagline">
            A 50:50 joint venture between Shell and MRPL — delivering world-class
            aviation fuel services at 14 major airports across India since 2008.
          </p>
          <div className="hero-actions">
            <Link to="/shell-mrpl-aviation-network" className="btn-cta-yellow">
              Explore Our Network <ArrowRight />
            </Link>
            <Link to="/about" className="btn-cta-ghost">
              About Us
            </Link>
          </div>
        </div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <div className="scroll-line-wrap">
            <div className="scroll-line-fill" />
          </div>
          <span className="scroll-text">Scroll</span>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="stats-strip" aria-label="Key statistics">
        <div className="stats-inner container">
          {STATS.map((s, i) => (
            <div key={i} className="stat-block">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT WE DO ── */}
      <section className="section" aria-labelledby="what-we-do-heading">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-h2" id="what-we-do-heading">
              Aviation Excellence Across India
            </h2>
            <p className="section-intro">
              From into-plane fuelling to comprehensive airport fuel management, we bring
              Shell&apos;s decades of global aviation expertise to every airport we operate.
            </p>
          </div>

          <div className="feature-grid">
            {CARDS.map((card, i) => (
              <Link
                to={card.link}
                key={i}
                className={`feature-card reveal reveal-delay-${i + 1}`}
              >
                <div className="feature-card-img-wrap">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="feature-card-img"
                    loading="lazy"
                    onError={e => {
                      e.target.parentElement.style.background = 'var(--shell-blue)';
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="feature-card-body">
                  <span className="feature-card-cat">{card.cat}</span>
                  <h3 className="feature-card-title">{card.title}</h3>
                  <p className="feature-card-text">{card.desc}</p>
                  <span className="feature-card-link">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="section section-gray" aria-labelledby="about-heading">
        <div className="container">
          <div className="split-section reveal">
            <div className="split-text">
              <span className="section-eyebrow">About Us</span>
              <h2 className="section-h2" id="about-heading">
                A Partnership Built on Trust
              </h2>
              <p className="split-body">
                Shell MRPL Aviation Fuels &amp; Services Limited was formed in 2008 as a 50:50
                joint venture between Shell — the world leader in aviation fuel marketing — and
                MRPL, a subsidiary of ONGC, India&apos;s largest national oil company.
              </p>
              <p className="split-body">
                We combine Shell&apos;s world-class aviation standards with MRPL&apos;s deep Indian
                market knowledge, delivering unmatched fuelling reliability to our airline
                customers at every airport we operate.
              </p>
              <div className="split-actions">
                <Link to="/about" className="btn-blue">Our Story</Link>
                <Link to="/board-of-directors" className="btn-text-link">
                  Board of Directors <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="split-image-wrap">
              <img
                src="/wp-content/uploads/2016/08/profile-bg.jpg"
                alt="Shell MRPL Aviation Operations"
                className="split-img"
                loading="lazy"
                onError={e => {
                  e.target.parentElement.style.background =
                    'linear-gradient(135deg, #013458, #1f3d6e)';
                  e.target.style.display = 'none';
                }}
              />
              <div className="split-img-badge">
                <div className="badge-number">14+</div>
                <div className="badge-text">Airports Nationwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR NETWORK ── */}
      <section className="section section-blue" aria-labelledby="network-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="section-eyebrow section-eyebrow-white">Our Reach</span>
            <h2 className="section-h2 white" id="network-heading">
              Operating at 14 Airports Across India
            </h2>
            <p className="section-intro white" style={{ maxWidth: 580, margin: '0 auto 48px' }}>
              From Chennai to Mangalore, Hyderabad to Calicut — we&apos;re where India flies.
            </p>
          </div>

          <div className="reveal">
            <img
              src="/wp-content/uploads/2016/08/Network.gif"
              alt="Shell MRPL Aviation India Network Map"
              className="network-map-img"
              loading="lazy"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>

          <div className="network-actions reveal">
            <Link to="/shell-mrpl-aviation-network" className="btn-cta-yellow">
              View All Airports <ArrowRight />
            </Link>
            <Link to="/posted-airfield-prices" className="btn-cta-ghost">
              Airfield Prices
            </Link>
          </div>
        </div>
      </section>

      {/* ── HSSE HIGHLIGHT ── */}
      <section className="section" aria-labelledby="hsse-heading">
        <div className="container">
          <div className="hsse-strip reveal">
            <div className="hsse-icon-wrap">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="section-eyebrow" style={{ marginBottom: 8 }}>Safety First. Always.</span>
              <h3 className="hsse-title" id="hsse-heading">Our HSSE Commitment</h3>
              <p className="hsse-text">
                Shell MRPL Aviation maintains zero tolerance for safety non-compliance. Our
                practices align with Shell Aviation&apos;s global standards and DGCA requirements,
                ensuring every fuelling operation is safe, reliable, and world-class.
              </p>
            </div>
            <Link to="/hsse" className="btn-blue" style={{ whiteSpace: 'nowrap' }}>
              HSSE Practices <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CSR SECTION ── */}
      <section className="section section-gray" aria-labelledby="csr-heading">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Beyond Aviation</span>
            <h2 className="section-h2" id="csr-heading">
              Making a Difference in Communities
            </h2>
            <p className="section-intro">
              Committed to investing at least 2% of net profits in education, healthcare,
              sanitation, and environmental sustainability.
            </p>
          </div>

          <div className="csr-highlights">
            {[
              {
                icon: '🎓',
                title: 'Education',
                text: 'Setting up computer labs, classrooms, and learning facilities at government schools in underserved communities.',
              },
              {
                icon: '🏥',
                title: 'Health & Sanitation',
                text: 'Building toilet blocks and sanitation infrastructure at public educational institutions and community centres.',
              },
              {
                icon: '🌱',
                title: 'Environment',
                text: 'Promoting environmental sustainability, tree plantation drives, and responsible energy practices.',
              },
            ].map((item, i) => (
              <div key={i} className={`csr-card reveal reveal-delay-${i + 1}`}>
                <span className="csr-icon">{item.icon}</span>
                <h4 className="csr-card-title">{item.title}</h4>
                <p className="csr-card-text">{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 52 }} className="reveal">
            <Link to="/csr" className="btn-blue">
              View CSR Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PARENTAGE STRIP ── */}
      <section
        style={{
          background: 'var(--dark-900)',
          padding: '56px 0',
        }}
        aria-label="Company parentage"
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              letterSpacing: '2.5px',
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            A Joint Venture Between
          </p>
          <div
            className="reveal"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 48,
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/shell"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: 28,
                color: 'rgba(255,255,255,0.85)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = 'var(--shell-yellow)')}
              onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.85)')}
            >
              Shell
            </Link>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--shell-yellow)',
                display: 'block',
              }}
            />
            <Link
              to="/mrpl"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: 28,
                color: 'rgba(255,255,255,0.85)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = 'var(--shell-yellow)')}
              onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.85)')}
            >
              MRPL
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
