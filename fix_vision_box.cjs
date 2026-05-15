const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

// Replace the entire .vision-box::before block
css = css.replace(/\.vision-box::before\s*\{[^}]+\}/, '');

fs.writeFileSync('src/index.css', css);
console.log('Removed .vision-box::before');
