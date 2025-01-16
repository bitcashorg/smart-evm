/** @type {import('next').NextConfig} */

const { hostname } = require('node:os')
const path = require('node:path')
const webpack = require('webpack')
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Nonce',
            value: generateNonce(),
          },
          {
            key: 'Content-Security-Policy',
            value: `object-src 'none';base-uri 'self';script-src 'self' 'report-sample' 'unsafe-inline' 'unsafe-eval' https: http:;`,
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Permissions-Policy',
            value:
              'accelerometer=(); battery=(self); camera=(); geolocation=(); gyroscope=(); magnetometer=(); microphone=(); payment=(); usb=()',
          },
        ],
      },
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
  experimental: {
    ...(process.env.NODE_ENV === 'development'
      ? { outputFileTracingRoot: path.join(__dirname, '../../') }
      : null),
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    taint: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'datocms-assets.com',
      },
      {
        hostname: 'cdn.sanity.io',
      },
      {
        hostname: 'i.ytimg.com',
      },
      {
        hostname: 'picsum.photos',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  webpack: (config, { isServer }) => {
    // Ignore node-specific modules when bundling for the browser

    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      'onnxruntime-node$': false,
    }

    config.experiments = {
      asyncWebAssembly: true,
      layers: true, // Enable layers experiment
    }

    return config
  },
}

const nonceCache = new Set()

function generateNonce() {
  let nonce
  do {
    nonce = [...Array(32)].map(() => Math.random().toString(36)[2]).join('')
  } while (nonceCache.has(nonce))
  nonceCache.add(nonce)
  return nonce
}

const withBundleAnalyzer = require('@next/bundle-analyzer')()

module.exports =
  process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig
