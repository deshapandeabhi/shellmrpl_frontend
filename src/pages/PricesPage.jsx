import React from 'react';
import PageHero from '../components/PageHero';

const PRICES = [
  { airport: 'Chennai', price: '18,151' },
  { airport: 'Bangalore', price: '18,618' },
  { airport: 'Hyderabad', price: '20,316' },
  { airport: 'Goa', price: '20,769' },
  { airport: 'Calicut', price: '18,806' },
  { airport: 'Mangalore', price: '15,958' },
  { airport: 'Madurai', price: '21,665' },
];

export default function PricesPage() {
  return (
    <div className="inner-page">
      <PageHero
        imageSrc="/wp-content/uploads/2023/09/posted_airfield_prices-bg.jpg"
        fallbackSrc="/wp-content/uploads/2023/09/posted_airfield_prices-bg-1024x302.jpg"
        title="Posted Airfield Prices"
        breadcrumbs={[{ label: 'Products and Services', to: '/products-services' }, { label: 'Airfield Prices' }]}
      />
      <div className="content-wrap content-narrow">
        <h2 className="page-h2">Our Posted Airfield Prices</h2>
        <div className="body-text" style={{ marginBottom: 32 }}>
          <p>
            Below are our latest posted airfield prices for Aviation Turbine Fuel (ATF) across
            our network airports. Prices are in INR per KL (Kilolitre), inclusive of applicable duties.
          </p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="brand-table">
            <thead>
              <tr>
                <th>Airport</th>
                <th style={{ textAlign: 'right' }}>Duty-paid Fuel (INR / KL)</th>
              </tr>
            </thead>
            <tbody>
              {PRICES.map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.airport}</strong></td>
                  <td className="center">₹ {row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 16 }}>
          * Prices are subject to change without notice. Contact us for the most current rates.
        </p>
      </div>
    </div>
  );
}
