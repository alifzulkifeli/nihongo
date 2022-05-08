/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
}

module.exports = nextConfig
