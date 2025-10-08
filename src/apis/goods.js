import request from '@/utils/http'

export function getGoodsDetailAPI(id){
    return request({
        url:'/goods',
        params : {
          id,
        }
    })
}

export function getHotGoodsAPI({id,type,limit = 3}){
  return request({
    url : '/goods/hot',
    params : {
      id,
      type,
      limit
    }
  })
}