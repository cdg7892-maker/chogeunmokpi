import DiseaseGuideArticle, { guideParams, guideMetadata, type GuideProps } from '@/components/programs/DiseaseGuideArticle';
export const dynamicParams = false;
export function generateStaticParams() { return guideParams('head-face'); }
export function generateMetadata(props: GuideProps) { return guideMetadata('head-face', props); }
export default function Page(props: GuideProps) { return <DiseaseGuideArticle group="head-face" {...props} />; }
