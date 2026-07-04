import ClinicProgramPage from "@/components/programs/ClinicProgramPage";
import { getClinicPage } from "@/lib/clinic-pages";

export const metadata = {
  title: "두면부 클리닉 | 초근목피 한의원",
  description: "두통, 어지럼증, 브레인포그, 목·어깨 긴장을 몸 전체의 순환 관점에서 살피는 두면부 클리닉입니다.",
};

export default function HeadFaceProgramPage() {
  return <ClinicProgramPage data={getClinicPage("head-face")} />;
}
