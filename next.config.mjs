/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilitar o indicador de desenvolvimento do Next.js
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },

  // Outras configurações úteis
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Configurações de imagem (se necessário)
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },

  // Configurações para ESLint e TypeScript
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
