const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');

// Replace left align with justify in paragraph classes
css = css.replace(/\.body-text p\s*\{[^}]*text-align:\s*left;/g, match => match.replace('left', 'justify'));
css = css.replace(/\.policy-desc\s*\{[^}]*text-align:\s*left;/g, match => match.replace('left', 'justify'));

// Add global p rule at the beginning after imports or root
css = css.replace(/:root\s*\{/, "p {\n  text-align: justify;\n}\n\n:root {");

fs.writeFileSync('src/index.css', css);
console.log('Updated to text-align: justify');
