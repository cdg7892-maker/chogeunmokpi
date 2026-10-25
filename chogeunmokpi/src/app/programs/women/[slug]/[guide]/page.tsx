import DiseaseGuideArticle, { guideParams, guideMetadata, type GuideProps } from '@/components/programs/DiseaseGuideArticle';
export const dynamicParams = false;
export function generateStaticParams() { return guideParams('women'); }
export function generateMetadata(props: GuideProps) { return guideMetadata('women', props); }
export default function Page(props: GuideProps) { return <DiseaseGuideArticle group="women" {...props} />; }
