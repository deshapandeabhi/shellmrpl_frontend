import PageHero from '../components/PageHero';

const COMMITTEE = [
  { name: 'Mr. Sanjay Varkey',                         role: 'Chairman' },
  { name: 'Mr. Bappanadu Hoigegudde Vasudeva Prasad',  role: 'Member'   },
  { name: 'Dr. Ravi Kumar Rentala',                     role: 'Member'   },
];

export default function CSRCommitteePage() {
  return (
    <div className="inner-page">
      <PageHero
        title="CSR Committee"
        breadcrumbs={[
          { label: 'Investors Information', to: '/investors-information' },
          { label: 'CSR Policy', to: '/csr' },
          { label: 'CSR Committee' }
        ]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">CSR Committee</h2>
        <div className="body-text" style={{ marginBottom: 32 }}>
          <p>
            The Corporate Social Responsibility Committee is responsible for formulating and
            recommending the CSR Policy to the Board, indicating the activities to be undertaken,
            recommending the expenditure amount, and monitoring the policy&apos;s implementation.
          </p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="brand-table">
            <thead>
              <tr>
                <th>Name of the Official</th>
                <th>Role in the Committee</th>
              </tr>
            </thead>
            <tbody>
              {COMMITTEE.map((c, i) => (
                <tr key={i}>
                  <td><strong>{c.name}</strong></td>
                  <td>{c.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
