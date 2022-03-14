// 这里存放首页的网络请求

import { request } from "./request";

export function getCalendar(){
    return request({
        url: '/calendar'
    })
}


export class Calendar {
    constructor(item){
        this.id = item.id;
        this.name = item.name_cn.length === 0 ? item.name : item.name_cn;
        this.air_date = item.air_date;
        this.score = item.rating == null ? 0 : item.rating.score;
        this.image = item.images.large;
        this.star = item.collection == null ? 0 : item.collection.doing;
    }
}