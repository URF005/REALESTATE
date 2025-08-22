/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    autoPrerender: false, // or true
    buildActivity: false, // or true
    buildActivityPosition: 'bottom-right' // or other positions
  },
  // other config...
};
export default nextConfig;
