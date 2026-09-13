import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgPath = path.join(__dirname, '..', 'public', 'images', 'logo.png');
const svgPath = path.join(__dirname, '..', 'public', 'favicon.svg');

const img = fs.readFileSync(imgPath);
const b64 = img.toString('base64');
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <image width="128" height="128" href="data:image/png;base64,${b64}" />
</svg>
`;

fs.writeFileSync(svgPath, svgContent, 'utf8');
console.log('favicon.svg successfully generated with real logo');
