import request from "@/network/request";

export function getMultiData(){
    return request({
        url: '/home/multidata'
    })
}

export function getHomeData(params){
    return request({
        url: '/home/data',
        params
    })
}