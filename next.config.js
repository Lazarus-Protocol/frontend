/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ALCHEMY_API_KEY_GOERLI: process.env.ALCHEMY_API_KEY_GOERLI,
    ALCHEMY_API_KEY_POLYGON: process.env.ALCHEMY_API_KEY_POLYGON,
  }
}

module.exports = nextConfig
