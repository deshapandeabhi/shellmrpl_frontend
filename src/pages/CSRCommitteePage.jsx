import React from 'react';
import PageHero from '../components/PageHero';

const COMMITTEE = [
  { name: 'Mr. M. Iyer',             role: 'Chairman, CSR Committee — (Shell Nominee Director)' },
  { name: 'Mr. B. R. Gupta',         role: 'Member — (MRPL Nominee Director)' },
  { name: 'Mr. Devendra Nath Soral', role: 'Member — (Chief Executive Officer)' },
];

export default function CSRCommitteePage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2016/08/csr-bg.jpg"
        fallbackSrc="/wp-content/uploads/2016/08/profile-bg.jpg"
        title="CSR Committee Members"
        breadcrumbs={[
          { label: 'Investors Information', to: '/investors-information' },
          { label: 'CSR Policy', to: '/csr' },
          { label: 'Committee Members' }
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
