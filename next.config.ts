/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@dotlottie/react-player'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@dotlottie/react-player': '@dotlottie/react-player'
    };
    return config;
  }
};

module.exports = nextConfig;