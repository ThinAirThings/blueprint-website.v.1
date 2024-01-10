/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.ssactivewear.com'
        }]
    }
}

module.exports = nextConfig
