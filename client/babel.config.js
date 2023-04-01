module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.json', '.tsx'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@constants': './src/constants',
          '@graphql': './src/graphql',
          '@models': './src/models',
          '@providers': './src/providers',
          '@services': './src/services',
          '@features': './src/features',
          '@hooks': './src/hooks',
          '@configs': './src/configs',
        },
      },
    ],
  ],
};
