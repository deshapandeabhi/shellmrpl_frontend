import React from 'react';
import PageHero from '../components/PageHero';

export default function ShellPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Shell"
        breadcrumbs={[{ label: 'Company Parentage' }, { label: 'Shell' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Shell — Company Profile</h2>
        <div className="body-text">
          <h3 className="page-h3">Shell</h3>
          <p>
            Shell is a global group of energy and petrochemicals companies. The parent company is
            Royal Dutch Shell plc, incorporated in England and Wales. Shell has operations in more
            than 70 countries, produces around 3.7 million barrels of oil equivalent per day and
            has around 44,000 service stations worldwide.
          </p>
          <p>
            Shell&apos;s businesses are divided into three sectors: Upstream, Downstream and Projects
            &amp; Technology. Shell has around 92,000 employees worldwide including joint ventures.
          </p>

          <h3 className="page-h3">Shell Aviation</h3>
          <p>
            Shell Aviation is a major global aviation fuel supplier, providing refuelling at more
            than 800 airports in over 35 countries. Shell Aviation supplies over 14 billion litres
            of jet fuel and lubricants globally each year.
          </p>
          <p>
            Shell Aviation has been a pioneer in aviation since very early days of aviation history,
            renowned for its commitment to safety, reliability, and customer focus.
          </p>

          <h3 className="page-h3">Shell in India</h3>
          <p>
            Shell has been present in India for more than 80 years. Today, Shell has invested across
            the energy value chain — in fuels, lubricants, liquefied natural gas, chemicals, and
            information technology. Shell Lubricants has been the world&apos;s number one lubricants
            brand globally since 2007.
          </p>

          <div style={{ marginTop: 32 }}>
            <a href="https://www.shell.com" target="_blank" rel="noopener noreferrer" className="btn-blue">
              Visit Shell.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
