import ClinicProgramPage from "@/components/programs/ClinicProgramPage";
import { getClinicPage } from "@/lib/clinic-pages";

export const metadata = {
  title: "대전 두면부 클리닉 | 두통·어지럼증·브레인포그 한방치료 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 두면부 클리닉입니다. 두통, 어지럼증, 브레인포그, 안면마비, 목·어깨 긴장을 몸 전체의 순환 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/head-face",
  },
};

export default function HeadFaceProgramPage() {
  return <ClinicProgramPage data={getClinicPage("head-face")} />;
}
