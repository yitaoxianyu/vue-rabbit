import request from "@/utils/http"

export function getHotAPI(){
    return request({
        url:'/home/hot',
    })
}