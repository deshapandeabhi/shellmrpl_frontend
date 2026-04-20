import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * CSRCommitteePage
 *
 * Auto-generated from http://localhost:10018/committee-members/
 * Content column only – sidebar is handled by the parent <Sidebar> component.
 * All internal links have been rewritten to React Router paths.
 */
const CSRCommitteePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Intercept data-react-link anchors and navigate client-side
    const handler = (e) => {
      const anchor = e.target.closest('a[data-react-link]');
      if (anchor) {
        e.preventDefault();
        navigate(anchor.getAttribute('href'));
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [navigate]);

  return (
    <div className="w-full h-full bg-white wp-content-column">
      {/* Elementor CSS removed — styles inlined in React components */}
      {/* Elementor content column – pixel-perfect replica */}
      <div dangerouslySetInnerHTML={{ __html: `
			<div class="elementor-widget-wrap">
							</div>
		` }} />
    </div>
  );
};

export default CSRCommitteePage;
