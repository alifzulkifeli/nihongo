/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  }, 
   reactStrictMode: true,
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
});