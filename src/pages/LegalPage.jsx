import React from 'react';
import PageHero from '../components/PageHero';

export default function LegalPage({ title }) {
  return (
    <div className="inner-page">
      <PageHero
        title={title}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: title }]}
      />
      <div className="content-wrap content-narrow" style={{ padding: '80px 0' }}>
        <div className="content-narrow">
          <h2 className="page-h2">{title}</h2>
          <p className="page-intro" style={{ marginBottom: '40px' }}>
            Official statement regarding Shell MRPL Aviation's {title.toLowerCase()}.
          </p>
          <div className="legal-body" style={{ padding: '40px 48px', borderRadius: '24px', border: '1px solid var(--gray-100)', background: 'var(--shell-white)', color: 'var(--grey-900)', lineHeight: '1.8', boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)' }}>
            {title === 'Privacy Policy' ? (
              <>
                <p style={{ marginBottom: '24px' }}>
                  Shell MRPL Aviation respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
                </p>
                <h4 style={{ color: 'var(--grey-900)', marginBottom: '16px', fontWeight: 900 }}>1. Information Collection</h4>
                <p style={{ marginBottom: '24px' }}>
                  We may collect personal identification information (such as name, email address, phone number) when you voluntarily submit it through our contact forms or career application portals.
                </p>
                <h4 style={{ color: 'var(--grey-900)', marginBottom: '16px', fontWeight: 900 }}>2. Data Usage and Security</h4>
                <p style={{ marginBottom: '24px' }}>
                  The information we collect is used solely for responding to your inquiries, processing applications, and improving our services. We implement strict security measures to maintain the safety of your personal data and do not sell or trade your information to outside parties.
                </p>
                <h4 style={{ color: 'var(--grey-900)', marginBottom: '16px', fontWeight: 900 }}>3. Cookies and Tracking</h4>
                <p>
                  Our website may use standard "cookies" to enhance user experience. You may choose to set your web browser to refuse cookies, though some parts of the site may not function properly as a result.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '24px' }}>
                  Welcome to the official website of Shell MRPL Aviation. By accessing or using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations.
                </p>
                <h4 style={{ color: 'var(--grey-900)', marginBottom: '16px', fontWeight: 900 }}>1. Intellectual Property Rights</h4>
                <p style={{ marginBottom: '24px' }}>
                  All content, trademarks, logos, and materials on this website are the exclusive property of Shell MRPL Aviation, Shell, or MRPL. Unauthorized use, reproduction, or distribution of this material is strictly prohibited.
                </p>
                <h4 style={{ color: 'var(--grey-900)', marginBottom: '16px', fontWeight: 900 }}>2. Limitation of Liability</h4>
                <p style={{ marginBottom: '24px' }}>
                  The materials on this site are provided on an 'as is' basis. The Company makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties of merchantability or fitness for a particular purpose.
                </p>
                <h4 style={{ color: 'var(--grey-900)', marginBottom: '16px', fontWeight: 900 }}>3. Governing Law</h4>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Karnataka, India.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
