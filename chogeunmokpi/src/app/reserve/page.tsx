import { redirect } from "next/navigation";

const NAVER_BOOKING_URL =
  "https://m.booking.naver.com/booking/13/bizes/1508188?theme=place&lang=ko&area=pll";

export default function Page() {
  redirect(NAVER_BOOKING_URL);
}
