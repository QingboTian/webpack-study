const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "development",// 开发环境
    // entry: path.join(__dirname, './src/main.js'),// 输入源
    entry: {
        main : './src/main.js'
    },
    output: {// 输出源
        // path : path.join(__dirname, './dist'), // 输出路径
        path : path.resolve(__dirname, './dist'),
        filename : 'bundle.js'// 输出文件
    },
    devServer : {
        open : true,
        port : 8888,
        contentBase : 'src',
        hot : true
    },
    // 配置第三方加载器 如css
    module:{
        rules : [
            {
                test : /\.css$/,// 正则匹配导入文件后缀名
                use : [// 使用什么加载器
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options : {
                            // url : true
                        }
                    }
                ]
            },
            // {
            //     test : /\.less$/,// 正则匹配导入文件后缀名
            //     use : [// 使用什么加载器
            //         {
            //             loader: 'style-loader',
            //         },
            //         {
            //             loader: 'css-loader',
            //         },
            //         {
            //             loader: 'less-loader',
            //         }
            //     ]
            // }
            {
                test : /\.(jpg|png|gif|bmp|jpeg)$/,// 正则匹配导入文件后缀名
                use : [// 使用什么加载器
                    {
                        loader: 'url-loader',
                        options : {
                            limit : 7631// KB 低于这个大小的图片会采用Base64编码展示 大于则采用URL
                        }
                    },
                ]
            },
            // 处理字体
            {
                test : /\.(ttf|eot|svg|woff|woff2)$/,// 正则匹配导入文件后缀名
                use : [// 使用什么加载器
                    {
                        loader: 'url-loader',
                    },
                ]
            },
            // 处理高级ES语法
            {
                test : /\.js$/,// 正则匹配导入文件后缀名
                use : [// 使用什么加载器
                    {
                        loader: 'babel-loader',
                    },
                ],
                exclude : /node_modules/
            },
            // VUE
            {
                test : /\.vue$/,// 正则匹配导入文件后缀名
                use : [// 使用什么加载器
                    {
                        loader: 'vue-loader',
                    },
                ]
            },
        ]
    },
    resolve : {
        alias: {
            "vue$" : "vue/dist/vue.js"
        }
    },
    plugins:[
       new VueLoaderPlugin(),
    ],
}