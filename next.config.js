/** @type {import('next').NextConfig} */
const repo = '';
const nextConfig = {
  output: 'export',
  basePath: repo ? `/${repo}` : '',
  assetPrefix: repo ? `/${repo}/` : '',
  images: { unoptimized: true },
  // Add other config options here if needed
};

module.exports = nextConfig;
