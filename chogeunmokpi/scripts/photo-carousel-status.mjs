import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const jobs = JSON.parse(readFileSync(join(root, 'docs/photo-carousel/prompts.json'), 'utf8'));
const ready = JSON.parse(readFileSync(join(root, 'src/lib/photo-carousel-ready.json'), 'utf8'));
const done = jobs.filter(j => existsSync(join(root, 'docs/photo-carousel/completed', j.id.replaceAll('/', '__') + '.json')));
const groups = [...new Set(jobs.map(j => j.id.split('/').slice(0, 2).join('/')))];
const awaitingReview = groups.filter(g => !ready.includes('/programs/' + g) && jobs.filter(j => j.id.startsWith(g + '/')).every(j => done.includes(j)));
console.log(JSON.stringify({ saved: done.length, total: jobs.length, reviewed: ready.length, awaitingReview }));
