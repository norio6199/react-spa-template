const cracoConfig = require('../craco.config');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.tsx$/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          ...cracoConfig.babel.presets,
          '@babel/preset-typescript',
          '@emotion/babel-preset-css-prop',
        ],
        plugins: [...cracoConfig.babel.plugins],
      },
    });
    return config;
  },
};
