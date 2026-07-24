"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const benefits = [
  {
    id: "one-month",
    name: "엔오슬림환 1개월",
    desc: "가볍게 시작해보고 싶으신 분",
    price: "150,000원",
    badge: null,
  },
  {
    id: "three-month",
    name: "엔오슬림환 3개월",
    desc: "꾸준히 관리하시는 분",
    price: "450,000원",
    badge: "10일분 서비스",
  },
];

export default function DietProgramForm() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>(["three-month"]);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <form
      className="rounded-[8px] border border-line bg-white p-6 shadow-sm md:p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        setErrorMessage("");
        if (selected.length === 0 || !agreed || isSubmitting) return;

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();

        if (!name || !phone) {
          setErrorMessage("성함과 연락처를 입력해주세요.");
          return;
        }

        setIsSubmitting(true);
        try {
          const response = await fetch("/api/diet-program", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, selected }),
          });

          if (!response.ok) {
            throw new Error("request failed");
          }

          router.push("/intake/success");
        } catch {
          setErrorMessage(
            "신청 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
          );
          setIsSubmitting(false);
        }
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-ink">성함</span>
          <input
            required
            name="name"
            placeholder="홍길동"
            className="mt-2 w-full rounded-[8px] border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-root"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">연락처</span>
          <input
            required
            name="phone"
            inputMode="tel"
            placeholder="010-1234-5678"
            className="mt-2 w-full rounded-[8px] border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-root"
          />
        </label>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-sm font-bold text-ink">
          신청하실 혜택을 선택해주세요
        </p>
        <div className="grid gap-4">
          {benefits.map((benefit) => {
            const isSelected = selected.includes(benefit.id);
            return (
              <button
                key={benefit.id}
                type="button"
                onClick={() => toggle(benefit.id)}
                className={`rounded-[8px] border p-5 text-left transition ${
                  isSelected
                    ? "border-root bg-root/5 shadow-sm"
                    : "border-line bg-paper hover:border-root/50"
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-lg font-bold text-ink">
                        {benefit.name}
                      </span>
                      {benefit.badge ? (
                        <span className="rounded-full bg-root px-3 py-1 text-xs font-bold text-white">
                          {benefit.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm text-ink-soft">{benefit.desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-ink">
                      {benefit.price}
                    </span>
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold ${
                        isSelected
                          ? "border-root bg-root text-white"
                          : "border-line bg-white text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <label className="mt-7 flex items-start gap-3 rounded-[8px] bg-paper-soft p-4 text-sm font-semibold text-ink">
        <input
          required
          type="checkbox"
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
          className="mt-1 h-4 w-4 accent-root"
        />
        <span>
          (필수) 이벤트 참여를 위한 개인정보 수집 및 이용에 동의합니다.
        </span>
      </label>

      {errorMessage ? (
        <p className="mt-4 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={selected.length === 0 || !agreed || isSubmitting}
        className="mt-6 w-full rounded-full bg-ink px-7 py-4 font-bold text-white shadow-md shadow-ink/10 transition hover:-translate-y-px hover:bg-root disabled:cursor-not-allowed disabled:bg-ink/30"
      >
        {isSubmitting ? "접수 중입니다" : "신청하기"}
      </button>
    </form>
  );
}
