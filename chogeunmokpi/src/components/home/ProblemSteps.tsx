const steps = [
  {
    n: "1",
    title: (
      <>
        아무 이상이
        <br />
        없다는데, 왜 나는
        <br />
        아플까?
      </>
    ),
    body: "수많은 검사를 받아보셨겠죠. 수치는 정상이지만, 당신의 몸은 분명히 불편함을 호소하고 있습니다.",
  },
  {
    n: "2",
    title: (
      <>
        증상만 누르는
        <br />
        약으로는 해결되지
        <br />
        않습니다.
      </>
    ),
    body: "진통제, 소화제, 수면제... 잠시 편해질 뿐, 약을 끊으면 다시 제자리입니다.",
  },
  {
    n: "3",
    title: (
      <>
        맥을 짚고 균형을
        <br />
        맞추는 한약이
        <br />
        필요할 때.
      </>
    ),
    body: "동양 의학은 흐름을 봅니다. 깊어진 불균형을 바로잡아, 몸이 스스로 회복하는 힘을 깨웁니다.",
  },
];

export default function ProblemSteps() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm text-ink-soft">
            초근목피는 당신의 아픔을 다르게 봅니다.
          </p>
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            왜 낫지 않았을까요?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-5">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="h-full rounded-2xl border border-line bg-card p-7">
                <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-medium text-paper-soft">
                  {step.n}
                </span>
                <p className="mb-3 text-lg font-medium leading-snug text-ink">
                  {step.title}
                </p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-line md:block"
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
