"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import type { ProgramGuide } from "@/lib/program-guides";
import styles from "./ProgramGuideCarousel.module.css";

export default function ProgramGuideCarousel({ title, path, items }: {
  title: string; path: string; items: ProgramGuide[];
}) {
  const pathname = usePathname();
  const list = useRef<HTMLOListElement>(null);
  const [position, setPosition] = useState(1);
  function move(direction: number) {
    const element = list.current;
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * element.clientWidth * 0.85, behavior: reduceMotion ? "instant" : "smooth" });
  }
  return (
    <section className={styles.section} aria-labelledby="program-guides-heading" data-program-guides>
      <div className={styles.heading}>
        <div><p className={styles.eyebrow}>초근목피한의원 · 증상별 진료 안내</p><h2 id="program-guides-heading">{title} 증상, 하나씩 살펴보세요</h2></div>
        <Link href={path} scroll={false} className={styles.overview}>전체 진료 안내 ↗</Link>
      </div>
      <p className={styles.intro}>불편한 증상과 가까운 글을 선택해 자세한 진료 안내를 확인하세요.</p>
      <div className={styles.controls}>
        <a href="#program-content">본문 바로 보기 ↓</a>
        <div><span aria-live="polite">{position} / {items.length}</span><button type="button" onClick={() => move(-1)} aria-label="이전 진료 안내 보기" aria-controls="program-guides-list">←</button><button type="button" onClick={() => move(1)} aria-label="다음 진료 안내 보기" aria-controls="program-guides-list">→</button></div>
      </div>
      <ol id="program-guides-list" className={styles.list} ref={list} tabIndex={0} aria-label={`${title} 증상별 글 목록`} onScroll={() => {
        const element = list.current;
        const card = element?.firstElementChild as HTMLElement | null;
        if (element && card) setPosition(Math.min(items.length, Math.round(element.scrollLeft / (card.offsetWidth + 16)) + 1));
      }}>
        {items.map((item, index) => (
          <li key={item.path} className={styles.item}>
            <Link href={item.path} scroll={false} className={styles.card} aria-current={pathname === item.path ? "page" : undefined} data-guide-link>
              <div className={styles.picture}><Image src={item.image} alt={`${item.title} 진료 안내`} fill sizes="(max-width: 640px) 76vw, (max-width: 1024px) 40vw, 285px" /><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className={styles.copy}><h3>{item.title}<span aria-hidden="true">↗</span></h3><p>{item.description}</p>{pathname === item.path && <strong className={styles.current}>현재 읽는 글</strong>}</div>
            </Link>
          </li>
        ))}
      </ol>
      <p className={styles.hint}>옆으로 넘겨 다른 증상도 확인할 수 있습니다.</p>
    </section>
  );
}
