"use client";

import { useState } from "react";
import Link from "next/link";

type Option = {
  label: string;
  score: number;
  pattern: "sleep" | "anxiety" | "depression" | "anger";
};

const questions: Array<{ q: string; options: Option[] }> = [
  {
    q: "지금 가장 크게 불편한 마음의 신호는 무엇인가요?",
    options: [
      { label: "잠들기 어렵거나 자주 깨서 피로가 쌓입니다.", score: 2, pattern: "sleep" },
      { label: "가슴이 답답하고 이유 없이 불안해집니다.", score: 2, pattern: "anxiety" },
      { label: "의욕이 떨어지고 하루가 무겁게 느껴집니다.", score: 2, pattern: "depression" },
      { label: "화가 치밀고 억울한 감정이 오래 남습니다.", score: 2, pattern: "anger" },
    ],
  },
  {
    q: "이 상태가 얼마나 이어지고 있나요?",
    options: [
      { label: "최근 2주 이내에 시작되었습니다.", score: 0, pattern: "sleep" },
      { label: "한 달 가까이 반복되고 있습니다.", score: 1, pattern: "anxiety" },
      { label: "세 달 이상 좋아졌다 나빠지기를 반복합니다.", score: 2, pattern: "depression" },
      { label: "오래 지속되어 일상과 관계에 영향을 줍니다.", score: 3, pattern: "anger" },
    ],
  },
  {
    q: "몸에서는 어떤 반응이 함께 나타나나요?",
    options: [
      { label: "두근거림, 숨막힘, 식은땀이 동반됩니다.", score: 2, pattern: "anxiety" },
      { label: "명치가 막히고 소화가 잘 안 됩니다.", score: 1, pattern: "anger" },
      { label: "몸이 무겁고 아침에 일어나기 어렵습니다.", score: 2, pattern: "depression" },
      { label: "피곤해도 긴장이 풀리지 않습니다.", score: 1, pattern: "sleep" },
    ],
  },
  {
    q: "가장 회복하고 싶은 일상은 무엇인가요?",
    options: [
      { label: "깊게 자고 개운하게 일어나고 싶습니다.", score: 1, pattern: "sleep" },
      { label: "갑자기 몰려오는 불안을 줄이고 싶습니다.", score: 1, pattern: "anxiety" },
      { label: "다시 움직일 기운과 의욕을 찾고 싶습니다.", score: 1, pattern: "depression" },
      { label: "가슴의 답답함과 치밀어 오름을 가라앉히고 싶습니다.", score: 1, pattern: "anger" },
    ],
  },
];

const resultCopy = {
  sleep: {
    title: "수면 회복 우선형",
    desc: "긴장이 풀리지 않아 밤에도 몸이 쉬지 못하는 흐름입니다.",
    care: "심비를 보하고 긴장을 낮추는 처방과 수면 리듬 교정이 우선입니다.",
  },
  anxiety: {
    title: "불안·공황 안정형",
    desc: "자율신경이 예민해져 작은 자극에도 몸이 먼저 반응하는 상태입니다.",
    care: "막힌 기운을 풀고 심신의 과항진을 낮추는 치료가 필요합니다.",
  },
  depression: {
    title: "기력·의욕 저하형",
    desc: "기혈이 떨어지고 회복력이 낮아져 마음의 무게가 커진 흐름입니다.",
    care: "부족한 에너지를 보충하고 몸의 회복 리듬을 다시 세웁니다.",
  },
  anger: {
    title: "화병·울체 해소형",
    desc: "감정이 오래 눌리며 가슴과 명치 주변에 답답함이 쌓인 상태입니다.",
    care: "울체된 기운을 순환시키고 위로 뜬 열을 안정시키는 방향이 중요합니다.",
  },
};

export default function MindQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const done = answers.length === questions.length;
  const progress = ((done ? questions.length : step) / questions.length) * 100;

  const select = (option: Option) => {
    setAnswers((prev) => [...prev, option]);
    if (step < questions.length - 1) setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  const pattern =
    answers
      .reduce<Record<Option["pattern"], number>>(
        (acc, answer) => ({ ...acc, [answer.pattern]: acc[answer.pattern] + answer.score + 1 }),
        { sleep: 0, anxiety: 0, depression: 0, anger: 0 },
      );

  const topPattern = (Object.keys(pattern) as Array<Option["pattern"]>).sort(
    (a, b) => pattern[b] - pattern[a],
  )[0];
  const result = resultCopy[topPattern];

  return (
    <div className="ch-card-lg ch-card-hover mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
          마음건강 미니 진단
        </h3>
        {!done && <span className="text-xs text-ink-soft">{step + 1} / {questions.length}</span>}
      </div>

      <div className="mb-7 h-1.5 w-full overflow-hidden rounded-full bg-paper">
        <div className="h-full rounded-full bg-ink transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {!done ? (
        <>
          <p className="mb-5 text-[15px] font-medium leading-relaxed text-ink">
            {questions[step].q}
          </p>
          <div className="space-y-2.5">
            {questions[step].options.map((option) => (
              <button
                key={option.label}
                onClick={() => select(option)}
                className="block w-full rounded-2xl border border-line px-4 py-4 text-left text-sm leading-relaxed text-ink-soft transition-all duration-300 ease-out hover:-translate-y-px hover:border-root hover:bg-paper hover:text-ink hover:shadow-md hover:shadow-ink/5"
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="mb-1 text-xs text-ink-soft">진단 결과</p>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-ink">{result.title}</h4>
          <p className="mx-auto mb-5 max-w-xl text-sm leading-relaxed text-ink-soft">
            {result.desc}
          </p>
          <div className="mb-6 rounded-2xl bg-paper p-5 text-left">
            <p className="text-sm font-medium leading-relaxed text-ink">{result.care}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              이 결과는 간단한 참고용입니다. 불면, 공황, 우울감이 오래 지속되거나 일상 기능이 떨어진다면 의료진과 직접 상담해주세요.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Link href="/reserve" className="ch-btn-primary w-full py-3.5">
              맞춤 상담 예약하기
            </Link>
            <button
              onClick={reset}
              className="text-sm text-ink-soft underline-offset-4 hover:text-root hover:underline"
            >
              다시 하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
