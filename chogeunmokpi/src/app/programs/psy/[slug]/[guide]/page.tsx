import DiseaseGuideArticle, { guideParams, guideMetadata, type GuideProps } from '@/components/programs/DiseaseGuideArticle';
export const dynamicParams = false;
export function generateStaticParams() { return guideParams('psy'); }
export function generateMetadata(props: GuideProps) { return guideMetadata('psy', props); }
export default function Page(props: GuideProps) { return <DiseaseGuideArticle group="psy" {...props} />; }
