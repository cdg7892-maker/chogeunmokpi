"use client";

import { useState } from "react";
import Link from "next/link";

type Pattern = "growth" | "study" | "immunity" | "sleep";

type Option = {
  label: string;
  score: number;
  pattern: Pattern;
};

const questions: Array<{ q: string; options: Option[] }> = [
  {
    q: "현재 아이에게 가장 크게 신경 쓰이는 부분은 무엇인가요?",
    options: [
      { label: "또래보다 키나 체중 증가가 더딘 것 같아요.", score: 2, pattern: "growth" },
      { label: "공부할 때 집중력이 오래 가지 않고 쉽게 지쳐요.", score: 2, pattern: "study" },
      { label: "감기, 비염, 잔병치레가 자주 반복돼요.", score: 2, pattern: "immunity" },
      { label: "잠이 얕거나 늦게 자고 아침에 일어나기 힘들어요.", score: 2, pattern: "sleep" },
    ],
  },
  {
    q: "식사와 소화 상태는 어떤 편인가요?",
    options: [
      { label: "입이 짧고 먹는 양이 적어 살이 잘 붙지 않아요.", score: 2, pattern: "growth" },
      { label: "시험 기간이나 스트레스가 있으면 배가 불편해져요.", score: 1, pattern: "study" },
      { label: "차가운 음식이나 간식 후 콧물, 기침이 늘어요.", score: 1, pattern: "immunity" },
      { label: "저녁 식사 후 더부룩해서 잠드는 시간이 늦어져요.", score: 1, pattern: "sleep" },
    ],
  },
  {
    q: "하루 중 컨디션이 가장 무너지는 때는 언제인가요?",
    options: [
      { label: "활동량이 많아지면 금방 피곤해하고 누워 있으려 해요.", score: 1, pattern: "growth" },
      { label: "오후나 저녁 공부 시간에 졸음과 멍함이 심해져요.", score: 2, pattern: "study" },
      { label: "환절기나 사람이 많은 곳에 다녀오면 바로 아파요.", score: 2, pattern: "immunity" },
      { label: "밤이 될수록 예민해지고 잠드는 데 오래 걸려요.", score: 2, pattern: "sleep" },
    ],
  },
  {
    q: "가장 원하는 관리 목표는 무엇인가요?",
    options: [
      { label: "잘 먹고 흡수해서 성장 기반을 단단히 만들고 싶어요.", score: 1, pattern: "growth" },
      { label: "체력과 집중력을 함께 끌어올리고 싶어요.", score: 1, pattern: "study" },
      { label: "잦은 감기와 비염으로 흔들리는 컨디션을 줄이고 싶어요.", score: 1, pattern: "immunity" },
      { label: "수면 리듬을 안정시켜 아침 컨디션을 좋게 만들고 싶어요.", score: 1, pattern: "sleep" },
    ],
  },
];

const resultCopy: Record<Pattern, { title: string; desc: string; care: string; note: string }> = {
  growth: {
    title: "성장 흡수 보강형",
    desc: "성장의 재료는 들어오지만 비위의 흡수력과 기혈 생성이 약해 충분히 쓰이지 못하는 패턴입니다.",
    care: "식욕을 억지로 늘리는 것보다 소화 흡수, 장부 에너지, 수면 회복을 함께 세워 성장판이 편하게 일할 환경을 만드는 것이 우선입니다.",
    note: "키, 체중, 식사량, 배변, 수면 시간을 함께 확인하면 처방 방향이 더 정확해집니다.",
  },
  study: {
    title: "수험생 뇌피로 회복형",
    desc: "오래 앉아 있는 시간은 늘었지만 뇌가 쓸 에너지와 목·어깨 순환이 따라가지 못하는 상태입니다.",
    care: "총명 처방은 각성만 올리는 방향이 아니라 비위와 심신 피로를 풀고, 머리로 가는 기혈 순환을 도와 집중 유지력을 회복하는 데 초점을 둡니다.",
    note: "두통, 눈 피로, 소화불량, 불면이 동반되면 함께 조절하는 것이 좋습니다.",
  },
  immunity: {
    title: "면역·호흡기 허약형",
    desc: "폐기와 비위가 약해 환절기마다 코, 목, 기관지가 먼저 흔들리는 패턴입니다.",
    care: "잦은 감기와 비염은 단순히 증상만 누르기보다 호흡기 점막, 소화 흡수, 수면 회복력을 함께 보강해야 반복이 줄어듭니다.",
    note: "구강호흡이나 코막힘으로 잠이 얕다면 성장과 집중력에도 영향을 줄 수 있습니다.",
  },
  sleep: {
    title: "수면 리듬 불안정형",
    desc: "몸은 피곤한데 긴장이 잘 내려가지 않아 깊은 잠과 아침 회복감이 부족한 패턴입니다.",
    care: "수면 리듬을 바로잡기 위해서는 저녁 소화 부담, 심신 긴장, 낮 활동량, 호흡기 불편을 함께 살피는 접근이 필요합니다.",
    note: "깊은 잠은 성장과 학습 기억 정리에 모두 관여하므로 생활 리듬 교정과 처방을 함께 보는 것이 좋습니다.",
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
    { growth: 0, study: 0, immunity: 0, sleep: 0 },
  );
  const topPattern = (Object.keys(scores) as Pattern[]).sort((a, b) => scores[b] - scores[a])[0];
  const result = resultCopy[topPattern];

  return (
    <div className="ch-card-lg ch-card-hover mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
          소아·수험생 성장 미니 진단
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
              성장·학습 상담 예약하기
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
