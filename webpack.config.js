
module.exports = {
	entry: './src/js/scripts.js',
	output: {
        filename: './build/js/scripts.js'
    },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['babel-preset-es2015']
				}
			},
		]
    },

};