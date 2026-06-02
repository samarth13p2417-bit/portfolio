import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/**"),
      new URL("https://images.unsplash.com/**"),
      new URL("https://via.placeholder.com/**"),
    ],
  },
};

export default nextConfig;
