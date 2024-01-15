/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.ssactivewear.com'
        }, {
            protocol: 'https',
            hostname: '10.1.10.211'
        }]
    }
}

module.exports = nextConfig
