import React from 'react';

/**
 * CSRPolicyPage — exact replica of http://localhost:10018/csr/
 *
 * Layout:
 *  1. Hero Banner (csr-bg.jpg)
 *  2. "Corporate Social Responsibility Policy" Title
 *  3. Full Policy content with blue subheadings
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

export default function CSRPolicyPage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2016/08/csr-bg.jpg`}
          alt="CSR Policy Hero"
          onError={(e) => {
            e.target.src = `${BASE_IMG_URL}/2016/08/csr-bg-1024x301.jpg`;
          }}
          style={{
            width: '100%',
            height: '270px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Content ── */}
      <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#1f3d6e',
          fontFamily: FONT,
          marginBottom: '30px',
        }}>
          Corporate Social Responsibility Policy
        </h2>

        <div style={{
          fontSize: '15px',
          lineHeight: '1.6',
          color: '#333',
          fontFamily: FONT,
          textAlign: 'justify',
        }}>
          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            Requirement of CORPORATE SOCIAL RESPONSIBILITY {"{CSR}"}
          </h4>
          <p>
            Section 135 of the Companies Act, 2013 {"{in short “Act”}"}, read with the Companies {"{Corporate Social Responsibility Policy}"} Rules 2014 {"{In short “CSR Rules”}"}, mandates companies meeting specified net worth or turnover or net profit during any financial year to constitute a Corporate Social Responsibility Committee of the Board, formulate a Corporate Social Responsibility Policy {"{in short CSR Policy}"} including the activities specified in Schedule VII of the Act and ensure spending in each financial year, at least 2% {"{two per cent}"} of their average net profits made during the three immediately preceding financial years in pursuance of their CSR Policy.
          </p>

          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            Short Title & Applicability
          </h4>
          <p>
            This Policy, which encompasses the Company’s philosophy to delineate its responsibility as a corporate citizen and lays down the guidelines and mechanism for undertaking socially useful programmes for welfare & sustainable development of the community at large, is titled as “ SMA CSR Policy”. This shall apply to all CSR activities i.e. projects or programs, activities undertaken or to be undertaken by the Company in terms of Section 135 of the Act and CSR Rules {"{in short, “CSR activities”}"}. These activities shall exclude those undertaken or to be undertaken by the Company in pursuance of its normal course of business.
          </p>

          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            Compliance
          </h4>
          <p>
            The Company shall comply with Section 135 of the Companies Act, 2013 and Companies {"{Corporate Social Responsibility Policy}"} Rules 2014, as amended and also various notifications/ clarifications, issued from time to time, and any other applicable provisions of any statute.
          </p>

          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            Overall Objectives
          </h4>
          <p>To pursue the CSR objectives, the Company will endeavour to:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Undertake social responsibilities as a dependable corporate citizen functioning in the society.</li>
            <li>Collaborate with government, voluntary organizations and academic institutes in pursuit of its goals with respect to Health, Safety, Security and Environment.</li>
            <li>Interact regularly with stakeholders, review and publicise the CSR initiatives.</li>
          </ul>

          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            Permitted areas of CSR
          </h4>
          <p>
            The Company shall endeavour to carry out CSR activities pursuant to Schedule VII of the Company Act 2013, in respect of one or more of the following areas, in India, primarily in and around our areas of business for:-
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Promoting Health, Safety, Security and Environment objectives of the Company</li>
            <li>Promoting preventive health care, sanitation and making available safe drinking water</li>
            <li>Promoting education and employment enhancing vocation skills</li>
            <li>Promoting activities to ensure environmental sustainability</li>
            <li>Contribution to the Prime Minister’s National Relief Fund or any other fund set up by the Central or State Government for environment related relief activities.</li>
          </ul>

          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            Formation of CSR Committee
          </h4>
          <p>
            In terms of criteria mentioned in Section 135 of the Act, a Corporate Social Responsibility Committee {"{in short “CSR Committee”}"} shall be constituted by the Board. The committee shall have the following authority which can be reviewed by the Board from time to time.
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>formulate and recommend to the Board, a Corporate Social Responsibility Policy which shall indicate the activities to be undertaken by the Company</li>
            <li>recommend the amount of expenditure to be incurred on the activity</li>
            <li>approve CSR activities identified by the Company from time to time</li>
            <li>monitor the implementation and report to the Board</li>
          </ul>

          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            Funding and Allocation
          </h4>
          <p>
            1. For achieving its CSR objective, the Company shall allocate for spending in every financial year, at least 2% of its average net profits made during the three immediately preceding financial years, as its Annual CSR Budget.
          </p>
          <p>
            2. The surplus arising out of the CSR projects or programs or activities shall not form part of the business profit of a company.
          </p>

          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            Broad Guidelines for CSR Activities
          </h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>The relevance of the project, i.e. whether it is integrated with the social and environment concerns.</li>
            <li>Adequacy of the proposal for meeting the imminent need of the beneficiary.</li>
            <li>Whether the activities are philanthropic activities.</li>
            <li>Ensure the activities proposed are not related to the business of the Company or its employees.</li>
            <li>Progress shall be monitored up-to activities / projects completion.</li>
            <li>Carry out impact measurement study after the completion of the CSR activity / project.</li>
          </ul>

          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            MONITORING & REPORTING FRAMEWORK
          </h4>
          <p>There shall be three levels of monitoring and review to be undertaken for CSR activities:</p>
          <p>
            <strong>Level {"{1}"}:</strong> Identified Local officers who shall be responsible for implementation.
          </p>
          <p>
            <strong>Level {"{2}"}:</strong> Identified Senior Officers who shall be responsible for reviewing the implementation.
          </p>
          <p>
            <strong>Level {"{3}"}:</strong> CSR Committee and Board shall review minimum on an annual basis.
          </p>

          <h4 style={{ color: '#204579', fontWeight: 600, marginTop: '30px', marginBottom: '10px' }}>
            INFORMATION DISSEMINATION
          </h4>
          <p>
            The Company’s engagement in this domain shall be disseminated in its Annual Reports, internal communications and through the media, wherever required.
          </p>
        </div>

      </div>
    </div>
  );
}
