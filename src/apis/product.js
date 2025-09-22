import request from '@/utils/http'

export function getProductAPI(){
    return request({
        url:'/home/goods'
    })
}