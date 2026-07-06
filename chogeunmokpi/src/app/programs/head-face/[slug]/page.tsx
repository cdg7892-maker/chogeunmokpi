import { notFound } from "next/navigation";
import ClinicConditionPage from "@/components/programs/ClinicConditionPage";
import { getClinicCondition, getClinicPage } from "@/lib/clinic-pages";

const program = getClinicPage("head-face");

export function generateStaticParams() {
  return program.conditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getClinicCondition("head-face", slug);

  if (!condition) return { title: "두면부 치료 안내 | 초근목피한의원" };

  return {
    title: `대전 ${condition.title} 한방치료 | 두면부 치료 안내 | 초근목피한의원`,
    description: `대전 유성구 반석동 초근목피한의원의 ${condition.title} 한방치료 안내입니다. ${condition.summary}`,
    alternates: {
      canonical: `/programs/head-face/${slug}`,
    },
  };
}

export default async function HeadFaceConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getClinicCondition("head-face", slug);

  if (!condition) notFound();

  return <ClinicConditionPage program={program} condition={condition} />;
}
