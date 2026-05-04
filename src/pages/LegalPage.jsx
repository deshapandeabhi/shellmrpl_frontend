import React from 'react';
import PageHero from '../components/PageHero';

export default function LegalPage({ title }) {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title={title}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: title }]}
      />
      <div className="content-wrap" style={{ padding: '80px 0' }}>
        <div className="content-narrow">
          <h2 className="page-h2">{title}</h2>
          <p className="page-intro" style={{ marginBottom: '40px' }}>
            Official statement regarding Shell MRPL Aviation Fuels & Services Limited's {title.toLowerCase()}.
          </p>
          <div className="legal-body glass-dark" style={{ padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', background: 'var(--dark-900)', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '24px' }}>
              We are committed to maintaining the highest standards of integrity and transparency in all our operations. 
              This {title.toLowerCase()} document outlines our professional protocols and the legal framework 
              governing our aviation services and digital interactions.
            </p>
            <h4 style={{ color: '#fff', marginBottom: '16px', fontWeight: 800 }}>1. General Statement</h4>
            <p style={{ marginBottom: '24px' }}>
              Shell MRPL Aviation Fuels and Services Limited (the "Company") is a joint venture between 
              Shell and MRPL. All operational protocols strictly adhere to global aviation standards 
              and Indian regulatory requirements.
            </p>
            <h4 style={{ color: '#fff', marginBottom: '16px', fontWeight: 800 }}>2. Compliance & Standards</h4>
            <p>
              Our services are governed by the DGCA and international aviation safety regulations. 
              We ensure total compliance with HSSE (Health, Safety, Security, and Environment) standards 
              at every strategic airport within our network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
