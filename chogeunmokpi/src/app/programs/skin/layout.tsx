import ProgramGuideLayout from "@/components/programs/ProgramGuideLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProgramGuideLayout group="skin">{children}</ProgramGuideLayout>;
}
