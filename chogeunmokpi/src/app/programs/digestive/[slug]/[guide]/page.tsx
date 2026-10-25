import DiseaseGuideArticle, { guideParams, guideMetadata, type GuideProps } from '@/components/programs/DiseaseGuideArticle';
export const dynamicParams = false;
export function generateStaticParams() { return guideParams('digestive'); }
export function generateMetadata(props: GuideProps) { return guideMetadata('digestive', props); }
export default function Page(props: GuideProps) { return <DiseaseGuideArticle group="digestive" {...props} />; }
