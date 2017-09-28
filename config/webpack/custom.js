const webpack = require('webpack');

module.exports = {
  plugins: [
		new webpack.ContextReplacementPlugin(
				/graphql-language-service-interface[\\/]dist$/,
				new RegExp(`^\\./.*\\.js$`)
			)
	]
};
