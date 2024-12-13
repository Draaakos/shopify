const path = require('path');


const getAppPath = filename =>
  path.resolve(__dirname, 'src', 'js', 'apps', `${filename}.app.js`);


const getConfig = async (env = { mode: 'development' }) => {
  const config = {
    mode: env.mode,
    entry: {
      home: getAppPath('home'),
    },
    output: {
      path: path.resolve(__dirname, 'static', 'js'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ]
    },
    resolve: {
      alias: {
        ui: path.resolve(__dirname, 'src', 'js', 'ui')
      },
      extensions: ['.js', '.jsx'],
      enforceExtension: false,
      modules: [path.resolve(__dirname, 'node_modules')]
    }
  };

  return config;
}

module.exports = getConfig;
