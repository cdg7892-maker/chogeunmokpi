import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
const root=resolve(import.meta.dirname,'..');
const ids=process.argv.slice(2);
const jobs=JSON.parse(readFileSync(join(root,'docs/photo-carousel/prompts.json'),'utf8'));
const file=join(root,'src/lib/photo-carousel-ready.json');
const ready=new Set(JSON.parse(readFileSync(file,'utf8')));
for(const id of ids){
 const subset=jobs.filter(job=>job.id.startsWith(id+'/'));
 if(subset.length!==6||subset.some(job=>!existsSync(join(root,'public/images/disease-guides-v2',job.id+'.webp'))))throw Error('Incomplete image set: '+id);
 ready.add('/programs/'+id);
}
writeFileSync(file,JSON.stringify([...ready],null,2)+'\n');
console.log(`${ready.size} reviewed disease sets`);
