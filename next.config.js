/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  env: {
    APIpath: 'http://localhost:1337'
  },

  images: {
    domains: ['localhost', '95.167.178.44'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/'
      },
    ]
  },

  reactStrictMode: true,
  output: 'standalone'
}

module.exports = nextConfig
