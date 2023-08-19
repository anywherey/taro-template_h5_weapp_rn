import request from '@/http/index'
export function communityListAPI(params){
    return request({
        url:'/communityList',
        method:'get',
        params:params
    })
}

export function communityDetailAPI(params){
    return request({
        url:'/communityList/detail',
        method:'get',
        params:params
    })
}

