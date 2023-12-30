/** @type {import('next').NextConfig} */
const nextConfig = {
    //proxy config
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5233/api/:path*',
            },
        ]
    },
}

module.exports = nextConfig
