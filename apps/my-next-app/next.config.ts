// import { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: "/docs/:path*",
//         destination: "/docusaurus/:path*", // Ensure this is correct
//       },
//     ];
//   },
// };

// export default nextConfig;
import { NextConfig } from "next";
import withPlugins from "next-compose-plugins";

const config: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        destination: "https://my-monorepo-docusaurus.vercel.app/:path*",
      },
    ];
  },
};

export default withPlugins([], config);
