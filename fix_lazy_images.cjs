const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

let count = 0;
walk('src', (file) => {
  if (file.endsWith('.jsx')) {
    let content = fs.readFileSync(file, 'utf-8');
    if (content.includes('<img ') && !content.includes('loading="lazy"')) {
      content = content.replace(/<img([^>]*)>/g, (match, p1) => {
        if (p1.includes('loading=')) return match;
        if (file.includes('Header.jsx') && p1.includes('logo.jpg')) return match;
        return `<img loading="lazy"${p1}>`;
      });
      fs.writeFileSync(file, content);
      count++;
    }
  }
});
console.log('Added loading="lazy" to images in ' + count + ' files.');
