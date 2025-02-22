module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',  // This should be the last plugin in the array
    [
      'module-resolver',
      {
        root: ['.'],  // Set your root directory
        alias: {
          '@/src': './src',  // Define your alias
        },
      },
    ],
  ],
};
