import { notFound } from "next/navigation";
import ClinicConditionPage from "@/components/programs/ClinicConditionPage";
import { getClinicCondition, getClinicPage } from "@/lib/clinic-pages";

const program = getClinicPage("women");

export function generateStaticParams() {
  return program.conditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getClinicCondition("women", slug);

  if (!condition) return { title: "여성질환 치료 안내" };

  return {
    title: `${condition.title} | 여성질환 치료 안내`,
    description: condition.summary,
  };
}

export default async function WomenConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getClinicCondition("women", slug);

  if (!condition) notFound();

  return <ClinicConditionPage program={program} condition={condition} />;
}
