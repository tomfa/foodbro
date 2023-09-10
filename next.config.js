/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    (process.env.NODE_ENV === "production" && "/foodbro/") || undefined,
  basePath: (process.env.NODE_ENV === "production" && "/foodbro") || undefined,
};

module.exports = nextConfig;
