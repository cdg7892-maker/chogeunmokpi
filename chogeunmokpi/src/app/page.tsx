import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import ProblemSteps from "@/components/home/ProblemSteps";
import Journey from "@/components/home/Journey";
import DoctorStory from "@/components/home/DoctorStory";
import NoticeHours from "@/components/home/NoticeHours";
import RecentColumns from "@/components/home/RecentColumns";
import ExploreTags from "@/components/home/ExploreTags";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ProblemSteps />
      <Journey />
      <DoctorStory />
      <NoticeHours />
      <RecentColumns />
      <ExploreTags />
    </>
  );
}
