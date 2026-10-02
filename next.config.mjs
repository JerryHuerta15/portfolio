/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/JH%20business%20professional%20HS-GDSP1rPIOE8BMJYZsyMcZZUYgjPSbF.jpg',
      },
      {
        protocol: 'https',
        hostname: 'jhportfolio15.my.canva.site',
        pathname: '/_assets/**',
      },
    ],
  },
}

export default nextConfig
