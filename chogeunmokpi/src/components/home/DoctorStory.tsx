import Image from "next/image";
import Link from "next/link";

export default function DoctorStory() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-3 text-sm text-ink-soft">치유와 회복의 공간</p>
          <h2 className="font-display text-3xl leading-snug text-ink md:text-4xl">
            낫지 않는 질환,
            <br />그 간절함에 답하겠습니다.
          </h2>

          <div className="mt-7 space-y-4 text-[15px] leading-loose text-ink-soft">
            <p>
              진료실에서 가장 많이 듣는 말은 &ldquo;검사는 정상이라는데 왜
              이렇게 아플까요?&rdquo;였습니다. 수치로는 설명되지 않는 고통
              속에 있는 환자분들을 보며 한의사로서 깊이 고민했습니다.
            </p>
            <p>
              기계가 읽어내는 데이터도 중요하지만, 그 너머에 있는 몸의 흐름과
              균형을 읽어내는 것이 진정한 치유의 시작임을 깨달았습니다.
            </p>
            <p>
              저의 아버지 역시 평생 한의업에 몸담으셨던 분이었습니다. 3대에
              걸쳐 이어온 이 마음으로, 지친 몸과 마음이 온전히 기댈 수 있는
              치유의 공간을 만들고자 합니다.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
            <div>
              <p className="text-xs text-ink-soft">대표원장</p>
              <p className="text-lg font-medium text-ink">이호근</p>
            </div>
            <span className="text-line">|</span>
            <Link
              href="/about/doctors"
              className="text-sm text-root transition hover:text-root-dark"
            >
              의료진 소개 보기 →
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-line">
          <Image
            src="/images/doctors/lee-ho-geun-main.png"
            alt="초근목피한의원 대표원장 이호근"
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            quality={95}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
