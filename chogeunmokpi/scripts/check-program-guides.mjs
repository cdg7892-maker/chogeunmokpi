import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

// Run after next build: checks the HTML that crawlers actually receive.
const root = resolve(import.meta.dirname, '..');
const app = join(root, '.next/server/app');
const htmlFor = path => readFileSync(join(app, `${path}.html`), 'utf8');
const files = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
  entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
let pages = 0;
const destinations = new Set();
for (const file of files(join(app, 'programs')).filter(file => file.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  if (!html.includes('data-program-guides')) continue;
  const lists = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map(match => JSON.parse(match[1])).filter(data => data['@type'] === 'ItemList');
  assert.equal(lists.length, 1, `${file}: one ItemList`);
  const items = lists[0].itemListElement;
  assert.equal((html.match(/data-guide-link="true"/g) || []).length, items.length, `${file}: visible cards`);
  assert.equal(new Set(items.map(item => item.url)).size, items.length, `${file}: unique URLs`);
  const hashes = new Set();
  for (const [index, item] of items.entries()) {
    assert.equal(item.position, index + 1);
    const url = new URL(item.url);
    const image = new URL(item.image);
    assert.equal(url.origin, 'https://www.cgmphani.com');
    assert.equal(image.origin, url.origin);
    const target = htmlFor(url.pathname);
    assert(target.includes(`<link rel="canonical" href="${item.url}"`), `${item.url}: canonical`);
    assert(target.includes(`<meta property="og:image" content="${item.image}"`), `${item.url}: original OG image`);
    assert(target.includes('aria-current="page"'), `${item.url}: current card`);
    assert(target.includes('<h1'), `${item.url}: article body`);
    hashes.add(createHash('sha256').update(readFileSync(join(root, 'public', image.pathname))).digest('hex'));
    destinations.add(item.url);
  }
  assert.equal(hashes.size, items.length, `${file}: distinct image files`);
  pages++;
}
assert(pages > 7, 'Expected category and detail pages');
console.log(`PASS: ${pages} pages; ${destinations.size} unique article URLs; one ItemList per page; valid canonical/OG images; distinct originals.`);
