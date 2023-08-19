import request from '@/http/index'

export function loginAPI(data:any){
    return request({
        url:'/login',
        method:'post',
        data:data
    })
}
export function registerAPI(data:any){
    return request({
        url:'/register',
        method:'post',
        data:data
    })
}
