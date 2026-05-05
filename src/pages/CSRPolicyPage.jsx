import React from 'react';
import PageHero from '../components/PageHero';

const SECTIONS = [
  {
    title: 'Requirement of CORPORATE SOCIAL RESPONSIBILITY {CSR}',
    content: `Section 135 of the Companies Act, 2013 {in short “Act”}, read with the Companies {Corporate Social Responsibility Policy} Rules 2014 {In short “CSR Rules”}, mandates companies meeting specified net worth or turnover or net profit during any financial year to constitute a Corporate Social Responsibility Committee of the Board, formulate a Corporate Social Responsibility Policy {in short CSR Policy} including the activities specified in Schedule VII of the Act and ensure spending in each financial year, at least 2% {two per cent} of their average net profits made during the three immediately preceding financial years in pursuance of their CSR Policy.`,
  },
  {
    title: 'Short Title & Applicability',
    content: `This Policy, which encompasses the Company’s philosophy to delineate its responsibility as a corporate citizen and lays down the guidelines and mechanism for undertaking socially useful programmes for welfare & sustainable development of the community at large, is titled as “ SMA CSR Policy”. This shall apply to all CSR activities i.e. projects or programs, activities undertaken or to be undertaken by the Company in terms of Section 135 of the Act and CSR Rules {in short, “CSR activities”}. These activities shall exclude those undertaken or to be undertaken by the Company in pursuance of its normal course of business.`,
  },
  {
    title: 'Compliance',
    content: `The Company shall comply with Section 135 of the Companies Act, 2013 and Companies {Corporate Social Responsibility Policy} Rules 2014, as amended and also various notifications/ clarifications, issued from time to time, and any other applicable provisions of any statute.`,
  },
  {
    title: 'Overall Objectives',
    list: [
      'Undertake social responsibilities as a dependable corporate citizen functioning in the society.',
      'Collaborate with government, voluntary organizations and academic institutes in pursuit of its goals with respect to Health, Safety, Security and Environment.',
      'Interact regularly with stakeholders, review and publicise the CSR initiatives.',
    ]
  },
  {
    title: 'Permitted areas of CSR',
    content: 'The Company shall endeavour  to carry out CSR activities pursuant to Schedule VII of the Company Act 2013, in respect of one or more of the following areas, in India,  primarily in and around our areas of business for:-',
    list: [
      'Promoting Health, Safety, Security and Environment objectives of the Company',
      'Promoting preventive health care, sanitation and making available safe drinking water',
      'Promoting education and employment enhancing vocation skills',
      'Promoting activities to ensure environmental sustainability',
      'Contribution to the Prime Minister’s National Relief Fund or any other fund set up by the Central or State Government for environment related relief activities.'
    ]
  },
  {
    title: 'Formation of CSR Committee',
    content: 'In terms of criteria mentioned in Section 135 of the Act, a Corporate Social Responsibility Committee {in short “CSR Committee”} shall be constituted by the Board. The committee shall have the following authority which can be reviewed by the Board from time to time. The focus of CSR activities shall be generally in the vicinity of the projects and operations of the Company. The CSR Committee shall have the authority to recommend to the Board for approval of any other CSR programmes or projects or activities not covered in this policy which are within purview of the Companies Act, 2013, and rules thereunder as amended from time to time.',
    list: [
      'formulate and recommend to the Board, a Corporate Social Responsibility Policy which shall indicate the activities to be undertaken by the Company',
      'recommend the amount of expenditure to be incurred on the activity',
      'approve CSR activities identified by the Company from time to time',
      'monitor the implementation and report to the Board',
    ],
  },
  {
    title: 'Funding and Allocation',
    list: [
      'For achieving its CSR objective, the Company shall allocate for spending in every financial year, at least 2% of its average net profits made during the three immediately preceding financial years, as its Annual CSR Budget. The CSR objective shall be met through a combination of short term and medium term plans.',
      'The surplus arising out of the CSR projects or programs or activities shall not form part of the business profit of a company.'
    ],
  },
  {
    title: 'Broad Guidelines for CSR Activities',
    content: 'While identifying the project, the following would be considered',
    list: [
      'The relevance of the project, i.e. whether it is integrated with the social and environment concerns and whether it will contribute to sustainable development of the society.',
      'Adequacy of the proposal for meeting the imminent need of the beneficiary.',
      'Whether the activities are philanthropic activities, since mere donations to philanthropic/charity or other organizations would not come under the category of CSR activities.',
      'Ensure the activities proposed are not related to the business of the Company or its employees.',
      'Progress shall be monitored up-to activities / projects completion.',
      'Carry out impact measurement study after the completion of the CSR activity / project.'
    ]
  },
  {
    title: 'MONITORING & REPORTING FRAMEWORK',
    content: 'There shall be three levels of monitoring and review to be undertaken for CSR activities:-',
    list: [
      'Level {1}:  Identified Local officers, at the project levels, who shall be responsible for implementation and shall give monthly reporting to Level {2}.',
      'Level {2}:  Identified Senior Officers at the Company level who shall be responsible for reviewing the implementation, progress, expenditure monitoring, effectiveness of action plans and support needed. They shall give quarterly reporting to Level {3}.',
      'Level {3}: CSR Committee and Board shall review minimum on an annual basis or earlier as necessary.'
    ]
  }
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
        <h2 className="page-h3">CSR POLICY – SHELL MRPL AVIATION FUELS AND SERVICES LIMITED</h2>
        <div className="body-text" style={{ marginBottom: 36 }}>
          <p>
            Shell MRPL Aviation Fuels and Services Limited (hereinafter referred as ‘the Company’) believes in the conduct of its affairs in a fair and transparent manner by adopting highest standards of professionalism, honesty, integrity and ethical behaviour and in complete compliance of laws, as amended from time to time.
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
