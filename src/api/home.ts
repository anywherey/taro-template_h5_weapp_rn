import request from '@/http/index'
export function shopListAPI(){
    return request({
        url:'/shopList',
        method:'get'
    })
}
