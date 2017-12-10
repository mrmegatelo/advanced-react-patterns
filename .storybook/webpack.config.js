// Shared styles configuration.
const sharedStylesConfiguration = [
  require.resolve('style-loader'),
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
    }
  },
  {
    loader: require.resolve('postcss-loader')
  }
];

module.exports = (storybookBaseConfig, configType) => {

  // Add file loader.
  storybookBaseConfig.module.rules.push({
    test: /\.(png|jpg|gif|svg)$/,
    use: [{
      loader: require.resolve('file-loader'),
      options: {}
    }],
    exclude: /node_modules/,
    include: [/stories/, /components/],
  });

  // Add url loader.
  storybookBaseConfig.module.rules.push({
    test: /\.(png|jpg|svg)$/,
    use: [{
      loader: require.resolve('url-loader'),
      options: {
        limit: 8192
      }
    }],
    exclude: /node_modules/,
    include: [/stories/, /components/],
  });

  // Add sass support.
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      ...sharedStylesConfiguration,
      require.resolve('sass-loader')
    ],
    exclude: /node_modules/,
    include: [/stories/, /components/, /patterns/],
  });

  // Add css support.
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      ...sharedStylesConfiguration
    ],
    include: [/stories/, /components/, /patterns/],
  });

  // Ignore typescript files.
  storybookBaseConfig.module.rules.push({
    test: /\.tsx?$/,
    use: [
      require.resolve('ignore-loader')
    ],
    exclude: /node_modules/,
    include: [/stories/, /components/],
  });
  
  return storybookBaseConfig;
}