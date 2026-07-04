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

const questions: Question[] = [
  {
    q: "현재 소화·복부 불편감은 얼마나 오래 지속되고 있나요?",
    options: [
      { label: "2주 미만, 비교적 최근에 시작되었습니다.", score: 0 },
      { label: "2주 이상 1개월 미만 정도 계속되고 있습니다.", score: 1 },
      { label: "1개월 이상 3개월 미만 지속되고 있습니다.", score: 2 },
      {
        label: "3개월 이상, 좋아졌다 나빠지기를 반복하거나 계속되고 있습니다.",
        score: 3,
      },
    ],
  },
  {
    q: "가장 신경 쓰이는 소화·복부 증상 양상은 무엇인가요?",
    options: [
      { label: "식사 후 더부룩함·답답함이 주로 느껴집니다.", score: 0 },
      {
        label: "속쓰림, 가슴 답답함, 신물이 올라오는 느낌(역류)이 자주 있습니다.",
        score: 1,
      },
      {
        label: "아랫배 통증, 잦은 가스, 설사·묽은 변이 반복되는 편입니다.",
        score: 2,
      },
      {
        label:
          "식사 전후와 관계없이 복부 통증이 심해 식사를 피하거나 줄이게 됩니다.",
        score: 3,
      },
    ],
  },
  {
    q: "최근 배변 습관의 변화를 어떻게 느끼고 계신가요?",
    options: [
      { label: "예전과 비교해 배변 횟수·모양에 큰 변화는 없습니다.", score: 0 },
      {
        label: "가끔 변비(3일 이상 무변)나 묽은 변이 있지만, 자주 반복되지는 않습니다.",
        score: 1,
      },
      {
        label: "1개월 이상 변비가 반복되거나, 하루 3회 이상 묽은 변·설사가 자주 있습니다.",
        score: 2,
      },
      {
        label:
          "변에서 피가 보이거나, 검게 변한 적이 있으며, 최근 들어 배변 패턴이 뚜렷하게 달라졌습니다.",
        score: 3,
        flag: true,
      },
    ],
  },
  {
    q: "소화기 증상과 함께 동반되는 전신 상태를 골라주세요.",
    options: [
      {
        label: "가벼운 피로감 외에는 특별한 전신 증상은 느끼지 못합니다.",
        score: 0,
      },
      {
        label:
          "식욕이 줄거나 속이 메스껍고 더부룩한 날이 가끔 있어, 식사량이 조금 줄었습니다.",
        score: 1,
      },
      {
        label: "자주 메스꺼움·구역감이 있고, 어지럽거나 기운이 빠지는 느낌이 함께 있습니다.",
        score: 2,
      },
      {
        label:
          "최근 3개월 안에 특별한 다이어트 없이 3kg 이상 체중이 빠졌거나, 밤에 통증 때문에 자주 깹니다.",
        score: 3,
        flag: true,
      },
    ],
  },
];

type ResultTier = {
  title: string;
  subtitle: string;
  tags: string[];
  paragraphs: string[];
  highlight: string;
};

const results: ResultTier[] = [
  {
    title: "일시적 소화 불편형",
    subtitle: "생활 관리로 호전 가능성이 높은 단계입니다",
    tags: ["#일시적 소화불량", "#생활습관 영향", "#예방 관리"],
    paragraphs: [
      "현재 소화·복부 증상이 비교적 단기간이거나, 배변·체중 변화가 크지 않은 상태로 보입니다. 스트레스·과식·야식·카페인/음주 등 생활습관과 수면 패턴을 조정하면, 자연스럽게 호전될 가능성이 높습니다.",
      "다만 같은 증상이 반복되거나, 기간이 1~3개월 이상 길어질 경우에는 단순한 위장 문제를 넘어 체질·장부 기능의 불균형으로 진행될 수 있어, 그 전에 한 번 정도는 전문적인 검진을 받아보시는 것이 좋습니다.",
    ],
    highlight:
      "지금 단계에서는, 과로·야식·카페인 등을 정리하는 것만으로도 큰 도움이 됩니다.",
  },
  {
    title: "초기 관리 필요형",
    subtitle: "방치하면 만성화될 수 있는 단계입니다",
    tags: ["#기능성 소화불량 초기", "#관리 필요", "#조기 상담 권장"],
    paragraphs: [
      "증상이 한 달 가까이 이어지고 있거나, 역류·복통 등 특정 패턴이 반복되고 있는 것으로 보입니다. 이 시기를 놓치면 위장의 운동성 저하나 담적이 서서히 굳어지며 만성화될 가능성이 있습니다.",
      "지금 단계에서 원인을 정확히 파악하고 체질에 맞는 관리를 시작하면, 비교적 짧은 기간 안에 편안한 상태로 되돌릴 수 있습니다.",
    ],
    highlight:
      "복진·맥진을 통한 정확한 원인 파악이 지금 단계에서 가장 중요합니다.",
  },
  {
    title: "만성 소화기 불균형형",
    subtitle: "뿌리부터 다스리는 치료가 필요한 단계입니다",
    tags: ["#만성 담적", "#기능 저하", "#적극 치료 권장"],
    paragraphs: [
      "3개월 이상 증상이 반복되고, 배변 패턴이나 전신 컨디션까지 함께 영향을 받고 계신 것으로 보입니다. 이 정도로 오래 지속된 소화기 불편감은 단순 소화제나 일시적인 관리로는 해결되기 어려운 경우가 많습니다.",
      "위장의 운동성 회복, 담적 배출, 자율신경 안정을 함께 다루는 근본 치료가 필요한 시점입니다. 초근목피한의원의 복진·맥진 진단으로 정확한 원인을 확인해보시길 권해드립니다.",
    ],
    highlight:
      "증상이 오래될수록 회복에도 시간이 필요합니다. 지금 상담을 시작하시는 것을 권합니다.",
  },
  {
    title: "정밀 진단 권장형",
    subtitle: "빠른 시일 내 전문의 상담이 필요합니다",
    tags: ["#경고 신호 동반", "#정밀검진 권장", "#조속한 상담 필요"],
    paragraphs: [
      "선택하신 내용 중에는 체중 감소, 야간 통증, 배변 시 출혈 등 주의가 필요한 신호가 포함되어 있습니다. 이런 증상은 단순 소화불량 외의 다른 원인이 함께 있을 가능성도 있어, 한방 치료에 앞서 정밀한 진찰이 우선되어야 합니다.",
      "초근목피한의원에서도 상담은 도와드릴 수 있지만, 필요한 경우 관련 검사를 함께 권해드릴 수 있습니다. 증상을 방치하지 마시고 가능한 빨리 진료를 받아보세요.",
    ],
    highlight:
      "체중 감소, 출혈, 야간 통증은 방치하지 마시고 빠른 시일 내 상담받으시길 권합니다.",
  },
];

