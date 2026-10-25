import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { diseaseGuides, getDiseaseGuide } from '@/lib/disease-guides';
import { absoluteSiteUrl, programImageMetadata } from '@/lib/seo';

export type GuideProps = { params: Promise<{ slug: string; guide: string }> };
export function guideParams(group: string) {
  return diseaseGuides.filter(d => d.path.startsWith(`/programs/${group}/`)).flatMap(d => d.items.map(item => ({ slug: d.path.split('/').at(-1)!, guide: item.id })));
}
function find(group: string, slug: string, guide: string) {
  const disease = getDiseaseGuide(`/programs/${group}/${slug}`);
  const item = disease?.items.find(item => item.id === guide);
  if (!disease || !item) notFound();
  return { disease, item };
}
export async function guideMetadata(group: string, { params }: GuideProps): Promise<Metadata> {
  const { slug, guide } = await params;
  const { item } = find(group, slug, guide);
  const title = `대전 ${item.title} | 초근목피한의원`;
  return {
    title, description: item.description, alternates: { canonical: item.path },
    ...programImageMetadata({ title, description: item.description, url: item.path, image: item.image, alt: item.title }),
  };
}
export default async function DiseaseGuideArticle({ group, params }: GuideProps & { group: string }) {
  const { slug, guide } = await params;
  const { disease, item } = find(group, slug, guide);
  const schema = {
    '@context': 'https://schema.org', '@type': 'MedicalWebPage',
    url: absoluteSiteUrl(item.path), name: item.title, description: item.heading,
    image: absoluteSiteUrl(item.image), inLanguage: 'ko-KR',
    isPartOf: { '@type': 'MedicalWebPage', url: absoluteSiteUrl(disease.path), name: disease.title },
  };
  return <main className="mx-auto max-w-4xl px-5 py-12 text-[#25372e] sm:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <nav className="mb-7 text-sm"><Link href={disease.path}>{disease.title} 전체 안내</Link><span aria-hidden="true"> › </span>{item.label}</nav>
    <p className="mb-3 text-sm text-[#657065]">초근목피한의원 · 대전 유성구 반석동</p>
    <h1 className="text-3xl font-bold leading-snug sm:text-4xl">{item.title}</h1>
    <p className="mt-5 text-lg leading-relaxed">{item.heading}</p>
    <Image className="my-10 w-full max-w-xl rounded-2xl" src={item.image} alt={item.title} width={1200} height={1200} sizes="(max-width: 640px) 90vw, 576px" />
    <article className="space-y-5 leading-loose">
      <h2 className="text-2xl font-bold">{item.heading}</h2>
      {item.blocks.map((block, index) => block.kind === 'heading'
        ? <h3 key={index} className="pt-5 text-xl font-semibold">{block.text}</h3>
        : <p key={index}>{block.text}</p>)}
    </article>
    <p className="mt-10 border-t border-[#d5ddcf] pt-6 text-sm text-[#657065]">이 안내는 기존 {disease.title} 진료 안내 중 해당 주제를 정리한 내용입니다. 개인별 진단과 치료 계획은 진찰 후 정합니다.</p>
    <div className="mt-8 flex flex-wrap gap-5"><Link className="rounded-full bg-[#25372e] px-6 py-3 text-white" href="/reserve">진료 예약하기</Link><Link className="px-3 py-3 underline" href={disease.path}>질환 전체 안내 보기</Link></div>
  </main>;
}
