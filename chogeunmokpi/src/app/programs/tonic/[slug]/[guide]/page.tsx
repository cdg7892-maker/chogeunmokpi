import DiseaseGuideArticle, { guideParams, guideMetadata, type GuideProps } from '@/components/programs/DiseaseGuideArticle';
export const dynamicParams = false;
export function generateStaticParams() { return guideParams('tonic'); }
export function generateMetadata(props: GuideProps) { return guideMetadata('tonic', props); }
export default function Page(props: GuideProps) { return <DiseaseGuideArticle group="tonic" {...props} />; }
