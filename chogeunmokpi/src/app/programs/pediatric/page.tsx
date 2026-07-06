import ClinicProgramPage from "@/components/programs/ClinicProgramPage";
import { getClinicPage } from "@/lib/clinic-pages";

export const metadata = {
  title: "대전 소아 성장 클리닉 | 성장부진·성조숙증·수험생 한방관리 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 소아 성장 클리닉입니다. 성장 부진, 성조숙증, 잦은 감기와 비염, 틱·ADHD, 수험생 피로까지 성장 방해 요인을 함께 살핍니다.",
  alternates: {
    canonical: "/programs/pediatric",
  },
};

export default function PediatricProgramPage() {
  return <ClinicProgramPage data={getClinicPage("pediatric")} />;
}
