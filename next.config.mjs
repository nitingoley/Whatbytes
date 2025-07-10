/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'assets.myntassets.com',
      'static.nike.com',
      'images.jdmagicbox.com',
      'encrypted-tbn0.gstatic.com'
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;