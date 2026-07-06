"use client";

import { useState } from "react";
import Link from "next/link";

type Pattern = "pain" | "cycle" | "postpartum" | "menopause";

type Option = {
  label: string;
  score: number;
  pattern: Pattern;
};

const questions: Array<{ q: string; options: Option[] }> = [
  {
    q: "현재 가장 신경 쓰이는 여성 건강 문제는 무엇인가요?",
    options: [
      { label: "생리통, 골반통, 월경전증후군이 반복돼요.", score: 2, pattern: "pain" },
      { label: "생리 주기가 불규칙하거나 난임 준비가 필요해요.", score: 2, pattern: "cycle" },
      { label: "출산 후 기력 저하, 관절 시림, 회복 지연이 있어요.", score: 2, pattern: "postpartum" },
      { label: "갱년기 상열감, 불면, 감정 변화가 불편해요.", score: 2, pattern: "menopause" },
    ],
  },
  {
    q: "아랫배와 손발의 온도는 어떤 편인가요?",
    options: [
      { label: "아랫배가 차고 통증이 심한 날에는 손발도 차가워요.", score: 2, pattern: "pain" },
      { label: "몸이 차거나 스트레스를 받으면 주기가 더 흔들려요.", score: 1, pattern: "cycle" },
      { label: "출산 후 몸이 시리고 땀이 나거나 쉽게 지쳐요.", score: 2, pattern: "postpartum" },
      { label: "아래는 차고 위로는 열이 오르는 느낌이 있어요.", score: 2, pattern: "menopause" },
    ],
  },
  {
    q: "함께 나타나는 몸의 신호는 무엇인가요?",
    options: [
      { label: "덩어리진 혈, 허리 통증, 진통제 의존이 있어요.", score: 2, pattern: "pain" },
      { label: "붓기, 여드름, 분비물 변화, 피로가 함께 와요.", score: 2, pattern: "cycle" },
      { label: "잠을 자도 회복이 더디고 관절과 허리가 약해졌어요.", score: 1, pattern: "postpartum" },
      { label: "얼굴이 달아오르고 잠이 얕고 마음이 예민해져요.", score: 2, pattern: "menopause" },
    ],
  },
  {
    q: "가장 원하는 치료 목표는 무엇인가요?",
    options: [
      { label: "통증을 줄이고 자궁 순환을 따뜻하게 회복하고 싶어요.", score: 1, pattern: "pain" },
      { label: "주기 리듬과 임신 준비 컨디션을 안정시키고 싶어요.", score: 1, pattern: "cycle" },
      { label: "출산 후 소모된 기혈과 체력을 회복하고 싶어요.", score: 1, pattern: "postpartum" },
      { label: "상열감과 불면을 줄이고 몸의 균형을 되찾고 싶어요.", score: 1, pattern: "menopause" },
    ],
  },
];

const resultCopy: Record<Pattern, { title: string; desc: string; care: string; note: string }> = {
  pain: {
    title: "자궁 냉증·어혈 통증형",
    desc: "아랫배 냉감과 어혈 정체가 겹쳐 생리통, 골반통, 월경전 불편감이 반복되는 패턴입니다.",
    care: "하복부를 따뜻하게 하고 막힌 혈류를 풀어 자궁 순환과 통증 반응을 함께 조절하는 치료가 필요합니다.",
    note: "덩어리진 혈, 진통제 복용 빈도, 허리·골반 통증 여부를 함께 확인하면 좋습니다.",
  },
  cycle: {
    title: "호르몬 리듬·주기 불안정형",
    desc: "스트레스, 피로, 냉증, 기혈 부족이 겹치며 생리 주기와 배란 리듬이 흔들리는 패턴입니다.",
    care: "간기 울결과 기혈 허약을 함께 조절해 주기 리듬을 안정시키고 임신 준비 컨디션을 돕습니다.",
    note: "주기 길이, 배란통, 분비물 변화, 수면과 스트레스 변화를 같이 살핍니다.",
  },
  postpartum: {
    title: "산후 기혈 회복형",
    desc: "출산과 수유, 수면 부족으로 기혈이 소모되어 피로, 관절 시림, 회복 지연이 나타나는 패턴입니다.",
    care: "소모된 기혈을 보강하고 몸의 온도와 순환을 회복해 산후 회복 속도와 일상 체력을 함께 끌어올립니다.",
    note: "출산 시기, 수유 여부, 땀, 관절 시림, 수면 상태를 함께 확인하세요.",
  },
  menopause: {
    title: "갱년기 상열·진액 부족형",
    desc: "진액과 기혈의 균형이 흔들리며 상열감, 불면, 두근거림, 감정 변화가 반복되는 패턴입니다.",
    care: "위로 뜨는 열을 안정시키고 부족한 진액과 회복력을 보강해 수면과 자율신경 리듬을 회복합니다.",
    note: "상열감 시간대, 불면 양상, 땀, 심계, 감정 기복을 함께 보면 치료 방향이 선명해집니다.",
  },
};

export default function WomenQuiz() {
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
    { pain: 0, cycle: 0, postpartum: 0, menopause: 0 },
  );
  const topPattern = (Object.keys(scores) as Pattern[]).sort((a, b) => scores[b] - scores[a])[0];
  const result = resultCopy[topPattern];

  return (
    <div className="ch-card-lg ch-card-hover mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">여성질환 미니 진단</h3>
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
              <button key={option.label} onClick={() => select(option)} className="block w-full rounded-2xl border border-line px-4 py-4 text-left text-sm leading-relaxed text-ink-soft transition-all duration-300 ease-out hover:-translate-y-px hover:border-root hover:bg-paper hover:text-ink hover:shadow-md hover:shadow-ink/5">
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
            <Link href="/reserve" className="ch-btn-primary w-full py-3.5">여성질환 상담 예약하기</Link>
            <button onClick={reset} className="text-sm text-ink-soft underline-offset-4 hover:text-root hover:underline">다시 하기</button>
          </div>
        </div>
      )}
    </div>
  );
}
