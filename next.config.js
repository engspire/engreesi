const nextConfig = {
  typescript: {
      ignoreBuildErrors: true
  },
  images: {
    unoptimized: true,
    domains: [
      "img.clerk.com",
      "contrib.rocks"
    ]
  },
  async redirects() {
      return []
  }
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production'
});

module.exports = withPWA(withNextra(nextConfig));

