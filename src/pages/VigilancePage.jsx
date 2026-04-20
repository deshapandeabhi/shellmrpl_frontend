import React from 'react';

/**
 * VigilancePage — exact replica of http://localhost:10018/vigilance/
 *
 * Layout:
 *  1. Hero Banner (vigilance-image-1.png)
 *  2. "Vigilance Mechanism" Header
 *  3. "About Vigilance" Section
 *  4. Detailed "Complaints Handling Mechanism" list
 */

const FONT = '"Roboto","Open Sans",Arial,sans-serif';
const BASE_IMG_URL = '/wp-content/uploads';

export default function VigilancePage() {
  return (
    <div style={{ width: '100%', background: '#fff', flex: 1, paddingBottom: '60px' }}>
      
      {/* ── 1. Hero Image ── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={`${BASE_IMG_URL}/2023/12/vigilance-image-1.png`}
          alt="Vigilance Mechanism"
          onError={(e) => {
            e.target.src = `${BASE_IMG_URL}/2023/12/vigilance-image-1-1024x214.png`;
          }}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>

      {/* ── 2. Content ── */}
      <div style={{ padding: '40px', maxWidth: '1100px', margin: '0 auto' }}>
        
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#1f3d6e',
          fontFamily: FONT,
          marginBottom: '20px',
        }}>
          Vigilance Mechanism
        </h2>

        <div style={{
          fontSize: '15px',
          lineHeight: '1.6',
          color: '#333',
          fontFamily: FONT,
          textAlign: 'justify',
        }}>
          <h3 style={{ fontSize: '18px', color: '#1f3d6e', marginTop: '30px', marginBottom: '15px' }}>About Vigilance</h3>
          <p>
            Shell MRPL Aviation Fuels & Services Limited is a 50:50 Joint Venture Company formed in 2008 between Shell, a global leader in marketing aviation fuel and operating airport fuelling facilities and Mangalore Refinery and Petrochemicals Limited (MRPL), a subsidiary of Oil and Natural Gas Corporation Limited, India’s largest national oil company.
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

          <h3 style={{ fontSize: '18px', color: '#1f3d6e', marginTop: '40px', marginBottom: '20px', textDecoration: 'underline' }}>
            Complaints Handling Mechanism:
          </h3>
          <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
            <li style={{ marginBottom: '12px' }}>
              As per the Government of India’s resolution on “Public Interest Disclosure and Protection of Informers (PIDPI)”, the identity of the complainant is kept secret and is protected from victimization for making such complaints.
            </li>
            <li style={{ marginBottom: '12px' }}>
              Central Vigilance Commission (CVC) is authorized as the Designated Agency to receive written complaints under PIDPI Resolution. The complainants who want to make any complaint under PIDPI Resolution, the complaint should be in a closed /secured envelope and should be super-scribed “Complaint under Public Interest Disclosure” The complainant should give his/her name & address in the beginning or end of complaint or in an attached letter. Such complaints are opened in the confidential section and the identity of the complainant will not be revealed.
            </li>
            <li style={{ marginBottom: '12px' }}>
              The complainant should disclose his / her identity by giving name, address and contact phone / cell number, e-mail ID. Anonymous / pseudonymous complaints will not be considered.
            </li>
            <li style={{ marginBottom: '12px' }}>
              Complaint may be lodged online, through email or by Dak (Post).
            </li>
            <li style={{ marginBottom: '12px' }}>
              No correspondence shall be entertained on the subject after lodging the complaint, unless required by the office.
            </li>
            <li style={{ marginBottom: '12px' }}>
              The complaint should be specific, brief and factual with verifiable details. It should be supported by documentary evidence wherever possible.
            </li>
            <li style={{ marginBottom: '12px' }}>
              In case it is found that the complaint was false / motivated and lodged with a view to harass the officials, suitable action may be taken against such complainant in accordance with the rule.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
