import DiseaseGuideArticle, { guideParams, guideMetadata, type GuideProps } from '@/components/programs/DiseaseGuideArticle';
export const dynamicParams = false;
export function generateStaticParams() { return guideParams('pediatric'); }
export function generateMetadata(props: GuideProps) { return guideMetadata('pediatric', props); }
export default function Page(props: GuideProps) { return <DiseaseGuideArticle group="pediatric" {...props} />; }
