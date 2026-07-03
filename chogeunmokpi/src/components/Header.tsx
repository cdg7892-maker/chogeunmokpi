"use client";

import Link from "next/link";
import { useState } from "react";
import { programs } from "@/lib/site-data";

type MenuKey = "about" | "programs" | "community" | null;

const aboutLinks = [
  { href: "/about/doctors", label: "의료진 소개" },
  { href: "/about/location", label: "오시는 길" },
  { href: "/about/notices", label: "병원 공지" },
];

const communityLinks = [
  { href: "/community/reviews", label: "치료후기" },
  { href: "/community/column", label: "건강칼럼" },
  { href: "/community/guide", label: "건강가이드" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper-soft/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-ink">
            초근목피한의원
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 md:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <NavGroup
            label="병원소개"
            active={openMenu === "about"}
            onEnter={() => setOpenMenu("about")}
          >
            <DropdownPanel links={aboutLinks} />
          </NavGroup>

          <NavGroup
            label="진료과목"
            active={openMenu === "programs"}
            onEnter={() => setOpenMenu("programs")}
          >
            <DropdownPanel
              links={[
                { href: "/programs", label: "전체보기" },
                ...programs.map((p) => ({
                  href: `/programs/${p.slug}`,
                  label: p.title,
                })),
              ]}
              wide
            />
          </NavGroup>

          <NavGroup
            label="커뮤니티"
            active={openMenu === "community"}
            onEnter={() => setOpenMenu("community")}
          >
            <DropdownPanel links={communityLinks} />
          </NavGroup>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/reserve"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper-soft transition hover:bg-root md:inline-block"
          >
            예약하기
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
            aria-label="메뉴 열기"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">메뉴</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-5 bg-ink" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-line bg-paper-soft px-5 py-4 md:hidden">
          <MobileGroup title="병원소개" links={aboutLinks} />
          <MobileGroup
            title="진료과목"
            links={[
              { href: "/programs", label: "전체보기" },
              ...programs.map((p) => ({
                href: `/programs/${p.slug}`,
                label: p.title,
              })),
            ]}
          />
          <MobileGroup title="커뮤니티" links={communityLinks} />
          <Link
            href="/reserve"
            className="mt-2 block rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-paper-soft"
            onClick={() => setMobileOpen(false)}
          >
            예약하기
          </Link>
        </div>
      )}
    </header>
  );
}

function NavGroup({
  label,
  active,
  onEnter,
  children,
}: {
  label: string;
  active: boolean;
  onEnter: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onEnter}>
      <button
        className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
          active ? "text-root" : "text-ink-soft hover:text-ink"
        }`}
      >
        {label}
      </button>
      {active && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownPanel({
  links,
  wide,
}: {
  links: { href: string; label: string }[];
  wide?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-card p-2 shadow-lg shadow-ink/5 ${
        wide ? "grid w-64 grid-cols-2 gap-1" : "w-44"
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block rounded-lg px-3 py-2 text-sm text-ink-soft transition hover:bg-paper hover:text-ink"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function MobileGroup({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="border-b border-line/60 py-3 last:border-none">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
