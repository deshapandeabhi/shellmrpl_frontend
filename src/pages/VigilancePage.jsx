import React from 'react';
import PageHero from '../components/PageHero';

const COMPLAINTS = [
  `As per the Government of India’s resolution on “Public Interest Disclosure and Protection of Informers (PIDPI)”, the identity of the complainant is kept secret and is protected from victimization for making such complaints.`,
  `Central Vigilance Commission (CVC) is authorized as the Designated Agency to receive written complaints under PIDPI Resolution. The complainants who want to make any complaint under PIDPI Resolution, the complaint should be in a closed /secured envelope and should be super-scribed “Complaint under Public Interest Disclosure” The complainant should give his/her name & address in the beginning or end of complaint or in an attached letter. Such complaints are opened in the confidential section and the identity of the complainant will not be revealed. The complaints which have been addressed to other /several authorities are not treated as complaint under PIDPI Resolution. If these procedures are not followed, the complaint made there under will be treated like a general complaint.`,
  `The complainant should disclose his / her identity by giving name, address and contact phone / cell number, e-mail ID. Anonymous / pseudonymous complaints will not be considered. The identity of the complainant will be protected.`,
  `Complaint may be lodged online, through email or by Dak (Post).`,
  `No correspondence shall be entertained on the subject after lodging the complaint, unless required by the office. However, if any fresh facts are available with the complainant, he / she may communicate the same.`,
  `The complaint should be specific, brief and factual with verifiable details. It should be supported by documentary evidence wherever possible. Complaint with irrelevant, vague, absurd or generalized allegations will be disposed as per the guidelines.`,
  `In case it is found that the complaint was false / motivated and lodged with a view to harass the officials, suitable action may be taken against such complainant in accordance with the rule.`,
];

export default function VigilancePage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2023/12/vigilance-image-1.png"
        fallbackSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="Vigilance Mechanism"
        breadcrumbs={[
          { label: 'Investors Information', to: '/investors-information' },
          { label: 'Vigilance Mechanism' },
        ]}
      />

      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Vigilance Mechanism</h2>

        <h3 className="page-h3">About Vigilance</h3>
        <div className="body-text">
          <p>
            Shell MRPL Aviation Fuels and Services Limited is a 50:50 Joint Venture Company formed in 2008 between Shell, a global leader in marketing aviation fuel & operating airport fuelling facilities and Mangalore Refinery and Petrochemicals Limited (MRPL), a subsidiary of Oil and Natural Gas Corporation Limited, India’s largest national oil company.
          </p>
          <p>
            Board of Shell MRPL Aviation Fuels and Services Limited has decided to adopt vigilance administration in the organization as per the guidelines of Central Vigilance Commission as prevalent in parent company MRPL. The Vigilance system in Shell MRPL Aviation Fuels and Services Limited will be administered by CVO, MRPL.
          </p>
          <p>
            Shell MRPL Aviation has been instrumental in bringing change in policies like Purchase tendering process, filing the Annual Returns by the employees etc.
          </p>
          <p>
            Shell MRPL is committed for highest standards of “Business ethics and Values” along with the vision of the Company. Working with ethical values and Undoubted integrity in providing the services to the customers are the foundation of good governance. Honest Officers and Transparency in administration creates an environment for good governance and enhances the overall performance of the Organization. A watchful, alert and independent Vigilance function is essential for the success and sustenance of such good governance. Vigilance function also focus on effective systemic improvements for better transparency taking advantage of the available technology and e-governance.
          </p>
          <p>
            The Department consistently strives to improve vigilance administration by leveraging technology to reduce bottlenecks/delays in systems/processes and thereby, bringing in more transparency and expediency in handling businesses of the organization. Vigilance department through its activities is making all efforts to reduce scope for corruption and inculcate a culture of Transparency, Honesty, Probity and Integrity in the company.
          </p>
        </div>

        <h3 className="page-h3" style={{ marginTop: 48 }}>Complaints Handling Mechanism</h3>
        <div style={{ marginTop: 24 }}>
          {COMPLAINTS.map((item, i) => (
            <div key={i} className="vigilance-item">
              <span className="v-dot" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="office-card" style={{ marginTop: 32, background: 'var(--gray-50)' }}>
          <h4 style={{ fontWeight: 800, marginBottom: 12 }}>Lodge Complaint</h4>
          <p>
            <strong>Send email complaint to:</strong>{' '}
            <a href="mailto:cvo@mrpl.co.in" className="btn-text-link">cvo@mrpl.co.in</a>
          </p>
          <p style={{ marginTop: 8 }}>
            <strong>Dak / Courier Complaint to the following address:</strong><br />
            Chief Vigilance Officer (CVO)<br />
            MRPL, Via Katipalla, Kuthethoor Post<br />
            Mangalore – 575030
          </p>
        </div>

        <h3 className="page-h3" style={{ marginTop: 60 }}>Integrity Pledge</h3>
        <div className="vision-box" style={{ background: 'var(--color-shell-blue)', padding: '40px' }}>
          <p className="vision-text" style={{ fontSize: '16px', fontWeight: 400, opacity: 0.9 }}>
            I believe that corruption has been one of the major obstacles to economic, political and social progress of our country. I believe that all stakeholders such as Government, citizens and private sector need to work together to eradicate corruption.
          </p>
          <br />
          <p className="vision-text" style={{ fontSize: '16px', fontWeight: 400, opacity: 0.9 }}>
            I realise that every citizen should be vigilant and commit to highest standards of honesty and integrity at all times and support the fight against corruption.
          </p>
          <div style={{ marginTop: 24, color: '#fff' }}>
            <p><strong>I, therefore, Pledge:</strong></p>
            <ul style={{ marginTop: 12, listStyle: 'disc', paddingLeft: 20 }}>
              <li>To follow probity and rule of law in all walks of life;</li>
              <li>To neither take nor offer bribe;</li>
              <li>To perform all tasks in an honest and transparent manner;</li>
              <li>To act in public interest;</li>
              <li>To lead by example exhibiting integrity in personal behaviour;</li>
              <li>To report any incident of corruption to the appropriate agency;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
