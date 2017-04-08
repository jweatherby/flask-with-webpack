const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ManifestPlugin = require('manifest-revision-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');


// assuming we're in '<gitRepoRoot>/webpack/dev.conf.js'
const appRoot = path.resolve(__dirname, '..');

module.exports = {

    devtool: 'eval',

    entry: {

        app_js: ['babel-polyfill', './frontend/index.js'],
    },

    output: {
        path: path.resolve(appRoot, 'backend', 'static'),
        publicPath: 'http://localhost:8081/',
        filename: '[name].[hash].js',
        chunkfilename: '[id].[hash].js'
    },

    resolve: {
        extensions: ['.js', '.jsx', ''],
        alias: {
			// Support React Native Web
			// https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
			'react-native': 'react-native-web',
			'react': path.resolve(appRoot, 'node_modules', 'react')
        }
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: appRoot,
                loader: 'babel-loader',
                exclude: /(node_modules)/,

                query: {
                    presets: ["es2015", "react", "stage-2", "jest"],
                    plugins: [
                        "transform-react-jsx",
                        "transform-decorators-legacy"
                    ]
                },
                babelrc: false
            },
            {
                test: /\.css$/,
                loader: 'style!css?importLoaders=1!postcss'
            },
            // scss loader
            {
                test: /\.scss$/,
                include: appRoot,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
        ]
    },
    // We use PostCSS for autoprefixing only.
    postcss: function() {
        return [
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                ]
            }),
        ];
    },

    devServer: {
        contentBase: path.resolve(appRoot, 'frontend'),
        compress: true,
        stats: { colors: true },
        inline: true,
        hot: true,
        // noInfo: true
    },

    plugins: [
        // Makes some environment variables available to the JS code, for example:
        // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
        // new webpack.DefinePlugin(env),

        // This is necessary to emit hot updates (currently CSS only):
        new webpack.HotModuleReplacementPlugin(),
        // If you require a missing module and then `npm install` it, you still have
        // to restart the development server for Webpack to discover it. This plugin
        // makes the discovery automatic so you don't have to restart.
        // See https://github.com/facebookincubator/create-react-app/issues/186
        new WatchMissingNodeModulesPlugin(path.resolve(appRoot, 'node_modules')),

        // manifest for referencing changed files
        new ManifestPlugin(path.resolve(appRoot, 'backend', 'static', 'manifest.json'), {
            rootAssetPath: './frontend',
            ignorePaths: [/^\./]
        })
    ]
}
