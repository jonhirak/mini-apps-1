module.exports = {
  entry: '/client/app.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: '/Users/jonhi1/Desktop/HRSF138/mini-apps/challenge_4/public'
  },
  mode: 'development'
}