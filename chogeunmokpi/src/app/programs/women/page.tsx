import ClinicProgramPage from "@/components/programs/ClinicProgramPage";
import { getClinicPage } from "@/lib/clinic-pages";

export const metadata = {
  title: "대전 여성질환 클리닉 | 생리통·생리불순·산후·갱년기 한방치료 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 여성질환 클리닉입니다. 생리통, 생리불순, 난임 준비, 산후 회복과 갱년기를 자궁 순환과 호르몬 균형 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/women",
  },
};

export default function WomenProgramPage() {
  return <ClinicProgramPage data={getClinicPage("women")} />;
}
