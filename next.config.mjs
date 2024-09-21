/* eslint-disable import/no-extraneous-dependencies, import/extensions */

const nextConfig = {
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      reactCompiler: {
        compilationMode: 'annotation',
      },
    },
    images: {
      domains: ['img.clerk.com', 'cdn.builder.io'],
    },
  }
  
  export default nextConfig
  