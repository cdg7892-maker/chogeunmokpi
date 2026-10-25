import DiseaseGuideArticle, { guideParams, guideMetadata, type GuideProps } from '@/components/programs/DiseaseGuideArticle';
export const dynamicParams = false;
export function generateStaticParams() { return guideParams('skin'); }
export function generateMetadata(props: GuideProps) { return guideMetadata('skin', props); }
export default function Page(props: GuideProps) { return <DiseaseGuideArticle group="skin" {...props} />; }
