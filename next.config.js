/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [],
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-UA-Compatible",
            value: "IE=edge",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
