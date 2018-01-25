// require npm 에서 설치한 것은 require로 불러온다.
var webpack = require('webpack');

// module.export, 다른 파일에서 쓸 수 있게 외부로 보낸다.
// 웹팩에서 이 설정을 불러와서 사용한다.
module.exports = {
    // 최초 진입점
    entry: './src/index.js',

    // 해당 경로에 결과 파일을 만든다
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    // 개발서버
    devServer: {
        // 수정될 때마다 리로드
        hot: true,
        inline: true,
        port: 7777,
        host: '0.0.0.0',
        // contentBase: output의 경로
        contentBase: __dirname + '/public/',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ['react-hot-loader/babel']
                }
            }
        ]
    },
    //
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
