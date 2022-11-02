/** @type {import('next').NextConfig} */
const path = require('path');
const fs = require('fs');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    preTheme: fs.readFileSync(path.resolve(__dirname, './src/utils/preTheme.js')).toString(),
  },
};

module.exports = nextConfig;
