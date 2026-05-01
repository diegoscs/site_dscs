/** @type {import('next').NextConfig} */
// Force rebuild: 2026-05-01T20:30:00Z
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com"],
    // Otimizações de imagem
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache-busting para arquivos sem hash
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600",
          },
        ],
      },
    ];
  },
  // Compressão automática
  compress: true,
  // Otimizar bundle
  swcMinify: true,
};

module.exports = nextConfig;
