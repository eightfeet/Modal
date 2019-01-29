
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const DefinePlugin = webpack.DefinePlugin;

let cdn = process.env.PUBLIC_PATH || './';

const evn = process.env.UAT_ENV;
const isUat = evn === 'uat' ? true : false;

module.exports = (env, argv) => ({
	entry: './src/index.js',
	context: path.resolve(__dirname),
	output: {
		library: '___Lotterys___',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'lotterys.js',
		publicPath: argv.mode === 'development' ? '/' : cdn
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader"
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: '/node_modules/'
			}, {
				test: /\.(scss|css)$/,
				include: [
					path.resolve(__dirname, "src/modules")
				],
				use: [
					// {
					// 	loader: MiniCssExtractPlugin.loader,
					// 	options: {
					// 		publicPath: argv.mode === 'development' ? '/' : cdn
					// 	}
					// },
					{
						loader: "style-loader"
					},
					"css-loader?modules&localIdentName=[name][hash:base64:8]", {
						loader: `postcss-loader`,
						options: {
							sourceMap: true
						}
					}, {
						loader: "sass-loader",
						options: {
							sourceMap: true,
							data: '@import "variables.scss";',
							includePaths: [path.resolve(__dirname, "src/style")]
						}
					}
				]
			}, {
				test: /\.(scss|css)$/,
				include: [
					path.resolve(__dirname, "src/style")
				],
				use: [
					// {
					// 	loader: MiniCssExtractPlugin.loader,
					// 	options: {
					// 		publicPath: argv.mode === 'development' ? '/' : cdn
					// 	}
					// },
					{
						loader: "style-loader"
					},
					"css-loader", {
						loader: `postcss-loader`,
						options: {
							sourceMap: true
						}
					}, {
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			}, {
				test: /\.(svg|woff2?|ttf|eot)(\?.*)?$/i,
				use: "file-loader"
			}, {
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}, {
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true,
							removeComments: false,
							collapseWhitespace: false
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [".jsx", ".js", ".json", ".less", ".scss", ".css", ".html"],
		alias: {
			modules: path.resolve(__dirname, "src/modules"), // used for tests
			style: path.resolve(__dirname, "src/style"),
			core: path.resolve(__dirname, "src/core"),
			"~": path.resolve(__dirname, "src") // root
		}
	},
	devtool: 'source-map',
	plugins: [
		new DefinePlugin({
			__UAT__: isUat ? 'true' : 'false',
			__PRD__: argv.mode === 'production' && !isUat ? 'true' : 'false'
		}),
		new HtmlWebpackPlugin({
			minify: {
				collapseWhitespace: true
			},
			hash : true,
			template: './src/index.html'
		})
		// new MiniCssExtractPlugin({
		// 	// Options similar to the same options in webpackOptions.output both options are
		// 	// optional
		// 	filename: "[name].css",
		// 	chunkFilename: "[id].css"
		// })
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({ sourceMap: true }),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		port: 9000,
		host: '0.0.0.0',
		publicPath: '/',
		historyApiFallback: true,
		proxy: {
			"/mf": {
				target: "http://wx-test1.by-health.com",
				changeOrigin: true
			}
		  }
	}
});
