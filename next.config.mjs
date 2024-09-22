/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },

};
module.exports = {
    images: {
        unoptimized: true,
    },
}
export default nextConfig;
