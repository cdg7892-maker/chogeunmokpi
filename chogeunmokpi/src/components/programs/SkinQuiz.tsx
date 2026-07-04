"use client";

import { useState } from "react";
import Link from "next/link";

type Pattern = "heat" | "dry" | "immune" | "scar";

type Option = {
  label: string;
  score: number;
  pattern: Pattern;
};

const questions: Array<{ q: string; options: Option[] }> = [
  {
    q: "현재 가장 고민되는 피부 문제는 무엇인가요?",
    options: [
      { label: "가려움, 붉은 발진, 진물이 반복됩니다.", score: 2, pattern: "heat" },
      { label: "하얀 각질이 겹겹이 쌓이고 피부가 두꺼워집니다.", score: 2, pattern: "dry" },
      { label: "두드러기나 습진처럼 갑자기 올라왔다 사라집니다.", score: 2, pattern: "immune" },
      { label: "여드름 자국, 색소 침착, 흉터가 고민입니다.", score: 1, pattern: "scar" },
    ],
  },
  {
    q: "증상은 얼마나 반복되고 있나요?",
    options: [
      { label: "최근에 시작되어 아직 기간은 짧습니다.", score: 0, pattern: "heat" },
      { label: "한 달 이상 좋아졌다 나빠지기를 반복합니다.", score: 1, pattern: "immune" },
      { label: "세 달 이상 지속되며 재발이 잦습니다.", score: 2, pattern: "dry" },
      { label: "연고를 줄이면 바로 다시 심해집니다.", score: 3, pattern: "heat" },
    ],
  },
  {
    q: "함께 나타나는 몸의 신호는 무엇인가요?",
    options: [
      { label: "얼굴이나 피부에 열감이 쉽게 오릅니다.", score: 2, pattern: "heat" },
      { label: "피부가 건조하고 갈라지며 보습을 해도 금방 당깁니다.", score: 2, pattern: "dry" },
      { label: "소화가 불편하거나 피로할 때 피부가 악화됩니다.", score: 1, pattern: "immune" },
      { label: "생리, 수면, 스트레스 변화에 피부가 민감합니다.", score: 1, pattern: "scar" },
    ],
  },
  {
    q: "가장 원하는 치료 목표는 무엇인가요?",
    options: [
      { label: "가려움과 붉은 염증을 먼저 가라앉히고 싶습니다.", score: 1, pattern: "heat" },
      { label: "피부 장벽을 회복해 재발을 줄이고 싶습니다.", score: 1, pattern: "dry" },
      { label: "몸속 원인을 찾아 면역 반응을 안정시키고 싶습니다.", score: 1, pattern: "immune" },
      { label: "피부 결, 흔적, 재생까지 함께 관리하고 싶습니다.", score: 1, pattern: "scar" },
    ],
  },
];

const resultCopy: Record<Pattern, { title: string; desc: string; care: string }> = {
  heat: {
    title: "열독·습열 염증형",
    desc: "피부에 열감과 붉은 염증이 반복되어 가려움과 진물이 쉽게 올라오는 흐름입니다.",
    care: "청열해독 처방으로 열독과 습담을 덜어내고 염증 반응을 낮추는 치료가 우선입니다.",
  },
  dry: {
    title: "건조·피부장벽 약화형",
    desc: "피부가 마르고 갈라지며 각질이 두꺼워지는 재생력 저하 흐름입니다.",
    care: "보혈윤조 처방과 장벽 회복 관리를 통해 피부가 스스로 촉촉해지는 힘을 길러야 합니다.",
  },
  immune: {
    title: "면역 과민·재발형",
    desc: "피로, 소화, 스트레스 변화에 따라 피부가 쉽게 예민해지는 상태입니다.",
    care: "비위와 간 해독 기능, 면역 균형을 함께 살피며 재발 빈도를 낮추는 치료가 필요합니다.",
  },
  scar: {
    title: "재생·흔적 관리형",
    desc: "염증 이후 색소, 자국, 피부 결 변화가 오래 남는 흐름입니다.",
    care: "염증을 낮추면서 순환과 피부 재생력을 높이는 방향으로 치료 계획을 세웁니다.",
  },
};

export default function SkinQuiz() {
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
    { heat: 0, dry: 0, immune: 0, scar: 0 },
  );
  const topPattern = (Object.keys(scores) as Pattern[]).sort((a, b) => scores[b] - scores[a])[0];
  const result = resultCopy[topPattern];

  return (
    <div className="ch-card-lg ch-card-hover mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
          피부 체질 미니 진단
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
          <p className="mx-auto mb-5 max-w-xl text-sm leading-relaxed text-ink-soft">{result.desc}</p>
          <div className="mb-6 rounded-2xl bg-paper p-5 text-left">
            <p className="text-sm font-medium leading-relaxed text-ink">{result.care}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              이 결과는 참고용입니다. 피부 증상이 오래 지속되거나 연고 중단 후 심해진다면 의료진과 직접 상담해주세요.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Link href="/reserve" className="ch-btn-primary w-full py-3.5">
              맞춤 상담 예약하기
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
