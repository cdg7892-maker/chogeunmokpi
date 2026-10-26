import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const content = JSON.parse(readFileSync(join(root,'src/lib/disease-guides-content.json'),'utf8'));
const anatomy = {
 digestive: 'Normal stomach, esophagus and intestines in correct anatomical relationship; highlight the relevant organ, no invented visible lesion for a functional disorder.',
 psy: 'Anatomically accurate brain and autonomic nervous system, educational overview only; no purported diagnostic scan, no visible lesion or simplistic single chemical cause.',
 pediatric: 'Age-appropriate educational anatomical diagram of the relevant body system. No exposed child body, no genital anatomy. Use isolated organs or a neutral opaque silhouette.',
 'head-face': 'Accurate anatomical illustration of the relevant head or neck structure, no invented pathology.',
 women: 'Tasteful isolated internal female reproductive organ medical diagram, uterus with two fallopian tubes and ovaries in correct positions. No external genitalia, no pregnancy loss depiction, no fetus unless explicitly appropriate.',
 tonic: 'Accurate relevant human body system medical illustration on ivory, no invented pathology or cure implication.',
 skin: 'Accurate isolated cross-section of epidermis and dermis with subtle condition-appropriate features, non-graphic educational medical illustration.',
};
const anatomyBySlug = {
 'reflux-esophagitis':'Esophagus joining stomach, lower esophageal sphincter and a subtle arrow illustrating reflux into esophagus, correct organ continuity.',
 'irritable-bowel-syndrome':'Large bowel framing small bowel with a subtle brain-gut communication motif; no ulceration, obstruction or structural damage implied.',
 'damjeok':'Normal stomach and its muscular wall, educational illustration of digestive function; do not depict a literal deposit, toxin mass or invented anatomical lesion.',
 'halitosis':'Side cutaway of oral cavity, tongue and salivary glands, correct anatomy, no implication all bad breath comes from the stomach.',
 'rhinitis':'Nasal cavity, turbinates and airway in a clean anatomical section.',
 'growth':'Long bone and growth plate in a clean anatomical illustration, no numerical growth promises.',
 'puberty':'Neutral fully opaque silhouette and a schematic of brain-endocrine signaling and bone maturation, no nudity or genitals.',
 'neck-shoulder':'Cervical vertebrae and trapezius muscles, correctly connected anatomical illustration.',
 'tinnitus':'Outer, middle and inner ear including cochlea and auditory nerve; no invented visible lesion.',
 'dizziness':'Inner ear vestibular apparatus, semicircular canals and balance-related nervous pathway.',
 'eye-fatigue':'Eye globe, extraocular muscles and optic nerve, anatomically correct educational illustration.',
 'migraine':'Brain, trigeminal nerve and head outline in an anatomical illustration; no tumor, stroke or simplistic vascular-only explanation.',
 'facial-flushing':'Facial skin cross-section with superficial blood vessels, gentle non-graphic illustration.',
 'cold-uterus':'Normal uterus and pelvic blood supply; do not depict frost, literal cold damage or an invented anatomical lesion.',
 'endometriosis':'Uterus and small ectopic endometrial-like tissue sites outside the uterus, restrained non-graphic anatomical diagram.',
 'adenomyosis':'Uterine wall cross-section showing endometrial tissue within myometrium, non-graphic medical teaching illustration.',
 'uterine-fibroids':'Uterus cutaway with well-defined benign fibroid nodules in muscular wall, non-graphic.',
 'ovarian-cyst':'Ovary with a simple cyst illustrated in anatomical cross-section, non-graphic.',
 'pcos':'Ovary with multiple small peripheral follicles; educational anatomy, no claim that appearance alone establishes diagnosis.',
 'hyperhidrosis':'Skin cross-section with eccrine sweat gland coil and duct connected to skin surface.',
 'shingles':'Sensory nerve and limited dermatome skin area, modest non-graphic educational illustration.',
 'sjogren':'Lacrimal and salivary glands in a neutral head anatomical illustration.',
 'gout':'Big toe joint cross-section with subtle needle-shaped urate crystals, accurate non-graphic medical illustration.',
 'fibromyalgia':'Neutral musculoskeletal silhouette and central nervous system, no muscle destruction or localized lesion.',
 'vitiligo':'Skin layers showing reduced pigment in a small area and melanocytes, non-graphic educational illustration.',
 'warts':'Small benign raised skin lesion in an epidermal cross-section, non-graphic educational illustration.',
};
const scenes = ['Seated at home in soft morning window light, a natural medium portrait.', 'At a desk or dining table during daily life, a candid three-quarter view.', 'In a quiet living room, a different person and camera angle, closer portrait.', 'During an ordinary daytime pause, natural side view, visible symptom-appropriate gesture.', 'In a calm home environment, another person, natural documentary portrait.'];
const jobs = content.flatMap(disease => disease.sections.map((section,index)=>{
 const [, , group, slug] = disease.path.split('/');
 const pediatric = group==='pediatric' || (group==='tonic' && slug==='growth');
 const person = pediatric ? 'A fully clothed Korean child or adolescent appropriate to the condition, accompanied by a fully clothed parent, dignified and non-distressing. No nudity.' : group==='women' ? 'A fully clothed Korean adult woman of an age appropriate to the condition.' : `A fully clothed Korean adult ${index%2 ? 'woman' : 'man'}, varied age and appearance appropriate to the condition.`;
 const symptom = disease.sections[0].blocks.filter(b=>b.kind==='text').map(b=>b.text).slice(0,5).join(' ').slice(0,600);
 const base = `Create ONE finished square image for a Korean clinic website carousel. Warm ivory and muted forest green editorial design. Embed exact Korean text in the bitmap: small brand '초근목피한의원'; large disease heading '${disease.title}'; large topic '${section.label}'. Keep these words legible at thumbnail size. Image subject fills about 65-75% of canvas. No other medical claims, no before/after, no guarantees, no watermarks, no collage, no invented logo. `;
 const prompt = index===0 ? base+`Use case scientific-educational. Detailed polished medical anatomical illustration relevant to ${disease.title}. ${anatomyBySlug[slug] || anatomy[group]} Accurate organ shapes and spatial relationships. Muted realistic colors, clean non-graphic cutaway, no gore. Exact small footer '해부학적 이해를 돕는 설명 이미지'.` : base+`Use case photorealistic-natural. Editorial staged photograph, not an actual patient or testimonial. ${person} Condition context: ${disease.title}. Symptom context to guide a subtle natural expression/gesture, not for additional text: ${symptom}. ${scenes[index-1]} Show the person experiencing relevant discomfort or fatigue naturally, not celebrating recovery or receiving treatment. For mental health portray respectfully without dangerous behavior, stereotypes or extreme distress. For reproductive concerns use clothed abdominal discomfort, fatigue or thoughtful concern, never graphic bleeding or exposed private areas. Natural hands, realistic skin and anatomy, premium candid photography. Exact small footer 'AI 연출 이미지 · 실제 환자가 아닙니다'.`;
 return {id:`${group}/${slug}/${section.id}`,index,disease:disease.title,label:section.label,prompt};
}));
mkdirSync(join(root,'docs/photo-carousel'),{recursive:true});
writeFileSync(join(root,'docs/photo-carousel/prompts.json'),JSON.stringify(jobs,null,2)+'\n');
console.log(JSON.stringify(jobs));
