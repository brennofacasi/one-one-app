/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: process.env.API_PORT,
      },
    ],
  },
};

module.exports = nextConfig;
