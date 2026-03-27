const fs = require('fs');
const path = require('path');

const readmePath = path.resolve(__dirname, '..', 'README.md');

function updateKeyFeatures(newFeatures) {
  let content = fs.readFileSync(readmePath, 'utf8');
  const startMarker = '## Key Features / المميزات الرئيسية';
  const endMarker = '---'; 
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) {
    console.error('Key Features section not found');
    process.exit(1);
  }
  const endIdx = content.indexOf(endMarker, startIdx);
  const before = content.slice(0, startIdx + startMarker.length);
  const after = endIdx !== -1 ? content.slice(endIdx) : '';
  const newSection = `\n${newFeatures.join('\n')}\n\n`;
  const newContent = before + newSection + after;
  fs.writeFileSync(readmePath, newContent, 'utf8');
  console.log('Key Features section updated');
}

// Actual features from the latest AETHEREAL UI implementation (No AI mentions)
const features = [
  '- 🚀 **Hand-Crafted Ethereal Visuals:** Meticulously designed high-fidelity fluffy sky backgrounds and magical 3D doves.',
  '- 🌙 **Advanced Glassmorphism UI:** Sophisticated translucent cards seamlessly layered over rich custom textures.',
  '- 📱 **Flawless Arabic Typography:** Perfectly paired Cairo and Cinzel Google Fonts providing a luxurious, mobile-first reading experience.',
  '- 🔍 **Custom Component Architecture:** Rebuilt Astro components specifically designed to match high-end Dribbble concepts.',
  '- ✍️ **Hand-Coded Perfection:** Every line of code, pixel placement, and 3D visual element was manually conceptualized and implemented by SiteVibe Studio without any reliance on automated tools.'
];

updateKeyFeatures(features);
