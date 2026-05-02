import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ imageSrc, title, breadcrumbs = [] }) {
  return (
    <div className="page-hero">
      <div className="page-hero-overlay" />
      <img
        src={imageSrc}
        alt=""
        className="page-hero-bg"
        onError={e => {
          e.target.style.display = 'none';
        }}
      />

      <div className="container">
        <div className="page-hero-content">
          {breadcrumbs.length > 0 && (
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i}>
                  <span className="sep">/</span>
                  {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
                </span>
              ))}
            </nav>
          )}
          <h1 className="page-hero-title">{title}</h1>
        </div>
      </div>
    </div>
  );
}
