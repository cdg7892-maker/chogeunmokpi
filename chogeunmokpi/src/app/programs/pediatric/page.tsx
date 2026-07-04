import ClinicProgramPage from "@/components/programs/ClinicProgramPage";
import { getClinicPage } from "@/lib/clinic-pages";

export const metadata = {
  title: "소아 성장 클리닉 | 초근목피 한의원",
  description: "성장 부진, 성조숙증, 잦은 감기와 비염, 틱·ADHD까지 아이의 성장 방해 요인을 함께 살피는 소아 성장 클리닉입니다.",
};

export default function PediatricProgramPage() {
  return <ClinicProgramPage data={getClinicPage("pediatric")} />;
}
