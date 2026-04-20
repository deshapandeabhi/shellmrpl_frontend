import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * CSRProjectsPage
 *
 * Auto-generated from http://localhost:10018/project-pics/
 * Content column only – sidebar is handled by the parent <Sidebar> component.
 * All internal links have been rewritten to React Router paths.
 */
const CSRProjectsPage = () => {
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
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="elementor-section elementor-inner-section elementor-element elementor-element-3bcc861 elementor-section-full_width elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no" data-id="3bcc861" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-525d6e3" data-id="525d6e3" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-3e247b7 elementor-widget elementor-widget-heading" data-id="3e247b7" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2024/09/CSR-Approved-Projects-for-FY-2024-25.pdf" target="_blank">CSR PROJECTS 2024-25</a></h6>				</div>
				</div>
				<div class="elementor-element elementor-element-b5b8698 elementor-widget elementor-widget-heading" data-id="b5b8698" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2024/03/csr-projects-23-24.png" target="_blank">CSR PROJECTS 2023-24</a></h6>				</div>
				</div>
				<div class="elementor-element elementor-element-2d6f58e elementor-widget elementor-widget-heading" data-id="2d6f58e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2023/12/CSR-Report-22-23.pdf" target="_blank">CSR PROJECTS 2022-23</a></h6>				</div>
				</div>
				<div class="elementor-element elementor-element-9fb6124 elementor-widget elementor-widget-heading" data-id="9fb6124" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2022/06/CSR-PROJECTS-2021-22.pdf" target="_blank">CSR PROJECTS 2021-22</a></h6>				</div>
				</div>
				<div class="elementor-element elementor-element-8561351 elementor-widget elementor-widget-heading" data-id="8561351" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2022/06/CSR-PROJECTS-2020-21.pdf" target="_blank">CSR PROJECTS 2020-21</a></h6>				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-897bd0c" data-id="897bd0c" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-2c9963a elementor-widget elementor-widget-heading" data-id="2c9963a" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2021/02/PROJECTS-2019-20.pdf" target="_blank">CSR PROJECTS 2019-20</a></h6>				</div>
				</div>
				<div class="elementor-element elementor-element-733a38d elementor-widget elementor-widget-heading" data-id="733a38d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2021/02/PROJECTS-2018-19.pdf" target="_blank">CSR PROJECTS 2018-19</a></h6>				</div>
				</div>
				<div class="elementor-element elementor-element-9ae9e5e elementor-widget elementor-widget-heading" data-id="9ae9e5e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2021/02/PROJECTS-2017-18.pdf" target="_blank">CSR PROJECTS 2017-18</a></h6>				</div>
				</div>
				<div class="elementor-element elementor-element-fa70c19 elementor-widget elementor-widget-heading" data-id="fa70c19" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2021/02/PROJECTS-2016-17.pdf" target="_blank">CSR PROJECTS 2016-17</a></h6>				</div>
				</div>
				<div class="elementor-element elementor-element-c5e19e6 elementor-widget elementor-widget-heading" data-id="c5e19e6" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h6 class="elementor-heading-title elementor-size-default"><a href="/wp-content/uploads/2021/02/PROJECTS-2015-16.pdf" target="_blank">CSR PROJECTS 2015-16</a></h6>				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<div class="elementor-element elementor-element-80d5d55 elementor-widget elementor-widget-spacer" data-id="80d5d55" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
							<div class="elementor-spacer">
			<div class="elementor-spacer-inner"></div>
		</div>
						</div>
				</div>
				<div class="elementor-element elementor-element-1949870 elementor-widget elementor-widget-image-gallery" data-id="1949870" data-element_type="widget" data-e-type="widget" data-widget_type="image-gallery.default">
				<div class="elementor-widget-container">
							<div class="elementor-image-gallery">
			<div id="gallery-1" class="gallery galleryid-2405 gallery-columns-2 gallery-size-thumbnail"><figure class="gallery-item">
			<div class="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="1949870" data-elementor-lightbox-title="Shell MRPL Aviation is taking up the construction of the toilet block in partnership with MRPL at Govt PU College for Women, Balmatta, Mangalore." data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDQ3LCJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMThcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMTZcLzA4XC9EU0NfMTY0MS5qcGciLCJzbGlkZXNob3ciOiIxOTQ5ODcwIn0%3D"><img decoding="async" width="150" height="150" src="/wp-content/uploads/2016/08/DSC_1641-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" aria-describedby="gallery-1-447"></a>
			</div>
				<figcaption class="wp-caption-text gallery-caption" id="gallery-1-447">
				Shell MRPL Aviation is taking up the construction of the toilet block in partnership with MRPL at Govt PU College for Women, Balmatta, Mangalore. 
				</figcaption></figure><figure class="gallery-item">
			<div class="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="1949870" data-elementor-lightbox-title="Handing over of the LOI by CEO" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDQ2LCJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMThcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMTZcLzA4XC9EU0NfMTYzNi5qcGciLCJzbGlkZXNob3ciOiIxOTQ5ODcwIn0%3D"><img decoding="async" width="150" height="150" src="/wp-content/uploads/2016/08/DSC_1636-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" aria-describedby="gallery-1-446"></a>
			</div>
				<figcaption class="wp-caption-text gallery-caption" id="gallery-1-446">
				Handing over of the LOI by CEO – Shell MRPL Aviation, Mr Konduri Lakshminarayana to Shri J R Lobo, Hon’ble MLA of Mangalore and Ms Mariette J Mascarenhas, Principal of Govt PU College for Women, Balmatta. Shell MRPL Aviation is taking up the construction of the toilet block in partnership with MRPL at Govt PU College for Women, Balmatta, Mangalore. 
				</figcaption></figure><figure class="gallery-item">
			<div class="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="1949870" data-elementor-lightbox-title="Inauguration of Computer lab at Govt Primary School, Palace Guttahalli - Bangalore" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDQ0LCJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMThcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMTZcLzA4XC8yMDE3MDIwNF8xNjQxMzcuanBnIiwic2xpZGVzaG93IjoiMTk0OTg3MCJ9"><img loading="lazy" decoding="async" width="150" height="150" src="/wp-content/uploads/2016/08/20170204_164137-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" aria-describedby="gallery-1-444"></a>
			</div>
				<figcaption class="wp-caption-text gallery-caption" id="gallery-1-444">
				Shell MRPL Aviation team with Dr. C N Ashwathnarayan, Hon’ble MLA of Malleshwaram, Bangalore during the completion ceremony of Green &amp; Safe School project and inauguration of Computer lab at Govt Primary School, Palace Guttahalli – Bangalore. As part of CSR initiative, Shell MRPL Aviation took up the school renovation and set-up of computer lab.
				</figcaption></figure><figure class="gallery-item">
			<div class="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="1949870" data-elementor-lightbox-title="Inauguration of Computer lab at Govt Primary School, Palace Guttahalli - Bangalore" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDQzLCJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMThcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMTZcLzA4XC8yMDE3MDIwNF8xNjE1NDAuanBnIiwic2xpZGVzaG93IjoiMTk0OTg3MCJ9"><img loading="lazy" decoding="async" width="150" height="150" src="/wp-content/uploads/2016/08/20170204_161540-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt=""></a>
			</div></figure><figure class="gallery-item">
			<div class="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="1949870" data-elementor-lightbox-title="Inauguration of Computer lab at Govt Primary School, Palace Guttahalli - Bangalore" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDQ1LCJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMThcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMTZcLzA4XC8yMDE3MDIwNF8xNjQ5MDQuanBnIiwic2xpZGVzaG93IjoiMTk0OTg3MCJ9"><img loading="lazy" decoding="async" width="150" height="150" src="/wp-content/uploads/2016/08/20170204_164904-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt=""></a>
			</div></figure><figure class="gallery-item">
			<div class="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="1949870" data-elementor-lightbox-title="Inauguration of Computer lab at Govt Primary School, Palace Guttahalli - Bangalore" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDQyLCJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMThcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMTZcLzA4XC8yMDE3MDIwNF8xNTQ2NDMuanBnIiwic2xpZGVzaG93IjoiMTk0OTg3MCJ9"><img loading="lazy" decoding="async" width="150" height="150" src="/wp-content/uploads/2016/08/20170204_154643-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt=""></a>
			</div></figure><figure class="gallery-item">
			<div class="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="1949870" data-elementor-lightbox-title="Inauguration of Computer lab at Govt Primary School, Palace Guttahalli - Bangalore" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NDQxLCJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMThcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMTZcLzA4XC8yMDE3MDIwNF8xNTQzMDguanBnIiwic2xpZGVzaG93IjoiMTk0OTg3MCJ9"><img loading="lazy" decoding="async" width="150" height="150" src="/wp-content/uploads/2016/08/20170204_154308-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt=""></a>
			</div></figure>
		</div>
		</div>
						</div>
				</div>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-d7aeeba elementor-section-full_width elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no" data-id="d7aeeba" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-48ed433" data-id="48ed433" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-5d77463 elementor-widget elementor-widget-template" data-id="5d77463" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
				<div class="elementor-widget-container">
							<div class="elementor-template">
					
				</div>
						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-e1dd519 elementor-section-full_width elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no" data-id="e1dd519" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5a68e2f" data-id="5a68e2f" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-12cd7f5 elementor-widget elementor-widget-template" data-id="12cd7f5" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
				<div class="elementor-widget-container">
							<div class="elementor-template">
					<div data-elementor-type="section" data-elementor-id="4066" class="elementor elementor-4066" data-elementor-post-type="elementor_library">
					<section class="elementor-section elementor-top-section elementor-element elementor-element-46e5c088 elementor-section-full_width elementor-hidden-tablet elementor-hidden-mobile elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no" data-id="46e5c088" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-144aea64" data-id="144aea64" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-ea793a8 elementor-widget elementor-widget-heading" data-id="ea793a8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h5 class="elementor-heading-title elementor-size-default">(c) 2025. Shell MRPL Aviation Fuels and Services Limited. All Rights Reserved</h5>				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				</div>
				</div>
						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		` }} />
    </div>
  );
};

export default CSRProjectsPage;
