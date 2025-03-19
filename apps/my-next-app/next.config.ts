import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        destination: "/docusaurus/:path*", // Ensure this is correct
      },
    ];
  },
};

export default nextConfig;
