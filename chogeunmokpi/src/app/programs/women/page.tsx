import ClinicProgramPage from "@/components/programs/ClinicProgramPage";
import { getClinicPage } from "@/lib/clinic-pages";

export const metadata = {
  title: "여성질환 클리닉 | 초근목피 한의원",
  description: "생리통, 생리불순, 난임 준비, 산후 회복과 갱년기를 함께 살피는 여성질환 클리닉입니다.",
};

export default function WomenProgramPage() {
  return <ClinicProgramPage data={getClinicPage("women")} />;
}
