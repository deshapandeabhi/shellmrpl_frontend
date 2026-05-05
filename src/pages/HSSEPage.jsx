import React from 'react';
import PageHero from '../components/PageHero';

const PRACTICES = [
  'Comply with Shell Aviation Policies and Standards, those of our joint venture partner MRPL, all applicable laws, regulations, and fiscal requirements.',
  'Operate with an HSSE culture built upon our Core Values of Honesty, Integrity, and Respect for People.',
  'Strive for Goal Zero incidents in our operations — recognizing that no business objective is so important that it should be pursued at the sacrifice of safety.',
  'Establish and review HSSE objectives continually to minimize the environmental impact of our operations.',
  'Encourage and embrace HSSE interventions and learn from regular performance reviews.',
  'Ensure every individual across the organization is competent and fully trained in executing their tasks safely.',
  'Provide a secure and healthy working environment for all staff, contractors, and customers.',
  'Communicate appropriately and consult with employees and stakeholders on HSSE matters.',
];

export default function HSSEPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/HSSE-bg.jpg"
        fallbackSrc="/wp-content/uploads/2016/08/131G5664.jpg"
        title="HSSE"
        breadcrumbs={[{ label: 'HSSE & Quality' }, { label: 'HSSE' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Health, Safety, Security &amp; Environment</h2>
        <div className="body-text" style={{ marginBottom: 36 }}>
          <p>
            Shell MRPL Aviation follows best in class operating standards of HSSE across its value chain. Some of the practices which ensures safe transportation of Jet fuel are:
          </p>
          <p>
            Safety audit of transporters carried out as per Shell international standards – 4 pillar audits where Driver management, vehicle management, Journey management and HSSE management audits are carried out for ensuring safety during fuel transportation.
          </p>
          <p>
            Transportation is monitored and controlled by state of art GPS system, where any safety violations (Speed, Journey management, harsh braking, driver fatigue control are monitored on line).
          </p>
          <p>
            Night driving is not permitted and drivers mandatorily takes rest after 4 hrs of continuous driving. These are also monitored by GPS system.
          </p>
          <p>Regular safety meeting carried out involving all stakeholders i.e. SMA staff, contractors, drivers etc. to incorporate, improve and inculcate safety behavior's.</p>
          <p>Regular emergency response drills carried out to ensure timely and correct action in case of emergency.</p>
          <p>Emergency Response Plan is revised in line with PNGRB guidelines and submitted to statutes after approval of SMA board.</p>
          <p>Regular trainings, Tool box meeting, safety briefings, LFI (learning from incidents) are carried out to maintain and enhance safety / quality performance.</p>
          <p>Near miss and Potential Incident reporting are encouraged for process improvements.</p>
          <p>Shell MRPL Aviation follows best in class operating standards of HSSE across its value chain. Some of the practices which ensures safe transportation of Jet fuel are:</p>
        </div>

        {/* <h3 className="page-h3">Our Core Beliefs &amp; Practices</h3> */}
        <div className="practice-list">
          {[
            'Safety audit of transporters carried out as per Shell international standards – 4 pillar audits where Driver management, vehicle management, Journey management and HSSE management audits are carried out for ensuring safety during fuel transportation.',
            'Transportation is monitored and controlled by state of art GPS system, where any safety violations (Speed, Journey management, harsh braking, driver fatigue control are monitored on line).',
            'Night driving is not permitted and drivers mandatorily takes rest after 4 hrs of continuous driving. These are also monitored by GPS system.',
            'Regular safety meeting carried out involving all stakeholders i.e. SMA staff, contractors, drivers etc. to incorporate, improve and inculcate safety behavior’s.',
            'Regular emergency response drills carried out to ensure timely and correct action in case of emergency.',
            'Emergency Response Plan is revised in line with PNGRB guidelines and submitted to statutes after approval of SMA board.',
            'Regular trainings, Tool box meeting, safety briefings, LFI (learning from incidents) are carried out to maintain and enhance safety / quality performance.',
            'Near miss and Potential Incident reporting are encouraged for process improvements.',
          ].map((item, i) => (
            <div key={i} className="practice-item">
              <div className="practice-num">{i + 1}</div>
              <p className="practice-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
