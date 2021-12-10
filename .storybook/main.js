module.exports = {
  stories: [
    '../@(libs|apps)/**/*.stories.@(ts|mdx)',

    '../../@(libs|apps)/**/*.stories.@(ts|mdx)',
    './@(libs|apps)/**/*.stories.@(ts|mdx)',
    '../libs/**/*.stories.@(ts|mdx)',
  ],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
};
