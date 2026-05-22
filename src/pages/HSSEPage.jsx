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
        title="HSSE"
        breadcrumbs={[{ label: 'HSSE and Quality' }, { label: 'HSSE' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Health, Safety, Security and Environment (HSSE)</h2>
        <div className="body-text" style={{ marginBottom: 36, textAlign: 'justify' }}>
          <p>
            Shell MRPL Aviation Fuels and Services Limited firmly believes in, promotes, and implements the principle of “Safety First”
            across all areas of its operations. HSSE remains under constant focus throughout the
            organization at all levels and areas, covering all spheres of activity, with a continued
            commitment to introducing new initiatives that contribute to the overall wellbeing of society.
          </p>
          <p>
            To strengthen safety culture, the company undertakes several proactive measures, including
            dedicated management efforts, regular training programs for staff and drivers, eliciting active
            third-party contribution and active participation in safety promotional initiatives involving
            various stakeholders. Employees and contractors are encouraged to report incidents, near
            misses, and potential hazards. Additionally, safety bulletins are published, learnings from the
            shareholders disseminated to the relevant stakeholders and Learning from Incidents (LFI) is
            shared across the organization and other members to enhance awareness and prevent
            recurrence.
          </p>
          <p>
            Senior management actively participates through safety walks, while weekly HSSE reviews
            are conducted at the leadership level. Regular safety audits of haulier operations, along with
            monthly reviews of hauliers’ HSSE performance, form an integral part of the company’s
            safety management system.
          </p>
          <p>
            Given that road transport operations involve higher risk due to third-party behaviour and
            prevailing road transport practices in the country, special emphasis is placed on driver
            training and behavioural improvement to strengthen and upgrade safety standards in transport
            operations.
          </p>
        </div>

        {/* <h3 className="page-h3">Our Core Beliefs &amp; Practices</h3> */}
        {/* <div className="practice-list">
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
        </div> */}
      </div>
    </div>
  );
}
