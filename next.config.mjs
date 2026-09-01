/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "conquermd.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;