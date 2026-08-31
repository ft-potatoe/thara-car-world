/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder assets are local SVGs; served as-is rather than
    // through the raster optimizer (which requires `sharp`).
    unoptimized: true,
  },
};

export default nextConfig;
