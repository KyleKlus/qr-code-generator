/**
 * @format
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/qr-code-generator',
  output: 'export',
  images: { unoptimized: true, qualities: [100] },
  outputFileTracingRoot: __dirname,
  env: {
    basePath: '/qr-code-generator',
  },
};

export default nextConfig;
