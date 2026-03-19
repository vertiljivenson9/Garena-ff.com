import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para Cloudflare Pages
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
