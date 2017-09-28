
const merge = require('webpack-merge')
const { environment } = require('@rails/webpacker')
const customConfig = require('./custom')

module.exports = merge(environment.toWebpackConfig(), customConfig);
