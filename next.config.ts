import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_DEV_MODE: process.env.DEV_MODE || "",
  },
};

export default nextConfig;
