import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**.ufs.sh',
      },
      {
        protocol: "https",
        hostname: '**',
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true, // Suppresses ESLint errors during builds
  },
};

export default nextConfig;