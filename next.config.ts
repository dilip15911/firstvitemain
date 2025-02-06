// /** @type {import('next').NextConfig} */
// const nextConfig = {
// };
// module.exports = nextConfig;


// import type { NextConfig } from "next";
// const nextConfig: NextConfig = {
//   /* config options here */
// };
// export default nextConfig;


// next.config.js
// module.exports = {
//   typescript: {
//     ignoreBuildErrors: true, // Disables type checking during build
//   },
// };

// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true, // Ignores ESLint during production build
//   },
// };

module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,  // Optional: Ignore TypeScript errors during the build
  },
  eslint: {
    ignoreDuringBuilds: true,  // Optional: Ignore ESLint errors during production build
  },
};

