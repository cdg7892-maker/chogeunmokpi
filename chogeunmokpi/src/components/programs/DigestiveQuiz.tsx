"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    q: "현재 소화·복부 불편감은 얼마나 오래 지속되고 있나요?",
    options: [
      "2주 미만, 비교적 최근에 시작되었습니다.",
      "2주 이상 1개월 미만 정도 계속되고 있습니다.",
      "1개월 이상 3개월 미만 지속되고 있습니다.",
      "3개월 이상, 좋아졌다 나빠지기를 반복하거나 계속되고 있습니다.",
    ],
  },
  {
    q: "가장 불편한 증상은 무엇인가요?",
    options: [
      "명치가 답답하고 잘 체합니다.",
      "신물이 올라오고 가슴이 쓰립니다.",
      "배에 가스가 차고 설사·변비가 반복됩니다.",
      "전신이 무겁고 잘 붓습니다.",
    ],
  },
  {
    q: "식사와 증상의 관계는 어떤가요?",
    options: [
      "먹으면 바로 더부룩해집니다.",
      "매운 음식·야식 후 심해집니다.",
      "배고파도 잘 안 먹게 됩니다.",
      "먹는 것과 큰 관계는 없는 것 같습니다.",
    ],
  },
  {
    q: "스트레스나 컨디션에 따라 증상이 달라지나요?",
    options: [
      "스트레스 받으면 확실히 심해집니다.",
      "피곤할 때 더 심해집니다.",
      "날씨나 온도에 영향을 받습니다.",
      "특별한 관련은 못 느낍니다.",
    ],
  },
];

export default function DigestiveQuiz() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const progress = ((step + (done ? 1 : 0)) / questions.length) * 100;

  const handleSelect = () => {
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-card p-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-display text-xl text-ink">소화기질환 미니 진단</h3>
        {!done && (
          <span className="text-xs text-ink-soft">
            {step + 1} / {questions.length}
          </span>
        )}
      </div>

      <div className="mb-7 h-1.5 w-full overflow-hidden rounded-full bg-paper">
        <div
          className="h-full rounded-full bg-root transition-all duration-300"
          style={{ width: `${done ? 100 : progress}%` }}
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
                key={opt}
                onClick={handleSelect}
                className="block w-full rounded-xl border border-line px-4 py-3 text-left text-sm text-ink-soft transition hover:border-root hover:bg-paper hover:text-ink"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="py-4 text-center">
          <p className="mb-2 text-lg font-medium text-ink">
            진단이 완료되었습니다
          </p>
          <p className="mb-6 text-sm leading-relaxed text-ink-soft">
            선택하신 내용을 바탕으로 한 상세 처방은 실제 진료를 통해
            확인하실 수 있습니다. 지금 예약하시면 원장님이 직접 답변해
            드려요.
          </p>
          <Link
            href="/reserve"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper-soft transition hover:bg-root"
          >
            진료 예약하기 →
          </Link>
        </div>
      )}
    </div>
  );
}
