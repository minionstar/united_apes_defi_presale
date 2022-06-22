/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: () => ({}),
  images: {
    loader: 'imgix',
    path: 'https://brilliant-genie-15d42c.netlify.app/',
  },
};

module.exports = nextConfig;
