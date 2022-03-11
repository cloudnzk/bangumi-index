// 这里存放首页的网络请求

import { request } from "./request";

export function getCalendar(){
    return request({
        url: '/calendar'
    })
}