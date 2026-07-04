import ClinicProgramPage from "@/components/programs/ClinicProgramPage";
import { getClinicPage } from "@/lib/clinic-pages";

export const metadata = {
  title: "소아·수험생 클리닉 | 초근목피 한의원",
  description: "성장, 허약 체질, 수험생 피로와 집중력 저하를 함께 살피는 소아·수험생 클리닉입니다.",
};

export default function PediatricProgramPage() {
  return <ClinicProgramPage data={getClinicPage("pediatric")} />;
}
