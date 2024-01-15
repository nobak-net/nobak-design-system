require('dotenv').config();
const path = require('path');
let stories = [];
if (process.env.NODE_ENV === 'development') {
  stories = [
    // '../src/shared/**/*.stories.mdx',
    '../src/shared/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/shared/**/*.stories.dev.@(js|jsx|ts|tsx)',
    // '../src/stories/**/*.stories.mdx',
    '../src/stories/*.stories.@(js|jsx|ts|tsx)',
    // '../src/stories/**/*.stories.dev.@(js|jsx|ts|tsx)'
  ];
} else if (process.env.NODE_ENV === 'production') {
  stories = [
    // '../src/shared/**/*.stories.mdx',
    '../src/shared/**/*.stories.@(js|jsx|ts|tsx)'
    // '../theme/**/*.stories.mdx',
    // '../theme/**/*.stories.@(js|jsx|ts|tsx)'
  ];
}
module.exports = {
  stories,

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-measure',
    'storybook-dark-mode'
  ],

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~/styles': path.resolve(__dirname, '../styles'),
      '~/src': path.resolve(__dirname, '../src')
    };

    return config;
  },

  previewHead: (head) => `
    ${head}
    <script
    src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.4/lottie.min.js"
    integrity="sha512-ilxj730331yM7NbrJAICVJcRmPFErDqQhXJcn+PLbkXdE031JJbcK87Wt4VbAK+YY6/67L+N8p7KdzGoaRjsTg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
    ></script>
  `,

  previewBody: (body) => `
    ${body}
  `,

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
