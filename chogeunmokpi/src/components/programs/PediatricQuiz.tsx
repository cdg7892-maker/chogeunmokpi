"use client";

import { useState } from "react";
import Link from "next/link";

type Pattern = "growth" | "immunity" | "study" | "neuro";

type Option = {
  label: string;
  score: number;
  pattern: Pattern;
};

const questions: Array<{ q: string; options: Option[] }> = [
  {
    q: "우리 아이, 어떤 점이 가장 걱정되시나요?",
    options: [
      { label: "키 성장·체중 증가가 더디거나 성조숙이 걱정돼요.", score: 2, pattern: "growth" },
      { label: "감기·비염·중이염처럼 잔병치레가 자주 반복돼요.", score: 2, pattern: "immunity" },
      { label: "집중력이 부족하고 공부할 때 금방 지쳐요.", score: 2, pattern: "study" },
      { label: "틱, ADHD, 야뇨처럼 신경·생활 리듬 문제가 있어요.", score: 2, pattern: "neuro" },
    ],
  },
  {
    q: "식사와 수면은 어떤 편인가요?",
    options: [
      { label: "입이 짧고 편식이 심해 살이 잘 붙지 않아요.", score: 2, pattern: "growth" },
      { label: "코가 막혀 입으로 숨 쉬거나 자면서 자주 뒤척여요.", score: 2, pattern: "immunity" },
      { label: "늦게까지 공부하거나 스마트폰 때문에 잠이 부족해요.", score: 1, pattern: "study" },
      { label: "잠들기 전 예민해지고 깊이 자지 못하는 날이 많아요.", score: 2, pattern: "neuro" },
    ],
  },
  {
    q: "최근 반복되는 몸의 신호는 무엇인가요?",
    options: [
      { label: "배가 자주 아프고 체력이 약해 쉽게 지쳐요.", score: 1, pattern: "growth" },
      { label: "환절기마다 콧물, 기침, 목감기가 오래 가요.", score: 2, pattern: "immunity" },
      { label: "오후가 되면 졸음, 두통, 눈 피로가 심해져요.", score: 2, pattern: "study" },
      { label: "긴장하면 눈 깜빡임, 헛기침, 산만함이 심해져요.", score: 2, pattern: "neuro" },
    ],
  },
  {
    q: "가장 원하는 치료 목표는 무엇인가요?",
    options: [
      { label: "성장 방해 요인을 줄이고 숨은 키를 찾고 싶어요.", score: 1, pattern: "growth" },
      { label: "잔병치레를 줄여 성장에 쓸 에너지를 확보하고 싶어요.", score: 1, pattern: "immunity" },
      { label: "수험생 체력과 집중력을 함께 끌어올리고 싶어요.", score: 1, pattern: "study" },
      { label: "긴장과 생활 리듬을 안정시켜 학교 생활을 편하게 하고 싶어요.", score: 1, pattern: "neuro" },
    ],
  },
];

const resultCopy: Record<Pattern, { title: string; desc: string; care: string; note: string }> = {
  growth: {
    title: "성장·성조숙 관리형",
    desc: "키 성장, 체중, 성숙 속도를 함께 봐야 하는 패턴입니다. 소화 흡수와 성장 리듬, 성숙 속도 조절이 핵심입니다.",
    care: "비위 기능을 보강해 성장 재료를 확보하고, 필요 시 성장판 상태와 성숙 진행을 확인하며 과도한 열과 빠른 성숙 흐름을 조심스럽게 살핍니다.",
    note: "키, 체중, 부모 키, 최근 1년 성장 속도, 2차 성징 여부를 함께 확인하면 치료 방향이 더 선명해집니다.",
  },
  immunity: {
    title: "면역·호흡기 허약형",
    desc: "감기, 비염, 중이염이 반복되며 성장 에너지가 면역 회복에 먼저 쓰이는 패턴입니다.",
    care: "호흡기 면역과 비위 기능을 함께 보강해 잔병치레를 줄이고, 코막힘으로 얕아진 수면을 회복해 성장 호르몬 리듬을 돕습니다.",
    note: "구강호흡, 코골이, 잦은 항생제 복용, 환절기 악화 여부를 함께 살피는 것이 좋습니다.",
  },
  study: {
    title: "수험생 뇌피로 회복형",
    desc: "오래 앉아 있는 시간은 늘었지만 뇌가 쓸 에너지와 목·어깨 순환, 수면 회복이 따라가지 못하는 상태입니다.",
    care: "총명 처방은 단순 각성이 아니라 비위와 심신 피로를 풀고 머리로 가는 기혈 순환을 도와 집중 유지력을 회복하는 데 초점을 둡니다.",
    note: "두통, 눈 피로, 소화불량, 불면이 동반되면 함께 조절하는 것이 좋습니다.",
  },
  neuro: {
    title: "틱·ADHD 신경 안정형",
    desc: "긴장과 피로가 쌓이면 반복 행동, 산만함, 야뇨, 예민함이 두드러지는 패턴입니다.",
    care: "억지로 누르는 방식보다 아이의 긴장 반응, 수면, 소화, 학업 스트레스를 함께 안정시켜 신경계가 편안해지는 환경을 만드는 것이 중요합니다.",
    note: "증상이 심해지는 시간대, 스마트폰 사용, 수면 부족, 학교 스트레스 변화를 함께 기록해오면 도움이 됩니다.",
  },
};

export default function PediatricQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const done = answers.length === questions.length;
  const progress = ((done ? questions.length : step) / questions.length) * 100;

  const select = (option: Option) => {
    setAnswers((prev) => [...prev, option]);
    if (step < questions.length - 1) setStep((current) => current + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  const scores = answers.reduce<Record<Pattern, number>>(
    (acc, answer) => ({ ...acc, [answer.pattern]: acc[answer.pattern] + answer.score + 1 }),
    { growth: 0, immunity: 0, study: 0, neuro: 0 },
  );
  const topPattern = (Object.keys(scores) as Pattern[]).sort((a, b) => scores[b] - scores[a])[0];
  const result = resultCopy[topPattern];

  return (
    <div className="ch-card-lg ch-card-hover mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
          소아·수험생 미니 진단
        </h3>
        {!done && <span className="text-xs text-ink-soft">{step + 1} / {questions.length}</span>}
      </div>

      <div className="mb-7 h-1.5 w-full overflow-hidden rounded-full bg-paper">
        <div className="h-full rounded-full bg-ink transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {!done ? (
        <>
          <p className="mb-5 keep-words text-[15px] font-medium leading-relaxed text-ink">{questions[step].q}</p>
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
          <p className="mx-auto mb-5 keep-words text-sm leading-relaxed text-ink-soft">{result.desc}</p>
          <div className="mb-6 rounded-2xl bg-paper p-5 text-left">
            <p className="keep-words text-sm font-medium leading-relaxed text-ink">{result.care}</p>
            <p className="mt-3 keep-words text-xs leading-relaxed text-ink-soft">{result.note}</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Link href="/reserve" className="ch-btn-primary w-full py-3.5">
              성장·소아 상담 예약하기
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
