// References for Nextjs + Linaria:
// https://github.com/dlehmhus/next-with-linaria
// https://focusreactive.com/nextjs-with-linaria-storybook/
const withLinaria = require("next-with-linaria");

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
  experimental: {
    appDir: true,
  },
};
module.exports = withLinaria(config);
