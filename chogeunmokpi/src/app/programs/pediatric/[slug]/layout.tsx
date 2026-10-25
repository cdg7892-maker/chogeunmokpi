import ProgramGuideLayout from '@/components/programs/ProgramGuideLayout';
export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProgramGuideLayout path={`/programs/pediatric/${slug}`}>{children}</ProgramGuideLayout>;
}
