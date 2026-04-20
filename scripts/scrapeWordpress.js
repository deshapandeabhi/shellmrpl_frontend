// Fetch not needed, using axios
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

import axios from 'axios';

// ─────────────────────────────────────────────────────────────────────────────
// URL map: WordPress path → { react path, component name }
// ─────────────────────────────────────────────────────────────────────────────
const routes = [
  { wpPath: '/',                           componentName: 'ProfilePage' },
  { wpPath: '/our-vision/',                componentName: 'VisionPage' },
  { wpPath: '/board-of-directors/',        componentName: 'BoardPage' },
  { wpPath: '/management-team/',           componentName: 'ManagementPage' },
  { wpPath: '/product-services/',          componentName: 'ProductsPage' },
  { wpPath: '/shell-mrpl-aviation-network/', componentName: 'NetworkPage' },
  { wpPath: '/posted-airfield-prices/',    componentName: 'PricesPage' },
  { wpPath: '/shell/',                     componentName: 'ShellPage' },
  { wpPath: '/mrpl/',                      componentName: 'MRPLPage' },
  { wpPath: '/hsse/',                      componentName: 'HSSEPage' },
  { wpPath: '/quality-control/',           componentName: 'QualityControlPage' },
  { wpPath: '/vigilance/',                 componentName: 'VigilancePage' },
  { wpPath: '/annual-return/',             componentName: 'AnnualReturnPage' },
  { wpPath: '/csr/',                       componentName: 'CSRPolicyPage' },
  { wpPath: '/committee-members/',         componentName: 'CSRCommitteePage' },
  { wpPath: '/project-pics/',              componentName: 'CSRProjectsPage' },
  { wpPath: '/gallery/',                   componentName: 'GalleryPage' },
  { wpPath: '/working-with-shell-mrpl-aviation-2/', componentName: 'CareersPage' },
  { wpPath: '/business-enquiries/',        componentName: 'ContactPage' },
];

// Map: WordPress URL segment → React Router path
const linkMap = {
  '/profile/':                       '/',
  '/our-vision/':                    '/vision-and-values',
  '/board-of-directors/':            '/board-of-directors',
  '/management-team/':               '/management-team',
  '/product-services/':              '/products-services',
  '/shell-mrpl-aviation-network/':   '/shell-mrpl-aviation-network',
  '/posted-airfield-prices/':        '/posted-airfield-prices',
  '/shell/':                         '/shell',
  '/mrpl/':                          '/mrpl',
  '/hsse/':                          '/hsse',
  '/quality-control/':               '/quality-control',
  '/vigilance/':                     '/vigilance-mechanism',
  '/annual-return/':                 '/annual-return',
  '/csr/':                           '/csr',
  '/committee-members/':             '/csr/committee-members',
  '/project-pics/':                  '/csr/projects',
  '/gallery/':                       '/gallery',
  '/working-with-shell-mrpl-aviation-2/': '/careers',
  '/business-enquiries/':            '/contact',
};

const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');
if (!fs.existsSync(PAGES_DIR)) fs.mkdirSync(PAGES_DIR, { recursive: true });

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Replace all localhost:10018 internal hrefs with React Router equivalents */
function rewriteLinks($) {
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href') || '';
    if (!href.includes('localhost:10018')) return;

    // Strip origin
    const urlObj = new URL(href, 'http://localhost:10018');
    const wpSegment = urlObj.pathname;
    const reactPath = linkMap[wpSegment];

    if (reactPath) {
      // Internal navigation – produce a plain href that React Router can handle
      $(el).attr('href', reactPath);
      $(el).attr('data-react-link', 'true');
    } else {
      // No mapping found – remove the link so it does nothing
      $(el).removeAttr('href');
    }
  });
}

/** Replace all src/srcset that point to localhost:10018 with absolute URLs
 *  so our React app can still load images from the running WP instance */
function absolutifyImages($) {
  $('img').each((_, el) => {
    const src = $(el).attr('src') || '';
    if (src.startsWith('/')) {
      $(el).attr('src', `http://localhost:10018${src}`);
    }
    $(el).removeAttr('srcset'); // avoid srcset pointing elsewhere
  });
}

/** Extract ONLY the right-side content column from the Elementor two-column layout.
 *  In every Shell MRPL page the structure is:
 *    elementor-col-50 (left)  → sidebar  ← we skip this
 *    elementor-col-50 (right) → content  ← we keep this
 *  Falls back to entire <main> if structure is different.
 */
function extractContentColumn($) {
  // Remove any embedded footer template (elementor_library template IDs for footers)
  $('[data-elementor-type="section"]').each((_, el) => {
    if ($(el).find('.elementor-col-33').length >= 3) {
      $(el).remove(); // This is the footer template with 3 equal columns
    }
  });

  // Also remove any site-footer wrapper Elementor embeds
  $('footer, .site-footer, #colophon').remove();

  // The right-side column is the SECOND elementor-col-50 inside #content
  const cols = $('#content .elementor-col-50');
  if (cols.length >= 2) {
    return $(cols[1]).html() || '';
  }

  // Fallback: strip the known left sidebar widget and return the rest of main
  $('#content .elementor-col-50').first().remove(); // remove left col
  const main = $('#content');
  return main.length ? main.html() || '' : '';
}

// ─────────────────────────────────────────────────────────────────────────────
// Main scrape loop
// ─────────────────────────────────────────────────────────────────────────────
async function scrapePages() {
  for (const route of routes) {
    try {
      console.log(`Scraping ${route.wpPath} → ${route.componentName}`);
      const url = `http://localhost:10018${route.wpPath}`;
      const response = await axios.get(url, { timeout: 10000 });
      const $ = cheerio.load(response.data);

      // Remove WP admin bar
      $('#wpadminbar').remove();

      rewriteLinks($);
      absolutifyImages($);

      // Extract targeted content
      const contentHTML = extractContentColumn($);
      if (!contentHTML) {
        console.warn(`  ⚠ No content found for ${route.wpPath}`);
        continue;
      }

      // Collect only page-specific Elementor CSS (post-XXXX.css)
      const pageStyles = [];
      $('link[rel="stylesheet"]').each((_, el) => {
        const href = $(el).attr('href') || '';
        if (href.includes('/elementor/css/post-')) {
          // Fix CSS src to absolute
          pageStyles.push(href.startsWith('/') ? `http://localhost:10018${href}` : href);
        }
      });
      const styleLinks = pageStyles
        .map(h => `      <link rel="stylesheet" href="${h}" />`)
        .join('\n');

      // Escape for JSX template literal injection
      const safeHTML = contentHTML
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$\{/g, '\\${');

      const jsx = `import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * ${route.componentName}
 *
 * Auto-generated from http://localhost:10018${route.wpPath}
 * Content column only – sidebar is handled by the parent <Sidebar> component.
 * All internal links have been rewritten to React Router paths.
 */
const ${route.componentName} = () => {
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
      {/* Page-specific Elementor CSS */}
${styleLinks}
      {/* Elementor content column – pixel-perfect replica */}
      <div dangerouslySetInnerHTML={{ __html: \`${safeHTML}\` }} />
    </div>
  );
};

export default ${route.componentName};
`;

      fs.writeFileSync(path.join(PAGES_DIR, `${route.componentName}.jsx`), jsx);
      console.log(`  ✓ Created ${route.componentName}.jsx`);

    } catch (err) {
      console.error(`  ✗ ERROR scraping ${route.wpPath}: ${err.message}`);
    }
  }

  console.log('\nAll pages scraped!');
}

scrapePages();
