/**
 * @format
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/text-tools',
  output: 'export',
  images: { unoptimized: true, qualities: [100] },
  outputFileTracingRoot: __dirname,
  env: {
    basePath: '/text-tools',
  },
};

export default nextConfig;
