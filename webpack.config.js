const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Generates an HTML file for playground
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // HMR for React

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    lib: './src/index.ts', // Main component library entry point
    playground: './playground/index.tsx', // Entry point for the playground app (for local dev)
  },
  mode: isProduction ? 'production' : 'development', // Switch mode based on env
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? '[name].min.js' : '[name].js', // Output different files for production/dev
    library: 'Hacia.io', // Global library name
    libraryTarget: 'umd', // Universal Module Definition for compatibility
    globalObject: 'this',
    clean: true, // Cleans the dist folder before each build
  },
  devtool: isProduction ? 'source-map' : 'eval-source-map', // Source maps for production and dev
  externals: isProduction ? [nodeExternals()] : [], // Exclude external dependencies in production build
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader', // Transpile TypeScript files
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader', // Load source maps for debugging
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Resolves these file extensions
  },
  devServer: {
    static: path.join(__dirname, 'playground'), // Serve from the playground folder in dev mode
    compress: true,
    port: 3000, // Use port 3000 for local development
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser when running in dev mode
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './playground/index.html', // Generates an HTML file to use the playground
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(), // Hot Module Replacement plugin for better development experience
    !isProduction && new ReactRefreshWebpackPlugin(), // Only use React Refresh in dev mode for HMR
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        isProduction ? 'production' : 'development',
      ),
    }),
  ].filter(Boolean), // Filter out falsy values to ensure plugins like ReactRefreshWebpackPlugin only load in dev
};
