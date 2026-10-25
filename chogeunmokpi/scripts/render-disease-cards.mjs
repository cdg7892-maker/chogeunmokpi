import { readFileSync, mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import sharp from 'sharp';
const root = resolve(import.meta.dirname, '..');
const diseases = JSON.parse(readFileSync(join(root, 'src/lib/disease-guides-content.json'), 'utf8'));
const escape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
function lines(text, max) {
  const result = []; let line = '';
  for (const char of text) { if (line.length >= max) { result.push(line.trim()); line = ''; } line += char; }
  if (line.trim()) result.push(line.trim());
  return result;
}
const colors = ['#315a4b','#476779','#88603f','#5e6650','#636181','#7d555e'];
const icons = [
  '<circle cx="510" cy="640" r="116"/><path d="m594 724 112 112M450 640h120m-60-60v120"/>',
  '<path d="M360 615h160v-90m0 90 170-90M520 615v170m0-170h170"/><circle cx="350" cy="615" r="35"/><circle cx="520" cy="500" r="35"/><circle cx="720" cy="510" r="35"/><circle cx="720" cy="615" r="35"/><circle cx="520" cy="820" r="35"/>',
  '<rect x="420" y="495" width="310" height="350" rx="26"/><rect x="500" y="470" width="150" height="60" rx="12"/><path d="m460 615 20 20 40-50m35 30h125m-220 100 20 20 40-50m35 30h125"/>',
  '<path d="M440 805c-100-170 10-280 285-300 0 240-100 340-285 300Zm0 0 205-225M520 710l-15-90m55 40 90 10"/>',
  '<path d="M340 805h130V690h130V575h150M370 525h100m-35-35 35 35-35 35"/><circle cx="720" cy="790" r="55"/><path d="m695 790 20 20 35-45"/>',
  '<path d="M365 530q0-35 35-35h340q35 0 35 35v210q0 35-35 35H540l-110 75v-75h-30q-35 0-35-35Z"/><path d="M535 585c0-70 115-70 115 0 0 45-57 40-57 90m0 35v5"/>',
];
let total = 0;
for (const disease of diseases) {
  const folder = join(root, 'public/images/disease-guides', ...disease.path.split('/').slice(2));
  mkdirSync(folder, { recursive: true });
  await Promise.all(disease.sections.map(async (section, i) => {
    const color = colors[i];
    const titleLines = lines(disease.title, 14);
    const subtitle = lines(section.title, 26).slice(0,3);
    // Original vector artwork and lettering are rasterized together; no CSS text overlay.
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200"><rect width="1200" height="1200" fill="#f5f1e7"/><circle cx="1120" cy="80" r="300" fill="${color}" opacity=".08"/><rect x="60" y="60" width="1080" height="1080" rx="32" fill="none" stroke="${color}" stroke-opacity=".3"/><g font-family="Malgun Gothic, sans-serif" fill="${color}"><text x="100" y="140" font-size="29" letter-spacing="3">초근목피한의원 · 진료 가이드</text>${titleLines.map((line,n)=>`<text x="100" y="${235+n*76}" font-size="66" font-weight="700">${escape(line)}</text>`).join('')}<text x="100" y="${titleLines.length>1?410:340}" font-size="82" font-weight="700">${escape(section.label)}</text><text x="1070" y="340" text-anchor="end" font-size="108" opacity=".22">0${i+1}</text><g fill="none" stroke="${color}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round">${icons[i]}</g>${subtitle.map((line,n)=>`<text x="100" y="${940+n*49}" font-size="37">${escape(line)}</text>`).join('')}<path d="M100 1090h1000" stroke="${color}" stroke-opacity=".3"/><text x="100" y="1135" font-size="26">대전 유성구 반석동</text><text x="1100" y="1135" text-anchor="end" font-size="26">cgmphani.com</text></g></svg>`;
    const category = { digestive: '소화기', psy: '마음건강', pediatric: '소아·성장', 'head-face': '두면부', women: '여성건강', tonic: '보약·웰니스', skin: '피부' }[disease.path.split('/')[2]];
    const labeledSvg = svg.replace('대전 유성구 반석동</text>', `대전 유성구 반석동 · ${category}</text>`);
    await sharp(Buffer.from(labeledSvg)).webp({ quality: 90 }).toFile(join(folder, `${section.id}.webp`));
    total++;
  }));
}
console.log(`${total} original 1200×1200 text cards generated.`);
