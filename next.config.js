/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
