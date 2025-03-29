/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
    cors: {
      origin: process.env.NODE_ENV === 'development' 
        ? ['http://localhost:3001'] 
        : ['https://your-production-domain.com'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
    },
  },
}

module.exports = nextConfig 