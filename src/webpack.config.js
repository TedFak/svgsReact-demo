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
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Поддержка расширений .js и .jsx
  },
  devtool: 'source-map', // Опционально: для отладки
};
