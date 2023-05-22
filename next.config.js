/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI: "mongodb+srv://Dothanhtrung:*****@data.3dnhc6o.mongodb.net/",
    NEXTAUTH_SECRET: "HELLOHELLOHELLO",
  },
};

module.exports = nextConfig;
