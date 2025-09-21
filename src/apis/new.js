import request from '@/utils/http'

export function getNewAPI(){
    return request({
        url:'/home/new',
        method: 'get',
    })
}