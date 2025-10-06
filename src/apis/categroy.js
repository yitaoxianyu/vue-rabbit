import request from '@/utils/http'

export function getCategoryAPI(id){
    return request({
        url:'/category',
        params : {
            id
        }
    })
}

export function getSubCategoryAPI(id){
    return request({
        url:'/category/sub/filter',
        params : {
            id
        }
    })
}

export function getSubCategoryGoodsAPI(data){
    return request({
        url:'/category/goods/temporary',
        data : data,
        method : 'post'
    })

}