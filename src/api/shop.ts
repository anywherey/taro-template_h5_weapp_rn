import request from '@/http/index'
export function shopDetailsAPI(params){
    return request({
        url:'/shopDetails',
        method:'get',
        params:params
    })
}
export function goodsDetailsAPI(params){
    return request({
        url:'/goodsDetails',
        method:'get',
        params:params
    })
}
