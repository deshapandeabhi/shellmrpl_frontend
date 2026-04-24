import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ imageSrc, fallbackSrc, altText = '', title, breadcrumbs = [] }) {
  return (
    <div className="page-hero" role="banner" aria-label={`${title} — Page hero`}>
      <img
        src={imageSrc}
        alt={altText}
        className="page-hero-bg"
        onError={
          fallbackSrc
            ? e => { e.target.src = fallbackSrc; e.target.onerror = null; }
            : e => { e.target.style.display = 'none'; }
        }
      />
      <div className="page-hero-gradient" aria-hidden="true" />

      <div className="page-hero-content container">
        {breadcrumbs.length > 0 && (
          <nav className="page-hero-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="bc-link">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <span className="bc-sep" aria-hidden="true">›</span>
                {crumb.to
                  ? <Link to={crumb.to} className="bc-link">{crumb.label}</Link>
                  : <span className="bc-current">{crumb.label}</span>
                }
              </React.Fragment>
            ))}
          </nav>
        )}
        {title && <h1 className="page-hero-title">{title}</h1>}
      </div>
    </div>
  );
}
