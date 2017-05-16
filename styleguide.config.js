const path = require('path');
const docgen = require('react-docgen');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  title: 'Probo.CI Styleguide',
  template: './styleguide/template.html',
  webpackConfig: {
    module: {
      loaders: [
        {
          test: [/\.js$/],
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: [/\.css$/, /\.scss$/],
          include: path.join(__dirname, 'src'),
          loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: 'css-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMaps: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMaps: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMaps: true,
                  plugins: [
                    require('postcss-autoreset'),
                    require('postcss-responsive-type'),
                    require('postcss-font-magician')({
                      variants: {
                        'Open Sans': {
                          '400': ['woff'],
                          '400italic': ['woff'],
                          '600': ['woff'],
                          '700': ['woff'],
                        }
                      },
                      foundries: ['google']
                    }),
                    require('autoprefixer')
                  ]
                }
              }
            ]
          }))
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'build/[name].css?[hash]-[chunkhash]-[contenthash]-[name]',
        allChunks: true
      }),
    ]
  },
  sections: [
    { name: 'Atoms', components: 'src/atoms/**/*.js' },
    { name: 'Molecules', components: 'src/molecules/**/*.js' },
    { name: 'Organisms', components: 'src/organisms/**/*.js' },
    { name: 'Templates', components: 'src/templates/**/*.js' },
  ],
  skipComponentsWithoutExample: true,
  getExampleFilename: componentpath => componentpath.replace(/\.js$/, '.examples.md'),
  resolver: docgen.resolver.findAllComponentDefinitions,
};
