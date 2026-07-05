"use client";

import { useState } from "react";
import Link from "next/link";

type Pattern = "headache" | "dizziness" | "fog" | "tension";

type Option = {
  label: string;
  score: number;
  pattern: Pattern;
};

const questions: Array<{ q: string; options: Option[] }> = [
  {
    q: "현재 가장 불편한 두면부 증상은 무엇인가요?",
    options: [
      { label: "머리가 조이거나 욱신거리는 두통이 반복돼요.", score: 2, pattern: "headache" },
      { label: "핑 돌거나 중심이 흔들리는 어지럼이 있어요.", score: 2, pattern: "dizziness" },
      { label: "머리가 멍하고 집중이 선명하게 이어지지 않아요.", score: 2, pattern: "fog" },
      { label: "뒷목과 어깨가 뻣뻣하고 눈까지 피로해요.", score: 2, pattern: "tension" },
    ],
  },
  {
    q: "증상이 심해지는 상황은 언제인가요?",
    options: [
      { label: "스트레스나 감정 변화 뒤에 머리 통증이 올라와요.", score: 2, pattern: "headache" },
      { label: "일어설 때, 차를 탈 때, 피곤할 때 어지러워요.", score: 2, pattern: "dizziness" },
      { label: "식후나 잠을 못 잔 다음 날 머리가 무거워요.", score: 1, pattern: "fog" },
      { label: "오래 앉아 있거나 화면을 보면 목과 눈이 굳어요.", score: 2, pattern: "tension" },
    ],
  },
  {
    q: "함께 나타나는 몸의 신호는 무엇인가요?",
    options: [
      { label: "얼굴이 달아오르거나 빛과 소리에 예민해져요.", score: 1, pattern: "headache" },
      { label: "속이 울렁거리거나 귀가 먹먹한 느낌이 있어요.", score: 2, pattern: "dizziness" },
      { label: "소화가 더디고 몸이 무겁고 졸려요.", score: 2, pattern: "fog" },
      { label: "턱, 관자놀이, 어깨까지 긴장이 이어져요.", score: 2, pattern: "tension" },
    ],
  },
  {
    q: "가장 원하는 치료 목표는 무엇인가요?",
    options: [
      { label: "반복되는 두통 빈도와 강도를 줄이고 싶어요.", score: 1, pattern: "headache" },
      { label: "어지럼과 불안정감을 안정시키고 싶어요.", score: 1, pattern: "dizziness" },
      { label: "맑은 머리와 집중력을 회복하고 싶어요.", score: 1, pattern: "fog" },
      { label: "목·어깨 긴장과 눈 피로를 같이 풀고 싶어요.", score: 1, pattern: "tension" },
    ],
  },
];

const resultCopy: Record<Pattern, { title: string; desc: string; care: string; note: string }> = {
  headache: {
    title: "상열·긴장 두통형",
    desc: "스트레스와 위로 뜬 열, 목·어깨 긴장이 겹치며 머리 통증으로 반복되는 패턴입니다.",
    care: "위로 몰린 열을 내리고 경항부 긴장을 풀어 머리로 가는 부담을 줄이는 치료가 우선입니다.",
    note: "편두통 양상, 빛·소리 예민함, 소화 불편이 함께 있는지 확인하면 좋습니다.",
  },
  dizziness: {
    title: "담음·순환 어지럼형",
    desc: "몸속 담음과 기혈 순환 저하가 겹쳐 머리가 맑지 않고 중심이 흔들리는 패턴입니다.",
    care: "담음을 줄이고 비위 기능과 기혈 순환을 회복해 머리의 안정감을 되찾는 방향으로 접근합니다.",
    note: "울렁거림, 귀 먹먹함, 저혈압 느낌, 피로 누적 여부를 함께 살핍니다.",
  },
  fog: {
    title: "브레인포그·뇌피로형",
    desc: "수면 부족, 소화 부담, 피로 누적이 겹쳐 머리가 멍하고 집중이 흐려지는 상태입니다.",
    care: "소화와 수면 리듬을 정리하고 뇌 피로를 낮춰 선명한 컨디션을 회복하는 치료가 필요합니다.",
    note: "식후 졸림, 아침 무거움, 만성 피로가 있으면 함께 관리하는 것이 좋습니다.",
  },
  tension: {
    title: "경항부 긴장·눈피로형",
    desc: "오래 앉아 있는 자세와 화면 사용으로 목·어깨, 턱, 눈 주변 긴장이 두면부 증상으로 이어지는 패턴입니다.",
    care: "경항부와 두면부 순환을 풀고 자세·수면·작업 리듬을 함께 조정해 재발을 줄입니다.",
    note: "턱관절 긴장, 안구건조, 뒷목 통증, 어깨 결림을 같이 확인하세요.",
  },
};

export default function HeadFaceQuiz() {
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
    { headache: 0, dizziness: 0, fog: 0, tension: 0 },
  );
  const topPattern = (Object.keys(scores) as Pattern[]).sort((a, b) => scores[b] - scores[a])[0];
  const result = resultCopy[topPattern];

  return (
    <div className="ch-card-lg ch-card-hover mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">두면부 미니 진단</h3>
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
            <Link href="/reserve" className="ch-btn-primary w-full py-3.5">두면부 상담 예약하기</Link>
            <button onClick={reset} className="text-sm text-ink-soft underline-offset-4 hover:text-root hover:underline">다시 하기</button>
          </div>
        </div>
      )}
    </div>
  );
}