function getResult(totalScore: number, hasFlag: boolean): ResultTier {
  if (hasFlag) return results[3];
  if (totalScore <= 3) return results[0];
  if (totalScore <= 6) return results[1];
  if (totalScore <= 9) return results[2];
  return results[3];
}

export default function DigestiveQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const [done, setDone] = useState(false);

  const progress = ((done ? questions.length : step) / questions.length) * 100;

  const handleSelect = (option: Option) => {
    const nextAnswers = [...answers, option];
    setAnswers(nextAnswers);

    if (step < questions.length - 1) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
  const hasFlag = answers.some((a) => a.flag);
  const result = done ? getResult(totalScore, hasFlag) : null;

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-card p-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight text-ink">
          소화기질환 미니 진단
        </h3>
        {!done && (
          <span className="text-xs text-ink-soft">
            {step + 1} / {questions.length}
          </span>
        )}
      </div>

      <div className="mb-7 h-1.5 w-full overflow-hidden rounded-full bg-paper">
        <div
          className="h-full rounded-full bg-ink transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!done ? (
        <>
          <p className="mb-5 text-[15px] font-medium text-ink">
            {questions[step].q}
          </p>
          <div className="space-y-2.5">
            {questions[step].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleSelect(opt)}
                className="block w-full rounded-xl border border-line px-4 py-3 text-left text-sm text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-root hover:bg-paper hover:text-ink hover:shadow-md hover:shadow-ink/5"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        result && (
          <div>
            <p className="mb-1 text-center text-xs text-ink-soft">
              진단 결과
            </p>
            <h4 className="mb-2 text-center text-2xl font-bold tracking-tight text-ink">
              {result.title}
            </h4>
            <p className="mb-4 text-center text-sm text-ink-soft">
              {result.subtitle}
            </p>

            <div className="mb-5 flex flex-wrap justify-center gap-2">
              {result.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-paper px-3 py-1 text-xs text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mb-5 space-y-3 text-sm leading-relaxed text-ink-soft">
              {result.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mb-5 rounded-2xl bg-paper p-5">
              <p className="text-sm font-medium text-ink">
                {result.highlight}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                생활 패턴을 점검하면서, 필요하다면 가벼운 위장 기능 회복
                한약과 더불어 관리 방향을 함께 설계해 드립니다.
              </p>
            </div>

            <p className="mb-6 text-xs leading-relaxed text-ink-soft/70">
              이 자가체크는 간단한 참고 도구이며, 실제 진단이나 치료를
              대신하지 않습니다. 복통, 체중 변화, 출혈 등 증상이 심하거나
              오래 지속되는 경우에는 반드시 의료진과 직접 상담해 주세요.
            </p>

            <div className="flex flex-col items-center gap-3">
              <Link
                href="/reserve"
                className="w-full rounded-full bg-ink py-3.5 text-center text-sm font-medium text-paper-soft transition-all duration-200 hover:-translate-y-1 hover:bg-root hover:shadow-lg hover:shadow-ink/10"
              >
                맞춤 상담 신청하기 (무료)
              </Link>
              <button
                onClick={handleReset}
                className="text-sm text-ink-soft underline-offset-4 hover:text-root hover:underline"
              >
                다시 하기
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
