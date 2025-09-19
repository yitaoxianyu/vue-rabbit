import request from "@/utils/http";

export function getBannerAPI(){
    return request({
        url : '/home/banner'
    })
}