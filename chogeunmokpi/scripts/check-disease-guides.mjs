import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import sharp from 'sharp';
const root = resolve(import.meta.dirname, '..');
const content = JSON.parse(readFileSync(join(root, 'src/lib/disease-guides-content.json'), 'utf8'));
const photoReady = JSON.parse(readFileSync(join(root, 'src/lib/photo-carousel-ready.json'), 'utf8'));
const html = path => readFileSync(join(root, '.next/server/app', path + '.html'), 'utf8');
const lists = text => [...text.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1])).filter(s=>s['@type']==='ItemList');
for (const category of ['digestive','mind','pediatric','head-face','women','tonic','skin']) {
  const page = html(`/programs/${category}`);
  assert(!page.includes('data-program-guides'), category + ': clinic restored');
  assert.equal(lists(page).length, 0, category + ': no carousel schema');
}
const hashes = new Set();
let total = 0;
const sitemap = readFileSync(join(root,'.next/server/app/sitemap.xml.body'),'utf8');
for (const disease of content) {
  for (const path of [disease.path, ...disease.sections.map(s=>`${disease.path}/${s.id}`)]) {
    const page = html(path);
    const schemas = lists(page);
    assert.equal(schemas.length, 1, `${path}: one list`);
    assert.equal(schemas[0].itemListElement.length, 6);
    assert.equal((page.match(/data-guide-link="true"/g)||[]).length, 6);
    for (const item of schemas[0].itemListElement) {
      assert(item.url.startsWith(`https://www.cgmphani.com${disease.path}/`), `${path}: same disease only`);
    }
    total++;
  }
  for (const section of disease.sections) {
    const path = `${disease.path}/${section.id}`;
    const image = `/images/${photoReady.includes(disease.path) ? 'disease-guides-v2' : 'disease-guides'}/${disease.path.split('/').slice(2).join('/')}/${section.id}.webp`;
    const page = html(path);
    assert(page.includes(`<link rel="canonical" href="https://www.cgmphani.com${path}"`), path + ': canonical');
    assert(page.includes(`<meta property="og:image" content="https://www.cgmphani.com${image}"`), path + ': OG');
    assert(page.includes('aria-current="page"'), path + ': active card');
    assert(section.blocks.reduce((n,b)=>n+b.text.length,0)>=120, path + ': substantive source content');
    assert(sitemap.includes(`https://www.cgmphani.com${path}`), path + ': sitemap URL');
    assert(sitemap.includes(`https://www.cgmphani.com${image}`), path + ': sitemap image');
    const buffer = readFileSync(join(root,'public',image));
    hashes.add(createHash('sha256').update(buffer).digest('hex'));
    const metadata = await sharp(buffer).metadata();
    assert.equal(metadata.width,1200); assert.equal(metadata.height,1200);
  }
}
assert.equal(hashes.size, content.length*6, 'Unique image files');
console.log(`PASS: 7 clinics restored; ${content.length} disease pages; ${content.length*6} topic URLs/images; ${total} pages with same-disease ItemList, canonical, OG and sitemap checks.`);
