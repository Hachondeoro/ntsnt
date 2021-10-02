const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['datocms-assets.com', 'https://www.datocms-assets.com', 'www.datocms-assets.com']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)