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

  if (!condition) return { title: "두면부 치료 안내" };

  return {
    title: `${condition.title} | 두면부 치료 안내`,
    description: condition.summary,
  };
}

export default async function HeadFaceConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getClinicCondition("head-face", slug);

  if (!condition) notFound();

  return <ClinicConditionPage program={program} condition={condition} />;
}
