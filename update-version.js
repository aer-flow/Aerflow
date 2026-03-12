const fs = require('fs');
const path = require('path');

const versionFilePath = path.join(__dirname, 'version.json');
const versionData = JSON.parse(fs.readFileSync(versionFilePath, 'utf8'));

// Increment patch version
const versionParts = versionData.version.split('.');
versionParts[2] = parseInt(versionParts[2]) + 1;
const newVersion = versionParts.join('.');

versionData.version = newVersion;
fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));

console.log(`Updating to version ${newVersion}...`);

const htmlFiles = [
  'index.html',
  'code web.html',
  'code web ro.html',
  'code ai.html',
  'code en.html',
  'code ro.html'
];

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update .css and .js links with version query param
    // Match href="style.css" or src="script.js" etc.
    content = content.replace(/(href="[^"]+\.css)(?:\?v=[^"]*)?(")/g, `$1?v=${newVersion}$2`);
    content = content.replace(/(src="[^"]+\.js)(?:\?v=[^"]*)?(")/g, `$1?v=${newVersion}$2`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
