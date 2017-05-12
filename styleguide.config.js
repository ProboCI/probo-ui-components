const path = require('path');
const docgen = require('react-docgen');

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
          exclude: /node_modules/,
          loaders: [
            'style-loader?sourceMap',
            'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          ]
        }
      ]
    }
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
