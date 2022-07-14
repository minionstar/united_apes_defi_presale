/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: () => ({}),
  images: {
    loader: 'imgix',
    path: 'https://unitedappesdefi.netlify.app/',
  },
};

module.exports = nextConfig;
