module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.json', '.tsx'],
        alias: {
          '@components': './src/common/components',
          '@assets': './src/assets',
          '@navigation': './src/configs/navigation',
          '@constants': './src/common/constants',
          '@graphql': './src/configs/graphql',
          '@models': './src/models',
          '@features': './src/features',
          '@utils': './src/common/utills',
        },
      },
    ],
  ],
};
