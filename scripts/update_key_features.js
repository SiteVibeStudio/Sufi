const fs = require('fs');
const path = require('path');

const readmePath = path.resolve(__dirname, '..', 'README.md');

function updateKeyFeatures(newFeatures) {
  let content = fs.readFileSync(readmePath, 'utf8');
  const startMarker = '## Key Features';
  const endMarker = '---'; // assumes the section ends before the horizontal rule
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) {
    console.error('Key Features section not found');
    process.exit(1);
  }
  const endIdx = content.indexOf(endMarker, startIdx);
  const before = content.slice(0, startIdx + startMarker.length);
  const after = endIdx !== -1 ? content.slice(endIdx) : '';
  const newSection = `\n${newFeatures.join('\n')}\n`;
  const newContent = before + newSection + after;
  fs.writeFileSync(readmePath, newContent, 'utf8');
  console.log('Key Features section updated');
}

// Example placeholder features – replace with real data when needed
const placeholderFeatures = [
  '- 🚀 Feature A: Description of feature A.',
  '- 🌙 Feature B: Description of feature B.',
  '- 📱 Feature C: Description of feature C.'
];

updateKeyFeatures(placeholderFeatures);
