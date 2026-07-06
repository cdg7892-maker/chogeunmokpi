"use client";

import { useState } from "react";

export default function CopyAddressButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyAddress}
      className="ch-btn-secondary px-5 py-2.5"
      aria-live="polite"
    >
      {copied ? "복사 완료" : "주소 복사"}
    </button>
  );
}
