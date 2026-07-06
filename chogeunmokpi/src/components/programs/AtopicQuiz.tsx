"use client";

import { useState } from "react";
import Link from "next/link";

type Option = {
  label: string;
  score: number;
  flag?: boolean;
};

type Question = {
  q: string;
  options: Option[];
};

type ResultTier = {
  title: string;
  subtitle: string;
  tags: string[];
  paragraphs: string[];
  highlight: string;
};

const questions: Question[] = [
  {
    q: "아토피 증상이 얼마나 오래 반복되고 있나요?",
    options: [
      { label: "2주 미만으로 일시적인 피부 트러블처럼 느껴집니다.", score: 0 },
      { label: "2주에서 1개월 정도 지속되고 있습니다.", score: 1 },
      { label: "1개월에서 6개월 사이로 반복되고 있습니다.", score: 2 },
      { label: "6개월 이상 좋아졌다 나빠지기를 반복합니다.", score: 3 },
    ],
  },
  {
    q: "현재 피부 상태에 가장 가까운 것은 무엇인가요?",
    options: [
      { label: "가볍게 건조하고 가끔 가려운 정도입니다.", score: 0 },
      { label: "자주 붉어지고 가려움이 이어집니다.", score: 1 },
      { label: "진물이나 삼출이 반복됩니다.", score: 2 },
      { label: "피부가 두꺼워지고 색소침착이 진행됩니다.", score: 3 },
    ],
  },
  {
    q: "스테로이드나 연고 사용 패턴은 어떤가요?",
    options: [
      { label: "사용하지 않습니다.", score: 0 },
      { label: "가끔 단기간만 사용합니다.", score: 1 },
      { label: "장기간 반복 사용하고, 끊으면 다시 심해집니다.", score: 2 },
      {
        label: "진물, 고름, 열감, 급격한 번짐, 부종 같은 감염 징후가 동반됩니다.",
        score: 3,
        flag: true,
      },
    ],
  },
  {
    q: "가려움이 수면과 일상에 어느 정도 영향을 주나요?",
    options: [
      { label: "일상생활에 거의 지장이 없습니다.", score: 0 },
      { label: "가끔 밤에 긁다가 깹니다.", score: 1 },
      { label: "거의 매일 수면을 방해받습니다.", score: 2 },
      {
        label: "가려움으로 상처나 2차 감염이 반복됩니다.",
        score: 3,
        flag: true,
      },
    ],
  },
];

const results: ResultTier[] = [
  {
    title: "일시적 피부 트러블형",
    subtitle: "생활 관리와 보습 루틴으로 호전 가능성이 높은 단계입니다.",
    tags: ["초기 건조", "가벼운 가려움", "생활 관리"],
    paragraphs: [
      "아직 증상 기간이 짧고 피부 장벽 손상이 깊지 않은 상태로 보입니다. 수면, 보습, 자극 요인 회피만으로도 피부 컨디션이 안정될 수 있습니다.",
      "다만 같은 부위가 반복해서 붉어지거나 가려움이 길어진다면 단순 트러블이 아니라 면역 불균형의 시작일 수 있습니다.",
    ],
    highlight: "지금은 보습과 수면, 식이 자극 조절을 먼저 점검해볼 시기입니다.",
  },
  {
    title: "초기 면역 불균형형",
    subtitle: "반복되는 가려움과 붉어짐을 초기에 정리하는 것이 좋습니다.",
    tags: ["반복 홍반", "초기 아토피", "상담 권장"],
    paragraphs: [
      "피부가 자주 붉어지고 가려움이 이어진다면 피부 표면만의 문제가 아닐 수 있습니다. 장내 환경, 스트레스, 수면 리듬이 함께 흔들리며 면역 반응이 예민해지는 단계입니다.",
      "초기에 체질과 악화 요인을 확인하면 스테로이드 사용량을 줄이고 재발 간격을 늘리는 데 도움이 됩니다.",
    ],
    highlight: "피부가 보내는 반복 신호를 초기에 읽는 것이 만성화를 막는 핵심입니다.",
  },
  {
    title: "만성 피부장벽 손상형",
    subtitle: "피부 장벽과 면역 균형을 함께 회복하는 적극 치료가 필요한 단계입니다.",
    tags: ["만성 가려움", "태선화", "장벽 손상"],
    paragraphs: [
      "진물, 태선화, 색소침착이 반복된다면 피부가 오래 긴장한 상태입니다. 연고로 잠깐 가라앉아도 장벽과 면역의 불균형이 남아 있으면 다시 올라오기 쉽습니다.",
      "비위 기능, 습열, 혈허, 상열 패턴을 함께 확인해 피부가 스스로 회복할 수 있는 힘을 길러야 합니다.",
    ],
    highlight: "증상을 덮는 치료보다 피부가 다시 버틸 수 있는 바탕을 만드는 치료가 필요합니다.",
  },
  {
    title: "정밀 진단 권장형",
    subtitle: "감염 징후나 심한 수면 장애가 동반되어 전문 상담이 필요한 단계입니다.",
    tags: ["감염 징후", "수면 장애", "정밀 진단"],
    paragraphs: [
      "진물, 고름, 열감, 급격한 번짐, 부종 또는 반복되는 상처가 있다면 2차 감염 여부를 함께 살펴야 합니다. 이 경우 자가 관리만으로 버티기보다 의료진 상담이 우선입니다.",
      "오래 지속된 아토피는 피부뿐 아니라 수면, 피로, 소화, 정서까지 영향을 주기 때문에 전신 상태를 함께 평가하는 것이 좋습니다.",
    ],
    highlight: "감염 의심 징후가 있거나 밤마다 잠을 못 잘 정도라면 빠른 상담을 권합니다.",
  },
];

