/* 在此定义的配置会与公共配置合并 */
module.exports = {
    /* 配置webpack */
    configureWebpack:{
        resolve: {
            //配置别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.bgm.tv/', // 要代理的地址(开发阶段接口地址)，代理到本地访问，http://localhost:8080/api/
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/' //这里的/其实就是代表根,可以理解为用/api代替target里的地址
                }

            },
        }
    },
    // 打包后路径错误导致的空白页面问题。
	publicPath: './',
	outputDir: process.env.outputDir,
    lintOnSave: false //关闭eslint检查
}