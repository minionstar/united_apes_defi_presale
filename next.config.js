/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: () => ({}),
  images: {
    loader: 'imgix',
    path: 'unitedappesdefi.netlify.app/',
  },
};

module.exports = nextConfig;
