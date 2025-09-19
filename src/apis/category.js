import request from '@/utils/http'

<<<<<<< HEAD
export function getCategory(){
=======
export function getCategoryAPI(){
>>>>>>> dd71169 (feat:header 内容从后端请求)
    return request({
        url: 'home/category/head'
    })
}
