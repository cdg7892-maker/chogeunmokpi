"use client";

import { useState } from "react";
import Link from "next/link";

type Pattern = "fatigue" | "recovery" | "antiAging" | "detox";

type Option = {
  label: string;
  score: number;
  pattern: Pattern;
};

const questions: Array<{ q: string; options: Option[] }> = [
  {
    q: "현재 내 몸에 가장 필요한 것은 무엇인가요?",
    options: [
      { label: "쉬어도 풀리지 않는 만성 피로 회복이 필요합니다.", score: 2, pattern: "fatigue" },
      { label: "수술이나 큰 병 이후 기력이 많이 떨어졌습니다.", score: 2, pattern: "recovery" },
      { label: "노화 방지와 항산화 관리가 필요합니다.", score: 1, pattern: "antiAging" },
      { label: "몸이 무겁고 순환이 막힌 듯해 해독이 필요합니다.", score: 1, pattern: "detox" },
    ],
  },
  {
    q: "하루 중 가장 힘든 시간대는 언제인가요?",
    options: [
      { label: "아침부터 몸이 무겁고 일어나기 어렵습니다.", score: 2, pattern: "fatigue" },
      { label: "오후만 되면 방전된 것처럼 집중력이 떨어집니다.", score: 2, pattern: "antiAging" },
      { label: "조금만 무리해도 회복이 오래 걸립니다.", score: 2, pattern: "recovery" },
      { label: "식후 더부룩하고 몸이 붓는 느낌이 있습니다.", score: 1, pattern: "detox" },
    ],
  },
  {
    q: "최근 함께 느끼는 변화는 무엇인가요?",
    options: [
      { label: "감기에 자주 걸리고 잔병치레가 늘었습니다.", score: 2, pattern: "recovery" },
      { label: "머리가 멍하고 깜빡하는 일이 잦아졌습니다.", score: 2, pattern: "antiAging" },
      { label: "잠을 자도 개운하지 않고 몸이 축 처집니다.", score: 2, pattern: "fatigue" },
      { label: "술, 야식, 스트레스 후 회복이 느립니다.", score: 1, pattern: "detox" },
    ],
  },
  {
    q: "가장 원하는 회복 목표는 무엇인가요?",
    options: [
      { label: "원기와 체력을 빠르게 끌어올리고 싶습니다.", score: 1, pattern: "fatigue" },
      { label: "병후 회복과 면역력을 안정적으로 높이고 싶습니다.", score: 1, pattern: "recovery" },
      { label: "집중력, 피부 생기, 신체 나이를 관리하고 싶습니다.", score: 1, pattern: "antiAging" },
      { label: "몸의 무거움과 노폐물 정체감을 줄이고 싶습니다.", score: 1, pattern: "detox" },
    ],
  },
];

const resultCopy: Record<Pattern, { title: string; desc: string; care: string }> = {
  fatigue: {
    title: "원기 회복 보약형",
    desc: "기운이 부족해 몸이 무겁고 오후 방전감이 큰 흐름입니다.",
    care: "기혈을 보충하고 비위 기능을 도와 에너지를 만들어내는 힘을 회복하는 처방이 우선입니다.",
  },
  recovery: {
    title: "병후·면역 회복형",
    desc: "큰 병, 수술, 잦은 감염 이후 회복력이 떨어진 상태입니다.",
    care: "정기와 면역 기반을 보강하며 무리 없이 체력을 끌어올리는 맞춤 보약이 필요합니다.",
  },
  antiAging: {
    title: "항노화·집중 관리형",
    desc: "머리가 멍하고 생기가 떨어지며 회복 속도가 예전 같지 않은 흐름입니다.",
    care: "공진단, 경옥고처럼 정기와 진액을 보강하는 방향을 체질에 맞춰 검토합니다.",
  },
  detox: {
    title: "해독·순환 개선형",
    desc: "몸이 무겁고 붓거나 노폐물이 정체된 듯한 흐름입니다.",
    care: "소화와 순환, 해독 흐름을 함께 살펴 몸이 가볍게 회복되도록 조정합니다.",
  },
};

export default function TonicQuiz() {
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

  const scores = answers.reduce<Record<Pattern, number>>(
    (acc, answer) => ({ ...acc, [answer.pattern]: acc[answer.pattern] + answer.score + 1 }),
    { fatigue: 0, recovery: 0, antiAging: 0, detox: 0 },
  );
  const topPattern = (Object.keys(scores) as Pattern[]).sort((a, b) => scores[b] - scores[a])[0];
  const result = resultCopy[topPattern];

  return (
    <div className="ch-card-lg ch-card-hover mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
          보약·웰니스 미니 진단
        </h3>
        {!done && <span className="text-xs text-ink-soft">{step + 1} / {questions.length}</span>}
      </div>

      <div className="mb-7 h-1.5 w-full overflow-hidden rounded-full bg-paper">
        <div className="h-full rounded-full bg-ink transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {!done ? (
        <>
          <p className="mb-5 text-[15px] font-medium leading-relaxed text-ink">{questions[step].q}</p>
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
          <p className="mx-auto mb-5 max-w-xl text-sm leading-relaxed text-ink-soft">{result.desc}</p>
          <div className="mb-6 rounded-2xl bg-paper p-5 text-left">
            <p className="text-sm font-medium leading-relaxed text-ink">{result.care}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              이 결과는 참고용입니다. 만성 피로, 병후 허약, 면역 저하가 오래 이어진다면 의료진과 직접 상담해주세요.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Link href="/reserve" className="ch-btn-primary w-full py-3.5">
              맞춤 보약 상담 예약하기
            </Link>
            <button onClick={reset} className="text-sm text-ink-soft underline-offset-4 hover:text-root hover:underline">
              다시 하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
