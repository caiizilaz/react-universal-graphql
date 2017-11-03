import path from 'path'

const config = {
  entry: {
    js: './index.js'
  },

  output: {
    path: path.join(__dirname, 'static', 'js'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: path.join(__dirname, './'),
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}

export default config