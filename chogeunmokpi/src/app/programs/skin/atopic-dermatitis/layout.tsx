import ProgramGuideLayout from '@/components/programs/ProgramGuideLayout';
export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProgramGuideLayout path="/programs/skin/atopic-dermatitis">{children}</ProgramGuideLayout>;
}
