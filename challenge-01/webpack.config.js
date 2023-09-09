module.exports = {
    entry: './main.js',
    mode: 'development',
    output: {
      filename: 'bundle.js',
      path: __dirname
    },
    devServer: {
        static: './', // <-- Update this line
      },
  };
  