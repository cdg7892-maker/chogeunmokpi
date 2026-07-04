export default function Philosophy() {
  return (
    <section className="ch-section bg-paper-soft">
      <div className="ch-section-pad mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="ch-section-title leading-snug">
            검사지 너머,
            <br />
            몸이 보내는 신호를 읽습니다.
          </h2>
          <div className="my-6 h-px w-12 bg-root" />
          <p className="max-w-md text-[15px] leading-loose text-ink-soft">
            검사 결과는 정상. 그런데 왜 아직 힘드실까요?
            <br />
            동양의학의 지혜는 기계가 놓치는 미세한 불균형을 읽어냅니다.
            <br />
            초근목피한의원의 치료 한약은 증상을 잠시 누르는 것이 아니라,
            <br />
            당신의 몸이 스스로 회복하는 힘을 되찾도록 돕습니다.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="flex h-72 w-56 items-center justify-center rounded-full bg-paper">
            <span className="font-display text-7xl leading-[1.15] text-ink/10 [writing-mode:vertical-rl]">
              醫根術
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
