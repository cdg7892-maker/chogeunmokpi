import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "chogeunmokpi.vercel.app" }],
        destination: "https://www.cgmphani.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
