const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(env) {
  return [
    {
      context: path.resolve(__dirname),
      entry: {
        index: [
          path.join(__dirname, 'src/index.js')
        ]
      },
      mode: 'none',
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              }
            ]
          },
          {
            test: /\.js$/,
            use: [
              { loader: 'babel-loader' }
            ]
          }
        ]
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname),
        publicPath: '/'
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
      ]
    }
  ];
};
