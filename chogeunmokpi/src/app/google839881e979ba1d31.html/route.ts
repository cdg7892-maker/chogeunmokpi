export function GET() {
  return new Response("google-site-verification: google839881e979ba1d31.html", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
