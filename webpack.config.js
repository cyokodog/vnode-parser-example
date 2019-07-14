module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }, ]
  },
  entry: {
    'index': './src/index.tsx'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  }
};