"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  y?: number;
};

export default function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
  y = 28,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const delayOffset = Math.min(delayMs / 1800, 0.28);

    const update = () => {
      frame = 0;

      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const start = viewportHeight * 0.96;
      const end = viewportHeight * 0.38;
      const raw = (start - rect.top) / (start - end) - delayOffset;
      const clamped = Math.max(0, Math.min(1, raw));
      const eased = 1 - Math.pow(1 - clamped, 3);

      setProgress(eased);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [delayMs]);

  const translateY = Math.round(y * (1 - progress) * 100) / 100;
  const opacity = Math.max(0.001, progress);

  return (
    <div
      ref={ref}
      className={`will-change-transform motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`}
      style={{
        opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
        transition: "opacity 180ms ease-out",
      }}
    >
      {children}
    </div>
  );
}
