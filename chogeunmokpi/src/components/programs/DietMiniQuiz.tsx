"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Option = {
  label: string;
  score: number;
};

const questions = [
  {
    q: "최근 3개월 동안 체중 변화는 어땠나요?",
    options: [
      { label: "거의 변화 없음, 감량 시작이 필요합니다", score: 0 },
      { label: "1~3kg 증가, 식욕 조절이 흔들립니다", score: 1 },
      { label: "3~5kg 증가, 복부·부종이 함께 느껴집니다", score: 2 },
      { label: "5kg 이상 증가, 감량 속도와 관리가 모두 필요합니다", score: 3 },
    ],
  },
  {
    q: "가장 조절하기 어려운 순간은 언제인가요?",
    options: [
      { label: "아침보다 저녁에 배고픔이 커집니다", score: 1 },
      { label: "야식과 간식이 습관처럼 이어집니다", score: 2 },
      { label: "회식·외식 후 체중이 잘 돌아오지 않습니다", score: 2 },
      { label: "식욕이 강하고 포만감이 오래가지 않습니다", score: 3 },
    ],
  },
  {
    q: "몸의 대사 상태는 어느 쪽에 가까운가요?",
    options: [
      { label: "손발이 차고 잘 붓습니다", score: 1 },
      { label: "땀이 적고 몸이 무겁습니다", score: 1 },
      { label: "조금만 먹어도 복부에 쌓이는 느낌입니다", score: 2 },
      { label: "예전보다 살이 빠지는 속도가 확실히 느립니다", score: 3 },
    ],
  },
  {
    q: "이번 다이어트의 목표는 무엇인가요?",
    options: [
      { label: "가볍게 3~4kg 감량하고 싶습니다", score: 0 },
      { label: "5~7kg 감량과 식습관 교정이 목표입니다", score: 1 },
      { label: "8~10kg 이상, 체지방 집중 감량이 필요합니다", score: 2 },
      { label: "반복된 요요를 끊고 장기 관리가 필요합니다", score: 3 },
    ],
  },
];

const results = [
  {
    name: "엔오슬림환 1단계",
    title: "입문 감량형",
    range: "가벼운 식욕 조절과 생활 리듬 회복",
    body: "처음 다이어트 한약을 시작하거나 부담 없는 감량을 원하는 분께 맞습니다. 식사량을 급격히 줄이기보다 포만감과 대사 리듬을 부드럽게 잡는 방향입니다.",
  },
  {
    name: "엔오슬림환 2단계",
    title: "식욕·부종 조절형",
    range: "간식, 야식, 붓기, 정체 체중 관리",
    body: "저녁 식욕과 부종이 함께 나타나는 분께 적합합니다. 식욕 조절과 수분 정체 개선을 함께 보며, 가장 많이 시작하는 실전 감량 단계입니다.",
  },
  {
    name: "엔오슬림환 3단계",
    title: "체지방 집중형",
    range: "복부 지방, 느린 대사, 감량 정체 관리",
    body: "운동과 식단을 해도 체중이 잘 움직이지 않는 분께 권합니다. 대사 촉진과 체지방 연소 리듬을 강화해 3개월 목표 감량에 집중합니다.",
  },
  {
    name: "엔오슬림환 4단계",
    title: "고강도 감량·요요 관리형",
    range: "반복 요요, 고도 감량, 장기 관리",
    body: "체중 증가 폭이 크거나 여러 번의 다이어트 실패를 겪은 분께 맞춘 단계입니다. 식욕, 대사, 순환을 함께 보고 감량 이후 유지 전략까지 설계합니다.",
  },
];

export default function DietMiniQuiz() {
  const [answers, setAnswers] = useState<number[]>([]);

  const current = answers.length;
  const isDone = current >= questions.length;
  const score = answers.reduce((sum, item) => sum + item, 0);
  const resultIndex = Math.min(3, Math.floor(score / 3));
  const result = results[resultIndex];

  const progressLabel = useMemo(() => {
    if (isDone) return "결과 확인";
    return `${current + 1} / ${questions.length}`;
  }, [current, isDone]);

  return (
    <section id="diet-check" className="bg-paper-soft px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-root">
            Simple Check
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
            엔오슬림환 미니 진단
          </h2>
          <p className="mt-4 text-ink-soft">
            1분이면 충분합니다. 현재 식욕, 대사, 체중 목표에 맞는 단계를 확인해보세요.
          </p>
        </div>

        <div className="rounded-[8px] border border-line bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center justify-between text-sm font-semibold text-ink-soft">
            <span>비대면 다이어트 미니 진단</span>
            <span>{progressLabel}</span>
          </div>

          {!isDone ? (
            <div>
              <h3 className="font-display text-2xl leading-snug text-ink">
                {questions[current].q}
              </h3>
              <div className="mt-6 grid gap-3">
                {questions[current].options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setAnswers((prev) => [...prev, option.score])}
                    className="rounded-[8px] border border-line bg-paper px-5 py-4 text-left text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-root hover:bg-root/5"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <p className="text-sm font-semibold text-root">추천 단계</p>
                <h3 className="mt-2 font-display text-3xl text-ink md:text-4xl">
                  {result.name}
                </h3>
                <p className="mt-3 text-lg font-semibold text-ink">{result.title}</p>
                <p className="mt-2 text-sm text-ink-soft">{result.range}</p>
                <p className="mt-5 leading-8 text-ink-soft">{result.body}</p>
              </div>
              <div className="rounded-[8px] border border-line bg-paper p-5">
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-soft">권장 상담</dt>
                    <dd className="font-semibold text-ink">1:1 전화 상담</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-soft">기본 구성</dt>
                    <dd className="font-semibold text-ink">1개월 90포</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-soft">집중 구성</dt>
                    <dd className="font-semibold text-ink">3개월 + 10일분 서비스</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/reserve" className="ch-btn-primary justify-center">
                    진료 예약하기
                  </Link>
                  <button
                    type="button"
                    onClick={() => setAnswers([])}
                    className="ch-btn-secondary justify-center"
                  >
                    다시 진단하기
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