function getResult(totalScore: number, hasFlag: boolean) {
  if (hasFlag) return results[3];
  if (totalScore <= 3) return results[0];
  if (totalScore <= 6) return results[1];
  if (totalScore <= 9) return results[2];
  return results[3];
}

export default function AtopicQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const [done, setDone] = useState(false);

  const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
  const hasFlag = answers.some((answer) => answer.flag);
  const result = done ? getResult(totalScore, hasFlag) : null;
  const progress = ((done ? questions.length : step) / questions.length) * 100;

  const handleSelect = (option: Option) => {
    const nextAnswers = [...answers, option];
    setAnswers(nextAnswers);

    if (step < questions.length - 1) {
      setStep((current) => current + 1);
    } else {
      setDone(true);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  return (
    <div className="ch-card-lg ch-card-hover mx-auto max-w-2xl bg-card">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-root">
            Atopic Mini Check
          </p>
          <h3 className="text-xl font-bold tracking-tight text-ink">
            아토피 피부염 미니 진단
          </h3>
        </div>
        {!done && (
          <span className="shrink-0 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink-soft">
            {step + 1} / {questions.length}
          </span>
        )}
      </div>

      <div className="mb-7 h-1.5 w-full overflow-hidden rounded-full bg-paper">
        <div
          className="h-full rounded-full bg-ink transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!done ? (
        <>
          <p className="mb-5 text-[15px] font-semibold leading-relaxed text-ink">
            {questions[step].q}
          </p>
          <div className="space-y-2.5">
            {questions[step].options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleSelect(option)}
                className="block w-full rounded-2xl border border-line px-4 py-4 text-left text-sm leading-relaxed text-ink-soft transition-all duration-300 ease-out hover:-translate-y-px hover:border-root hover:bg-paper hover:text-ink hover:shadow-md hover:shadow-ink/5"
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        result && (
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold text-root">진단 결과</p>
              <h4 className="font-display text-3xl leading-tight text-ink">
                {result.title}
              </h4>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {result.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {result.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-root"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-3 text-sm leading-loose text-ink-soft">
              {result.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="rounded-2xl border border-root/25 bg-root/5 p-4 text-sm font-semibold leading-relaxed text-ink">
              {result.highlight}
            </div>

            <p className="text-xs leading-relaxed text-ink-soft">
              본 미니 진단은 일반적인 건강 정보 제공용이며, 실제 진단과 처방은 한의사 진료를 통해 결정됩니다. 감염 의심 증상이나 급격한 악화가 있으면 빠르게 의료진과 상담해주세요.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/reserve" className="ch-btn-primary">
                맞춤 상담 신청하기
              </Link>
              <button onClick={handleReset} className="ch-btn-secondary">
                다시 진단하기
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
