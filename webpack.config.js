const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './app.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/index.html",
			filename: "index.html",
			inject: "body",
			showErrors: true
		}),
		new MiniCssExtractPlugin({
      		// Options similar to the same options in webpackOptions.output
      		// both options are optional
      		filename: "[name].css",
      		chunkFilename: "[id].css"
    	})
	],

	module:{
		loaders:[
			{
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts'
                    }
                }]
            }
		],
		rules:[
	    	{
		        test: /\.css$/,
		        use: [
		        	{
			            loader: MiniCssExtractPlugin.loader,
			            options: {
			              // you can specify a publicPath here
			              // by default it use publicPath in webpackOptions.output
			              publicPath: './css'
			        	}
		       	 	},
		        	"css-loader"
		        ]
		    }
		]
	}
};
