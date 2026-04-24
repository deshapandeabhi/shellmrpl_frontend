import React from 'react';
import PageHero from '../components/PageHero';

const SECTIONS = [
  {
    title: 'Requirement of Corporate Social Responsibility (CSR)',
    content: `Section 135 of the Companies Act, 2013, read with the Companies (Corporate Social Responsibility Policy) Rules, 2014 sets out the mandatory provisions with regard to Corporate Social Responsibility ("CSR") including constitution of Corporate Social Responsibility Committee ("CSR Committee") and formulation of Corporate Social Responsibility Policy ("CSR Policy"). Every Company to which Section 135 is applicable is required to spend at least 2% of its average net profits made during the immediately preceding three financial years on CSR Activities as per the CSR Policy.`,
  },
  {
    title: 'Objective',
    content: `This CSR policy defines Shell MRPL Aviation Fuels & Services Limited’s ("the Company") vision and framework for our CSR activities with the objective of serving the society. The policy outlines the various CSR activities the Company can undertake, the governance structure for implementing the same, mechanism for funding and carrying out the CSR activities and monitoring of the CSR activities.`,
  },
  {
    title: 'Philosophy on CSR',
    content: `The Company is committed to enhancing the interests of its stakeholders through value creation and sustainable development. The Company's philosophy on CSR revolves around principles of good corporate citizenship. It entails integration of its business goals with the societal and environmental priorities. Towards this end, the Company aims to carry out its operations in an economically, socially and environmentally responsible manner, thereby positively contributing to the well-being of the society while maximizing value for its stakeholders.`,
  },
  {
    title: 'Identified Areas for Projects',
    list: [
      'Promoting education, including special education and employment enhancing vocation skills especially among children, women, elderly and the differently abled and livelihood enhancement projects.',
      'Promoting health care including preventive health care and sanitation [including contribution to the Swach Bharat Kosh set-up by the Central Government for the promotion of sanitation] and making available safe drinking water.',
      'Ensuring environmental sustainability, ecological balance, protection of flora and fauna, animal welfare, agroforestry, conservation of natural resources and maintaining quality of soil, air and water [including contribution to the Clean Ganga Fund set-up by the Central Government for rejuvenation of river Ganga].',
      'Training to promote rural sports, nationally recognized sports, paralympic sports and olympic sports.',
      'Such other activities as permitted by the Act and Rules as amended from time to time.'
    ],
  },
];

export default function CSRPolicyPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/CSR-bg-e1473238634842.jpg"
        fallbackSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Corporate Social Responsibility"
        breadcrumbs={[{ label: 'Investors Information', to: '/investors-information' }, { label: 'CSR Policy' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">CSR Policy Outline</h2>
        <div className="body-text" style={{ marginBottom: 36 }}>
          <p>
            Shell MRPL Aviation Fuels &amp; Services Limited is committed to conducting its business
            responsibly and playing a positive role in society by contributing to sustainable
            development. Below is an overview of our Corporate Social Responsibility Policy.
          </p>
        </div>

        {SECTIONS.map((sec, i) => (
          <section key={i} className="policy-block">
            <h4>{sec.title}</h4>
            {sec.content && <p>{sec.content}</p>}
            {sec.list && (
              <ul>
                {sec.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a
            href="/wp-content/uploads/2021/04/SMA-CSR-Policy-Signed-copy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-blue"
          >
            Download Full CSR Policy (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
