/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For exporting statically if needed or preventing image server errors initially
  }
};

export default nextConfig;
