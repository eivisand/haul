import createSizeTestSuite from '../../utils/createSizeTestSuite';

createSizeTestSuite('react_native_windows_current', 'windows', {
  min: 600,
  // RNW current has chakra: true flag in babel.config.js, meaning additional (required) transforms
  // are included, hence the bigger bundle size compared to iOS/Android.
  // TODO: invstigate why generated bundles are bigger
  maxIndexBundle: 960, //950,
  maxBaseBundle: 1155, //1145,
});
