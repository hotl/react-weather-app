module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main.jsx',
      Navigation: 'app/components/navigation.jsx',
      Weather: 'app/components/weather.jsx',
      WeatherForm: 'app/components/weatherform.jsx',
      WeatherMessage: 'app/components/weathermessage.jsx',
      About: 'app/components/about.jsx',
      Examples: 'app/components/examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: [
      '', '.js', '.jsx'
    ]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
