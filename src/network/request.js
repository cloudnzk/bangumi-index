import axios from 'axios'

export function request(config){
    const instance = axios.create({
        // baseURL: '/api',
        baseURL: process.env.VUE_APP_BASE_URL,
        timeout: 10000,
        // 自定义请求头
        // headers: {
        //     'X-Requested-With': 'XMLHttpRequest',
        //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0'
        // },
    })
    // /* 请求拦截器 */
    // instance.interceptors.request.use(config => {
    //     console.log(config);
    //     return config
    // },err => {
    //     console.log(err);
    // })
    // /* 响应拦截 */
    // instance.interceptors.response.use(res => {
    //     return res.data
    // }, err => {
    //     console.log(err);
    // })
    // 返回的实例本身就是promise类型，直接return
    return instance(config)
}