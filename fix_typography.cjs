const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

// 1. Remove letter-spacing
css = css.replace(/^\s*letter-spacing:.*;$/gm, '');

// 2. Change text-align: center to text-align: left
css = css.replace(/^\s*text-align:\s*center\s*;$/gm, '  text-align: left;');

// 3. Normalize line-height to 1.5 to prevent distortion
css = css.replace(/^\s*line-height:\s*[0-9.]+\s*;$/gm, '  line-height: 1.5;');

fs.writeFileSync('src/index.css', css);
console.log('Typography fixed!');
