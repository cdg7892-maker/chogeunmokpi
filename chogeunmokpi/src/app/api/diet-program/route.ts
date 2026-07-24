import crypto from "crypto";
import { NextResponse } from "next/server";

const benefitLabels: Record<string, string> = {
  "one-month": "엔오슬림환 1개월",
  "three-month": "엔오슬림환 3개월",
};

type DietProgramPayload = {
  name?: unknown;
  phone?: unknown;
  selected?: unknown;
};

function cleanText(value: unknown) {
  return String(value ?? "").trim();
}

function normalizePhone(value: string) {
  return value.replace(/[^\d]/g, "");
}

function createSolapiAuthorization(apiKey: string, apiSecret: string) {
  const date = new Date().toISOString();
  const salt = crypto.randomUUID();
  const signature = crypto
    .createHmac("sha256", apiSecret)
    .update(date + salt)
    .digest("hex");

  return `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`;
}

async function sendSmsNotification(params: {
  name: string;
  phone: string;
  selectedLabels: string[];
  submittedAt: string;
}) {
  const apiKey = process.env.SOLAPI_API_KEY;
  const apiSecret = process.env.SOLAPI_API_SECRET;
  const sender = normalizePhone(process.env.SOLAPI_SENDER ?? "");
  const receivers = (process.env.DIET_PROGRAM_SMS_TO ?? "")
    .split(",")
    .map((receiver) => normalizePhone(receiver))
    .filter(Boolean);

  if (!apiKey || !apiSecret || !sender || receivers.length === 0) {
    throw new Error("SMS environment variables are missing.");
  }

  const text = [
    "[초근목피] 다이어트 비대면 신청",
    `성함: ${params.name}`,
    `연락처: ${params.phone}`,
    `신청: ${params.selectedLabels.join(", ")}`,
    `시간: ${params.submittedAt}`,
  ].join("\n");

  await Promise.all(
    receivers.map(async (receiver) => {
      const response = await fetch(
        "https://api.solapi.com/messages/v4/send-many/detail",
        {
        method: "POST",
        headers: {
          Authorization: createSolapiAuthorization(apiKey, apiSecret),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              to: receiver,
              from: sender,
              text,
            },
          ],
        }),
        cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error(`SMS request failed: ${response.status}`);
      }
    }),
  );
}

async function appendToSheet(payload: Record<string, unknown>) {
  const webhookUrl = process.env.DIET_PROGRAM_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Sheet webhook failed: ${response.status}`);
  }
}

export async function POST(request: Request) {
  let payload: DietProgramPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "잘못된 요청입니다." },
      { status: 400 },
    );
  }

  const name = cleanText(payload.name);
  const phone = cleanText(payload.phone);
  const selected = Array.isArray(payload.selected)
    ? payload.selected.map(cleanText).filter(Boolean)
    : [];
  const selectedLabels = selected.map((id) => benefitLabels[id] ?? id);

  if (!name || !phone || selectedLabels.length === 0) {
    return NextResponse.json(
      { message: "필수 입력값이 누락되었습니다." },
      { status: 400 },
    );
  }

  const submittedAt = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const submission = {
    source: "diet-program",
    submittedAt,
    name,
    phone,
    selected,
    selectedLabels,
  };

  try {
    await appendToSheet(submission);
    await sendSmsNotification({ name, phone, selectedLabels, submittedAt });
  } catch (error) {
    console.error("[diet-program] notification failed", error);
    return NextResponse.json(
      { message: "알림 전송에 실패했습니다." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
