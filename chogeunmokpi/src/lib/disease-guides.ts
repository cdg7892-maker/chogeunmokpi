import content from './disease-guides-content.json';
import photoReady from './photo-carousel-ready.json';

export const diseaseGuides = content.map(disease => ({
  ...disease,
  generatedPhotos: photoReady.includes(disease.path),
  items: disease.sections.map(section => ({
    ...section,
    title: `${disease.title} · ${section.label}`,
    heading: section.title,
    description: section.title,
    path: `${disease.path}/${section.id}`,
    image: `/images/${photoReady.includes(disease.path) ? 'disease-guides-v2' : 'disease-guides'}/${disease.path.split('/').slice(2).join('/')}/${section.id}.webp`,
  })),
}));
export function getDiseaseGuide(path: string) {
  return diseaseGuides.find(disease => disease.path === path);
}
