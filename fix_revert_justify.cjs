const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');

// 1. Remove the global p { text-align: justify; }
css = css.replace(/p\s*\{\s*text-align:\s*justify;\s*\}\s*/g, '');

// 2. Revert .body-text p back to left
css = css.replace(/\.body-text p\s*\{([^}]*)text-align:\s*justify;/g, '.body-text p {$1text-align: left;');

// 3. Revert .policy-desc back to left
css = css.replace(/\.policy-desc\s*\{([^}]*)text-align:\s*justify;/g, '.policy-desc {$1text-align: left;');

// 4. Revert .legal-body * back to left
css = css.replace(/\.legal-body \*\s*\{\s*color:[^;]+;\s*text-align:\s*justify;/g, '.legal-body * {\n    color: var(--shell-white) !important;\n    text-align: left;');

// 5. Add text-align: justify to .cap-val and .cap-lab
if (!css.includes('text-align: justify;') && css.includes('.cap-val {')) {
  css = css.replace(/\.cap-val\s*\{([^}]*)\}/, '.cap-val {$1  text-align: justify;\n}');
  css = css.replace(/\.cap-lab\s*\{([^}]*)\}/, '.cap-lab {$1  text-align: justify;\n  text-align-last: justify;\n}');
}

fs.writeFileSync('src/index.css', css);
console.log('Reverted global justify and applied it only to the 4 tiles.');
