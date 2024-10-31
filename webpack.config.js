const path = require('path');

module.exports = {
  mode: 'development', // Установите режим разработки
  entry: './src/index.js', // Путь к вашему главному файлу
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь к выходным файлам
    filename: 'bundle.js', // Имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Обработка .js и .jsx файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Используем babel-loader
        },
      },
      {
        test: /\.css$/, // Обработка CSS файлов
        use: ['style-loader', 'css-loader'], // Используем style-loader и css-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4)$/, // Обработка изображений и видео
        use: {
          loader: 'file-loader', // Используем file-loader
          options: {
            name: '[path][name].[ext]', // Путь к файлу в выходной директории
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Поддержка расширений .js и .jsx
  },
  devtool: 'source-map', // Опционально: для отладки
};
