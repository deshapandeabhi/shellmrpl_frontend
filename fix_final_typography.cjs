const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

// 1. Restore global p { text-align: justify; }
if (!css.includes('p {\n  text-align: justify;\n}')) {
  css = css.replace(/:root\s*\{/, "p {\n  text-align: justify;\n}\n\n:root {");
}

// 2. Ensure .body-text p is justify
css = css.replace(/\.body-text p\s*\{([^}]*)text-align:\s*left;/g, '.body-text p {$1text-align: justify;');

// 3. Ensure .policy-desc is justify
css = css.replace(/\.policy-desc\s*\{([^}]*)text-align:\s*left;/g, '.policy-desc {$1text-align: justify;');

// 4. Ensure .legal-body * is justify
css = css.replace(/\.legal-body \*\s*\{\s*color:[^;]+;\s*text-align:\s*left;/g, '.legal-body * {\n    color: var(--shell-white) !important;\n    text-align: justify;');

// 5. REMOVE any text-align from .cap-val and .cap-lab and force them to be left
css = css.replace(/\.cap-val\s*\{([^}]*)\}/, match => {
  let cleaned = match.replace(/text-align[^;]+;/g, '');
  return cleaned.replace('}', '  text-align: left !important;\n}');
});

css = css.replace(/\.cap-lab\s*\{([^}]*)\}/, match => {
  let cleaned = match.replace(/text-align[^;]+;/g, '');
  return cleaned.replace('}', '  text-align: left !important;\n}');
});

fs.writeFileSync('src/index.css', css);
console.log('Fixed typography: global justify restored, 4 tiles explicitly left-aligned.');
