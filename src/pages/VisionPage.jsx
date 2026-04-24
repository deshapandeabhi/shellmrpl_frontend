import React from 'react';
import PageHero from '../components/PageHero';

const VALUES = [
  {
    title: 'Honesty, Integrity and Respect',
    bullets: [
      'We are transparent, open and candid',
      'We trust each other',
      'We respect our people, the environment and the community',
      'We stand up for what we believe in',
    ],
  },
  {
    title: 'Value Our People',
    bullets: [
      'We take pride in our people',
      'To us, our people matter',
      "We ensure everybody's contribution counts",
      "We recognise our people's contribution",
      'We invest in our people',
    ],
  },
  {
    title: 'Focus on Our Customers',
    bullets: [
      'Customers are central to our business',
      'We are proactive in understanding customer needs',
      'We are prompt in our response to customer needs',
      'We seek to continuously align our systems to meet customer needs',
    ],
  },
  {
    title: 'Excellence in All We Do',
    bullets: [
      'We are passionate in everything we do',
      'We will get it right the first time, every time',
      'We strive to exceed expectations all the time',
      'We seek innovative solutions',
    ],
  },
  {
    title: 'Demonstrate Accountability',
    bullets: [
      'We act and deliver on our commitments every time',
      'We own up to our actions; the buck stops with me',
      'We pursue profitable growth',
    ],
  },
  {
    title: 'Be Agile and Nimble',
    bullets: [
      'We are quick to respond, execute and deliver',
      'We feel empowered to take decisions',
      'We do what it takes',
    ],
  },
  {
    title: 'HSSE First',
    bullets: [
      'HSSE is non-negotiable',
      'We align all partners to HSSE',
      'We have zero tolerance to non-compliance',
    ],
  },
  {
    title: 'Work as One Team',
    bullets: [
      'We place the organization before ourselves',
      'We respect diversity in everything',
      'We collaborate across functions',
      'We continuously raise the bar for each other',
    ],
  },
];

export default function VisionPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Vision &amp; Values"
        breadcrumbs={[{ label: 'About', to: '/about' }, { label: 'Vision and Values' }]}
      />
      <div className="content-wrap">
        <div className="content-narrow">
          <h2 className="page-h2">Our Vision</h2>
          <div className="vision-box">
            <p className="vision-text">
              To be the safest, most innovative and preferred partner for aviation fuels
              and services across India — where people make a difference.
            </p>
          </div>

          <h2 className="page-h2">Our Values</h2>
        </div>

        <div className="value-grid">
          {VALUES.map((section, i) => (
            <div key={i} className="value-card">
              <div className="value-title">{section.title}</div>
              <ul>
                {section.bullets.map((b, j) => (
                  <li key={j} className="value-bullet">
                    <span className="value-dot" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
