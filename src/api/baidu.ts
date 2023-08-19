import axios from "axios";

export function lngLatTransform(params){
    axios({
        method:'get',
        url:"https://api.map.baidu.com/reverse_geocoding/v3/",
        params:params
    }).then((res)=>{
        return res
    })
}