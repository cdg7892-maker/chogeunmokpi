const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const cache = {};
function load(file) {
  file = path.resolve(file);
  if (cache[file]) return cache[file].exports;
  const mod = cache[file] = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  new Function('require', 'module', 'exports', code)(name => load(path.resolve(path.dirname(file), name + '.ts')), mod, mod.exports);
  return mod.exports;
}
const groups = load(path.join(root, 'src/lib/program-guides.ts')).programGuideGroups;
const clean = s => s.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const catalog = [];
for (const group of Object.values(groups)) for (const item of group.items) {
  if (/\/(skin-clinic|womens-clinic|gounmom-card)$/.test(item.path)) continue;
  const html = fs.readFileSync(path.join(root, '.next/server/app', item.path + '.html'), 'utf8');
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  if (!main) throw Error('Missing main: ' + item.path);
  const headings = [...main.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)];
  const sections = headings.map((match, i) => {
    const title = clean(match[1]);
    const body = main.slice(match.index + match[0].length, headings[i + 1]?.index ?? main.length);
    const blocks = [...body.matchAll(/<(h3|h4|summary|p|li)\b[^>]*>([\s\S]*?)<\/\1>/g)].map(m => ({ kind: m[1].startsWith('h') || m[1] === 'summary' ? 'heading' : 'text', text: clean(m[2]) })).filter(b => b.text.length > 3 && !/^[A-Za-z\s·&]+$/.test(b.text));
    return { title, blocks };
  }).filter(s => !/후기|의료진|대표원장|예약|함께 살펴|관련 질환|다른 질환|내원|미니 진단|자가진단/.test(s.title) && s.blocks.reduce((n,b)=>n+b.text.length,0) >= 120);
  const roles = [
    ['symptoms', '증상 확인', /이런|주요 증상|자주 보이는 증상|보내는.*신호|함께 확인하는 (신호|변화)|부위별/],
    ['causes', '원인과 경과', /원인|왜|반복/],
    ['assessment', '진찰 안내', /진단|진찰|문진|맥진|복진|확인합니다|조건을 봅니다|질환인가요|무엇인가요/],
    ['treatment', '치료 방향', /핵심 치료 원리|치료 방향|치료 원리/],
    ['care', '진료 과정', /치료 프로그램|단계별|치료 흐름|진료 절차|치료 과정/],
    ['questions', '자주 묻는 질문', /자주 묻|궁금|질문/],
  ];
  const used = new Set();
  const selected = roles.map(([id,label,pattern]) => {
    let section = id === 'causes' ? sections.find(s => !used.has(s) && /원인/.test(s.title)) : undefined;
    section ||= sections.find(s => !used.has(s) && pattern.test(s.title));
    if (!section) section = sections.find(s => !used.has(s));
    if (!section) throw Error('Not enough content: ' + item.path);
    used.add(section);
    // Keep the actual source heading when a page has no section for this topic.
    const fallbackLabels = { symptoms: '질환 이해', causes: '경과 이해', assessment: '진료 이해', treatment: '치료 이해', care: '과정 이해', questions: '추가 안내' };
    return { id, label: pattern.test(section.title) ? label : fallbackLabels[id], ...section };
  });
  catalog.push({ title: item.title, path: item.path, description: item.description, sections: selected });
}
fs.writeFileSync(path.join(root, 'src/lib/disease-guides-content.json'), JSON.stringify(catalog, null, 2) + '\n');
console.log(catalog.map(c => `${c.path}: ${c.sections.map(s=>s.title).join(' | ')}`).join('\n'));
console.log('Pages:', catalog.length, 'Min sections:', Math.min(...catalog.map(c=>c.sections.length)));
