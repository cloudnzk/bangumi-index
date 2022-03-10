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
    lintOnSave: false //关闭eslint检查
}