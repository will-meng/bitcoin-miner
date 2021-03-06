module.exports = {
  context: __dirname,
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
  },
  // module: {
  //   loaders: [
  //     {
  //       test: [/\.jsx?$/, /\.js?$/],
  //       exclude: /(node_modules)/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['es2015', 'react']
  //       }
  //     }
  //   ]
  // },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
