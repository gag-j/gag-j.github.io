import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/gagwebnew' : '', // change to your repo name
  assetPrefix: isGithubPages ? '/gagwebnew/' : '',
};

export default nextConfig;

module.exports = {
  // ...existing config...
  images: {
    unoptimized: true,
  },
};