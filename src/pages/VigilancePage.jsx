import React from 'react';
import PageHero from '../components/PageHero';

const COMPLAINTS = [
  `As per the Government of India's resolution on "Public Interest Disclosure and Protection of Informers (PIDPI)", the identity of the complainant is kept secret and is protected from victimization for making such complaints.`,
  `Central Vigilance Commission (CVC) is authorized as the Designated Agency to receive written complaints under PIDPI Resolution. The complainants who want to make any complaint under PIDPI Resolution, the complaint should be in a closed / secured envelope and should be super-scribed "Complaint under Public Interest Disclosure". The complainant should give his/her name & address in the beginning or end of complaint or in an attached letter. Such complaints are opened in the confidential section and the identity of the complainant will not be revealed.`,
  `The complainant should disclose his / her identity by giving name, address and contact phone / cell number, e-mail ID. Anonymous / pseudonymous complaints will not be considered.`,
  `Complaint may be lodged online, through email or by Dak (Post).`,
  `No correspondence shall be entertained on the subject after lodging the complaint, unless required by the office.`,
  `The complaint should be specific, brief and factual with verifiable details. It should be supported by documentary evidence wherever possible.`,
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
            Shell MRPL Aviation Fuels &amp; Services Limited is a 50:50 Joint Venture Company formed
            in 2008 between Shell, a global leader in marketing aviation fuel and operating airport
            fuelling facilities and Mangalore Refinery and Petrochemicals Limited (MRPL), a subsidiary
            of Oil and Natural Gas Corporation Limited, India&apos;s largest national oil company.
          </p>
          <p>
            Board of Shell MRPL Aviation Fuels and Services Limited has decided to adopt vigilance
            administration in the organization as per the guidelines of Central Vigilance Commission
            as prevalent in parent company MRPL. The Vigilance system in Shell MRPL Aviation Fuels
            and Services Limited will be administered by CVO, MRPL.
          </p>
          <p>
            Shell MRPL Aviation has been instrumental in bringing change in policies like Purchase
            tendering process, filing the Annual Returns by the employees etc.
          </p>
          <p>
            Shell MRPL is committed for highest standards of &ldquo;Business ethics and Values&rdquo;
            along with the vision of the Company. Honest Officers and Transparency in administration
            creates an environment for good governance and enhances the overall performance of the
            Organization. A watchful, alert and independent Vigilance function is essential for the
            success and sustenance of such good governance.
          </p>
          <p>
            The Department consistently strives to improve vigilance administration by leveraging
            technology to reduce bottlenecks/delays in systems/processes and thereby, bringing in
            more transparency and expediency in handling businesses of the organization.
          </p>
        </div>

        <h3 className="page-h3">Complaints Handling Mechanism</h3>
        <div style={{ marginTop: 20 }}>
          {COMPLAINTS.map((item, i) => (
            <div key={i} className="vigilance-item">
              <span className="v-dot" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
