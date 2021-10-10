const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: ["datocms-assets.com", "ntsnt.com.au","ntsnt.netlify.app"],
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  target: 'serverless'
};

module.exports = withPlugins([[withImages]], nextConfig);
