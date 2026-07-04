import { notFound } from "next/navigation";
import ClinicConditionPage from "@/components/programs/ClinicConditionPage";
import { getClinicCondition, getClinicPage } from "@/lib/clinic-pages";

const program = getClinicPage("pediatric");

export function generateStaticParams() {
  return program.conditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getClinicCondition("pediatric", slug);

  if (!condition) return { title: "소아·수험생 치료 안내" };

  return {
    title: `${condition.title} | 소아·수험생 치료 안내`,
    description: condition.summary,
  };
}

export default async function PediatricConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getClinicCondition("pediatric", slug);

  if (!condition) notFound();

  return <ClinicConditionPage program={program} condition={condition} />;
}
